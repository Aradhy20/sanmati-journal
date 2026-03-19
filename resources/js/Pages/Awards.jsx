import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal, Mail, ArrowRight, Sparkles, GraduationCap, ChevronRight } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Awards() {
    const awards = [
        {
            title: "Researcher of the Decade",
            category: "Individual Excellence",
            desc: "The highest honor bestowed upon scholars with transformative impact and prolific academic lineage.",
            icon: <Trophy className="w-8 h-8 text-white" />,
            colorClass: "bg-primary"
        },
        {
            title: "Emerging Scholar",
            category: "Institutional Pride",
            desc: "Encouraging original inquiry and innovative methodology among early-career doctoral researchers.",
            icon: <Star className="w-8 h-8 text-white" />,
            colorClass: "bg-secondary"
        },
        {
            title: "Distinguished Paper",
            category: "Annual Publication",
            desc: "Awarded to manuscripts that exhibit extraordinary empirical rigor and theoretical significance.",
            icon: <Award className="w-8 h-8 text-white" />,
            colorClass: "bg-dark"
        }
    ];

    return (
        <MainLayout>
            <Seo 
                title="Scholarship Awards" 
                description="Sanmati Journal honors academic excellence through prestigious annual awards for researchers and authors."
            />

            <PageHeader
                title="Journal Awards"
                breadcrumb="Recognition"
                subtitle="Celebrating the intellectual vanguards who redefine the boundaries of multidisciplinary research."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
                {/* ─── INTRO SECTION ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-px w-10 bg-primary" />
                            <span className="text-primary font-black text-[11px] uppercase tracking-[0.4em]">Honorarium Registry</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8 leading-tight">
                            Celebrating the <br />
                            <span className="text-secondary italic">Scholarly Legacy</span>
                        </h2>
                        <p className="text-lg text-muted font-medium leading-relaxed max-w-xl">
                            The Sanmati Awards Program was established to amplify high-impact research. We believe that recognizing excellence is fundamental to fostering a thriving global intellectual community.
                        </p>
                    </motion.div>
                    
                    <motion.div {...fadeInUp} className="relative aspect-video rounded-[3rem] overflow-hidden bg-surface border border-gray-100 p-8 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                        <Trophy className="w-48 h-48 text-primary/10 animate-pulse" />
                        <Sparkles className="absolute top-1/4 right-1/4 w-12 h-12 text-secondary/30" />
                    </motion.div>
                </div>

                {/* ─── AWARDS GRID ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {awards.map((award, i) => (
                        <motion.div 
                            key={i} 
                            {...fadeInUp}
                            transition={{ delay: i * 0.2 }}
                            className="group relative h-full bg-white p-12 rounded-[3.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-2 h-full ${award.colorClass}`} />
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Trophy className="w-24 h-24" />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all duration-500 shadow-xl mb-10 group-hover:rotate-12 ${award.colorClass}`}>
                                    {award.icon}
                                </div>

                                <span className="text-secondary font-black text-[9px] uppercase tracking-[0.3em] mb-4 block">{award.category}</span>
                                <h3 className="text-2xl font-serif font-bold text-dark mb-6 group-hover:text-primary transition-colors duration-300">
                                    {award.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed font-medium mb-10 flex-1 italic opacity-80">
                                    {award.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── NOMINATION SECTION ─── */}
                <motion.div {...fadeInUp}>
                    <div className="relative rounded-[4rem] overflow-hidden bg-dark p-12 lg:p-24 shadow-2xl flex flex-col lg:flex-row items-center gap-16">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 opacity-5 bg-[size:40px_40px] bg-grid-white/[0.2]" />
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
                        
                        <div className="relative z-10 flex-1 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                                <Medal className="w-10 h-10 text-secondary" />
                                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Submission Cycle 2026</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Nominations are <span className="text-secondary italic">Open</span></h3>
                            <p className="text-white/60 text-xl leading-relaxed font-light max-w-2xl">
                                We invite recommendations for scholars who have demonstrated exceptional empirical rigor. Self-nominations for the 'Best Paper' category are also welcome.
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0 w-full lg:w-auto">
                            <div className="flex flex-col gap-6">
                                <Link 
                                    href="/contact-us" 
                                    className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-dark rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all shadow-xl hover:-translate-y-1"
                                >
                                    Submit Nomination <ArrowRight className="w-5 h-5" />
                                </Link>
                                <p className="text-white/30 text-[10px] text-center uppercase tracking-widest">
                                    Deadline: December 31, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </MainLayout>
    );
}
