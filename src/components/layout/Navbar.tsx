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
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-between h-20">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-navy border border-gold/30 text-gold flex items-center justify-center font-serif text-xl font-bold group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                        EP
                    </div>
                    <span className={`font-serif text-xl font-semibold tracking-wide ${isScrolled ? 'text-navy-dark' : 'text-white'}`}>
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
                                className={`text-base font-semibold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 ${location.pathname === link.path ? 'text-gold after:scale-x-100 after:origin-bottom-left' : isScrolled ? 'text-navy-dark hover:text-navy-light' : 'text-white hover:text-pearlWhite'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link to="/contact" className="ml-2">
                        <Button variant={isScrolled ? 'primary' : 'accent'} size="md" className="font-bold">Book a Visit</Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${isScrolled ? 'text-navy-dark' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-navy-light/20 overflow-hidden shadow-lg absolute top-full left-0 right-0"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-base font-medium p-3 rounded-md transition-colors ${location.pathname === link.path ? 'bg-pearlWhite text-navy-dark' : 'text-navy-dark/80 hover:bg-pearlWhite hover:text-navy-dark'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2 border-t border-navy-light/20 mt-2">
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
