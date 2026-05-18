import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Home, BookOpen, Search, ArrowLeft } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

export default function Error404() {
    return (
        <MainLayout>
            <Seo title="404 – Page Not Found" description="The page you are looking for doesn't exist." />

            <section className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-6">

                {/* Background blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px]" />
                </div>

                {/* Soft Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 text-center max-w-2xl mx-auto">

                    {/* Animated floating book */}
                    <motion.div
                        animate={{ y: [0, -18, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="inline-flex mb-10"
                    >
                        <div className="relative w-40 h-40 rounded-[3rem] bg-white shadow-2xl border border-slate-100 flex items-center justify-center">
                            <BookOpen className="w-20 h-20 text-secondary/30" />
                            <motion.div
                                animate={{ rotate: [0, 8, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                                className="absolute -top-3 -right-3 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg"
                            >
                                <Search className="w-6 h-6 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Error code */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
                            <span className="text-primary font-black text-[11px] uppercase tracking-[0.35em]">
                                Error 404 · Page Not Found
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-primary mb-6 leading-none tracking-tight">
                            Lost in the{' '}
                            <span className="text-secondary italic">
                                Knowledge Base
                            </span>
                        </h1>

                        <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12 max-w-lg mx-auto">
                            The page you are seeking has been archived, retracted, or moved. Let us guide you back.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
                            >
                                <Home className="w-4 h-4" />
                                Return Home
                            </Link>
                            <Link
                                href="/archive"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-xs uppercase tracking-widest border border-slate-200 hover:border-secondary hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <BookOpen className="w-4 h-4" />
                                Browse Archive
                            </Link>
                        </div>

                        {/* Quick links */}
                        <div className="mt-16 pt-10 border-t border-slate-100">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Popular Destinations</p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {[
                                    { label: 'Submit Manuscript', href: '/submission-guidelines/call-for-papers' },
                                    { label: 'Editorial Team', href: '/editorial-team/editors' },
                                    { label: 'About Journal', href: '/basic-info/about-journal' },
                                    { label: 'Contact Us', href: '/contact' },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full text-[11px] font-bold text-slate-600 hover:bg-secondary hover:text-white transition-all"
                                    >
                                        <ArrowLeft className="w-3 h-3 rotate-180" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
