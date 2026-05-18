import { usePage } from '@inertiajs/react';
import {
    FileText,
    Calendar,
    Download,
    Mail,
    User,
    ChevronLeft,
    ChevronRight,
    Search,
    BookOpen
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Submissions({ submissions = { data: [] } }) {
    const data = submissions.data || [];

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-dark mb-2">Manuscript Submissions</h1>
                        <p className="text-gray-500 text-sm">Review, download, and manage submitted papers securely.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Find a submission..."
                                className="pl-11 pr-6 py-2.5 bg-white border border-gray-200 rounded-xl w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-warm-bg/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Tracking ID</th>
                                    <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Author / Contact</th>
                                    <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Manuscript Details</th>
                                    <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Submitted On</th>
                                    <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center justify-center text-gray-400">
                                                <FileText className="w-12 h-12 mb-4 opacity-10" />
                                                <p className="font-bold italic">No manuscripts submitted yet.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((sub) => (
                                        <tr key={sub.id} className="hover:bg-warm-bg/50 transition-colors group">
                                            <td className="px-8 py-6">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-tight border bg-blue-50 text-blue-700 border-blue-200">
                                                    {sub.tracking_id}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold border border-blue-100">
                                                        {sub.author_name?.[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-dark">{sub.author_name}</p>
                                                        <p className="text-xs text-gray-500 lowercase flex items-center gap-1">
                                                            <Mail className="w-3 h-3"/> {sub.author_email}
                                                        </p>
                                                        {sub.institution && (
                                                            <p className="text-[11px] text-gray-400 truncate w-32 mt-0.5">{sub.institution}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 max-w-md">
                                                <p className="font-bold text-dark mb-1 truncate">{sub.title}</p>
                                                <p className="text-xs font-medium text-blue-600 mb-1 flex items-center gap-1">
                                                    <BookOpen className="w-3 h-3"/> {sub.subject_area || 'Uncategorized'}
                                                </p>
                                                <p className="text-sm text-gray-600 line-clamp-1 leading-relaxed">
                                                    {sub.abstract}
                                                </p>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-gray-500 font-medium">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-gray-400" />
                                                    {new Date(sub.created_at).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <a
                                                        href={`/admin/submissions/${sub.id}/download`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all shadow-sm hover:shadow"
                                                        title="Download Manuscript PDF"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        Download PDF
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-8 py-5 bg-warm-bg/50 flex justify-between items-center border-t border-slate-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Showing {data.length} results</p>
                        <div className="flex gap-2">
                            {/* Static pagination buttons for UI layout - you can implement full Inertia pagination later */}
                            <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-white transition-all disabled:opacity-50" disabled>
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-white transition-all disabled:opacity-50" disabled>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
