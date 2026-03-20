import React from 'react';

/**
 * OptimizedImage
 * A production-grade wrapper that attempts to serve modern WebP formats 
 * before falling back to the original JPG/PNG image extension.
 * Ensures lazyleading AND async decoding by default.
 */
export default function OptimizedImage({ src, alt, className = '', loading = 'lazy', decoding = 'async', ...props }) {
    if (!src) return null;

    // Only attempt string replacement if it's a standard image extension
    const isStandardImage = /\.(png|jpe?g)$/i.test(src);
    const webpSrc = isStandardImage ? src.replace(/\.(png|jpe?g)$/i, '.webp') : null;

    return (
        <picture className={className} {...props}>
            {/* Try to load WebP version if the browser supports it and path allows it */}
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            
            {/* Fallback to original image */}
            <img 
                src={src} 
                alt={alt} 
                className={`w-full h-full object-cover ${className}`} 
                loading={loading}
                decoding={decoding}
            />
        </picture>
    );
}
