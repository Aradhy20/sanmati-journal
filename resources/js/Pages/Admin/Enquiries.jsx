import { router, usePage } from '@inertiajs/react';
import {
    Mail,
    Calendar,
    CheckCircle2,
    Clock,
    Archive,
    User,
    ChevronLeft,
    ChevronRight,
    Search
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Enquiries({ enquiries = [] }) {
    const updateStatus = (id, status) => {
        router.patch(`/admin/enquiries/${id}/status`, { status });
    };

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Message Center</h1>
                        <p className="text-slate-500 text-sm">Manage and respond to all editorial enquiries.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Find a message..."
                                className="pl-11 pr-6 py-2.5 bg-white border border-slate-200 rounded-xl w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Enquiries List */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Sender</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Subject & Message</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Received Date</th>
                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {enquiries.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center justify-center text-slate-400">
                                                <Mail className="w-12 h-12 mb-4 opacity-10" />
                                                <p className="font-bold italic">No enquiries found in the database.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    enquiries.map((enquiry) => (
                                        <tr key={enquiry.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100">
                                                        {enquiry.first_name?.[0]}{enquiry.last_name?.[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">{enquiry.first_name} {enquiry.last_name}</p>
                                                        <p className="text-xs text-slate-500 lowercase">{enquiry.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 max-w-md">
                                                <p className="font-bold text-slate-800 mb-1 truncate">{enquiry.subject}</p>
                                                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                                                    {enquiry.message}
                                                </p>
                                            </td>
                                            <td className="px-8 py-6 text-sm">
                                                <StatusBadge status={enquiry.status} />
                                            </td>
                                            <td className="px-8 py-6 text-sm text-slate-500 font-medium">
                                                {new Date(enquiry.created_at).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-2">
                                                    {enquiry.status === 'new' && (
                                                        <button
                                                            onClick={() => updateStatus(enquiry.id, 'replied')}
                                                            className="p-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                                                            title="Mark as Replied"
                                                        >
                                                            <CheckCircle2 className="w-5 h-5" />
                                                        </button>
                                                    )}
                                                    {enquiry.status !== 'archived' && (
                                                        <button
                                                            onClick={() => updateStatus(enquiry.id, 'archived')}
                                                            className="p-2.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900 rounded-xl transition-all"
                                                            title="Archive Message"
                                                        >
                                                            <Archive className="w-5 h-5" />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="px-8 py-5 bg-slate-50/50 flex justify-between items-center border-t border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing {enquiries.length} results</p>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all disabled:opacity-50" disabled>
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all disabled:opacity-50" disabled>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

function StatusBadge({ status }) {
    const styles = {
        new: 'bg-blue-50 text-blue-700 border-blue-100',
        replied: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        archived: 'bg-slate-50 text-slate-500 border-slate-200',
    };

    const icons = {
        new: Clock,
        replied: CheckCircle2,
        archived: Archive,
    };

    const Icon = icons[status] || Clock;

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-tight border ${styles[status] || styles.new}`}>
            <Icon className="w-3.5 h-3.5" />
            {status}
        </span>
    );
}
