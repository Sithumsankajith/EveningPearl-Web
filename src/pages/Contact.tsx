import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:max-w-7xl">
            <SectionHeader
                title="Contact Us & Book a Visit"
                subtitle="We'd love to hear from you. Reach out to schedule a tour or ask any questions about our care options."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
                {/* Contact Form */}
                <div className="bg-white rounded-[2rem] border border-navy-100 shadow-xl shadow-navy-900/5 p-6 md:p-10">
                    <h3 className="text-2xl font-serif text-navy-900 mb-8 font-bold">Send us a message</h3>
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Lead captured! Normally this would send to an API."); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name" placeholder="John" required />
                            <Input label="Last Name" placeholder="Doe" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Phone Number" placeholder="+94 77 123 4567" type="tel" required />
                            <Input label="Email Address" placeholder="john@example.com" type="email" required />
                        </div>
                        <Select label="Preferred Location" className="h-12 bg-white">
                            <option value="">No preference / Not sure yet</option>
                            <option value="mahara">Mahara Residence</option>
                            <option value="mawaramandiya">Mawaramandiya Residence</option>
                        </Select>
                        <Textarea label="Message or Questions" placeholder="How can we help you?" required />
                        <Button size="lg" className="w-full mt-2 h-14 text-base font-bold bg-navy-900 hover:bg-navy-800 text-gold-400 hover:text-gold-300">
                            Submit Request
                        </Button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col justify-center space-y-12">
                    <div className="bg-navy-50 rounded-3xl p-8 border border-navy-100">
                        <h3 className="text-2xl font-serif text-navy-900 mb-8 font-bold border-b border-navy-200 pb-4">Our Locations</h3>
                        <div className="space-y-10">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 bg-white shadow-sm border border-navy-100 text-navy-800 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-navy-900 mb-1">Mahara Residence</h4>
                                    <p className="text-slate-600 mb-3 font-medium">123 Kandy Road, Mahara<br />Sri Lanka</p>
                                    <a href="tel:+94112345678" className="text-navy-700 font-bold hover:text-gold-600 transition-colors inline-block bg-white px-3 py-1 rounded-md border border-navy-200 text-sm">Call: +94 11 234 5678</a>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-14 h-14 bg-white shadow-sm border border-navy-100 text-navy-800 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-navy-900 mb-1">Mawaramandiya Residence</h4>
                                    <p className="text-slate-600 mb-3 font-medium">45 Lake Road, Mawaramandiya<br />Sri Lanka</p>
                                    <a href="tel:+94112345679" className="text-navy-700 font-bold hover:text-gold-600 transition-colors inline-block bg-white px-3 py-1 rounded-md border border-navy-200 text-sm">Call: +94 11 234 5679</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4">
                        <h3 className="text-2xl font-serif text-navy-900 mb-6 font-bold border-b border-navy-100 pb-4">Direct Support</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-navy-50 group-hover:bg-navy-900 group-hover:text-white transition-colors text-navy-700 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                                    <a href="mailto:support@eveningpearl.lk" className="text-lg font-medium text-navy-900 hover:text-gold-600 transition-colors">support@eveningpearl.lk</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#E1FDD5] group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white transition-colors rounded-full flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Quickest Response</p>
                                    <a href="#" className="text-lg font-medium text-navy-900 hover:text-[#25D366] transition-colors flex items-center gap-2">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
