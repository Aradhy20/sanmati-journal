import { motion } from 'framer-motion';
import { Building2, MapPin, Users, BookOpen, ExternalLink, Globe, Award } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function InstitutionProfile({ institution = null }) {
    const data = institution || {
        name: "Teerthanker Mahaveer University (TMU)",
        location: "Moradabad, Uttar Pradesh, India",
        website: "https://www.tmu.ac.in",
        logo: "/logo.webp",
        researchersCount: 42,
        publishedPapersCount: 110,
        description: "Teerthanker Mahaveer University is a premier NAAC A Grade accredited university fostering interdisciplinary scientific research, legal education, and humanities excellence.",
        researchers: [
            { name: "Dr. Namrata Jain", role: "Assistant Professor, College of Law & Legal Studies", area: "Multidisciplinary & Law" },
            { name: "Dr. Ratnesh Kumar Jain", role: "Associate Professor, Faculty of Humanities", area: "Humanities & Social Sciences" },
            { name: "Dr. Sachin Kumar", role: "Research Faculty, Faculty of Engineering", area: "Computer Science & AI" }
        ]
    };

    return (
        <MainLayout title={`${data.name} | Institutional Research Partner`} description={`Institutional research portfolio, affiliated university researchers, and published academic papers from ${data.name}.`}>
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Institution Header Card */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="w-24 h-24 rounded-3xl overflow-hidden border border-slate-200 p-2 bg-white shrink-0 flex items-center justify-center">
                                <img src={data.logo} alt={data.name} className="w-full h-full object-contain" />
                            </div>

                            <div className="space-y-2 text-center md:text-left flex-1">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Affiliated University Partner
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">{data.name}</h1>
                                <p className="text-xs text-slate-500 font-medium flex items-center justify-center md:justify-start gap-1">
                                    <MapPin className="w-3.5 h-3.5" /> {data.location}
                                </p>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-2xl pt-2">{data.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-center">
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-xl font-serif font-bold text-blue-600">{data.publishedPapersCount}</div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Published Papers</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-xl font-serif font-bold text-indigo-600">{data.researchersCount}</div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Affiliated Scholars</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 col-span-2 sm:col-span-1">
                                <a href={data.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
                                    <Globe className="w-3.5 h-3.5" /> Official Website <ExternalLink className="w-3 h-3" />
                                </a>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">Verified Portal</div>
                            </div>
                        </div>
                    </div>

                    {/* Affiliated Researchers Directory */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        <h2 className="text-xl font-serif font-bold text-slate-900">Affiliated Faculty & Researchers</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.researchers.map((res, idx) => (
                                <div key={idx} className="p-5 border border-slate-200 rounded-2xl bg-slate-50/60 space-y-2">
                                    <h3 className="text-base font-bold text-slate-900">{res.name}</h3>
                                    <p className="text-xs text-blue-600 font-bold">{res.role}</p>
                                    <p className="text-xs text-slate-500 font-medium">{res.area}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
