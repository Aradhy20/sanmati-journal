import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, Code2, Server, Cpu, Shield, Zap, Users, ExternalLink } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const skills = [
    { label: 'Full-Stack Development', icon: Code2, color: 'from-blue-500/10 to-indigo-500/10 text-blue-600' },
    { label: 'Server & DevOps', icon: Server, color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600' },
    { label: 'UI/UX Engineering', icon: Zap, color: 'from-amber-500/10 to-orange-500/10 text-amber-600' },
    { label: 'Platform Architecture', icon: Cpu, color: 'from-purple-500/10 to-violet-500/10 text-purple-600' },
    { label: 'Security & Performance', icon: Shield, color: 'from-rose-500/10 to-red-500/10 text-rose-600' },
    { label: 'Research Portal Systems', icon: Users, color: 'from-sky-500/10 to-cyan-500/10 text-sky-600' },
];

const stats = [
    { value: '100%', label: 'Uptime Target' },
    { value: 'SSR', label: 'Optimized Rendering' },
    { value: 'HTTPS', label: 'Secure Platform' },
    { value: 'v2', label: 'Current Platform' },
];

export default function TechnicalTeam() {
    return (
        <MainLayout>
            <Seo
                title="Technical Team"
                description="Meet the technical team behind the Sanmati Journal platform — the developers and engineers powering seamless academic publishing."
            />

            <PageHeader
                title="Technical Team"
                breadcrumb="Team"
                subtitle="The engineers and developers powering the Sanmati Journal digital infrastructure."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

                {/* ─── INTRO ─── */}
                <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="h-px w-10 bg-secondary" />
                        <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em]">Engineering</span>
                        <span className="h-px w-10 bg-secondary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-6 leading-tight">
                        Built with <span className="text-primary italic">Precision</span> &<br />
                        <span className="text-secondary italic">Purpose</span>
                    </h2>
                    <p className="text-lg text-dark/60 font-medium leading-relaxed">
                        The Sanmati Journal platform is engineered for reliability, speed, and a seamless academic experience — from submission to publication.
                    </p>
                </motion.div>

                {/* ─── PLATFORM STATS ─── */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="text-3xl font-black text-primary mb-1 group-hover:scale-110 transition-transform">{s.value}</div>
                            <div className="text-xs font-semibold text-dark/50 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* ─── TEAM MEMBER CARD ─── */}
                <div className="flex justify-center mb-20">
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.15 }}
                        className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group"
                    >
                        {/* Top accent gradient */}
                        <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

                        <div className="p-8 sm:p-12">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                                {/* Photo */}
                                <div className="shrink-0">
                                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-2 ring-primary/10 bg-surface relative group-hover:ring-primary/30 transition-all duration-500">
                                        <img
                                            src="/images/team/Aradhy_Jain.jpg"
                                            alt="Aradhy Jain"
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 text-center sm:text-left">
                                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-full mb-3 border border-primary/10">
                                        Technical Lead
                                    </span>
                                    <h2 className="text-3xl font-serif font-bold text-dark mb-1 leading-tight group-hover:text-primary transition-colors">
                                        Aradhy Jain
                                    </h2>
                                    <p className="text-sm font-semibold text-secondary/80 mb-4 uppercase tracking-widest">
                                        Full-Stack Developer & Platform Architect
                                    </p>
                                    <p className="text-sm text-dark/60 font-medium leading-relaxed mb-6">
                                        Designed, developed, and deployed the entire Sanmati Journal digital platform — building a fast, secure, and scalable academic publishing system from the ground up.
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex items-center justify-center sm:justify-start gap-3">
                                        <a
                                            href="https://www.linkedin.com/in/aradhyjain"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all duration-300 border border-[#0A66C2]/20 hover:border-[#0A66C2] group/btn"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            LinkedIn
                                            <ExternalLink className="w-3 h-3 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── SKILLS / EXPERTISE ─── */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                    <div className="text-center mb-10">
                        <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Expertise</span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark">Platform Technologies</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{ delay: 0.05 * i }}
                                className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${skill.color.split(' ').slice(0, 2).join(' ')} border border-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                            >
                                <div className={`w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 ${skill.color.split(' ').pop()}`}>
                                    <skill.icon className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-dark text-sm">{skill.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── BOTTOM CTA ─── */}
                <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="mt-20 text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[2rem] border border-primary/10">
                        <p className="text-dark/60 text-sm font-medium">Have a technical question or suggestion?</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Contact the Team
                        </a>
                    </div>
                </motion.div>

            </div>
        </MainLayout>
    );
}
