import { motion } from 'framer-motion';
import { User, Award, Globe, BookOpen, ExternalLink, Download, Sparkles, Building2, MapPin, Mail } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Profile({ author = null, papers = [] }) {
    const authorData = author || {
        name: "Dr. Namrata Jain",
        title: "Assistant Professor & Editor-in-Chief",
        institution: "Teerthanker Mahaveer University (TMU), Moradabad",
        location: "Uttar Pradesh, India",
        orcid: "0000-0002-1823-4567",
        hIndex: 12,
        citations: 340,
        publicationsCount: 45,
        image: "/images/team/mam.jpeg",
        bio: "Dr. Namrata Jain is an eminent scholar in Hindi literature, education, and multidisciplinary research methodologies. She currently serves as President of Sanmati Education & Research Foundation and Editor-in-Chief of Sanmati Spectrum of Knowledge (ISSN 3108-1819)."
    };

    const publicationList = papers.length > 0 ? papers : [
        {
            id: 1,
            title: "Advancements in Multidisciplinary Empirical Research and Peer Review Governance",
            volume: "Volume 1, Issue 1 (2026)",
            doi: "10.5281/zenodo.sanmati.01",
            citations: 15,
            downloads: 420
        },
        {
            id: 2,
            title: "Indian Knowledge Systems (IKS) and Pedagogical Transformations under NEP 2020",
            volume: "Volume 1, Issue 2 (2025)",
            doi: "10.5281/zenodo.sanmati.02",
            citations: 28,
            downloads: 680
        }
    ];

    return (
        <MainLayout title={`${authorData.name} | Scholar Profile | Sanmati Journal`} description={`Academic research profile, ORCID credentials, citation index, and published research articles of ${authorData.name}.`}>
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Profile Header Card */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm mb-8 space-y-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-white shadow-md bg-slate-100 shrink-0">
                                <img src={authorData.image} alt={authorData.name} className="w-full h-full object-cover object-top" />
                            </div>

                            <div className="space-y-2 text-center md:text-left flex-1">
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">{authorData.name}</h1>
                                <p className="text-sm font-bold text-blue-600">{authorData.title}</p>
                                <p className="text-xs text-slate-500 font-medium flex items-center justify-center md:justify-start gap-1">
                                    <Building2 className="w-3.5 h-3.5" /> {authorData.institution} • <MapPin className="w-3.5 h-3.5" /> {authorData.location}
                                </p>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-2xl pt-2">{authorData.bio}</p>
                            </div>
                        </div>

                        {/* Scholar Metrics Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 text-center">
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-xl font-serif font-bold text-blue-600">{authorData.publicationsCount}</div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Publications</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-xl font-serif font-bold text-indigo-600">{authorData.citations}</div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Citations</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-xl font-serif font-bold text-cyan-600">{authorData.hIndex}</div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">h-Index</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-xs font-mono font-bold text-emerald-700">{authorData.orcid}</div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">ORCID iD</div>
                            </div>
                        </div>
                    </div>

                    {/* Published Articles Section */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        <h2 className="text-xl font-serif font-bold text-slate-900">Published Research Manuscripts</h2>

                        <div className="space-y-4">
                            {publicationList.map((paper, idx) => (
                                <div key={idx} className="p-5 border border-slate-200 rounded-2xl hover:border-blue-300 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="space-y-1">
                                        <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                            <Link href={`/article/${paper.id}`}>{paper.title}</Link>
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium">{paper.volume} • DOI: {paper.doi}</p>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <Link href={`/article/${paper.id}`} className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors">
                                            Read Paper
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
