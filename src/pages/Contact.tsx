import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

// --- GOOGLE FORM CONFIGURATION ---
// Replace these with your actual details from the implementation plan instructions
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfQnM_zw2MKiRBzEvG4DbS32pJOYc-Fw_dHJSPEsnBGcl6Jwg/formResponse';
const ENTRY_IDS = {
    firstName: 'entry.1095735974',
    lastName: 'entry.705766239',
    phone: 'entry.754562243',
    email: 'entry.397867534',
    location: 'entry.1679011490',
    message: 'entry.734612953',
};

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const data = new URLSearchParams();
        data.append(ENTRY_IDS.firstName, formData.firstName);
        data.append(ENTRY_IDS.lastName, formData.lastName);
        data.append(ENTRY_IDS.phone, formData.phone);
        data.append(ENTRY_IDS.email, formData.email);
        data.append(ENTRY_IDS.location, formData.location);
        data.append(ENTRY_IDS.message, formData.message);

        try {
            // Using mode: 'no-cors' as Google Forms doesn't return CORS headers for formResponse
            // URLSearchParams ensures the content-type is 'application/x-www-form-urlencoded'
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data.toString()
            });

            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                location: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:max-w-7xl">
            <SectionHeader
                title="Contact Us & Book a Visit"
                subtitle="We'd love to hear from you. Reach out to schedule a tour or ask any questions about our care options."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
                {/* Contact Form */}
                <div className="bg-white rounded-[2rem] border border-navy-light/20 shadow-xl shadow-navy-dark/5 p-6 md:p-10">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-3xl font-serif text-navy-dark mb-4 font-bold">Message Sent!</h3>
                            <p className="text-navy-dark/70 max-w-sm mb-8">
                                Thank you for reaching out. We have received your request and will get back to you shortly.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setStatus('idle')}
                                className="border-navy text-navy hover:bg-navy/5"
                            >
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-serif text-navy-dark mb-8 font-bold">Send us a message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <p>Something went wrong. Please try again or contact us directly via email.</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="First Name"
                                        name="firstName"
                                        placeholder="John"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                    />
                                    <Input
                                        label="Last Name"
                                        name="lastName"
                                        placeholder="Doe"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="Phone Number"
                                        name="phone"
                                        placeholder="+94 77 123 4567"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                    />
                                    <Input
                                        label="Email Address"
                                        name="email"
                                        placeholder="john@example.com"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                    />
                                </div>
                                <Select
                                    label="Preferred Location"
                                    name="location"
                                    className="h-12 bg-white"
                                    value={formData.location}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                >
                                    <option value="">No preference / Not sure yet</option>
                                    <option value="Mahara Residence">Mahara Residence</option>
                                    <option value="Mawaramandiya Residence">Mawaramandiya Residence</option>
                                </Select>
                                <Textarea
                                    label="Message or Questions"
                                    name="message"
                                    placeholder="How can we help you?"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                />
                                <Button
                                    size="lg"
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full mt-2 h-14 text-base font-bold bg-navy-dark hover:bg-navy text-gold-light hover:text-gold-light/90 disabled:opacity-70"
                                >
                                    {status === 'submitting' ? 'Sending Request...' : 'Submit Request'}
                                </Button>
                            </form>
                        </>
                    )}
                </div>

                {/* Contact Details */}
                <div className="flex flex-col justify-center space-y-12">
                    <div className="bg-pearlWhite rounded-3xl p-8 border border-navy-light/20">
                        <h3 className="text-2xl font-serif text-navy-dark mb-8 font-bold border-b border-navy-light/50 pb-4">Our Locations</h3>
                        <div className="space-y-10">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 bg-white shadow-sm border border-navy-light/20 text-navy rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-navy-dark mb-1">Mahara Residence</h4>
                                    <p className="text-navy-dark/80 mb-3 font-medium">No.142, Eksath Mawatha, Mahara<br />Kadawatha, Sri Lanka</p>
                                    <a href="tel:+94771101022" className="text-navy font-bold hover:text-gold-soft transition-colors inline-block bg-white px-3 py-1 rounded-md border border-navy-light/50 text-sm">Call: +94 77 110 1022</a>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-14 h-14 bg-white shadow-sm border border-navy-light/20 text-navy rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-navy-dark mb-1">Mawaramandiya Residence</h4>
                                    <p className="text-navy-dark/80 mb-3 font-medium">No.424, Mawaramandiya<br />Kadawatha, Sri Lanka</p>
                                    <a href="tel:+94771101026" className="text-navy font-bold hover:text-gold-soft transition-colors inline-block bg-white px-3 py-1 rounded-md border border-navy-light/50 text-sm">Call: +94 77 110 1026</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4">
                        <h3 className="text-2xl font-serif text-navy-dark mb-6 font-bold border-b border-navy-light/20 pb-4">Direct Support</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-pearlWhite group-hover:bg-navy-dark group-hover:text-white transition-colors text-navy rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-navy-dark/70 uppercase tracking-wider mb-1">Email Us</p>
                                    <a href="mailto:info@everningpearl.lk" className="text-lg font-medium text-navy-dark hover:text-gold-soft transition-colors">info@everningpearl.lk</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#E1FDD5] group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white transition-colors rounded-full flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-navy-dark/70 uppercase tracking-wider mb-1">Quickest Response</p>
                                    <a href="#" className="text-lg font-medium text-navy-dark hover:text-[#25D366] transition-colors flex items-center gap-2">
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
