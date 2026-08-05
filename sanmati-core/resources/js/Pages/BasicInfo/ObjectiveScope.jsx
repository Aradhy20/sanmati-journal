import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Microscope, Globe2 } from 'lucide-react';

export default function ObjectiveScope() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Objective & Scope - Sanmati Spectrum of Knowledge",
            "url": "https://sanmatijournal.in/basic-info/objective-scope",
            "description": "Objectives and multidisciplinary research scope covered by Sanmati Spectrum of Knowledge."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Basic Info', url: '/basic-info/about-journal' },
            { name: 'Objective & Scope', url: '/basic-info/objective-scope' }
        ]
    };

    return (
        <MainLayout
            title="Objective & Scope | Sanmati Spectrum Journal"
            description="Objectives and research scope of Sanmati Spectrum Journal: Arts, Social Sciences, Science, Law, Education, Indian Knowledge Systems."
            keywords="journal objectives, research scope, multidisciplinary scope, academic publishing boundaries, sanmati spectrum"
            jsonLd={jsonLd}
        >
            <PageHeader
                title="Objective & Scope"
                breadcrumb="Basic Information"
                subtitle="Defining our academic boundaries and goals"
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[#FFFDF8] text-[#2E2E2E]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Objective */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center text-primary">
                                <Microscope className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-serif font-bold text-dark">Objectives</h2>
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            The objective of the journal is to provide a national multidisciplinary platform for scholars, researchers, and the academic community. We encourage:
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Original research methodology",
                                "Innovative perspectives",
                                "Excellence in scholarly inquiry",
                                "Cross-disciplinary collaboration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E9E5DD] text-xs font-medium text-dark">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Scope */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center text-secondary">
                                <Globe2 className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-serif font-bold text-dark">Scope</h2>
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            The journal publishes research papers, case studies, theme-based articles, and book reviews across a wide spectrum of disciplines, offering scholars an opportunity to share ideas and foster multidimensional discourse.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                            {[
                                "Arts & Humanities", "Social Sciences",
                                "Journalism & Mass Comm", "Sciences",
                                "Technology", "Management", "Education", "Law"
                            ].map((field, i) => (
                                <div key={i} className="px-3 py-2 bg-white border border-[#E9E5DD] rounded text-center text-xs text-slate-600 font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                                    {field}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
