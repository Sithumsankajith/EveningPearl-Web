import { Room, Service, Testimonial, ProcessStep, Residence } from './types';
import maharaImg from '@/assets/mahara exterior.png';
import mahara2Img from '@/assets/mahara2.png';
import mahara3Img from '@/assets/mahara3.png';
import assistedLivingImg from '@/assets/services/assisted living.png';
import nursingMedicationImg from '@/assets/services/nursing and medication.png';
import mealsNutritionImg from '@/assets/services/meals and nutrition.png';
import housekeepingLaundryImg from '@/assets/services/housekeeping and laundry.png';
import recreationWellnessImg from '@/assets/services/recreation and wellness.png';
import securityMonitoringImg from '@/assets/services/security and monitoring.png';
import mawaramandiyaExtImg from '@/assets/mawaramandiya exterior.jpeg';
import maharaRoom1Img from '@/assets/gallery/mahara/mahara room 1.jpeg';
import mwRoom1Img from '@/assets/gallery/mawaramandiya/mawaramandiya room 1.jpeg';
import mwRoom2Img from '@/assets/gallery/mawaramandiya/mawaramandiya room 2.jpeg';
import mwRoom3Img from '@/assets/gallery/mawaramandiya/mawaramandiya room 3.jpeg';

export const residences: Residence[] = [
    {
        id: 'Mahara',
        name: 'Mahara Residence',
        description: 'Lush garden views and a serene environment near Kandy Road.',
        descriptionLong: 'Our Mahara Luxury Care Home featuring Individual Rooms with Ensuite Bathroom, Private Balcony, Beautiful Garden Space, 24/7 medical support, Personalized care, Nutritious Meals.',
        address: 'Green Wood Terrace, 390 P Old Kottawa Rd, Mahara',
        phone: '+94776604040',
        image: maharaImg,
    },
    {
        id: 'Mawaramandiya',
        name: 'Mawaramandiya Residence',
        description: 'Tranquil lakeside retreat with premium modern amenities.',
        descriptionLong: 'Our Mawaramandiya Luxury Care Home featuring Individual Rooms with Ensuite Bathroom, Private Balcony, Beautiful Lake View, 24/7 medical support, Personalized care, Nutritious Meals.',
        address: 'Mawaramandiya, Sri Lanka',
        phone: '+94776604040',
        image: mawaramandiyaExtImg,
    }
];

export const rooms: Room[] = [
    {
        id: 'm-sing-1',
        location: 'Mahara',
        name: 'Classic Single Room',
        type: 'Single',
        price: 'Contact us for pricing',
        features: ['Attached Bathroom', 'Garden View', 'Air Conditioning'],
        amenities: ['24/7 Call Bell', 'Smart TV', 'Wi-Fi', 'Premium Bedding', 'Wardrobe'],
        included: ['All Meals & Snacks', 'Daily Housekeeping', 'Laundry', 'Basic Medication Management'],
        availability: 'Available',
        image: maharaImg,
    },
    {
        id: 'm-shar-1',
        location: 'Mahara',
        name: 'Comfort Shared Room',
        type: 'Shared',
        price: 'Contact us for pricing',
        features: ['Attached Bathroom', 'Privacy Divider', 'Air Conditioning'],
        amenities: ['24/7 Call Bell', 'Wi-Fi', 'Reading Lamp', 'Personal Storage'],
        included: ['All Meals & Snacks', 'Daily Housekeeping', 'Laundry', 'Basic Medication Management'],
        availability: 'Available',
        image: maharaRoom1Img,
    },
    {
        id: 'mw-sing-1',
        location: 'Mawaramandiya',
        name: 'Classic Single Room',
        type: 'Single',
        price: 'Contact us for pricing',
        features: ['Lake View', 'Spacious Layout', 'Accessible Bathroom'],
        amenities: ['24/7 Call Bell', 'Smart TV', 'Wi-Fi', 'Premium Bedding', 'Sitting Area'],
        included: ['All Meals & Snacks', 'Daily Housekeeping', 'Laundry', 'Nursing Support'],
        availability: 'Waitlist',
        image: mwRoom3Img,
    },
    {
        id: 'mw-sing-2',
        location: 'Mawaramandiya',
        name: 'Premium Single Room',
        type: 'Single',
        price: 'Contact us for pricing',
        features: ['Lake Front', 'Private Balcony', 'Premium Furnishings'],
        amenities: ['24/7 Call Bell', 'Smart TV', 'Wi-Fi', 'King Bed', 'Coffee Maker'],
        included: ['All Meals & Snacks', 'Daily Housekeeping', 'Laundry', 'Nursing Support'],
        availability: 'Available',
        image: mwRoom2Img,
    },
    {
        id: 'mw-shar-1',
        location: 'Mawaramandiya',
        name: 'Comfort Shared Room',
        type: 'Shared',
        price: 'Contact us for pricing',
        features: ['Garden Side', 'Privacy Screens', 'Spacious Common Area'],
        amenities: ['24/7 Call Bell', 'Wi-Fi', 'Personal Storage', 'Reading Lamp'],
        included: ['All Meals & Snacks', 'Daily Housekeeping', 'Laundry', 'Nursing Support'],
        availability: 'Waitlist',
        image: mwRoom1Img,
    }
];

export const services: Service[] = [
    {
        id: 'srv-1',
        title: 'Assisted Living',
        category: 'Care',
        shortDescription: 'Daily support for a comfortable and independent life.',
        description: 'Our trained staff provides dignified assistance with daily activities, ensuring residents remain active and engaged while receiving the help they need.',
        included: ['Bathing & Dressing Assistance', 'Mobility Support', 'Personal Hygiene Care'],
        iconName: 'HeartHandshake',
        image: assistedLivingImg
    },
    {
        id: 'srv-2',
        title: 'Nursing & Medication',
        category: 'Medical',
        shortDescription: 'Professional health monitoring and medication management.',
        description: 'Registered nurses on staff provide diligent oversight of health conditions and coordinate with physicians to ensure optimal wellness.',
        included: ['Medication Administration', 'Vitals Monitoring', 'Physician Coordination', 'Emergency Response'],
        iconName: 'Stethoscope',
        image: nursingMedicationImg
    },
    {
        id: 'srv-3',
        title: 'Meals & Nutrition',
        category: 'Dining',
        shortDescription: 'Chef-prepared meals tailored to dietary needs.',
        description: 'We offer a high-end dining experience featuring fresh, locally sourced ingredients prepared by executive chefs to meet specific nutritional requirements.',
        included: ['3 Daily Meals', 'Nutritious Snacks', 'Dietitian Consultations', 'Custom Menu Options'],
        iconName: 'Utensils',
        image: mealsNutritionImg
    },
    {
        id: 'srv-4',
        title: 'Housekeeping & Laundry',
        category: 'Lifestyle',
        shortDescription: 'A clean, fresh, and pristine living environment.',
        description: 'Our dedicated housekeeping team maintains the highest standards of cleanliness, allowing residents to enjoy a maintenance-free lifestyle.',
        included: ['Daily Room Cleaning', 'Personal Laundry Service', 'Linen Changes', 'Deep Cleaning'],
        iconName: 'Sparkles',
        image: housekeepingLaundryImg
    },
    {
        id: 'srv-5',
        title: 'Recreation & Wellness',
        category: 'Activities',
        shortDescription: 'Engaging activities for mental and physical health.',
        description: 'A vibrant calendar of social, educational, and physical activities designed to promote holistic wellness and community connection.',
        included: ['Gentle Yoga & Therapy', 'Arts & Crafts', 'Music Evenings', 'Group Excursions'],
        iconName: 'Flower2',
        image: recreationWellnessImg
    },
    {
        id: 'srv-6',
        title: 'Security & Monitoring',
        category: 'Safety',
        shortDescription: '24/7 security and advanced safety protocols.',
        description: 'State-of-the-art security systems and around-the-clock staff presence ensure a completely safe and secure environment for all residents.',
        included: ['CCTV Surveillance', 'Secure Perimeters', 'Visitor Management', 'Fire Safety Systems'],
        iconName: 'ShieldCheck',
        image: securityMonitoringImg
    }
];

export const testimonials: Testimonial[] = [
    {
        id: 't-1',
        name: 'Amara Weerasinghe',
        relation: 'Daughter of Resident',
        text: 'Moving our mother to Evening Pearl was the best decision we ever made. The staff is unbelievably caring, and the facilities in Mahara feel like a luxury hotel. She is happier and healthier than she has been in years.',
        location: 'Mahara',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amara&backgroundColor=f8f9fa'
    },
    {
        id: 't-2',
        name: 'Dr. Rohan Perera',
        relation: 'Resident',
        text: 'After retiring from a long medical career, I sought a place that understood both comfort and proper healthcare protocols. Mawaramandiya Residence exceeds all my expectations. It is truly a premium living experience with peace of mind.',
        location: 'Mawaramandiya',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan&backgroundColor=e6f0fa'
    },
    {
        id: 't-3',
        name: 'Kamitha Perera',
        relation: 'Son of Resident',
        text: 'The daily activities and the serene environment have given my father a new lease on life. The nursing staff is attentive and the food is fantastic.',
        location: 'Mahara',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kamitha&backgroundColor=fff0e6'
    },
    {
        id: 't-4',
        name: 'Nalini Fernando',
        relation: 'Resident',
        text: 'I love my room overlooking the garden. The community here is wonderful, and I feel safe and well-cared for every single day.',
        location: 'Mawaramandiya',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nalini&backgroundColor=e6fae6'
    }
];

export const processSteps: ProcessStep[] = [
    {
        id: 'ps-1',
        number: 1,
        title: 'Select Package',
        description: 'Choose the most suitable care package and residence location for your loved ones.'
    },
    {
        id: 'ps-2',
        number: 2,
        title: 'Onboard & Consult',
        description: 'Meet with our care team to personalize the experience and finalize all arrangements.'
    },
    {
        id: 'ps-3',
        number: 3,
        title: 'Admit your Loved Ones',
        description: 'Experience a smooth transition as your loved one settles into their new luxury home.'
    }
];
