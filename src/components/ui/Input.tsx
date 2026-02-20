import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, ...props }, ref) => {
        return (
            <div className="w-full flex flex-col gap-1.5">
                {label && <label className="text-sm font-medium text-navy-dark">{label}</label>}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-md border border-navy/30 bg-white px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-navy-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold text-navy-dark disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <span className="text-xs text-red-500">{error}</span>}
            </div>
        );
    }
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string, error?: string }>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full flex flex-col gap-1.5">
                {label && <label className="text-sm font-medium text-navy-dark">{label}</label>}
                <textarea
                    className={cn(
                        "flex min-h-[120px] w-full rounded-md border border-navy/30 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-navy-dark/50 text-navy-dark resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <span className="text-xs text-red-500">{error}</span>}
            </div>
        );
    }
);
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string, error?: string }>(
    ({ className, label, error, children, ...props }, ref) => {
        return (
            <div className="w-full flex flex-col gap-1.5">
                {label && <label className="text-sm font-medium text-navy-dark">{label}</label>}
                <select
                    className={cn(
                        "flex h-12 w-full rounded-md border border-navy/30 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold text-navy-dark disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                {error && <span className="text-xs text-red-500">{error}</span>}
            </div>
        );
    }
);
Select.displayName = "Select";
