import { ShieldCheck, Award, Globe, Scale, Zap, FileText } from 'lucide-react';

const CREDENTIALS = [
    {
        icon: ShieldCheck,
        label: 'ISSN Registered',
        value: '3108-1819',
        note: 'Online ISSN — officially registered',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
    },
    {
        icon: Award,
        label: 'CrossRef DOI',
        value: 'DOI Assigned',
        note: 'Every paper receives a permanent DOI',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
    },
    {
        icon: Globe,
        label: 'Open Access',
        value: 'CC-BY 4.0',
        note: 'Free access to all published research',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
    },
    {
        icon: Scale,
        label: 'Publication Ethics',
        value: 'COPE Aligned',
        note: 'Follows Committee on Publication Ethics',
        color: 'text-cyan-600',
        bg: 'bg-cyan-50',
        border: 'border-cyan-100',
    },
    {
        icon: Zap,
        label: 'Fast Review',
        value: '15–30 Days',
        note: 'Rapid double-blind peer review process',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
    },
    {
        icon: FileText,
        label: 'Multidisciplinary',
        value: '20+ Domains',
        note: 'Science, arts, commerce, technology & more',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
    },
];

export default function TrustCredentials() {
    return (
        <section className="py-14 lg:py-18 bg-white border-b border-slate-200/60" aria-labelledby="trust-heading">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 id="trust-heading" className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
                        Verified Journal Credentials
                    </h2>
                    <p className="text-slate-500 text-sm max-w-lg mx-auto">
                        Every credential listed below is real, verifiable, and maintained to international academic standards.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {CREDENTIALS.map((cred, i) => {
                        const Icon = cred.icon;
                        return (
                            <div
                                key={i}
                                className={`group p-4 rounded-2xl border ${cred.border} ${cred.bg} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center`}
                            >
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 ${cred.color} mb-3 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className={`text-sm font-heading font-bold ${cred.color} mb-0.5`}>{cred.value}</div>
                                <div className="text-xs font-bold text-slate-700 mb-1">{cred.label}</div>
                                <div className="text-[10px] text-slate-500 leading-snug">{cred.note}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
