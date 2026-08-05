import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            ssr: 'resources/js/ssr.jsx',
            publicDirectory: '../public_html',
            buildDirectory: 'build',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    build: {
        minify: 'esbuild',
        cssMinify: true,
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('framer-motion') || id.includes('@inertiajs')) {
                            return 'vendor';
                        }
                        if (id.includes('lucide-react')) {
                            return 'ui';
                        }
                        if (id.includes('sweetalert2') || id.includes('canvas-confetti') || id.includes('react-hot-toast')) {
                            return 'plugins';
                        }
                    }
                }
            }
        }
    },
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
        },
    },
});
