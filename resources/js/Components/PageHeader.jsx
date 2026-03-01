import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
    return (
        <div className="relative py-24 md:py-32 mb-12 overflow-hidden bg-white border-b border-slate-200">
            {/* Elegant Soft Backgrounds */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-80 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] opacity-80 pointer-events-none" />

            <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop"
                    alt="Background Texture"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-end justify-between gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl"
                >
                    {breadcrumb && (
                        <div className="mb-6">
                            <span className="text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 bg-slate-50 border border-slate-200 rounded-full shadow-sm inline-block">
                                {breadcrumb}
                            </span>
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Decorative Element mimicking a premium editorial stamp */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:flex w-32 h-32 rounded-full border border-slate-200/60 bg-white/40 backdrop-blur-md shadow-xl relative items-center justify-center shrink-0"
                >
                    <div className="w-20 h-20 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                        <span className="text-blue-800 font-serif font-bold italic text-2xl">SJ</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default PageHeader;
