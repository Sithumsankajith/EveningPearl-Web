import React from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
    text?: string;
    className?: string;
}

export function PlaceholderImage({
    width = '100%',
    height = '100%',
    text = 'Placeholder',
    className,
    ...props
}: PlaceholderImageProps) {
    return (
        <div
            style={{ width, height }}
            className={cn(
                'flex flex-col items-center justify-center bg-gradient-to-br from-navy-50 to-navy-light/20 text-navy-light rounded-lg border border-navy-light/50 overflow-hidden',
                className
            )}
            {...props}
        >
            <ImageIcon className="w-8 h-8 opacity-50 mb-2" />
            <span className="text-sm font-medium opacity-60 tracking-wide uppercase">{text}</span>
        </div>
    );
}
