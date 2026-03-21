import PageHeader from '../Components/PageHeader';
import TeamMember from '../Components/TeamMember';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function EditorialTeam({ teamMembers = [] }) {
    const editorsInChief = teamMembers.filter(m =>
        m.role === 'Editor-in-Chief' || m.role === 'Co-Editor-in-Chief'
    );

    const editorialBoard = teamMembers.filter(m =>
        m.role !== 'Editor-in-Chief' && m.role !== 'Co-Editor-in-Chief' && m.role !== 'Advisor'
    );

    const advisoryBoard = teamMembers.filter(m => m.role === 'Advisor');

    const sectionHeader = (title, color) => (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-12 flex items-center gap-4"
        >
            <div className={`w-12 h-1 ${color} rounded-full`} />
            {title}
        </motion.h2>
    );

    return (
        <MainLayout>
            <PageHeader
                title="Editorial Team"
                breadcrumb="Board Members"
                subtitle="Meet the distinguished scholars guiding our publication"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                {/* Editors in Chief */}
                {editorsInChief.length > 0 && (
                    <div className="mb-10 lg:mb-20">
                        {sectionHeader("Editors-in-Chief", "bg-primary")}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-4xl mx-auto">
                            {editorsInChief.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="card-modern p-2 overflow-hidden"
                                >
                                    <TeamMember
                                        name={member.name}
                                        role={member.role}
                                        phone={member.phone || ''}
                                        email={member.email || ''}
                                        scholar={member.role === 'Editor-in-Chief'}
                                        image={member.photo_url || '/default-avatar.png'}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Editorial Board */}
                {editorialBoard.length > 0 && (
                    <div className="mb-10 lg:mb-20">
                        {sectionHeader("Editorial Board Members", "bg-secondary")}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {editorialBoard.map((member, i) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="card-modern p-6 h-full"
                                >
                                    <TeamMember
                                        name={member.name}
                                        role="Member"
                                        title={member.qualifications || member.role}
                                        image={member.photo_url || '/default-avatar.png'}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Advisory Board */}
                {advisoryBoard.length > 0 && (
                    <div>
                        {sectionHeader("Advisory Board", "bg-accent")}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {advisoryBoard.map((member, i) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="card-modern p-6 h-full"
                                >
                                    <TeamMember
                                        name={member.name}
                                        role="Advisor"
                                        title={member.qualifications || member.role}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
