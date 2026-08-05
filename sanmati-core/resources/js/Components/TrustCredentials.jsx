import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, FileText, Globe, ExternalLink, Bookmark } from 'lucide-react';

export default function TrustCredentials() {
    const credentials = [
        {
            title: "Online ISSN Portal",
            badge: "ISSN 3108-1819",
            desc: "Registered with National Science Library ISSN portal for permanent international academic archiving.",
            tag: "Verified ISSN",
            icon: FileText,
            color: "text-blue-600",
            border: "border-blue-200",
            bg: "bg-blue-50/50"
        },
        {
            title: "CrossRef DOI Provider",
            badge: "CrossRef DOI Assigned",
            desc: "All accepted research manuscripts receive a persistent CrossRef Digital Object Identifier (DOI).",
            tag: "Permanent DOI",
            icon: Award,
            color: "text-indigo-600",
            border: "border-indigo-200",
            bg: "bg-indigo-50/50"
        },
        {
            title: "Google Scholar Tracking",
            badge: "Indexed & Tracked",
            desc: "Automatic citation metadata indexing ensures high search visibility on Google Scholar and international databases.",
            tag: "High Citations",
            icon: Globe,
            color: "text-cyan-600",
            border: "border-cyan-200",
            bg: "bg-cyan-50/50"
        },
        {
            title: "Creative Commons Open Access",
            badge: "CC-BY 4.0 License",
            desc: "Authors retain full copyright under Creative Commons Attribution 4.0 International License.",
            tag: "100% Open Access",
            icon: ShieldCheck,
            color: "text-emerald-600",
            border: "border-emerald-200",
            bg: "bg-emerald-50/50"
        },
        {
            title: "COPE Ethical Standards",
            badge: "Publication Ethics",
            desc: "Strict adherence to Committee on Publication Ethics (COPE) standards safeguarding research integrity.",
            tag: "Research Integrity",
            icon: CheckCircle2,
            color: "text-purple-600",
            border: "border-purple-200",
            bg: "bg-purple-50/50"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                        <ShieldCheck className="w-4 h-4 text-blue-600" /> Academic Governance
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                        Verified Credentials & Indexing Framework
                    </h2>
                    <p className="text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                        We publish under rigorous, transparent international publishing guidelines. Displaying only verified credentials.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {credentials.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className={`bg-white border ${item.border} rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <span className="inline-block text-xs font-serif font-bold text-blue-600 mb-2">{item.badge}</span>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
