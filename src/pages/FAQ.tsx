import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Accordion } from '@/components/ui/Accordion';

const FAQ_ITEMS = [
    {
        title: 'What levels of care do you provide?',
        content: 'We offer a full continuum of care ranging from basic independent/assisted living to premium nursing for high-need residents. Our services include medication management, personalized dietary plans, mobility support, and 24/7 medical monitoring.'
    },
    {
        title: 'Are visiting hours restricted?',
        content: 'No, we believe in maintaining strong family connections. Family members are welcome to visit their loved ones at any time during the day. We only ask that visitors respect the privacy and rest times of all residents, typically reducing noise after 9:00 PM.'
    },
    {
        title: 'How do you handle medical emergencies?',
        content: 'Both our Mahara and Mawaramandiya residences are equipped with 24/7 nursing staff, emergency call bells in every room and bathroom, and rapid-response protocols. We also have established direct partnerships with leading local hospitals for immediate ambulance dispatch if necessary.'
    },
    {
        title: 'Can residents bring their own furniture?',
        content: 'Yes, while our rooms are fully furnished to luxury standards, residents are encouraged to bring personal items, decorations, and small pieces of furniture to make their space feel completely like home, subject to safety checks.'
    },
    {
        title: 'How are meals prepared and what if there are dietary restrictions?',
        content: 'All meals are prepared fresh by our executive chefs in our commercial-grade kitchens. Before admission, our resident dietitian assesses each individual\'s nutritional needs, allergies, and preferences to continuously customize their daily menu.'
    },
    {
        title: 'How does the payment structure work?',
        content: 'We use a straightforward monthly billing cycle. The fee includes the room, all meals, utilities, laundry, housekeeping, and the baseline level of care selected. Any additional specialized medical supplies or external doctor visits are billed separately with complete transparency.'
    }
];

export default function FAQ() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:max-w-4xl min-h-[70vh]">
            <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about life at Evening Pearl residences."
                centered
            />

            <div className="mt-12 bg-white rounded-3xl border border-navy-100 shadow-sm p-6 md:p-10">
                <Accordion items={FAQ_ITEMS} />
            </div>
        </div>
    );
}
