import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import React from 'react';
import { ExternalLink, Award, BookOpen, GraduationCap } from 'lucide-react';
import { ScrollReveal, revealVariants } from '../Components/ScrollReveal';
import { GridPattern, DotPattern } from '../Components/Graphics';
import Seo from '../Components/Seo';

const BoardMember = ({ name, title, affiliation, image, scholarUrl, role, index }) => {
    const [imgError, setImgError] = React.useState(false);

    const getGradient = (name) => {
        const gradients = [
            'from-blue-500 to-indigo-600',
            'from-purple-500 to-pink-600',
            'from-emerald-500 to-teal-600',
            'from-orange-500 to-red-600',
            'from-cyan-500 to-blue-600',
            'from-violet-500 to-purple-600',
        ];
        // Use a consistent hash for color stability
        const charCodeSum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return gradients[charCodeSum % gradients.length];
    };

    const getInitials = (name) => {
        const parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name[0]?.toUpperCase() || 'SJ';
    };

    return (
        <ScrollReveal variants={revealVariants.fadeUp} delay={index * 0.1} className="h-full">
            <div className="group relative h-full bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />

                {/* Photo Area with Overlay */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10" />

                    {image && !imgError ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                            onError={() => setImgError(true)}
                            loading="lazy"
                        />
                    ) : (
                        <div className={`w-full h-full flex items-center justify-center text-white font-bold text-5xl bg-gradient-to-br ${getGradient(name)} group-hover:scale-110 transition-transform duration-700`}>
                            {getInitials(name)}
                        </div>
                    )}

                    {/* Role Badge */}
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md ${role === 'Chief'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white/90 text-slate-800'
                            }`}>
                            {role === 'Chief' ? <Award className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
                            {title}
                        </span>
                    </div>

                    {/* Social/Scholar Overlay on Hover */}
                    {scholarUrl && (
                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <a
                                href={scholarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors shadow-xl"
                                title="Google Scholar Profile"
                            >
                                <BookOpen className="w-5 h-5" />
                            </a>
                        </div>
                    )}
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col relative bg-white">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-blue-400 transition-all duration-500" />

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-tight">
                        {name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                        {affiliation}
                    </p>

                    {scholarUrl && (
                        <div className="pt-4 border-t border-slate-50 mt-auto">
                            <a
                                href={scholarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                            >
                                View Publications
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
};

export default function EditorialBoard() {
    return (
        <MainLayout>
            <Seo
                title="Editorial Board"
                description="Meet the distinguished scholars and researchers guiding the Sanmati Journal."
            />

            <div className="min-h-screen bg-slate-50 font-sans">
                <PageHeader
                    title="Editorial Board"
                    breadcrumb="Editorial Team"
                    subtitle="Distinguished scholars contributing to our review process"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
                    {/* Background Graphics */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <DotPattern className="opacity-30 text-slate-300" />
                        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                    </div>

                    <div className="relative z-10">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <ScrollReveal>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
                                    <Award className="w-3.5 h-3.5" /> Leadership
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Our Esteemed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Editors</span>
                                </h2>
                                <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
                                    The editorial board comprises leading academics from diverse fields who ensure the
                                    quality, integrity, and relevance of published research.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <BoardMember
                                index={0}
                                name="Prof. Pralhad Joshi"
                                title="Vice-Chancellor"
                                role="Chief"
                                affiliation="Kumar Bhaskar Varma Sanskrit & Ancient Studies University, Assam"
                                image="/Prof. Prahlad joshi.jpeg"
                            />
                            <BoardMember
                                index={1}
                                name="Dr. Kalpna Jain"
                                title="Principal / Associate Professor"
                                affiliation="Teerthanker Mahaveer University, Moradabad"
                            />
                            <BoardMember
                                index={2}
                                name="Prof. S. P. Subashini"
                                title="Dean, Faculty of Nursing"
                                affiliation="Teerthanker Mahaveer University, Moradabad"
                                image="/Dr. S. P. Subashini.jpeg"
                            />
                            <BoardMember
                                index={3}
                                name="Dr. Harishchandra Verma"
                                title="Principal/Director"
                                affiliation="Shri Vishwanath College of Pharmacy, Sultanpur"
                            />
                            <BoardMember
                                index={4}
                                name="Dr. Amita Kumari"
                                title="Assistant Professor"
                                affiliation="Vinoba Bhave University, Hazaribagh, Jharkhand"
                                image="/Amita kumari.jpeg"
                            />
                            <BoardMember
                                index={5}
                                name="Mr. Parikshit Layek"
                                title="Assistant Professor"
                                affiliation="Teerthanker Mahaveer University, Moradabad"
                                image="/Parikshit Layek.jpeg"
                            />
                            <BoardMember
                                index={6}
                                name="Ms. Vaishali Ranjeet Vichare"
                                title="Assistant Professor"
                                affiliation="Teerthanker Mahaveer University, Moradabad"
                                image="/Vaishali Ranjeet vichare.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
