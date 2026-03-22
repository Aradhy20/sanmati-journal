import React from 'react';

/**
 * SkeletonCard — generic shimmer placeholder
 * Usage:
 *   <SkeletonCard />                        — paper card
 *   <SkeletonCard variant="stat" />         — stats block
 *   <SkeletonCard variant="editor" />       — team member card
 *   <SkeletonCard lines={4} />              — custom line count
 */
export function SkeletonCard({ variant = 'paper', lines = 3, className = '' }) {
    const shimmer = 'bg-slate-200 rounded animate-pulse';

    if (variant === 'stat') {
        return (
            <div className={`ds-card p-8 space-y-4 ${className}`}>
                <div className={`${shimmer} h-12 w-12`} />
                <div className={`${shimmer} h-8 w-1/2`} />
                <div className={`${shimmer} h-4 w-3/4`} />
            </div>
        );
    }

    if (variant === 'editor') {
        return (
            <div className={`ds-card p-6 flex gap-4 ${className}`}>
                <div className={`${shimmer} rounded-full w-16 h-16 flex-shrink-0`} />
                <div className="flex-1 space-y-2">
                    <div className={`${shimmer} h-4 w-3/4`} />
                    <div className={`${shimmer} h-3 w-1/2`} />
                    <div className={`${shimmer} h-3 w-2/3`} />
                </div>
            </div>
        );
    }

    // Default = paper card
    return (
        <div className={`ds-card p-8 space-y-4 ${className}`}>
            {/* Badge */}
            <div className="flex justify-between items-start">
                <div className={`${shimmer} h-6 w-24 rounded-full`} />
                <div className={`${shimmer} h-10 w-10 rounded-xl`} />
            </div>
            {/* Title lines */}
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className={`${shimmer} h-4`}
                    style={{ width: i === lines - 1 ? '60%' : '100%' }}
                />
            ))}
            {/* Author row */}
            <div className="flex items-center gap-3 pt-2">
                <div className={`${shimmer} rounded-full w-10 h-10`} />
                <div className="space-y-1 flex-1">
                    <div className={`${shimmer} h-3 w-1/2`} />
                    <div className={`${shimmer} h-2 w-1/3`} />
                </div>
            </div>
            {/* Footer */}
            <div className="flex justify-between pt-4 border-t border-slate-100">
                <div className={`${shimmer} h-3 w-20`} />
                <div className={`${shimmer} h-3 w-20`} />
            </div>
        </div>
    );
}

/**
 * SkeletonGrid — renders N SkeletonCards in a responsive grid
 * Usage:
 *   <SkeletonGrid count={6} />
 *   <SkeletonGrid count={4} variant="stat" cols="4" />
 */
export function SkeletonGrid({ count = 3, variant = 'paper', cols = '3', className = '' }) {
    const colMap = {
        '2': 'grid-cols-1 md:grid-cols-2',
        '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <div className={`grid ${colMap[cols] ?? colMap['3']} gap-8 ${className}`}>
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonCard key={i} variant={variant} />
            ))}
        </div>
    );
}

export default SkeletonCard;
