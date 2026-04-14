import React from 'react';
import { motion } from 'framer-motion';
import { useForm, Link } from '@inertiajs/react';
import { 
    Mail, 
    Trash2, 
    Download, 
    UserCheck, 
    Calendar,
    Search,
    Filter,
    ArrowUpRight,
    Users
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Newsletter({ subscribers }) {
    const { post } = useForm();

    const deleteSubscriber = (id) => {
        if (confirm('Are you sure you want to remove this subscriber?')) {
            post(`/admin/newsletter/${id}`, { _method: 'delete' });
        }
    };

    const exportToCSV = () => {
        const headers = ['Email', 'Subscribed At'];
        const rows = subscribers.data.map(s => [s.email, new Date(s.created_at).toLocaleString()]);
        const csvContent = "data:text/csv;charset=utf-8," 
            + headers.join(",") + "\n" 
            + rows.map(e => e.join(",")).join("\n");
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "newsletter_subscribers.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AdminLayout>
            <div className="space-y-8 max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                            Audience Network
                            <div className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                                {subscribers.total} Enrolled
                            </div>
                        </h1>
                        <p className="text-slate-500 text-sm mt-1 font-medium italic">"Stay connected with the scholars and researchers who value your updates."</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={exportToCSV}
                            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Export CSV
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Subscriber List</h3>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600" />
                                <input 
                                    type="text" 
                                    placeholder="Find subscriber..." 
                                    className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none w-64 shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Identity</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Engagement Date</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {subscribers.data.map((s, i) => (
                                    <motion.tr 
                                        key={s.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.02 }}
                                        className="hover:bg-slate-50/80 transition-colors group"
                                    >
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-bold text-slate-800">{s.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col items-center">
                                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(s.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                                <span className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-tighter">
                                                    {new Date(s.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex justify-center">
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                                    <span className="text-[9px] font-black uppercase tracking-wider">Subscribed</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center justify-end gap-2">
                                                <button 
                                                    onClick={() => deleteSubscriber(s.id)}
                                                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-100 transition-all shadow-sm"
                                                    title="Remove Subscriber"
                                                >
                                                    <Trash2 className="w-4.5 h-4.5" />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                                {subscribers.data.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center gap-3 opacity-30">
                                                <Mail className="w-12 h-12" />
                                                <p className="text-sm font-bold uppercase tracking-widest">No active subscribers found</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination (Simplified for now) */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        Showing <span className="text-slate-900">{subscribers.from}</span> to <span className="text-slate-900">{subscribers.to}</span> of <span className="text-slate-900">{subscribers.total}</span>
                    </p>
                    <div className="flex gap-2">
                        {subscribers.links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url || '#'}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                                    link.active 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                                } ${!link.url && 'opacity-30 cursor-not-allowed'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
