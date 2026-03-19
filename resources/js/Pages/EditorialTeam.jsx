import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import TeamMember from '../Components/TeamMember';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function EditorialTeam({ teamMembers = [] }) {
    const editorsInChief = teamMembers.filter(m =>
        m.role === 'Editor-in-Chief' || m.role === 'Co-Editor-in-Chief'
    );

    const editorialBoard = teamMembers.filter(m =>
        m.role !== 'Editor-in-Chief' && m.role !== 'Co-Editor-in-Chief' && m.role !== 'Advisor'
    );

    const advisoryBoard = teamMembers.filter(m => m.role === 'Advisor');

    const SectionTitle = ({ title, subtitle, icon: Icon, colorClass }) => (
        <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorClass}`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="h-px flex-1 bg-gray-100" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">{title}</h2>
            <p className="text-muted text-sm font-medium uppercase tracking-widest">{subtitle}</p>
        </motion.div>
    );

    return (
        <MainLayout>
            <Seo 
                title="Editorial Council" 
                description="The distinguished council of scholars overseeing the intellectual direction of Sanmati Journal."
            />

            <PageHeader
                title="Editorial Council"
                breadcrumb="Registry"
                subtitle="The collaborative intelligence driving our quarterly multidisciplinary discourse."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
                {/* ─── EMPTY STATE ─── */}
                {editorsInChief.length === 0 && editorialBoard.length === 0 && advisoryBoard.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto text-center py-24 px-10 bg-surface rounded-[3rem] border border-dashed border-gray-200"
                    >
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl border border-gray-50">
                            <ShieldAlert className="w-10 h-10 text-secondary animate-pulse" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-dark mb-4">Council in Formation</h3>
                        <p className="text-muted text-lg leading-relaxed mb-10 font-medium">
                            We are currently finalizing the appointments for the 2026 scholarship cycle. The updated council registry will be published shortly.
                        </p>
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-dark text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                            Update Pending
                        </div>
                    </motion.div>
                )}

                {/* ─── EDITORS-IN-CHIEF (Executive Leadership) ─── */}
                {editorsInChief.length > 0 && (
                    <div className="mb-32">
                        <SectionTitle 
                            title="Executive Leadership" 
                            subtitle="Strategic oversight & policy curation" 
                            icon={Award} 
                            colorClass="bg-primary"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {editorsInChief.map((member, index) => (
                                <motion.div 
                                    key={member.id} 
                                    {...fadeInUp} 
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <TeamMember
                                        name={member.name}
                                        role={member.role}
                                        phone={member.phone}
                                        email={member.email}
                                        scholar={member.role === 'Editor-in-Chief' ? '#' : null}
                                        image={member.photo_url}
                                        variant="large"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ─── EDITORIAL BOARD (Execution) ─── */}
                {editorialBoard.length > 0 && (
                    <div className="mb-32">
                        <SectionTitle 
                            title="The Editorial Board" 
                            subtitle="Peer-review coordination & quality assurance" 
                            icon={Sparkles} 
                            colorClass="bg-secondary"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {editorialBoard.map((member, i) => (
                                <motion.div 
                                    key={member.id} 
                                    {...fadeInUp} 
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <TeamMember
                                        name={member.name}
                                        role="Board Member"
                                        title={member.qualifications || member.role}
                                        image={member.photo_url}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ─── ADVISORY COUNCIL (Strategy) ─── */}
                {advisoryBoard.length > 0 && (
                    <div className="mb-20">
                        <SectionTitle 
                            title="Advisory Council" 
                            subtitle="Distinguished domain consultants" 
                            icon={Users} 
                            colorClass="bg-dark"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {advisoryBoard.map((member, i) => (
                                <motion.div 
                                    key={member.id} 
                                    {...fadeInUp} 
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <TeamMember
                                        name={member.name}
                                        role="Strategic Advisor"
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
