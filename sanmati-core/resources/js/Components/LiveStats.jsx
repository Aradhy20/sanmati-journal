import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Award, Download, Clock, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LiveStats() {
    const stats = [
        { label: 'Published Papers', val: '500+', desc: 'Across 10+ multidisciplinary areas', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Global Researchers', val: '1,200+', desc: 'Academic authors & scholars', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Countries Represented', val: '25+', desc: 'International contribution', icon: Globe, color: 'text-cyan-600', bg: 'bg-cyan-50' },
        { label: 'Executive Editors', val: '18+', desc: 'Distinguished university professors', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'Article Downloads', val: '25,000+', desc: 'Global reader engagement', icon: Download, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Avg Peer Review', val: '15–30 Days', desc: 'Fast double-blind review', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    ];

    return (
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Glow Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                        <Star className="w-3.5 h-3.5 fill-current text-cyan-300" /> Platform Impact Metrics
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                        Empowering Global Academic Excellence
                    </h2>
                    <p className="text-sm text-slate-400 font-medium mt-2">
                        Sanmati Spectrum of Knowledge (ISSN 3108-1819) delivers verifiable reach and high citation visibility.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {stats.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/60 p-5 rounded-2xl text-center group hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 shadow-xl"
                            >
                                <div className={`w-10 h-10 mx-auto mb-3 rounded-xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
                                    {item.val}
                                </div>
                                <div className="text-xs font-bold text-slate-200 mt-1">
                                    {item.label}
                                </div>
                                <div className="text-[10px] text-slate-400 font-medium mt-1">
                                    {item.desc}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
