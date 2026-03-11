import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export const DynamicCard = ({ children, className = "", gradient = "from-blue-500 to-purple-600" }) => {
    // Animations disabled - return static card
    return (
        <div
            className={`relative group bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden ${className}`.trim()}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export const GradientText = ({ children, gradient = "from-blue-600 to-indigo-600", className = "" }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} ${className}`.trim()}>
        {children}
    </span>
);
