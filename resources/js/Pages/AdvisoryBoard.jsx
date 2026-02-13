import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';

const AdvisoryMember = ({ name, title, affiliation }) => (
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-yellow-200 transition-all h-full border-l-4 border-l-yellow-400">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-700 font-medium mb-1">{title}</p>
        <p className="text-slate-500 text-sm mt-auto">{affiliation}</p>
    </div>
);

export default function AdvisoryBoard() {
    return (
        <MainLayout>
            <PageHeader
                title="Advisory Board"
                breadcrumb="Editorial Team"
                subtitle="Experts providing strategic guidance"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <AdvisoryMember
                        name="Dr. Rakesh Kumar"
                        title="Associate Professor"
                        affiliation="Faculty of Law & Legal Studies, Teerthanker Mahaveer University, Moradabad"
                    />
                    <AdvisoryMember
                        name="Dr. Sushil Kumar"
                        title="HOD (B.Ed.) & Associate Professor"
                        affiliation="B. N. Mandal University, Bihar"
                    />
                </div>
            </div>
        </MainLayout>
    );
}
