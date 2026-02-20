import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Residences', path: '/residences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0); // scroll to top on nav action
    }, [location.pathname]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:max-w-7xl flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-serif text-xl font-bold group-hover:bg-gold-500 group-hover:text-white transition-colors">
                        EP
                    </div>
                    <span className={`font-serif text-xl font-semibold tracking-wide ${isScrolled ? 'text-navy-900' : 'text-navy-950 font-bold'}`}>
                        Evening Pearl
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-gold-600 ${location.pathname === link.path ? 'text-gold-600' : isScrolled ? 'text-navy-800' : 'text-navy-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link to="/contact">
                        <Button variant="primary" size="sm">Book a Visit</Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 rounded"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-navy-100 overflow-hidden shadow-lg absolute top-full left-0 right-0"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-base font-medium p-3 rounded-md transition-colors ${location.pathname === link.path ? 'bg-navy-50 text-navy-900' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2 border-t border-navy-100 mt-2">
                                <Link to="/contact" className="block w-full">
                                    <Button variant="primary" className="w-full">Book a Visit</Button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
