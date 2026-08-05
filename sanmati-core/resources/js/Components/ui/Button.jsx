import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    icon: Icon = null,
    iconPosition = 'left',
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 active:scale-95",
        secondary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 active:scale-95",
        accent: "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-md shadow-cyan-500/20 active:scale-95",
        outline: "bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:bg-slate-50 shadow-2xs",
        ghost: "bg-transparent hover:bg-slate-100 text-slate-700",
        danger: "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 active:scale-95",
        success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 active:scale-95",
        gradient: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white shadow-lg active:scale-95"
    };

    const sizes = {
        xs: "text-[10px] px-2.5 py-1 rounded-lg gap-1",
        sm: "text-xs px-3.5 py-1.5 rounded-xl gap-1.5",
        md: "text-xs px-5 py-2.5 rounded-xl gap-2",
        lg: "text-sm px-6 py-3 rounded-xl gap-2.5",
        xl: "text-base px-8 py-4 rounded-2xl gap-3"
    };

    return (
        <button
            disabled={disabled || isLoading}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin shrink-0" />
            ) : Icon && iconPosition === 'left' ? (
                <Icon className="w-4 h-4 shrink-0" />
            ) : null}

            <span>{children}</span>

            {!isLoading && Icon && iconPosition === 'right' ? (
                <Icon className="w-4 h-4 shrink-0" />
            ) : null}
        </button>
    );
}
