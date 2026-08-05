import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ErrorBoundary from './Components/ErrorBoundary';

// Self-healing mechanism for stale assets: reload page if a module fails to load
window.addEventListener('error', (e) => {
    const isChunkError = /Failed to fetch dynamically imported module|Loading chunk .* failed/i.test(e.message);
    if (isChunkError) {
        console.warn("Stale asset detected, triggering healing reload.");
        window.location.reload();
    }
}, true);

createInertiaApp({
    title: (title) => title ? (title.includes('Sanmati') ? title : `${title} | Sanmati Spectrum of Knowledge`) : 'Sanmati Spectrum of Knowledge',
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <ErrorBoundary>
                <App {...props} />
            </ErrorBoundary>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
