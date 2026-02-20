import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TabsProps {
    tabs: string[];
    activeTab: string;
    onChange: (tab: string) => void;
    className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
    return (
        <div className={cn("inline-flex h-14 items-center justify-center rounded-xl bg-pearlWhite p-1.5 text-navy-light", className)}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                    <button
                        key={tab}
                        onClick={() => onChange(tab)}
                        className={cn(
                            "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg px-8 py-2.5 text-sm md:text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-light",
                            isActive ? "text-navy-dark" : "hover:text-navy-dark"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 rounded-lg bg-white shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{tab}</span>
                    </button>
                );
            })}
        </div>
    );
}
