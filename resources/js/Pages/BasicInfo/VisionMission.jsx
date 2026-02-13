import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
    return (
        <MainLayout>
            <PageHeader
                title="Vision & Mission"
                breadcrumb="Basic Information"
                subtitle="Our core purpose and future direction"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-800">
                            <Compass className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            To promote high-quality, ethical, and multidisciplinary research that contributes to knowledge creation and addresses contemporary academic and societal challenges. We aim to be a beacon of scholarly excellence in the national landscape.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-700">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            To provide a credible platform for scholars, researchers, and academicians to publish original, peer-reviewed research. We strive to encourage innovation, inclusivity, and academic excellence across diverse disciplines including Arts, Humanities, and Sciences.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
