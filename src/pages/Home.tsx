import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Shield, Heart, Clock, Phone, ArrowRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { services, rooms, testimonials } from '@/data/mockData';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-navy-dark pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-start text-left relative z-10"
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-gold/20 text-gold shadow-sm text-sm font-bold tracking-wider uppercase mb-6 border border-gold/30">
                                Welcome to Evening Pearl
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                                A New Standard of <br /><span className="text-gold">Luxury Senior Living</span>
                            </h1>
                            <div className="w-24 h-1 rounded-full mb-8 bg-gold/20 relative overflow-hidden">
                                <div className="absolute inset-0 animate-shimmer" />
                            </div>
                            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-medium">
                                Experience unparalleled care, comfort, and community in Sri Lanka's most prestigious residences. We ensure absolute peace of mind for you and your family.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Link to="/residences" className="w-full sm:w-auto">
                                    <Button variant="accent" size="lg" className="w-full sm:w-auto text-base font-bold px-8 py-6 h-14">
                                        Explore Rooms
                                    </Button>
                                </Link>
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-navy-dark text-base font-bold px-8 py-6 h-14">
                                        Book a Visit
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="relative h-[400px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-950/50 block border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10" />
                            <PlaceholderImage text="Luxury Residence Exterior" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Highlights */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        title="Excellence in Care"
                        subtitle="Our commitment to your wellbeing is reflected in every aspect of our service."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {[
                            { icon: Heart, title: 'Compassionate Care', desc: 'Trained, empathetic staff dedicated to your comfort.' },
                            { icon: Shield, title: 'Uncompromising Safety', desc: 'Advanced security and emergency protocols 24/7.' },
                            { icon: Clock, title: 'Round-the-clock Support', desc: 'Medical and daily assistance available at all times.' },
                            { icon: Phone, title: 'Family Connection', desc: 'Seamless communication to keep loved ones updated.' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center p-8 bg-pearlWhite rounded-2xl border border-navy-light/20/50 hover:bg-navy-light/20 hover:border-navy-light/50 transition-all shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-gold ring-1 ring-navy-light/20">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-navy-dark mb-3">{feature.title}</h3>
                                <p className="text-navy-dark/80 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-pearlWhite">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
                    <SectionHeader
                        title="Comprehensive Care Services"
                        subtitle="Tailored support for every resident's unique needs to ensure a high quality of life."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {services.slice(0, 3).map((service, i) => (
                            <Card key={i} hoverable className="h-full flex flex-col border-0 ring-1 ring-navy-light/10 shadow-sm rounded-2xl">
                                <CardHeader className="pb-4 pt-8 px-6 bg-white">
                                    <div className="w-12 h-12 rounded-xl bg-pearlWhite flex items-center justify-center mb-5 shadow-sm text-gold ring-1 ring-navy-light/20">
                                        <Heart size={24} />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-navy-dark mb-2">{service.title}</h3>
                                    <p className="text-navy-dark/80 text-sm leading-relaxed">{service.shortDescription}</p>
                                </CardHeader>
                                <CardContent className="mt-auto pt-4 px-6 pb-8 bg-white">
                                    <Link to="/services" className="text-gold font-bold text-sm hover:text-navy-light flex items-center gap-1 transition-colors">
                                        Learn more <ArrowRight size={16} />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/services">
                            <Button variant="outline" size="md" className="font-semibold px-8 border-navy/30">View All Services</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Residences Preview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <SectionHeader
                            title="Featured Residences"
                            subtitle="Discover our premium living spaces in Mahara and Mawaramandiya."
                            className="mb-0"
                        />
                        <Link to="/residences" className="shrink-0 mb-2">
                            <Button variant="outline" size="md" className="font-semibold px-8 border-navy/30">Explore All Rooms</Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rooms.slice(0, 3).map((room, i) => (
                            <Card key={i} hoverable className="h-full flex flex-col border-0 ring-1 ring-navy-light/10 shadow-md overflow-hidden rounded-[2rem]">
                                <div className="h-60 w-full relative">
                                    <PlaceholderImage text={room.name} className="w-full h-full object-cover rounded-t-[2rem]" />
                                    <div className="absolute top-5 right-5">
                                        <Badge variant={room.availability === 'Available' ? 'success' : 'warning'} className="shadow-md backdrop-blur-md bg-white/95 px-3 py-1 font-bold">
                                            {room.availability}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader className="pb-4 pt-8 px-6 bg-white">
                                    <h4 className="text-xl font-serif font-bold text-navy-dark leading-tight mb-3">{room.name}</h4>
                                    <Badge variant="neutral" className="w-fit mb-4 bg-pearlWhite text-navy font-bold px-3 py-1">{room.location}</Badge>
                                </CardHeader>
                                <CardContent className="mt-auto pt-2 px-6 pb-6 bg-white">
                                    <Link to={`/residences?location=${room.location}`}>
                                        <Button variant="secondary" className="w-full text-sm font-semibold h-11 border-navy/20">
                                            View Details
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-pearlWhite">
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
                    <SectionHeader
                        title="What Families Say"
                        subtitle="Real stories from our residents and their loved ones."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                        {testimonials.map((t, i) => (
                            <Card key={i} hoverable className="bg-white border-0 ring-1 ring-navy-light/10 shadow-sm p-8 rounded-3xl relative">
                                <Quote className="absolute top-8 right-8 text-gold-light/20 w-16 h-16" />
                                <div className="flex gap-1 text-gold mb-6 relative z-10">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-navy-dark/90 italic text-lg leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                                <div className="flex flex-col relative z-10">
                                    <span className="font-bold text-navy-dark font-serif text-lg">{t.name}</span>
                                    <span className="text-sm font-semibold text-gold">{t.relation} • {t.location}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-navy-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 font-bold">Ready to see it for yourself?</h2>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Schedule a personalized tour of our Mahara or Mawaramandiya residences. Meet our care team and experience the Evening Pearl standard.
                    </p>
                    <Link to="/contact">
                        <Button variant="accent" size="lg" className="text-base font-bold px-10 py-6 h-14">
                            Schedule a Tour
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
