import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    Search,
    ArrowUpRight,
    TrendingUp,
    Activity,
    Zap,
    Clock,
    CheckCircle2,
    MessageSquare,
    FileText,
    Newspaper,
    Users,
    ImageIcon
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Dashboard({ stats }) {
    const statCards = [
        {
            label: 'Pending Enquiries',
            value: stats.pendingEnquiries,
            icon: MessageSquare,
            href: '/admin/enquiries',
            gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
            bg: 'bg-rose-50',
            iconBg: 'bg-rose-100',
            textColor: 'text-rose-600'
        },
        {
            label: 'Total Papers',
            value: stats.totalPapers,
            icon: FileText,
            href: '/admin/papers',
            gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
            bg: 'bg-emerald-50',
            iconBg: 'bg-emerald-100',
            textColor: 'text-emerald-600'
        },
        {
            label: 'Active News',
            value: stats.activeNews,
            icon: Newspaper,
            href: '/admin/news',
            gradient: 'from-amber-500 via-orange-500 to-red-600',
            bg: 'bg-amber-50',
            iconBg: 'bg-amber-100',
            textColor: 'text-amber-600'
        },
        {
            label: 'Team Members',
            value: stats.teamMembers,
            icon: Users,
            href: '/admin/team',
            gradient: 'from-purple-500 via-violet-500 to-indigo-600',
            bg: 'bg-purple-50',
            iconBg: 'bg-purple-100',
            textColor: 'text-purple-600'
        }
    ];

    const quickActions = [
        { label: 'Upload New Paper', href: '/admin/papers', icon: FileText, gradient: 'from-emerald-500 to-teal-600' },
        { label: 'Add News Item', href: '/admin/news', icon: Newspaper, gradient: 'from-amber-500 to-orange-600' },
        { label: 'Manage Photos', href: '/admin/gallery', icon: ImageIcon, gradient: 'from-purple-500 to-pink-600' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-10">
                {/* Header Section with Search */}
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2 flex items-center gap-3">
                            Welcome Back, Admin
                            <Zap className="w-8 h-8 text-yellow-500 animate-pulse" />
                        </h1>
                        <p className="text-slate-500 text-sm flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            Here's what's happening with your journal today
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="pl-12 pr-6 py-4 bg-white border-2 border-slate-200 rounded-2xl w-96 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm hover:shadow-md"
                        />
                    </motion.div>
                </div>

                {/* Animated Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <Link href={card.href} className="block group">
                                    <div className="relative overflow-hidden bg-white rounded-3xl border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all p-8">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <motion.div
                                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={`p-4 rounded-2xl ${card.iconBg} ${card.textColor} group-hover:shadow-xl transition-all`}
                                                >
                                                    <Icon className="w-7 h-7" />
                                                </motion.div>
                                                <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-all">
                                                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-700" />
                                                </div>
                                            </div>

                                            <motion.h3
                                                className="text-5xl font-black text-slate-900 mb-2"
                                                initial={{ scale: 0.5 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                                            >
                                                {card.value}
                                            </motion.h3>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{card.label}</p>

                                            <div className="mt-4 flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-emerald-500" />
                                                <span className="text-xs font-bold text-emerald-600">+12% this week</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-slate-100 shadow-xl p-8"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-blue-600" />
                                Recent Activity
                            </h3>
                            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-black uppercase">Live</span>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + item * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">System check complete</p>
                                        <p className="text-xs text-slate-500">{new Date().toLocaleTimeString()}</p>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-slate-100 shadow-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Zap className="w-6 h-6 text-yellow-500" />
                            Quick Actions
                        </h3>
                        <div className="space-y-4">
                            {quickActions.map((action, i) => {
                                const Icon = action.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + i * 0.1 }}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href={action.href} className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 rounded-2xl transition-all group border-2 border-transparent hover:border-blue-200">
                                            <div className={`p-3 bg-gradient-to-br ${action.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="font-bold text-slate-700 group-hover:text-slate-900 flex-grow">{action.label}</span>
                                            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
}
