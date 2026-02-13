import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const GridPattern = ({ className = "" }) => (
    <svg className={`absolute inset-0 h-full w-full stroke-slate-200 dark:stroke-slate-800/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] ${className}`.trim()} aria-hidden="true">
        <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M.5 40V.5H40" fill="none" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
    </svg>
);

export const DotPattern = ({ className = "" }) => (
    <svg className={`absolute inset-0 h-full w-full fill-slate-300 dark:fill-slate-700/50 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)] ${className}`.trim()} aria-hidden="true">
        <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse" x="0" y="0">
                <circle cx="1" cy="1" r="1" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#dots)" />
    </svg>
);

export const AcademicCrest = ({ className = "" }) => (
    <div className={`opacity-5 pointer-events-none select-none ${className}`.trim()}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M20 30 L50 15 L80 30 L80 60 C80 80 50 95 50 95 C50 95 20 80 20 60 Z" />
            <path d="M50 35 L65 50 L50 65 L35 50 Z" className="opacity-50" />
            <rect x="45" y="40" width="10" height="20" rx="1" className="opacity-80" />
        </svg>
    </div>
);

export const Magnetic = ({ children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};

export const FloatingGraphic = ({ children, delay = 0 }) => (
    <motion.div
        animate={{
            y: [0, -10, 0],
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay
        }}
    >
        {children}
    </motion.div>
);

export const GlassyBlob = ({ className = "", color = "bg-blue-400" }) => (
    <motion.div
        animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className={`absolute blur-3xl opacity-20 ${color} ${className}`.trim()}
    />
);

export const ParallaxSection = ({ children, offset = 50, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`.trim()}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};
