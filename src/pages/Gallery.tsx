import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tabs } from '@/components/ui/Tabs';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Exterior', 'Interiors', 'Dining', 'Wellness', 'Activities'];

const GALLERY_IMAGES = [
    { id: 1, category: 'Exterior', title: 'Main Entrance - Mahara', text: 'Exterior at Sunset' },
    { id: 2, category: 'Interiors', title: 'Deluxe Suite Living Area', text: 'Suite Living Area' },
    { id: 3, category: 'Dining', title: 'Main Dining Hall', text: 'Elegant Dining' },
    { id: 4, category: 'Wellness', title: 'Therapy Pool', text: 'Wellness Center' },
    { id: 5, category: 'Activities', title: 'Art Class', text: 'Seniors Painting' },
    { id: 6, category: 'Exterior', title: 'Garden Pathways', text: 'Lush Gardens' },
    { id: 7, category: 'Interiors', title: 'Shared Room Setup', text: 'Shared Bedroom' },
    { id: 8, category: 'Dining', title: 'Private Dining Room', text: 'Family Dining' },
    { id: 9, category: 'Interiors', title: 'Single Classic Room', text: 'Single Bedroom' },
];

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredImages = activeTab === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeTab);

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:max-w-7xl min-h-screen">
            <SectionHeader
                title="Our Gallery"
                subtitle="Take a visual tour of our luxurious facilities, designed to provide the ultimate comfort and care."
                centered
            />

            <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
                <Tabs
                    tabs={CATEGORIES}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={image.id}
                            className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-pearlWhite border border-navy-light/20 shadow-sm"
                        >
                            <PlaceholderImage text={image.text} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <p className="text-gold-light text-xs font-bold uppercase tracking-wider mb-1">{image.category}</p>
                                    <h4 className="text-white font-serif text-lg">{image.title}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
