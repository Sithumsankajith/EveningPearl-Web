import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

export default function About() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-5xl">
            <SectionHeader title="Our Story" subtitle="A legacy of care, respect, and unparalleled luxury." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
                <div>
                    <p className="text-lg text-navy-dark/90 leading-relaxed mb-6 font-medium">
                        Evening Pearl was founded with a singular vision: to redefine senior living in Sri Lanka by combining world-class luxury with deeply compassionate, personalized care. We believe that the later chapters of life should be the most comfortable, secure, and fulfilling.
                    </p>
                    <p className="text-lg text-navy-dark/90 leading-relaxed">
                        From our meticulously designed residences in Mahara and Mawaramandiya to our highly trained staff, every detail is considered to ensure our residents feel respected, valued, and immediately at home. We support independence while being immediately available whenever help is needed.
                    </p>
                </div>
                <div className="h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-navy-light/20 p-2 bg-white">
                    <PlaceholderImage text="Care Team Smiling" className="rounded-xl w-full h-full object-cover" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-2xl border border-navy-light/20 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-serif text-navy-dark mb-4 border-b border-navy-light/20 pb-3">Our Mission</h3>
                    <p className="text-navy-dark/80 leading-relaxed">To provide a safe, luxurious environment where seniors thrive, supported by unparalleled care and a vibrant community.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-navy-light/20 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-serif text-navy-dark mb-4 border-b border-navy-light/20 pb-3">Our Values</h3>
                    <p className="text-navy-dark/80 leading-relaxed">Dignity, empathy, excellence, and transparency guide everything we do and every interaction we have with residents and families.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-navy-light/20 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-serif text-navy-dark mb-4 border-b border-navy-light/20 pb-3">Our Standard</h3>
                    <p className="text-navy-dark/80 leading-relaxed">We maintain the highest international care protocols, ensuring medical and emotional needs are consistently met 24/7.</p>
                </div>
            </div>
        </div>
    );
}
