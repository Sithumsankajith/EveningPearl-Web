import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseClass = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-navy-800 text-white hover:bg-navy-900 shadow-sm",
            secondary: "bg-navy-100 text-navy-900 hover:bg-navy-200",
            accent: "bg-gold-500 text-white hover:bg-gold-600 shadow-sm",
            outline: "border border-navy-200 bg-transparent hover:bg-navy-50 text-navy-800",
            ghost: "bg-transparent hover:bg-navy-50 text-navy-800",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(baseClass, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
