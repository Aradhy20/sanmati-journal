import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const posRef = useRef({ x: -100, y: -100 });
    const targetRef = useRef({ x: -100, y: -100 });
    const rafIdRef = useRef(null);

    useEffect(() => {
        // Exit early on touch/coarse devices
        if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;

        const moveCursor = (e) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (e.target && e.target.closest('a, button, [role="button"], .group')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Smooth spring-like lerp loop
        const loop = () => {
            posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.2;
            posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.2;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
            }
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%)`;
            }
            rafIdRef.current = requestAnimationFrame(loop);
        };
        rafIdRef.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        };
    }, [isVisible]);

    return (
        <div className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* The Outer Ring */}
            <div
                ref={cursorRef}
                className={`absolute w-10 h-10 border rounded-full transition-[width,height,border-color,background-color] duration-200 ${
                    isHovering
                        ? 'w-14 h-14 border-blue-500/60 bg-blue-500/10'
                        : 'border-secondary/30 bg-transparent'
                }`}
                style={{ willChange: 'transform' }}
            />
            {/* The Inner Dot */}
            <div
                ref={dotRef}
                className={`absolute w-1.5 h-1.5 rounded-full transition-[background-color,transform] duration-150 ${
                    isHovering ? 'bg-blue-600 scale-125' : 'bg-secondary'
                }`}
                style={{ willChange: 'transform' }}
            />
        </div>
    );
};

export default CustomCursor;
