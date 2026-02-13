import { router, useForm } from '@inertiajs/react';
import {
    Newspaper,
    Plus,
    Trash2,
    Power,
    PowerOff,
    AlertCircle,
    Info,
    Calendar
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function News({ news = [] }) {
    const { data, setData, post, reset, processing } = useForm({
        content: '',
        type: 'info',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/news', {
            onSuccess: () => reset(),
        });
    };

    const toggleActive = (id) => {
        router.patch(`/admin/news/${id}/toggle`);
    };

    const deleteItem = (id) => {
        if (confirm('Are you sure you want to delete this news item?')) {
            router.delete(`/admin/news/${id}`);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">News & Announcements</h1>
                        <p className="text-slate-500 text-sm">Manage the news ticker and site-wide alerts.</p>
                    </div>
                </div>

                {/* Quick Add Form */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Plus className="text-blue-600 w-5 h-5" /> Create New Announcement
                    </h3>
                    <form onSubmit={submit} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                            <input
                                value={data.content}
                                onChange={e => setData('content', e.target.value)}
                                required
                                type="text"
                                placeholder="Type news content here (e.g., 'Call for Papers for Volume 2 is now open!')"
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="w-full md:w-48">
                            <select
                                value={data.type}
                                onChange={e => setData('type', e.target.value)}
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                            >
                                <option value="info">Information</option>
                                <option value="urgent">Urgent Alert</option>
                                <option value="event">Event News</option>
                            </select>
                        </div>
                        <button
                            disabled={processing}
                            type="submit"
                            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50"
                        >
                            Post News
                        </button>
                    </form>
                </div>

                {/* News List */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Type</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Content</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Date</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {news.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center justify-center text-slate-400">
                                                <Newspaper className="w-12 h-12 mb-4 opacity-10" />
                                                <p className="font-bold italic">No news items found.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    news.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-8 py-6">
                                                <TypeBadge type={item.type} />
                                            </td>
                                            <td className="px-8 py-6 max-w-xl">
                                                <p className="font-bold text-slate-800 leading-relaxed">{item.content}</p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${item.is_active ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-200"
                                                    }`}>
                                                    {item.is_active ? "Active" : "Disabled"}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-slate-500 font-medium whitespace-nowrap">
                                                {new Date(item.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => toggleActive(item.id)}
                                                        className={`p-2.5 rounded-xl transition-all ${item.is_active ? "text-amber-600 hover:bg-amber-50" : "text-emerald-600 hover:bg-emerald-50"
                                                            }`}
                                                        title={item.is_active ? "Deactivate" : "Activate"}
                                                    >
                                                        {item.is_active ? <PowerOff className="w-5 h-5" /> : <Power className="w-5 h-5" />}
                                                    </button>
                                                    <button
                                                        onClick={() => deleteItem(item.id)}
                                                        className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                                        title="Delete News"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

function TypeBadge({ type }) {
    const configs = {
        urgent: { icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50 border-rose-100' },
        info: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
        event: { icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
    };

    const config = configs[type] || configs.info;
    const Icon = config.icon;

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${config.color} ${config.bg}`}>
            <Icon className="w-3.5 h-3.5" />
            {type}
        </span>
    );
}
