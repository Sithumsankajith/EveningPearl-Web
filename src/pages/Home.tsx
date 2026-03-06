import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Shield, Heart, Clock, Phone, ArrowRight, Star, Quote, MapPin, ImageIcon, ArrowRightCircle, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, rooms, testimonials, processSteps, residences } from '@/data/mockData';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

import maharaImg from '@/assets/mahara exterior.png';
import mahara2Img from '@/assets/mahara2.png';
import mahara3Img from '@/assets/mahara3.png';
import mawaramandiyaExtImg from '@/assets/mawaramandiya exterior.jpeg';

const HERO_IMAGES = [
    { text: "Mahara Residence Exterior", color: "bg-navy-light/10", image: maharaImg },
    { text: "Mawaramandiya Residence Exterior", color: "bg-gold/10", image: mawaramandiyaExtImg },
    { text: "Elegant Living Space", color: "bg-gold/10", image: mahara2Img },
];

// Helper to assign images to services for the visual grid - removed as we now use service.image


export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedRoomId, setSelectedRoomId] = useState<string>(rooms[0]?.id || '');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const selectedRoom = rooms.find(r => r.id === selectedRoomId) || rooms[0];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section (Centered Redesign) */}
            <section className="relative h-[85vh] min-h-[650px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-navy-dark/40 z-10" />
                            <img
                                src={HERO_IMAGES[currentImage].image}
                                alt={HERO_IMAGES[currentImage].text}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Hero Content (Centered) */}
                <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-[-80px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="inline-block py-1.5 px-6 rounded-full bg-navy-dark/30 text-white font-semibold text-sm tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-md">
                            PREMIUM LUXURY LIVING
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-white mb-6 leading-[1.15] tracking-tight">
                            Where Compassion Meets Premium Care
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                            Experience luxury retirement living with personalized care, safety, and dignity for your loved ones.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-gold hover:bg-gold-soft text-navy-dark text-base font-bold px-8 py-6 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
                                    Request Admission Info
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-base font-bold px-8 py-6 h-14 rounded-full backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                                    Schedule a Virtual Tour
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Number Indicator */}
                <div className="absolute bottom-[20%] right-8 z-30 text-white font-medium text-lg tracking-widest">
                    {currentImage + 1} / {HERO_IMAGES.length}
                </div>

                {/* Overlapping Info Card */}
                <div className="absolute -bottom-20 left-4 right-4 md:left-10 md:right-10 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl z-40 hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-8 px-10 border border-navy-light/10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-x divide-navy-light/10">
                            <div className="flex items-start gap-4 px-4">
                                <Clock className="text-gold w-8 h-8 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-navy-dark font-bold text-base mb-1">Years of Experience</h4>
                                    <p className="text-navy-dark/60 text-xs leading-relaxed">Decades of trusted senior care expertise.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 pl-8">
                                <Shield className="text-gold w-8 h-8 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-navy-dark font-bold text-base mb-1">24/7 Medical Support</h4>
                                    <p className="text-navy-dark/60 text-xs leading-relaxed">Round-the-clock professional healthcare.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 pl-8">
                                <Heart className="text-gold w-8 h-8 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-navy-dark font-bold text-base mb-1">Secure & Comfortable</h4>
                                    <p className="text-navy-dark/60 text-xs leading-relaxed">Designed for safety, comfort, and peace.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 pl-8">
                                <Users className="text-gold w-8 h-8 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-navy-dark font-bold text-base mb-1">Engaging Activities</h4>
                                    <p className="text-navy-dark/60 text-xs leading-relaxed">Highly rated by families.</p>
                                    <div className="flex gap-1 text-gold mt-1.5">
                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={10} fill="currentColor" />)}
                                        <span className="text-navy-dark/40 text-[10px] ml-1 font-semibold block leading-[10px]">(4.9/5)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-navy-light/10 text-center">
                            <Link to="/testimonials" className="inline-flex flex-row items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors">
                                <ArrowRightCircle size={16} />
                                See Why Families Trust Evening Pearl
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Added top padding to the next section to account for the overlapping absolute card */}
            <div className="h-0 md:h-32 bg-white"></div>

            {/* Services Grid Overlay (Redesigned) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
                    <div className="text-center mb-16">
                        <SectionHeader
                            title="Comprehensive Care Services"
                            subtitle="Discover our comprehensive services providing person-centered support and engaging activities to enhance the well-being and quality of life for seniors."
                            centered
                            className="mb-0"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <Link to="/services" key={i} className="group relative h-[250px] md:h-[280px] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 block">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-navy/90" />
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center justify-end text-center">
                                    <h3 className="text-xl font-bold text-white mb-0 transform transition-transform duration-300 group-hover:-translate-y-4">{service.title}</h3>
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 absolute bottom-6">
                                        <Badge variant="accent" className="bg-gold hover:bg-gold-light text-navy-dark border-none font-bold px-4 py-1.5 pointer-events-auto shadow-sm">
                                            Read More
                                        </Badge>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-14 text-center pb-8 border-b border-navy-light/10">
                        <Link to="/services">
                            <Button variant="outline" className="font-semibold px-8 py-6 h-auto text-navy border-navy/30 rounded-full hover:bg-navy hover:text-white transition-colors shadow-sm">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process Steps Section (New) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-6xl">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-navy-light/30 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                            {processSteps.map((step, index) => (
                                <div key={step.id} className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-gold text-navy-dark flex items-center justify-center text-3xl font-bold mb-8 shadow-lg shadow-navy/10 mx-auto">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4">{step.title}</h3>
                                    <p className="text-navy-dark/70 leading-relaxed px-4">{step.description}</p>
                                    {index === 1 && (
                                        <div className="mt-8">
                                            <Button variant="accent" className="bg-gold hover:bg-gold-soft text-navy-dark font-bold rounded-full px-8 py-6 h-auto shadow-md">
                                                Learn More About Our Services
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Avatar Grid Redesign) */}
            <section className="py-20 bg-pearlWhite">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
                    <div className="text-center mb-16">
                        <Badge variant="neutral" className="mb-4 bg-white text-navy font-bold px-4 py-1.5 uppercase tracking-widest text-xs rounded-full shadow-sm">TESTIMONIALS</Badge>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-4">Our Happy Customers</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="flex flex-col items-center text-center px-4">
                                <img src={t.avatar || 'https://via.placeholder.com/150'} alt={t.name} className="w-24 h-24 rounded-full mb-6 border-4 border-white shadow-sm object-cover" />
                                <h4 className="font-bold text-navy-dark text-lg mb-1">{t.name}</h4>
                                <p className="text-navy-dark/60 text-sm mb-4">{t.relation}</p>
                                <div className="flex gap-1 text-gold mb-5">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                                </div>
                                <Quote className="text-navy-light/10 w-8 h-8 mb-3 rotate-180" />
                                <p className="text-navy-dark/80 text-sm italic leading-relaxed">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Residences (Split View Redesign) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-6xl">
                    <div className="mb-12">
                        <Badge variant="neutral" className="mb-4 bg-pearlWhite text-navy font-bold px-4 py-1.5 uppercase tracking-widest text-xs rounded-full shadow-sm">OUR HOMES</Badge>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-3">Designed with Modern Comforts and Amenities</h2>
                        <p className="text-navy-dark/70 max-w-2xl">Exciting times are ahead as Evening Pearl prepares to open our brand-new, state-of-the-art facility in Sri Lanka.</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch pt-4">
                        {/* Tabs (Left) */}
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            {residences.map((res, i) => {
                                const isSelected = selectedRoom?.location === res.id;
                                return (
                                    <button
                                        key={res.id}
                                        onClick={() => {
                                            const firstRoomInLoc = rooms.find(r => r.location === res.id);
                                            if (firstRoomInLoc) setSelectedRoomId(firstRoomInLoc.id);
                                        }}
                                        className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all focus:outline-none ${isSelected ? 'border-2 border-gold bg-pearlWhite/50 shadow-sm' : 'border border-navy-light/10 bg-white hover:border-navy-light/30 shadow-sm'}`}
                                    >
                                        <img src={res.image} alt={res.name} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-navy-dark text-lg">{res.id}</h4>
                                            <p className="text-xs text-navy-dark/60 mt-1 uppercase tracking-wider font-semibold">
                                                {res.id === 'Mahara' ? 'Admission Open' : 'Waitlist'}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Details (Right) */}
                        <div className="lg:col-span-8 flex">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedRoom.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white border border-navy-light/10 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-8 w-full"
                                >
                                    <div className="w-full md:w-[45%] h-64 md:h-auto min-h-[250px] rounded-xl overflow-hidden relative shadow-sm">
                                        <img src={residences.find(r => r.id === selectedRoom.location)?.image || selectedRoom.image} alt={selectedRoom.location} className="w-full h-full object-cover absolute inset-0" />
                                    </div>
                                    <div className="w-full md:w-[55%] flex flex-col pt-2 pb-4">
                                        <div className="flex items-center gap-3 mb-6">
                                            <h3 className="text-2xl font-bold text-navy-dark">{selectedRoom.location}</h3>
                                            <Badge variant={selectedRoom.availability === 'Available' ? 'default' : 'warning'} className={`px-3 py-1 text-xs font-semibold rounded-full border ${selectedRoom.availability === 'Available' ? 'bg-transparent border-gold text-navy-dark' : ''}`}>
                                                {selectedRoom.availability === 'Available' ? 'Admission Open' : 'Waitlist'}
                                            </Badge>
                                        </div>
                                        <p className="text-navy-dark/70 text-sm leading-relaxed mb-6">
                                            {residences.find(r => r.id === selectedRoom.location)?.descriptionLong || `Our ${selectedRoom.location} Luxury Care Home.`}
                                        </p>
                                        <div className="flex items-start gap-2 text-sm text-navy-dark/70 mb-8 font-medium">
                                            <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                            <span>{selectedRoom.location === 'Mahara' ? 'No.142, Eksath Mawatha, Mahara, Kadawatha' : 'No.424, Mawaramandiya, Kadawatha'}</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-navy-light/10">
                                            <a href={`tel:${selectedRoom.location === 'Mahara' ? '+94771101022' : '+94771101026'}`}>
                                                <Button variant="outline" className="border-gold text-navy-dark hover:bg-gold hover:border-gold rounded-md gap-2 font-semibold">
                                                    <Phone size={14} /> {selectedRoom.location === 'Mahara' ? '+94771101022' : '+94771101026'}
                                                </Button>
                                            </a>
                                            <Link to="/gallery" className="text-gold font-bold text-sm hover:text-navy-dark transition-colors flex items-center gap-1.5 ml-2">
                                                <ImageIcon size={16} /> View Gallery
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Virtual Tour CTA - Adapted to Concept */}
            <section className="py-20 bg-pearlWhite relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                        <img src={maharaImg} alt="Virtual Tour" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Badge variant="neutral" className="mb-5 bg-white text-navy font-bold px-4 py-1.5 uppercase tracking-widest text-xs rounded-full shadow-sm">VIRTUAL TOUR</Badge>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-6">Experience Our Homelike Environment</h2>
                        <p className="text-navy-dark/70 text-lg leading-relaxed mb-8">
                            Take a virtual tour of Evening Pearl and see our warm, comfortable facilities where seniors thrive. Discover our compassionate environment, specialized care areas, and vibrant community spaces designed for comfort, safety, and well-being.
                        </p>
                        <Link to="/contact">
                            <Button variant="accent" className="bg-gold hover:bg-gold-soft text-navy-dark font-bold rounded-full px-8 py-6 h-auto shadow-md">
                                Schedule a Visit
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
