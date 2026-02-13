import { useState, useEffect } from 'react';

export default function useTheme() {
    // Force light mode always
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }, []);

    const toggleTheme = () => {
        // Do nothing
    };

    return { theme: 'light', toggleTheme };
}
