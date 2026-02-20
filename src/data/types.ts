export type Location = 'Mahara' | 'Mawaramandiya';
export type RoomType = 'Single' | 'Shared' | 'Deluxe' | 'Suite';
export type Availability = 'Available' | 'Waitlist';

export interface Room {
    id: string;
    location: Location;
    name: string;
    type: RoomType;
    price: string;
    features: string[];
    amenities: string[];
    included: string[];
    availability: Availability;
    image: string;
}

export interface Service {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    description: string;
    included: string[];
    iconName: string;
}

export interface Testimonial {
    id: string;
    name: string;
    relation: string;
    text: string;
    location: Location;
}
