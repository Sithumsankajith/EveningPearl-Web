import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-navy-950 text-slate-300 py-16 border-t border-navy-900 font-sans">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gold-400 text-navy-900 flex items-center justify-center font-serif text-xl font-bold">
                                EP
                            </div>
                            <span className="font-serif text-xl font-semibold tracking-wide text-white">
                                Evening Pearl
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            A premium luxury senior residence in Sri Lanka offering world-class care, comfort, and a vibrant community tailored for elegant living.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Locations</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <p className="font-medium text-white mb-1">Mahara Residence</p>
                                <p>123 Kandy Road, Mahara<br />Sri Lanka</p>
                            </li>
                            <li>
                                <p className="font-medium text-white mb-1 mt-4">Mawaramandiya Residence</p>
                                <p>45 Lake Road, Mawaramandiya<br />Sri Lanka</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">Care Services</Link></li>
                            <li><Link to="/residences" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">Explore Rooms</Link></li>
                            <li><Link to="/gallery" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">Gallery</Link></li>
                            <li><Link to="/pricing" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">Pricing Plans</Link></li>
                            <li><Link to="/faq" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="tel:+94112345678" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">+94 11 234 5678 (Mahara)</a></li>
                            <li><a href="tel:+94112345679" className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">+94 11 234 5679 (Mawaramandiya)</a></li>
                            <li><a href="mailto:hello@eveningpearl.lk" className="hover:text-gold-400 transition-colors mt-2 block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400">hello@eveningpearl.lk</a></li>
                        </ul>
                        <Link to="/contact" className="inline-block mt-8 px-6 py-2.5 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-medium rounded-md transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400">
                            Book a Visit
                        </Link>
                    </div>
                </div>

                <div className="border-t border-navy-800/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Evening Pearl Residences. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300">Terms of Service</Link>
                        <p className="flex items-center gap-1 ml-4 border-l border-navy-800 pl-4">
                            Designed with <Heart className="w-3 h-3 text-gold-400" /> in Sri Lanka
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
