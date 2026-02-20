import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PLANS = [
    {
        name: 'Basic Care',
        description: 'For independent seniors requiring minimal day-to-day assistance.',
        price: 'Contact us for pricing',
        period: '',
        features: ['Shared or Standard Single Room', '3 Nutritious Meals & Snacks', 'Daily Housekeeping & Laundry', '24/7 Emergency Response', 'Access to Common Areas', 'Basic Vital Monitoring'],
        recommended: false,
    },
    {
        name: 'Assisted Living',
        description: 'Comprehensive support for daily activities and medical coordination.',
        price: 'Contact us for pricing',
        period: '',
        features: ['Premium Single Room', 'Personal Hygiene & Dressing Support', 'Medication Administration', 'Specialized Diet Plans', 'Accompanied Medical Visits', 'Personalized Fitness Plan'],
        recommended: true,
    },
    {
        name: 'Premium Nursing',
        description: 'Dedicated, round-the-clock nursing care for high-need residents.',
        price: 'Contact us for pricing',
        period: '',
        features: ['Deluxe Room or Suite', '24/7 Dedicated Caregiver', 'Continuous Medical Monitoring', 'In-room Dining Services', 'Chauffeur Services for Appointments', 'Family Counseling & Support'],
        recommended: false,
    }
];

export default function Pricing() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:max-w-7xl">
            <SectionHeader
                title="Transparent Pricing Options"
                subtitle="We offer flexible care packages tailored to individual needs. Final pricing depends on the level of care required following a medical assessment."
                centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-start">
                {PLANS.map((plan, i) => (
                    <Card key={i} className={`relative h-full flex flex-col border-0 rounded-[2rem] overflow-visible ${plan.recommended ? 'ring-2 ring-gold-500 shadow-xl shadow-gold-500/10' : 'ring-1 ring-navy-100 shadow-md'}`}>
                        {plan.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-navy-950 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                                Most Popular
                            </div>
                        )}
                        <CardHeader className={`pb-8 pt-10 px-8 ${plan.recommended ? 'bg-gradient-to-b from-navy-50 to-white rounded-t-[2rem]' : ''}`}>
                            <h3 className="text-2xl font-serif text-navy-900 mb-2 font-bold">{plan.name}</h3>
                            <p className="text-slate-600 text-sm h-10">{plan.description}</p>
                            <div className="mt-8">
                                <span className="text-2xl font-bold text-navy-900">{plan.price}</span>
                                {plan.period && <span className="text-slate-500 font-medium ml-1">{plan.period}</span>}
                            </div>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 flex-grow flex flex-col">
                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="bg-gold-50 rounded-full p-1 mt-0.5 shrink-0">
                                            <Check className="w-4 h-4 text-gold-600 font-bold" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="mt-auto block w-full">
                                <Button className={`w-full h-14 text-base font-bold ${plan.recommended ? 'bg-navy-900 text-gold-400 hover:bg-navy-800' : 'bg-navy-50 text-navy-900 hover:bg-navy-100'}`}>
                                    Enquire Now
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-20 text-center bg-white rounded-3xl p-10 max-w-4xl mx-auto border border-navy-100 shadow-sm">
                <h4 className="text-2xl font-serif text-navy-900 mb-4 font-bold">Not sure which plan is right?</h4>
                <p className="text-slate-600 mb-8 text-lg">Our care specialists provide free consultations and assessments to determine the perfect level of care for your loved ones.</p>
                <Link to="/contact">
                    <Button variant="outline" className="border-navy-200 bg-white hover:bg-navy-50 hover:text-navy-900 text-base h-12 px-8 font-semibold">
                        Request a Consultation
                    </Button>
                </Link>
            </div>
        </div>
    );
}
