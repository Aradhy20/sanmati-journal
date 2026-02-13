// Decorative background components

export const GridPattern = ({ className = "" }) => (
    <div className={`absolute inset-0 ${className}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
);

export const GlassyBlob = ({ className = "", color = "bg-blue-100" }) => (
    <div className={`absolute ${className} ${color} rounded-full blur-3xl opacity-20`} />
);

export const DotPattern = ({ className = "" }) => (
    <div className={`absolute inset-0 ${className}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-300" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
    </div>
);

export const FloatingGraphic = ({ children }) => (
    <div className="relative">
        {children}
    </div>
);
