import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export function Modal({ isOpen, onClose, children, className, title }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-navy-950/40 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className={cn(
                                "pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl flex flex-col relative",
                                className
                            )}
                        >
                            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-navy-100 bg-white/95 backdrop-blur-md rounded-t-2xl">
                                {title ? <h3 className="text-xl font-serif font-semibold text-navy-900">{title}</h3> : <div />}
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 hover:bg-navy-50 transition-colors"
                                >
                                    <X className="w-5 h-5 text-navy-600" />
                                </button>
                            </div>
                            <div className="p-0">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
