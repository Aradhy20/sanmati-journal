import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const defaultVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export const revealVariants = {
    base: defaultVariants,
    left: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    zoom: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    }
};

export const ScrollReveal = ({ children, width = "100%", delay = 0, className = "", variants = defaultVariants }) => {
    // Animations disabled - return children directly without motion
    return (
        <div className={`relative ${width === 'fit-content' ? 'w-fit' : 'w-full'} ${className}`.trim()}>
            {children}
        </div>
    );
};

export const FadeUp = ({ children, delay = 0, className = "" }) => {
    return (
        <ScrollReveal delay={delay}>
            <div className={className}>{children}</div>
        </ScrollReveal>
    );
};

export const ScaleOnHover = ({ children, className = "" }) => {
    // Hover animations disabled - return children directly
    return (
        <div className={className}>
            {children}
        </div>
    )
}
