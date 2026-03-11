import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb, subtitle }) => {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-dark via-dark-light to-primary/80">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

            {/* Decorative Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
                <img
                    src="/fistudy-assets/shapes/page-header-shape-4.png"
                    alt=""
                    className="absolute top-4 right-8 w-20 h-20 opacity-20 animate-float-bob-y"
                />
                <img
                    src="/fistudy-assets/shapes/page-header-shape-5.png"
                    alt=""
                    className="absolute bottom-4 left-12 w-16 h-16 opacity-20 animate-float-bob-x"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-white/50 text-sm font-medium mb-6">
                        <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        {breadcrumb && (
                            <>
                                <span className="text-white/70">{breadcrumb}</span>
                                <ChevronRight className="w-4 h-4" />
                            </>
                        )}
                        <span className="text-secondary font-bold">{title}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
