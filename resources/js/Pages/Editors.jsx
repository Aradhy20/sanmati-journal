import PageHeader from '../Components/PageHeader';
import TeamMember from '../Components/TeamMember';
import MainLayout from '../Layouts/MainLayout';

export default function Editors() {
    return (
        <MainLayout>
            <PageHeader
                title="Editors"
                breadcrumb="Editorial Team"
                subtitle="Leadership guiding our academic vision"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Editor-in-Chief */}
                    <TeamMember
                        name="Dr. Namrta Jain"
                        role="Editor-in-Chief"
                        phone="+91 9870713912, +91 8979782949"
                        email="sanmatijournal@gmail.com"
                        image="/mam.jpg"
                        scholar={true}
                        variant="large"
                    />

                    {/* Co-Editor-in-Chief */}
                    <TeamMember
                        name="Dr. Ratnesh Kumar Jain"
                        role="Co-Editor-in-Chief"
                        phone="+91 7999525735"
                        email="jainratnesh79@gmail.com"
                        image="/sir.jpg"
                        variant="large"
                    />

                </div>
            </div>
        </MainLayout>
    );
}
