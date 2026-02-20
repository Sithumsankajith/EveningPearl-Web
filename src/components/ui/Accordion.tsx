import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-navy-light/20 last:border-0">
            <button
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-light rounded-md"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-navy-dark pr-4">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="h-5 w-5 text-navy-light shrink-0" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 text-navy-dark/80 leading-relaxed pr-8">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ items, className }: { items: Omit<AccordionItemProps, 'isOpen' | 'onClick'>[], className?: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className={cn("w-full divide-y divide-navy-light/20", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}
