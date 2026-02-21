import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
    return (
        <footer className="bg-[#1a1b3c] text-slate-300 py-16 border-t border-navy-dark font-sans">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Evening Pearl Logo" className="w-16 h-16 object-contain bg-white rounded-xl p-1" />
                        </Link>
                        <p className="text-sm leading-relaxed mb-8 text-slate-300">
                            At Evening Pearl, we provide compassionate, personalized senior care in a warm and welcoming environment. Our dedicated team ensures comfort, safety, and dignity, treating every resident like family.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
                            <li><Link to="/residences" className="hover:text-gold transition-colors">How It Works</Link></li>
                        </ul>
                    </div>

                    {/* Our Services Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Our Services</h4>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li><Link to="/services" className="hover:text-gold transition-colors">Assisted Living</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Housekeeping & Laundry Services</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Recreation & Wellness</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Nursing & Medication</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Nutritious Meals</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Security & Monitoring</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide text-base">Contact Info</h4>
                        <ul className="space-y-6 text-sm text-slate-300">
                            <li>
                                <div className="flex items-center gap-2 mb-1">
                                    <Phone size={16} className="text-gold" />
                                    <span className="font-bold text-white">Call / WhatsApp</span>
                                </div>
                                <div className="pl-6 flex flex-col gap-1">
                                    <a href="tel:+94112345678" className="hover:text-gold">+94 11 234 5678 (Mahara)</a>
                                    <a href="tel:+94112345679" className="hover:text-gold">+94 11 234 5679 (Mawaramandiya)</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2 mb-1">
                                    <Mail size={16} className="text-gold" />
                                    <span className="font-bold text-white">Email</span>
                                </div>
                                <div className="pl-6">
                                    <a href="mailto:hello@eveningpearl.lk" className="hover:text-gold">hello@eveningpearl.lk</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2 mb-1">
                                    <MapPin size={16} className="text-gold" />
                                    <span className="font-bold text-white">Office Location</span>
                                </div>
                                <div className="pl-6 leading-relaxed">
                                    123 Kandy Road, Mahara,<br />Sri Lanka.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
                    <p>Copyright © {new Date().getFullYear()} Evening Pearl. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
