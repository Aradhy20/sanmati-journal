import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle, Clock } from 'lucide-react';

const Hero = () => {
    const [daysLeft, setDaysLeft] = useState(0);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        const diffTime = Math.abs(endOfMonth - now);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysLeft(diffDays);
    }, []);

    const editors = [
        { name: "Dr. Namrta Jain", role: "Editor-in-Chief", img: "/mam.jpg", delay: 0 },
        { name: "Dr. Ratnesh Kumar Jain", role: "Managing Editor", img: "/sir.jpg", delay: 0.2 },
        { name: "Dr. Kalpna Jain", role: "Executive Editor", img: "/dr_kalpana_jain.jpeg", delay: 0.4 }
    ];

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-28 pb-20">
            {/* Background Image - Clean, Light, Unblurred */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop"
                    alt="Premium Architecture"
                    className="object-cover object-center w-full h-full opacity-[0.15] scale-105"
                />
            </div>

            {/* Ambient Gradients for custom look */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-200 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                {/* Left Column: Typography & CTAs */}
                <motion.div
                    style={{ opacity }}
                    className="flex-1 text-left w-full lg:max-w-xl xl:max-w-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-sm"
                        >
                            <CheckCircle className="w-4 h-4 text-blue-600" /> ISSN: 3108-1819
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white text-emerald-700 text-xs font-bold border border-emerald-100 shadow-sm"
                        >
                            <CheckCircle className="w-4 h-4 text-emerald-600" /> Peer Reviewed
                        </motion.span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                        Sanmati <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">Spectrum</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl font-light text-slate-600 mb-8 max-w-xl">
                        A bespoke multidisciplinary platform uniting hard sciences with social perspectives.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link
                            href="/submission-guidelines/call-for-papers"
                            className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 transition-all overflow-hidden flex items-center justify-center gap-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Submit Manuscript <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/basic-info/about-journal"
                            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-sm hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
                        >
                            Explore Journal <BookOpen className="w-4 h-4 text-slate-400" />
                        </Link>
                    </div>

                    {/* Minimal Status Bar */}
                    <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-sm text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="font-semibold text-slate-800">Submissions Open</span>
                        </div>
                        <div className="w-px h-4 bg-slate-200"></div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span>Closes in <span className="text-slate-900 font-bold">{daysLeft} days</span></span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Floating Profiles (Universe.ai / Envato vibe) */}
                <div className="flex-1 w-full relative min-h-[400px] lg:min-h-[600px] hidden md:block">
                    {/* Connecting decorative lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.15 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            d="M 100 150 Q 250 50 350 200 T 500 400"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-400"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.1 }}
                            transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
                            d="M 150 450 Q 300 550 450 350"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-400"
                        />
                    </svg>

                    {editors.map((editor, i) => {
                        const positions = [
                            "top-10 left-10 lg:left-20",
                            "top-1/2 right-0 -translate-y-1/2",
                            "bottom-10 left-1/4"
                        ];

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 + editor.delay, type: 'spring' }}
                                style={{ y: i % 2 === 0 ? y1 : y2 }}
                                className={`absolute ${positions[i]} z-10 group`}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full p-2 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl overflow-hidden relative z-10">
                                            <img src={editor.img} alt={editor.name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                    </div>
                                    {/* Hover Metadata */}
                                    <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-center pointer-events-none">
                                        <p className="text-xs font-bold text-slate-900">{editor.name}</p>
                                        <p className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                                            {editor.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
