import { motion } from 'framer-motion';
import { GridPattern, ParallaxSection } from './Graphics';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
    return (
        <div className="relative bg-slate-900 py-32 mb-12 overflow-hidden">
            <ParallaxSection offset={80} className="absolute inset-0">
                <GridPattern className="stroke-white/10 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 opacity-90 z-10" />
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                    <img
                        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80"
                        alt="Background"
                        className="object-cover object-center w-full h-full scale-110"
                    />
                </div>
            </ParallaxSection>
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {breadcrumb && (
                        <span className="text-blue-300 text-sm font-medium tracking-wider uppercase mb-3 block">{breadcrumb}</span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
                    {subtitle && (
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default PageHeader;
