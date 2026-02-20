import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Shield, Heart, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <PlaceholderImage text="Luxury Residence Exterior" className="w-full h-full object-cover rounded-none border-none bg-navy-950/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent z-0" />

                <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-gold-500/20 text-gold-300 backdrop-blur-md text-sm font-semibold tracking-wide uppercase mb-6 border border-gold-500/30">
                            Welcome to Evening Pearl
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
                            A New Standard of <br /><span className="text-gold-400">Luxury Senior Living</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Experience unparalleled care, comfort, and community in Sri Lanka's most prestigious residences. We ensure absolute peace of mind for you and your family.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <Link to="/residences" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-gold-500 text-navy-950 hover:bg-gold-400 hover:text-navy-950 text-base font-bold px-8 py-6 h-14">
                                    Explore Rooms
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm text-base font-bold px-8 py-6 h-14">
                                    Book a Visit
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
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
                                className="flex flex-col items-center text-center p-8 bg-navy-50 rounded-2xl border border-navy-100/50 hover:bg-navy-100 hover:border-navy-200 transition-all shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-gold-500 ring-1 ring-navy-100">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-navy-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-navy-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 font-semibold">Ready to see it for yourself?</h2>
                    <p className="text-lg md:text-xl text-navy-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Schedule a personalized tour of our Mahara or Mawaramandiya residences. Meet our care team and experience the Evening Pearl standard.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-gold-500 text-navy-950 hover:bg-gold-400 text-base font-bold px-10 py-6 h-14">
                            Schedule a Tour
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
