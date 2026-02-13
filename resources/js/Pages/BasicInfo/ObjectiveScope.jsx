import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Microscope, Globe2 } from 'lucide-react';

export default function ObjectiveScope() {
    return (
        <MainLayout>
            <PageHeader
                title="Objective & Scope"
                breadcrumb="Basic Information"
                subtitle="Defining our academic boundaries and goals"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Objective */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                                <Microscope className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900">Objectives</h2>
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            The objective of the journal is to provide a national multidisciplinary platform for scholars, researchers, and the academic community. We encourage:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Original research methodology",
                                "Innovative perspectives",
                                "Excellence in scholarly inquiry",
                                "Cross-disciplinary collaboration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                    <span className="font-medium text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Scope */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-yellow-100 rounded-lg text-yellow-700">
                                <Globe2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900">Scope</h2>
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            The journal publishes research papers, case studies, theme-based articles, and book reviews across a wide spectrum of disciplines, offering scholars an opportunity to share ideas and foster multidimensional discourse.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            {[
                                "Arts & Humanities", "Social Sciences",
                                "Journalism & Mass Comm", "Sciences",
                                "Technology", "Management", "Education", "Law"
                            ].map((field, i) => (
                                <div key={i} className="px-4 py-2 bg-white border border-slate-200 rounded text-sm text-slate-600 font-medium text-center hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
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
