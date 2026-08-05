import { motion } from 'framer-motion';
import { Cpu, Brain, Briefcase, Landmark, BookOpen, Wrench, Scale, Stethoscope, Compass, Sprout, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ResearchAreasGrid() {
    const areas = [
        { title: "Computer Science & IT", icon: Cpu, count: "85+ Papers", desc: "Algorithms, Cloud Computing, Cybersecurity, Data Science & Software Systems.", color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Artificial Intelligence", icon: Brain, count: "64+ Papers", desc: "Machine Learning, Deep Learning, Neural Networks, NLP & Robotics.", color: "text-indigo-600", bg: "bg-indigo-50" },
        { title: "Management & Strategy", icon: Briefcase, count: "72+ Papers", desc: "Organizational Behavior, HR, Supply Chain, Strategy & Entrepreneurship.", color: "text-cyan-600", bg: "bg-cyan-50" },
        { title: "Commerce & Finance", icon: Landmark, count: "58+ Papers", desc: "Banking, Financial Markets, Accounting, Taxation & Fintech.", color: "text-purple-600", bg: "bg-purple-50" },
        { title: "Education & Pedagogy", icon: BookOpen, count: "49+ Papers", desc: "Educational Psychology, Curriculum Design, E-Learning & Assessment.", color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Engineering & Applied Sciences", icon: Wrench, count: "92+ Papers", desc: "Mechanical, Electrical, Civil, Electronics & Chemical Innovations.", color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Law & Governance", icon: Scale, count: "41+ Papers", desc: "Constitutional Law, Intellectual Property, Corporate Law & Human Rights.", color: "text-rose-600", bg: "bg-rose-50" },
        { title: "Medical & Health Sciences", icon: Stethoscope, count: "38+ Papers", desc: "Public Health, Pharmaceutical Research, Clinical Studies & Healthcare IT.", color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Humanities & Social Sciences", icon: Compass, count: "110+ Papers", desc: "Literature, Sociology, History, Philosophy, Political Science & Culture.", color: "text-indigo-600", bg: "bg-indigo-50" },
        { title: "Agriculture & Environment", icon: Sprout, count: "34+ Papers", desc: "Agronomy, Sustainable Agriculture, Climate Science & Environmental Policy.", color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Economics & Development", icon: TrendingUp, count: "45+ Papers", desc: "Macroeconomics, Development Studies, Microfinance & Public Policy.", color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <Cpu className="w-4 h-4 text-cyan-600" /> Multidisciplinary Scope
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            Explore Academic Research Disciplines
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            We accept original research papers, reviews, and case studies across 10+ major scholarly tracks.
                        </p>
                    </div>
                    <Link
                        href="/submission-guidelines/areas"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group"
                    >
                        View All Research Areas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group bg-white border border-slate-200/80 hover:border-blue-300 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="px-3 py-1 bg-slate-100 text-slate-700 font-mono text-[10px] font-bold rounded-full">
                                            {item.count}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                <Link
                                    href="/submission-guidelines/call-for-papers"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 pt-3 border-t border-slate-100"
                                >
                                    Submit to {item.title.split('&')[0]} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
