import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function EditorialBoardPreview() {
    const editors = [
        {
            name: "Dr. Namrata Jain",
            role: "Editor-in-Chief",
            org: "Sanmati Spectrum Editorial Directorate",
            location: "India",
            image: "/images/team/dr-kalpana-jain.webp",
            webp: "/images/team/dr-kalpana-jain.webp",
            area: "Interdisciplinary Research & Publication Ethics"
        },
        {
            name: "Dr. Ratnesh Kumar Jain",
            role: "Co-Editor-in-Chief",
            org: "Sanmati Spectrum Directorate",
            location: "India",
            image: "/images/team/sir.webp",
            webp: "/images/team/sir.webp",
            area: "Journal Governance & Technology"
        },
        {
            name: "Prof. Pralhad Joshi",
            role: "Chief Board Member & Vice-Chancellor",
            org: "Kumar Bhaskar Varma Sanskrit & Ancient Studies Univ.",
            location: "Assam, India",
            image: "/images/team/Prof_Prahlad_Joshi.webp",
            webp: "/images/team/Prof_Prahlad_Joshi.webp",
            area: "Sanskrit & Ancient Knowledge Systems"
        },
        {
            name: "Dr. Smriti Kumari",
            role: "Editorial Board Member",
            org: "Faculty of Humanities & Social Sciences",
            location: "India",
            image: "/images/team/Dr_Smriti_kumari.webp",
            webp: "/images/team/Dr_Smriti_kumari.webp",
            area: "Humanities & Social Sciences"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                            Distinguished Leadership
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                            Editorial Board & Peer Review Directorate
                        </h2>
                        <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl">
                            Eminent scholars, researchers, and academicians dedicated to rigorous double-blind peer review.
                        </p>
                    </div>

                    <Link
                        href="/editorial-team/editorial-board"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group"
                    >
                        View Full Editorial Directorate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {editors.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md mb-4 bg-slate-100 flex items-center justify-center">
                                    <picture>
                                        <source srcSet={item.webp} type="image/webp" />
                                        <img
                                            src={item.webp || item.image}
                                            alt={`${item.name}, ${item.role}`}
                                            width="96"
                                            height="96"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover object-top"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = '/images/contact/dr_namrta_jain_avatar.png';
                                            }}
                                        />
                                    </picture>
                                </div>

                                <div className="text-center space-y-1">
                                    <h3 className="text-base font-bold text-slate-900 leading-snug">{item.name}</h3>
                                    <span className="inline-block text-xs font-serif font-bold text-blue-600">{item.role}</span>
                                    <p className="text-xs text-slate-500 font-medium line-clamp-2">{item.org}</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> {item.location}</span>
                                <span className="font-bold text-blue-600">{item.area.split('&')[0]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
