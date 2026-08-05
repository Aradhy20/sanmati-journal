import React from 'react';

export default function Card({
    children,
    variant = 'default',
    hover = true,
    padding = 'normal',
    className = '',
    ...props
}) {
    const variants = {
        default: "bg-white border border-slate-200/80 shadow-2xs",
        glass: "bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg",
        featured: "bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white border border-slate-800 shadow-2xl",
        subtle: "bg-slate-50 border border-slate-200/60 shadow-2xs",
        accent: "bg-blue-50/50 border border-blue-100 shadow-2xs"
    };

    const paddings = {
        none: "p-0",
        compact: "p-4",
        normal: "p-6",
        spacious: "p-8 sm:p-10"
    };

    const hoverStyle = hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : "";

    return (
        <div
            className={`rounded-3xl ${variants[variant] || variants.default} ${paddings[padding] || paddings.normal} ${hoverStyle} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
