import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb, subtitle }) => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-dark">
            {/* Sophisticated Background Layers */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary/20" />
                <div className="absolute inset-0 opacity-[0.03]"
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '48px 48px' }} />
            </div>

            {/* Decorative Intellectual Aura */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                
                {/* Floating Abstract Shapes */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 opacity-20"
                >
                    <div className="w-12 h-12 border border-secondary/30 rounded-full" />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-1/4 opacity-20"
                >
                    <div className="w-20 h-20 border border-primary/20 rounded-lg rotate-45" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    {/* Refined Breadcrumb */}
                    <nav className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                        <Link href="/" className="text-white/40 hover:text-secondary transition-colors">Portal</Link>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        {breadcrumb && (
                            <>
                                <span className="text-white/40">{breadcrumb}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                            </>
                        )}
                        <span className="text-secondary">{title}</span>
                    </nav>

                    {/* Monumental Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <div className="flex flex-col items-center gap-6">
                            <span className="h-px w-12 bg-secondary/40" />
                            <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl italic leading-relaxed">
                                {subtitle}
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
