import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import { Lock, FileCheck, Copyright } from 'lucide-react';

export default function Compliance() {
    return (
        <MainLayout>
            <div className="bg-slate-50 min-h-screen">
                <PageHeader
                    title="Compliance & Copyright"
                    breadcrumb="Legal"
                    subtitle="Open Access and Author Rights"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <Copyright className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Copyright Policy</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Authors retain copyright of their work. By submitting, they grant the journal the right of first publication. Proper acknowledgment of the original publication is mandatory for any future use.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <Lock className="w-10 h-10 text-green-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Open Access</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We follow a full Open Access policy. Articles are freely available to read, download, and share immediately upon publication, fostering global knowledge exchange.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <FileCheck className="w-10 h-10 text-yellow-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Author Declaration</h3>
                            <p className="text-slate-600 leading-relaxed">
                                All authors must sign a declaration confirming originality, absence of conflict of interest, and adherence to plagiarism norms (&lt;20%).
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
