import React from 'react';

export default function Input({
    label = '',
    error = '',
    icon: Icon = null,
    type = 'text',
    className = '',
    id,
    ...props
}) {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className="space-y-1.5 w-full">
            {label && (
                <label htmlFor={inputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative flex items-center">
                {Icon && (
                    <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                )}

                <input
                    id={inputId}
                    type={type}
                    className={`w-full bg-white border ${
                        error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600'
                    } ${
                        Icon ? 'pl-10' : 'px-4'
                    } py-3 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${className}`}
                    {...props}
                />
            </div>

            {error && (
                <p className="text-[11px] font-bold text-red-600 leading-tight">{error}</p>
            )}
        </div>
    );
}
