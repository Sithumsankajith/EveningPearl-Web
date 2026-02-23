import React from 'react';
import { services } from '@/data/mockData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import * as Icons from 'lucide-react';

const renderStyledText = (text: string) => {
    if (!text.includes('&')) return text;
    const parts = text.split('&');
    return (
        <>
            {parts[0]}
            <span className="amp">&</span>
            {parts[1]}
        </>
    );
};

export default function Services() {
    return (
        <div className="bg-pearlWhite min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-20 lg:max-w-7xl">
                <SectionHeader
                    title={renderStyledText("Exceptional Services & Amenities")}
                    subtitle="Designed for comfort, health, and happiness. We provide a holistic approach to senior living."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {services.map((service) => {
                        const IconComponent = (Icons as any)[service.iconName] || Icons.CheckCircle;
                        return (
                            <Card key={service.id} className="flex flex-col h-full rounded-[2rem] border-0 shadow-md ring-1 ring-navy-dark/5 bg-white overflow-hidden" hoverable>
                                {service.image && (
                                    <div className="h-48 w-full overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                )}
                                <CardHeader className="bg-gradient-to-br from-navy-50/50 to-white border-b border-navy-50 pb-5 pt-8 px-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-navy-dark text-gold-light flex items-center justify-center shrink-0 shadow-sm">
                                            <IconComponent size={28} />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-gold-soft uppercase tracking-widest mb-1.5">{service.category}</p>
                                            <h3 className="text-xl font-serif font-bold text-navy-dark leading-tight">{renderStyledText(service.title)}</h3>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-grow pt-8 px-8 pb-8">
                                    <p className="text-navy-dark/80 leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto">
                                        <h4 className="text-sm font-bold text-navy-dark uppercase tracking-wider mb-4 border-b border-navy-light/20 pb-2">What's Included</h4>
                                        <ul className="space-y-3">
                                            {service.included.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-navy-dark/90">
                                                    <Icons.Check className="w-4 h-4 text-gold shrink-0 mt-0.5 font-bold" />
                                                    <span className="font-medium text-navy-dark/90">{renderStyledText(item)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
