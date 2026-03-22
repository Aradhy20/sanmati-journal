import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

const appName = window.document?.getElementsByTagName('title')[0]?.innerText || 'Sanmati Journal';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
        setup: ({ App, props }) => {
            return <App {...props} />;
        },
    })
);
