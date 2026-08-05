import { motion } from 'framer-motion';
import { PenTool, CheckSquare, ShieldAlert, ArrowRight, UserCheck } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';

export default function RoleSelection() {
    const roles = [
        {
            id: 'author',
            title: 'Research Author',
            desc: 'Submit original research papers, track double-blind peer review status, and receive publication DOIs & certificates.',
            icon: PenTool,
            url: '/dashboard/author',
            badge: 'Primary Role'
        },
        {
            id: 'reviewer',
            title: 'Peer Reviewer',
            desc: 'Evaluate assigned manuscripts, submit double-blind review reports, and contribute to academic peer review excellence.',
            icon: CheckSquare,
            url: '/dashboard/reviewer',
            badge: 'Invitation / Application'
        },
        {
            id: 'editor',
            title: 'Managing Editor',
            desc: 'Manage editorial desk screening, assign external peer reviewers, execute decision pipelines, and schedule journal volumes.',
            icon: UserCheck,
            url: '/dashboard/editor',
            badge: 'Editorial Board Only'
        }
    ];

    return (
        <MainLayout title="Select Your Academic Role | Sanmati Spectrum Journal" description="Select your role as Author, Reviewer, or Managing Editor to access your workspace.">
            <div className="py-12 bg-slate-50 min-h-[85vh] flex items-center justify-center">
                <div className="max-w-4xl w-full mx-auto px-4 space-y-8">
                    
                    <div className="text-center space-y-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Role Selection Onboarding
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">Choose Your Primary Workspace</h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">Select the role matching your primary interaction with Sanmati Spectrum of Knowledge.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {roles.map((role, idx) => {
                            const Icon = role.icon;
                            return (
                                <motion.div
                                    key={role.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase rounded">
                                                {role.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{role.desc}</p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100">
                                        <a
                                            href={role.url}
                                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-all"
                                        >
                                            Enter Workspace <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
