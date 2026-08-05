import { motion } from 'framer-motion';
import { Zap, Users, Shield, Globe, Award, Lock, FileCheck, Banknote, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function WhyPublishSection() {
    const features = [
        {
            title: "Fast 15–30 Days Peer Review",
            desc: "Double-blind review system powered by automated editorial coordinators to ensure rapid turnaround.",
            icon: Zap,
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        {
            title: "International Editorial Board",
            desc: "Manuscripts reviewed by distinguished university professors, research directors, and subject matter experts.",
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Transparent Review Pipeline",
            desc: "Authors track manuscript review milestones in real-time from initial submission to final decision.",
            icon: Shield,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            title: "100% Open Access Dissemination",
            desc: "Unrestricted global readership under Creative Commons CC-BY 4.0 license ensuring maximum citations.",
            icon: Globe,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: "Global Visibility & Citation",
            desc: "Indexed in Google Scholar, CrossRef DOI, and global academic catalogs for maximum research impact.",
            icon: Award,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "COPE Research Integrity",
            desc: "Strict anti-plagiarism screening, ethical oversight, and publication integrity guidelines.",
            icon: Lock,
            color: "text-cyan-600",
            bg: "bg-cyan-50"
        },
        {
            title: "Author Publication Certificates",
            desc: "Digital certificates of publication issued to all co-authors upon paper publication.",
            icon: FileCheck,
            color: "text-rose-600",
            bg: "bg-rose-50"
        },
        {
            title: "Transparent Fee Structure",
            desc: "Affordable Article Processing Charges (APC) with fee waivers considered for deserving researchers.",
            icon: Banknote,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
                        <Award className="w-4 h-4 text-indigo-600" /> Value Proposition
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                        Why Researchers Choose Sanmati Spectrum
                    </h2>
                    <p className="text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                        A world-class academic environment designed to maximize research reach, academic credibility, and publication speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className="group bg-slate-50/70 border border-slate-200/80 hover:border-blue-500/40 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/submission-guidelines/call-for-papers"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all duration-200"
                    >
                        Submit Your Research Manuscript <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
