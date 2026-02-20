import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'> & { hoverable?: boolean }>(
    ({ className, hoverable = false, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverable ? { y: -4, transition: { duration: 0.2 } } : undefined}
                className={cn(
                    "rounded-2xl border border-navy-100 bg-white text-navy-950 shadow-sm transition-shadow overflow-hidden",
                    hoverable && "hover:shadow-md",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
    )
);
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";
