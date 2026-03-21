import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';

export default function JournalInfo() {
    return (
        <MainLayout>
            <PageHeader
                title="Journal Information"
                breadcrumb="Basic Information"
                subtitle="Key details and metadata"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 w-1/3 border-r border-slate-100">Journal Title</th>
                                <td className="py-6 px-8 text-dark/80">Sanmati Spectrum of Knowledge & Emerging Discourse</td>
                            </tr>
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 border-r border-slate-100">ISSN (Print)</th>
                                <td className="py-6 px-8 text-dark/80 font-mono text-primary-dark bg-primary/5/30">3108-1819</td>
                            </tr>
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 border-r border-slate-100">Publication Format</th>
                                <td className="py-6 px-8 text-dark/80">Print (Offline)</td>
                            </tr>
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 border-r border-slate-100">Frequency</th>
                                <td className="py-6 px-8 text-dark/80">Quarterly</td>
                            </tr>
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 border-r border-slate-100">Language</th>
                                <td className="py-6 px-8 text-dark/80">Bilingual (Hindi & English)</td>
                            </tr>
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 border-r border-slate-100">Publisher</th>
                                <td className="py-6 px-8 text-dark/80">
                                    <div className="font-bold text-dark">JTS Publications</div>
                                    <div className="text-sm text-gray-500 mt-1">V-508 Gali No. 17, Vijay Park, Delhi – 110053</div>
                                </td>
                            </tr>
                            <tr className="hover:bg-warm-bg transition-colors">
                                <th className="py-6 px-8 text-dark font-bold bg-warm-bg/50 border-r border-slate-100">Chief Editor</th>
                                <td className="py-6 px-8 text-dark/80">Dr. Namrta Jain</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}
