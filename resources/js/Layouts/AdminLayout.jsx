import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    Newspaper,
    FileText,
    Users,
    MessageSquare,
    Image as ImageIcon,
    LogOut,
    Sparkles,
    Bell,
    Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout({ children }) {
    const { url } = usePage();

    const links = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, color: 'from-blue-500 to-indigo-600' },
        { href: '/admin/news', label: 'News Ticker', icon: Newspaper, color: 'from-amber-500 to-orange-600' },
        { href: '/admin/papers', label: 'Issues & Papers', icon: FileText, color: 'from-emerald-500 to-teal-600' },
        { href: '/admin/team', label: 'Editorial Team', icon: Users, color: 'from-purple-500 to-pink-600' },
        { href: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare, color: 'from-rose-500 to-red-600' },
        { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon, color: 'from-cyan-500 to-blue-600' },
    ];

    const isActive = (href) => {
        if (href === '/admin') return url === href;
        return url.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex transition-colors duration-300">
            {/* Enhanced Sidebar with Glassmorphism */}
            <aside className="w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 fixed h-screen overflow-y-auto shadow-2xl shadow-slate-900/5 transition-all">
                {/* Header with Gradient */}
                <div className="p-8 border-b border-slate-100/50 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/5 opacity-10"></div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-6 h-6 text-yellow-300" />
                            <h1 className="text-2xl font-serif font-bold text-white">Sanmati Admin</h1>
                        </div>
                        <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Control Panel</p>
                    </motion.div>
                </div>

                {/* Navigation with Hover Effects */}
                <nav className="p-6 space-y-2">
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);
                        return (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`group flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all relative overflow-hidden ${active
                                        ? 'text-white shadow-xl'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md'
                                        }`}
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl`}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Icon className={`w-5 h-5 relative z-10 ${active ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
                                    <span className="relative z-10">{link.label}</span>
                                    {active && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="ml-auto w-2 h-2 bg-white rounded-full relative z-10"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Enhanced Sign Out Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-100/50 bg-white/50 backdrop-blur">
                    <button className="flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-rose-600 hover:bg-rose-50 hover:shadow-lg transition-all w-full group">
                        <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content with Enhanced Header */}
            <main className="flex-grow pl-72">
                <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 px-10 py-6 shadow-sm">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                {links.find(l => isActive(l.href))?.label || 'Dashboard'}
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-black uppercase tracking-wider">Live</span>
                            </h2>
                            <p className="text-xs text-slate-500 mt-1">Manage your content with ease</p>
                        </motion.div>
                        <div className="flex items-center gap-4">
                            {/* Notification Bell */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all group"
                            >
                                <Bell className="w-5 h-5 text-slate-600 group-hover:text-slate-900" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                            </motion.button>

                            {/* Settings */}
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: 90 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all"
                            >
                                <Settings className="w-5 h-5 text-slate-600" />
                            </motion.button>

                            {/* User Profile */}
                            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">Admin User</p>
                                    <p className="text-xs text-slate-500">sanmatijournal@gmail.com</p>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-xl shadow-blue-500/30 cursor-pointer"
                                >
                                    A
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
