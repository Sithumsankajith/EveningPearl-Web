import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseClass = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-light disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-navy-dark text-white hover:bg-navy shadow-sm hover:shadow-[0_0_15px_rgba(244,180,0,0.3)] transition-all",
            secondary: "bg-white border-2 border-navy text-navy hover:bg-pearlWhite font-semibold",
            accent: "bg-gold text-navy-dark hover:bg-gold-light shadow-sm font-bold",
            outline: "border border-navy-light/50 bg-transparent hover:bg-pearlWhite text-navy",
            ghost: "bg-transparent hover:bg-pearlWhite text-navy",
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
