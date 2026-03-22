import React from 'react';

/**
 * Button — Design System v2
 *
 * Usage:
 *   <Button>Submit Paper</Button>
 *   <Button variant="outline" size="sm">Learn More</Button>
 *   <Button variant="ghost" size="lg" as={Link} href="/archive">Browse</Button>
 */
export function Button({
    variant = 'primary',
    size = 'md',
    as: Tag = 'button',
    className = '',
    children,
    ...props
}) {
    const base = 'ds-btn';
    const variants = {
        primary:   'ds-btn-primary',
        secondary: 'ds-btn-secondary',
        outline:   'ds-btn-outline',
        ghost:     'ds-btn-ghost',
    };
    const sizes = {
        sm:   'ds-btn-sm',
        md:   'ds-btn-md',
        lg:   'ds-btn-lg',
        icon: 'h-10 w-10 p-0',
    };

    return (
        <Tag
            className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
}

export default Button;
