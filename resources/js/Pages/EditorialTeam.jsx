import PageHeader from '../Components/PageHeader';
import TeamMember from '../Components/TeamMember';
import MainLayout from '../Layouts/MainLayout';
import { ScrollReveal, revealVariants } from '../Components/ScrollReveal';
import { DynamicCard } from '../Components/DynamicCard';
import { GlassyBlob } from '../Components/Graphics';


export default function EditorialTeam({ teamMembers = [] }) {
    // Filter members by role
    const editorsInChief = teamMembers.filter(m =>
        m.role === 'Editor-in-Chief' || m.role === 'Co-Editor-in-Chief'
    );

    const editorialBoard = teamMembers.filter(m =>
        m.role !== 'Editor-in-Chief' && m.role !== 'Co-Editor-in-Chief' && m.role !== 'Advisor'
    );

    const advisoryBoard = teamMembers.filter(m => m.role === 'Advisor');

    return (
        <MainLayout>
            <PageHeader
                title="Editorial Team"
                breadcrumb="Board Members"
                subtitle="Meet the distinguished scholars guiding our publication"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative">
                {/* Editors in Chief */}
                {editorsInChief.length > 0 && (
                    <div className="mb-24">
                        <ScrollReveal>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 flex items-center gap-4">
                                <div className="w-12 h-1 bg-blue-600 rounded-full" />
                                Editors-in-Chief
                            </h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            {editorsInChief.map((member, index) => (
                                <ScrollReveal key={member.id} variants={index % 2 === 0 ? revealVariants.left : revealVariants.right} delay={index * 0.2}>
                                    <DynamicCard className="p-2" gradient={index === 0 ? "from-blue-600 to-indigo-600" : "from-indigo-600 to-purple-600"}>
                                        <TeamMember
                                            name={member.name}
                                            role={member.role}
                                            phone={member.phone || ''} // Assuming phone column exists or use bio/qualifications
                                            email={member.email || ''} // Assuming email column exists
                                            scholar={member.role === 'Editor-in-Chief'}
                                            image={member.photo_url || '/default-avatar.png'}
                                        />
                                    </DynamicCard>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}

                {/* Editorial Board */}
                {editorialBoard.length > 0 && (
                    <div className="mb-24">
                        <ScrollReveal>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 flex items-center gap-4">
                                <div className="w-12 h-1 bg-indigo-600 rounded-full" />
                                Editorial Board Members
                            </h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {editorialBoard.map((member, i) => (
                                <ScrollReveal key={member.id} delay={i * 0.1} variants={revealVariants.zoom}>
                                    <DynamicCard className="p-6 h-full" gradient="from-slate-100 to-slate-200">
                                        <TeamMember
                                            name={member.name}
                                            role="Member"
                                            title={member.qualifications || member.role} // Using qualifications as title fallback
                                            image={member.photo_url || '/default-avatar.png'}
                                        />
                                    </DynamicCard>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}

                {/* Advisory Board */}
                {advisoryBoard.length > 0 && (
                    <div>
                        <ScrollReveal>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 flex items-center gap-4">
                                <div className="w-12 h-1 bg-purple-600 rounded-full" />
                                Advisory Board
                            </h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {advisoryBoard.map((member, i) => (
                                <ScrollReveal key={member.id} delay={i * 0.1} variants={revealVariants.zoom}>
                                    <DynamicCard className="p-6 h-full" gradient="from-purple-50 to-indigo-50">
                                        <TeamMember
                                            name={member.name}
                                            role="Advisor"
                                            title={member.qualifications || member.role}
                                        />
                                    </DynamicCard>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
