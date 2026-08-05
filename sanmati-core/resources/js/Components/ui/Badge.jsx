import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Clock, AlertCircle, FileText } from 'lucide-react';

export default function Badge({
    children,
    variant = 'default',
    icon: CustomIcon = null,
    className = '',
    ...props
}) {
    const variants = {
        default: "bg-slate-100 text-slate-700 border-slate-200",
        doi: "bg-indigo-50 text-indigo-700 border-indigo-200 font-mono",
        issn: "bg-blue-50 text-blue-700 border-blue-200 font-mono",
        openAccess: "bg-emerald-50 text-emerald-700 border-emerald-200",
        peerReviewed: "bg-purple-50 text-purple-700 border-purple-200",
        impactFactor: "bg-cyan-50 text-cyan-800 border-cyan-200",
        published: "bg-emerald-100 text-emerald-800 border-emerald-200",
        underReview: "bg-amber-50 text-amber-800 border-amber-200",
        submitted: "bg-blue-50 text-blue-800 border-blue-200",
        revision: "bg-orange-50 text-orange-800 border-orange-200"
    };

    const icons = {
        doi: Award,
        issn: FileText,
        openAccess: ShieldCheck,
        peerReviewed: CheckCircle2,
        underReview: Clock,
        submitted: FileText,
        revision: AlertCircle
    };

    const Icon = CustomIcon || icons[variant];

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${variants[variant] || variants.default} ${className}`}
            {...props}
        >
            {Icon && <Icon className="w-3 h-3 shrink-0" />}
            <span>{children}</span>
        </span>
    );
}
