import React from 'react';

/**
 * Badge — Design System v2
 *
 * Usage:
 *   <Badge>Default</Badge>
 *   <Badge variant="success">Open Access</Badge>
 *   <Badge variant="hot">🔥 Trending</Badge>
 *   <Badge variant="warning">Peer Review</Badge>
 *   <Badge variant="info">UGC CARE</Badge>
 */
export function Badge({
    variant = 'default',
    className = '',
    children,
    ...props
}) {
    const variants = {
        default: 'ds-badge-default',
        success: 'ds-badge-success',
        warning: 'ds-badge-warning',
        info:    'ds-badge-info',
        hot:     'ds-badge-hot',
    };

    return (
        <span
            className={`${variants[variant] ?? variants.default} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

export default Badge;
