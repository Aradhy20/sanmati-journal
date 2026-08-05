import PageHeader from '../../Components/PageHeader';
import MainLayout from '../../Layouts/MainLayout';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
    const jsonLd = {
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Vision & Mission - Sanmati Spectrum of Knowledge",
            "url": "https://sanmatijournal.in/basic-info/vision-mission",
            "description": "The vision and mission statement of Sanmati Spectrum of Knowledge & Emerging Discourse research journal."
        },
        breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Basic Info', url: '/basic-info/about-journal' },
            { name: 'Vision & Mission', url: '/basic-info/vision-mission' }
        ]
    };

    return (
        <MainLayout
            title="Vision & Mission | Sanmati Spectrum Journal"
            description="Our academic vision and mission: promoting high-quality, ethical, double-blind peer-reviewed multidisciplinary research across global scholarship."
            keywords="journal vision mission, academic purpose, research ethics, sanmati spectrum vision, multidisciplinary research journal"
            jsonLd={jsonLd}
        >
            <PageHeader
                title="Vision & Mission"
                breadcrumb="Basic Information"
                subtitle="Our core purpose and future direction"
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[#FFFDF8] text-[#2E2E2E]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Vision */}
                    <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E9E5DD] space-y-4">
                        <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center text-primary">
                            <Compass className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-serif font-bold text-dark">Our Vision</h2>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            To promote high-quality, ethical, and multidisciplinary research that contributes to global knowledge creation and addresses contemporary academic and societal challenges. We aim to establish a beacon of scholarly excellence in the national landscape.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E9E5DD] space-y-4">
                        <div className="w-10 h-10 bg-[#F7F4EC] border border-[#E9E5DD] rounded flex items-center justify-center text-secondary">
                            <Target className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-serif font-bold text-dark">Our Mission</h2>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            To provide a credible platform for scholars, researchers, and academicians to publish original, peer-reviewed research. We strive to encourage innovation, inclusivity, and academic excellence across diverse disciplines including Arts, Humanities, Law, and Sciences.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
