import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { rooms } from '@/data/mockData';
import { Room, Location } from '@/data/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tabs } from '@/components/ui/Tabs';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { MapPin, Info, Check, BedDouble } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOCATIONS: Location[] = ['Mahara', 'Mawaramandiya'];

export default function Residences() {
    const [searchParams, setSearchParams] = useSearchParams();
    const locationParam = searchParams.get('location') as Location;

    const [activeLocation, setActiveLocation] = useState<Location>(
        LOCATIONS.includes(locationParam) ? locationParam : 'Mahara'
    );
    const [selectedType, setSelectedType] = useState<string>('All');
    const [selectedAvailability, setSelectedAvailability] = useState<string>('All');

    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    useEffect(() => {
        setSearchParams({ location: activeLocation }, { replace: true });
    }, [activeLocation, setSearchParams]);

    const filteredRooms = rooms.filter(room => {
        if (room.location !== activeLocation) return false;
        if (selectedType !== 'All' && room.type !== selectedType) return false;
        if (selectedAvailability !== 'All' && room.availability !== selectedAvailability) return false;
        return true;
    });

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-20 lg:max-w-7xl">
                <SectionHeader
                    title="Explore Our Residences"
                    subtitle="Discover the perfect living space designed for comfort, safety, and luxury."
                    centered
                />

                {/* Location Selector */}
                <div className="flex justify-center mb-12">
                    <Tabs
                        tabs={LOCATIONS}
                        activeTab={activeLocation}
                        onChange={(tab) => {
                            setActiveLocation(tab as Location);
                            setSelectedType('All');
                            setSelectedAvailability('All');
                        }}
                        className="bg-white border border-navy-100 shadow-sm rounded-2xl h-[4rem] p-2"
                    />
                </div>

                {/* Filters */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-navy-100 shadow-sm flex flex-col md:flex-row gap-6 items-end mb-12">
                    <div className="flex-1 w-full relative">
                        <Select
                            label="Room Type"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="bg-white"
                        >
                            <option value="All">All Types</option>
                            <option value="Single">Single</option>
                            <option value="Shared">Shared</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Suite">Suite</option>
                        </Select>
                    </div>
                    <div className="flex-1 w-full relative">
                        <Select
                            label="Availability"
                            value={selectedAvailability}
                            onChange={(e) => setSelectedAvailability(e.target.value)}
                            className="bg-white"
                        >
                            <option value="All">All Availability</option>
                            <option value="Available">Available Now</option>
                            <option value="Waitlist">Waitlist</option>
                        </Select>
                    </div>
                </div>

                {/* Residence Overview Card */}
                <div className="bg-navy-950 rounded-[2rem] overflow-hidden shadow-xl shadow-navy-900/10 mb-16 flex flex-col md:flex-row border border-navy-800 relative z-0">
                    <div className="md:w-2/5 md:max-w-md h-64 md:h-auto">
                        <PlaceholderImage text={`${activeLocation} Exterior`} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="md:w-3/5 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-gold-400 mb-4">
                                <MapPin size={20} />
                                <span className="font-semibold tracking-widest uppercase text-xs">Location Details</span>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-5 leading-tight">{activeLocation} Residence</h3>
                            <p className="text-navy-200 leading-relaxed max-w-xl text-lg mb-8">
                                {activeLocation === 'Mahara'
                                    ? 'Located near Kandy Road, offering lush garden views and a serene environment with easy access to premier medical facilities.'
                                    : 'Situated overlooking the beautiful waters of Mawaramandiya, offering a tranquil lakeside retreat with premium modern amenities.'}
                            </p>
                            <Button variant="outline" className="border-navy-700 text-white hover:bg-white hover:text-navy-950 px-6 h-12" onClick={() => window.location.href = '/contact'}>
                                Book a Tour at {activeLocation}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredRooms.map((room) => (
                            <motion.div
                                key={room.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card hoverable className="h-full flex flex-col border-0 ring-1 ring-navy-900/5 shadow-md overflow-hidden rounded-[2rem]">
                                    <div className="h-60 w-full relative">
                                        <PlaceholderImage text={room.name} className="w-full h-full object-cover rounded-t-[2rem]" />
                                        <div className="absolute top-5 right-5">
                                            <Badge variant={room.availability === 'Available' ? 'success' : 'warning'} className="shadow-md backdrop-blur-md bg-white/95 px-3 py-1">
                                                {room.availability}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader className="pb-4 pt-8 px-6 bg-white">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-xl md:text-2xl font-serif font-bold text-navy-900 leading-tight pr-4">{room.name}</h4>
                                        </div>
                                        <Badge variant="neutral" className="w-fit mb-5 bg-navy-50 text-navy-700 font-bold px-3 py-1">{room.type} Room</Badge>

                                        <div className="flex flex-col gap-1 border-y border-navy-100 py-4 mb-5">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monthly Rate</span>
                                            <span className="font-bold text-navy-950 text-xl">{room.price}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {room.features.slice(0, 3).map((feat, i) => (
                                                <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1.5 rounded-md font-medium">
                                                    {feat}
                                                </span>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="mt-auto pt-6 px-6 pb-6 bg-white">
                                        <Button
                                            variant="primary"
                                            onClick={() => setSelectedRoom(room)}
                                            className="w-full h-12 text-base font-semibold"
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredRooms.length === 0 && (
                        <div className="col-span-full py-24 text-center flex flex-col items-center justify-center bg-white rounded-3xl border border-navy-100 shadow-sm">
                            <div className="w-20 h-20 bg-navy-50 rounded-full flex items-center justify-center mb-6">
                                <Info className="w-10 h-10 text-navy-300" />
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-navy-900 mb-3">No rooms found</h4>
                            <p className="text-slate-600 text-lg">Try adjusting your filters to see more options.</p>
                            <Button variant="outline" className="mt-8 border-navy-200 h-12 px-8" onClick={() => { setSelectedType('All'); setSelectedAvailability('All'); }}>
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>

                {/* Room Detail Modal */}
                <Modal
                    isOpen={!!selectedRoom}
                    onClose={() => setSelectedRoom(null)}
                    title={selectedRoom?.name}
                >
                    {selectedRoom && (
                        <div className="flex flex-col">
                            <div className="relative h-64 md:h-80 w-auto -mx-6 -mt-6 mb-8 overflow-hidden border-b border-navy-100">
                                <PlaceholderImage text={`${selectedRoom.name} Interior`} className="w-full h-full object-cover" />
                                <Badge variant={selectedRoom.availability === 'Available' ? 'success' : 'warning'} className="absolute top-4 right-4 text-sm px-4 py-1.5 shadow-md bg-white">
                                    {selectedRoom.availability}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="text-lg font-bold text-navy-900 mb-5 flex items-center gap-3">
                                        <div className="bg-gold-50 p-1.5 rounded-lg"><BedDouble className="w-5 h-5 text-gold-600" /></div>
                                        Room Amenities
                                    </h4>
                                    <ul className="space-y-4">
                                        {selectedRoom.amenities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-navy-400 shrink-0 mt-0.5" />
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="text-lg font-bold text-navy-900 mb-5 mt-10 flex items-center gap-3">
                                        <div className="bg-gold-50 p-1.5 rounded-lg"><Info className="w-5 h-5 text-gold-600" /></div>
                                        Specific Features
                                    </h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {selectedRoom.features.map((feat, i) => (
                                            <span key={i} className="text-sm bg-navy-50 border border-navy-100 text-navy-800 px-3 py-1.5 rounded-lg font-medium shadow-sm">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                                    <h4 className="text-lg font-bold text-navy-900 mb-5 border-b border-navy-200 pb-3">What's Included</h4>
                                    <ul className="space-y-4 mb-10">
                                        {selectedRoom.included.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-gold-600 shrink-0 mt-0.5 font-bold" />
                                                <span className="text-slate-800 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-white p-6 rounded-xl border border-navy-100 shadow-sm mb-6 text-center ring-1 ring-gold-500/10">
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1.5">Pricing From</p>
                                        <p className="text-3xl font-bold text-navy-950">{selectedRoom.price}</p>
                                    </div>

                                    <Link to={`/contact?location=${activeLocation.toLowerCase()}`} className="block w-full">
                                        <Button className="w-full h-14 text-base font-bold bg-navy-900 text-gold-400 hover:bg-navy-800">
                                            Request Availability
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    );
}
