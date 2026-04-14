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
    Settings,
    Inbox,
    Search,
    ChevronRight,
    Circle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout({ children }) {
    const { url, auth } = usePage().props;
    const user = auth.user || { full_name: 'Admin User', email: 'admin@sanmati.com' };

    const links = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, color: 'from-blue-600 to-indigo-700' },
        { href: '/admin/news', label: 'News Ticker', icon: Newspaper, color: 'from-amber-600 to-orange-700' },
        { href: '/admin/papers', label: 'Issues & Papers', icon: FileText, color: 'from-emerald-600 to-teal-700' },
        { href: '/admin/submissions', label: 'Submissions', icon: Inbox, color: 'from-violet-600 to-purple-700' },
        { href: '/admin/team', label: 'Editorial Team', icon: Users, color: 'from-purple-600 to-pink-700' },
        { href: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare, color: 'from-rose-600 to-red-700' },
        { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon, color: 'from-cyan-600 to-blue-700' },
    ];

    const isActive = (href) => {
        if (href === '/admin') return url === href;
        return url.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-blue-100 selection:text-blue-700">
            {/* Elegant Sidebar */}
            <aside className="w-80 bg-white border-r border-slate-200/60 fixed h-screen flex flex-col z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                {/* Brand Identity */}
                <div className="p-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-300">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Sanmati</h1>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600/80">Control Center</p>
                        </div>
                    </motion.div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-grow px-4 space-y-1.5 overflow-y-auto py-4 custom-scrollbar">
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-semibold transition-all duration-300 relative ${active
                                    ? 'text-white shadow-lg shadow-blue-500/10'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {active && (
                                    <motion.div
                                        layoutId="sidebarActiveTab"
                                        className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <Icon className={`w-5 h-5 relative z-10 ${active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600 transition-colors'}`} />
                                <span className="relative z-10 text-[0.9375rem]">{link.label}</span>
                                {active && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="ml-auto relative z-10"
                                    >
                                        <ChevronRight className="w-4 h-4 text-white/70" />
                                    </motion.div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile & Sign Out */}
                <div className="p-6 mt-auto">
                    <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold shadow-sm">
                                {user.full_name.charAt(0)}
                            </div>
                            <div className="flex-grow min-w-0">
                                <p className="text-sm font-bold text-slate-900 truncate">{user.full_name}</p>
                                <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                            </div>
                        </div>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-100"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow pl-80 min-h-screen">
                {/* Global Topbar */}
                <header className="h-24 sticky top-0 z-40 bg-white/70 backdrop-blur-2xl border-b border-slate-200/60 px-10 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="relative group flex items-center">
                            <Search className="absolute left-4 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search Command (⌘ K)"
                                className="bg-slate-100/50 border-none rounded-2xl pl-12 pr-6 py-2.5 text-sm w-80 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none text-slate-600 placeholder:text-slate-400 font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2 mr-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">Server Live</span>
                        </div>

                        <button className="relative w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all group">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                        </button>

                        <button className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {children}
                </div>
            </main>
        </div>
    );
}

