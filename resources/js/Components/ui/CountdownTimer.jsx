import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate, className = '' }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let tl = { days: 0, hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                tl = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return tl;
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Avoid hydration mismatch by not rendering server-side
    if (!isMounted) return null;

    const timeBlocks = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
    ];

    return (
        <div className={`flex items-center gap-2 sm:gap-4 ${className}`} aria-live="polite">
            {timeBlocks.map((block, i) => (
                <React.Fragment key={block.label}>
                    <div className="flex flex-col items-center min-w-[50px] sm:min-w-[64px]">
                        <div className="bg-white/90 backdrop-blur-md dark:bg-slate-800/90 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 sm:px-4 sm:py-3 w-full text-center mb-1">
                            <span className="text-xl sm:text-2xl font-black font-serif text-ds-accent tracking-tighter shadow-sm">
                                {String(block.value).padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">{block.label}</span>
                    </div>
                    {i < 3 && <span className="text-xl font-black text-slate-300 dark:text-slate-600 self-start mt-2 sm:mt-3">:</span>}
                </React.Fragment>
            ))}
        </div>
    );
}
