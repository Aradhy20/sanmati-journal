import React from 'react';

/**
 * Card — Design System v2
 *
 * Usage:
 *   <Card>Default card</Card>
 *   <Card variant="featured" hoverable>Featured paper card</Card>
 *   <Card variant="stat">500+ Papers</Card>
 *   <Card size="lg" className="p-10">Custom padded card</Card>
 */
export function Card({
    variant = 'default',
    size = 'default',
    hoverable = true,
    className = '',
    children,
    ...props
}) {
    const variants = {
        default:  'ds-card',
        featured: 'ds-card-featured',
        stat:     'ds-card-stat',
    };
    const sizes = {
        default: '',
        lg:      'ds-card-lg',
    };

    return (
        <div
            className={`
                ${variants[variant] ?? variants.default}
                ${sizes[size] ?? ''}
                ${hoverable ? 'ds-card-hoverable' : ''}
                ${className}
            `.trim().replace(/\s+/g, ' ')}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className = '', children, ...props }) {
    return (
        <div className={`p-6 pb-0 ${className}`} {...props}>
            {children}
        </div>
    );
}

export function CardContent({ className = '', children, ...props }) {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ className = '', children, ...props }) {
    return (
        <div className={`p-6 pt-0 border-t border-slate-100 ${className}`} {...props}>
            {children}
        </div>
    );
}

export default Card;
