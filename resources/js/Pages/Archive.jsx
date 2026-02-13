import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';

export default function Archive({ issues = [] }) {
    return (
        <MainLayout>
            <PageHeader
                title="Journal Archive"
                breadcrumb="Archives"
                subtitle="Explore our past volumes and issues"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {issues.length > 0 ? (
                    <div className="space-y-12">
                        {issues.map((issue) => (
                            <div key={issue.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                                    Volume {issue.volume}, Issue {issue.number} ({issue.year})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {issue.papers && issue.papers.map((paper) => (
                                        <div key={paper.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <h3 className="font-bold text-slate-900 mb-2">{paper.title}</h3>
                                            <p className="text-sm text-slate-600 mb-4">{paper.authors}</p>
                                            <a href={`/storage/${paper.file_path}`} className="text-blue-600 text-sm font-bold hover:underline">
                                                Download PDF
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                        <p className="text-slate-500 text-lg">No archived issues found yet.</p>
                        <p className="text-sm text-slate-400 mt-2">Check back soon for our inaugural issue!</p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
