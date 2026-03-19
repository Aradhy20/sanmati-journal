import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"], .group')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        setIsVisible(true);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block">
            {/* The Outer Ring */}
            <motion.div
                className="absolute w-10 h-10 border border-secondary/30 rounded-full"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "rgba(87, 118, 241, 0.5)" : "rgba(255, 120, 45, 0.3)",
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* The Inner Dot */}
            <motion.div
                className="absolute w-1.5 h-1.5 bg-secondary rounded-full"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                    backgroundColor: isHovering ? "rgba(87, 118, 241, 1)" : "rgba(255, 120, 45, 1)",
                    opacity: isVisible ? 1 : 0
                }}
            />
        </div>
    );
};

export default CustomCursor;
