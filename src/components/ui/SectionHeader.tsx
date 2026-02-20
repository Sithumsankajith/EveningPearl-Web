import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false, className, ...props }: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col gap-4 mb-10", centered && "items-center text-center", className)} {...props}>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-dark">{title}</h2>
            {subtitle && (
                <p className="text-lg text-navy-dark/80 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-gold-light rounded-full", centered && "mx-auto")} />
        </div>
    );
}
