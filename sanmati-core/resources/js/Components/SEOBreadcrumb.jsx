import { Link } from '@inertiajs/react';
import { ChevronRight, Home } from 'lucide-react';

/**
 * SEOBreadcrumb — renders a visible breadcrumb nav + BreadcrumbList JSON-LD schema.
 *
 * Usage:
 *   <SEOBreadcrumb items={[
 *     { name: 'Home', href: '/' },
 *     { name: 'Archive', href: '/archive' },
 *     { name: 'Vol 2 Issue 2', href: '#' }
 *   ]} />
 */
export default function SEOBreadcrumb({ items = [] }) {
    // Always prepend Home if not already present
    const crumbs = items[0]?.href === '/'
        ? items
        : [{ name: 'Home', href: '/' }, ...items];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((crumb, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": crumb.name,
            "item": crumb.href && crumb.href !== '#'
                ? `https://sanmatijournal.in${crumb.href}`
                : undefined
        }))
    };

    return (
        <>
            {/* Inject BreadcrumbList JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Visible breadcrumb trail */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-slate-500 flex-wrap">
                {crumbs.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                        {i === 0 && <Home className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />}
                        {crumb.href && crumb.href !== '#' && i < crumbs.length - 1 ? (
                            <Link
                                href={crumb.href}
                                className="hover:text-primary transition-colors"
                            >
                                {crumb.name}
                            </Link>
                        ) : (
                            <span
                                className={i === crumbs.length - 1 ? 'text-primary font-bold' : ''}
                                aria-current={i === crumbs.length - 1 ? 'page' : undefined}
                            >
                                {crumb.name}
                            </span>
                        )}
                        {i < crumbs.length - 1 && (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" aria-hidden="true" />
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
