import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'warning' | 'neutral' | 'accent';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
    const variants = {
        default: "bg-navy-light/20 text-navy",
        success: "bg-green-100 text-green-800",
        warning: "bg-amber-100 text-amber-800",
        neutral: "bg-slate-100 text-navy-dark",
        accent: "bg-gold-light/20 text-gold-900 border border-gold-light/50",
    };

    return (
        <div className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors", variants[variant], className)} {...props}>
            {children}
        </div>
    );
}
