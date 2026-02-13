import { router, useForm } from '@inertiajs/react';
import {
    FileText,
    Plus,
    Trash2,
    FolderPlus,
    FilePlus,
    Calendar,
    Search,
    Eye,
    CheckCircle2
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Papers({ papers = [], issues = [] }) {
    const issueForm = useForm({
        volume: '',
        number: '',
        year: new Date().getFullYear(),
        month_range: '',
        is_current: false,
    });

    const paperForm = useForm({
        issue_id: '',
        title: '',
        authors: '',
        category: 'Research Paper',
        file_url: '',
        is_featured: false,
    });

    const submitIssue = (e) => {
        e.preventDefault();
        issueForm.post('/admin/issues', {
            onSuccess: () => issueForm.reset(),
        });
    };

    const submitPaper = (e) => {
        e.preventDefault();
        paperForm.post('/admin/papers', {
            onSuccess: () => paperForm.reset(),
        });
    };

    const toggleIssueCurrent = (id) => {
        router.patch(`/admin/issues/${id}/toggle`);
    };

    const deleteIssue = (id) => {
        if (confirm('Are you sure you want to delete this issue? All papers in it might lead to errors.')) {
            router.delete(`/admin/issues/${id}`);
        }
    };

    const deletePaper = (id) => {
        if (confirm('Are you sure you want to delete this paper?')) {
            router.delete(`/admin/papers/${id}`);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-10">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Issues & Papers</h1>
                        <p className="text-slate-500 text-sm">Manage journal volumes, issues, and research paper uploads.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Issues Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <FolderPlus className="text-blue-600 w-5 h-5" /> New Issue
                            </h3>
                            <form onSubmit={submitIssue} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        value={issueForm.data.volume}
                                        onChange={e => issueForm.setData('volume', e.target.value)}
                                        required
                                        placeholder="Volume"
                                        className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        value={issueForm.data.number}
                                        onChange={e => issueForm.setData('number', e.target.value)}
                                        required
                                        placeholder="Issue"
                                        className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <input
                                    value={issueForm.data.year}
                                    onChange={e => issueForm.setData('year', e.target.value)}
                                    required
                                    type="number"
                                    placeholder="Year"
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    value={issueForm.data.month_range}
                                    onChange={e => issueForm.setData('month_range', e.target.value)}
                                    placeholder="Months (e.g., Jan-Mar)"
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <label className="flex items-center gap-2 cursor-pointer pt-2">
                                    <input
                                        checked={issueForm.data.is_current}
                                        onChange={e => issueForm.setData('is_current', e.target.checked)}
                                        type="checkbox"
                                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Mark as Current Issue</span>
                                </label>
                                <button
                                    disabled={issueForm.processing}
                                    type="submit"
                                    className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-all text-sm shadow-lg shadow-blue-900/10 disabled:opacity-50"
                                >
                                    Create New Issue
                                </button>
                            </form>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Existing Issues</h3>
                            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {issues.length === 0 ? (
                                    <p className="text-center text-slate-400 py-4 text-sm italic">No issues created yet.</p>
                                ) : (
                                    issues.map((issue) => (
                                        <div key={issue.id} className={`p-4 rounded-2xl border transition-all flex justify-between items-center group ${issue.is_current ? "bg-blue-50 border-blue-100" : "bg-slate-50 border-slate-100 hover:border-slate-200"
                                            }`}>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm">Vol. {issue.volume}, No. {issue.number}</p>
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{issue.month_range} {issue.year}</p>
                                            </div>
                                            <div className="flex gap-1">
                                                <button
                                                    onClick={() => toggleIssueCurrent(issue.id)}
                                                    className={`p-2 rounded-lg transition-all ${issue.is_current ? "text-blue-600" : "text-slate-400 hover:text-blue-600"
                                                        }`}
                                                    title="Set as Current"
                                                >
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deleteIssue(issue.id)}
                                                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg transition-all"
                                                    title="Delete Issue"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Papers Main Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <FilePlus className="text-emerald-600 w-5 h-5" /> Upload New Research Paper
                            </h3>
                            <form onSubmit={submitPaper} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Select Issue</label>
                                        <select
                                            value={paperForm.data.issue_id}
                                            onChange={e => paperForm.setData('issue_id', e.target.value)}
                                            required
                                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none text-sm"
                                        >
                                            <option value="">Choose an issue...</option>
                                            {issues.map((issue) => (
                                                <option key={issue.id} value={issue.id}>Vol. {issue.volume}, No. {issue.number} ({issue.year})</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Paper Category</label>
                                        <select
                                            value={paperForm.data.category}
                                            onChange={e => paperForm.setData('category', e.target.value)}
                                            required
                                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none text-sm"
                                        >
                                            <option value="Research Paper">Research Paper</option>
                                            <option value="Review Paper">Review Paper</option>
                                            <option value="Case Study">Case Study</option>
                                            <option value="Short Communication">Short Communication</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Paper Title</label>
                                    <textarea
                                        value={paperForm.data.title}
                                        onChange={e => paperForm.setData('title', e.target.value)}
                                        required
                                        rows={2}
                                        placeholder="Full title of the research paper"
                                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm resize-none"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Authors</label>
                                        <input
                                            value={paperForm.data.authors}
                                            onChange={e => paperForm.setData('authors', e.target.value)}
                                            required
                                            placeholder="e.g., Dr. Jane Smith, Prof. Robert Brown"
                                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">PDF File</label>
                                        <input
                                            type="file"
                                            onChange={e => paperForm.setData('file_url', e.target.files[0])}
                                            required
                                            accept=".pdf,.doc,.docx"
                                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={paperForm.data.is_featured}
                                                onChange={e => paperForm.setData('is_featured', e.target.checked)}
                                                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-sm font-bold text-slate-700">Feature this paper on Homepage</span>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    disabled={paperForm.processing}
                                    type="submit"
                                    className="w-full bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/10 disabled:opacity-50"
                                >
                                    Upload & Index Paper
                                </button>
                            </form>
                        </div>

                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-slate-900">Recent Paper Uploads</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-50/50">
                                        <tr className="border-b border-slate-100">
                                            <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Issue</th>
                                            <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Paper Details</th>
                                            <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                                            <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {papers.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="px-8 py-20 text-center">
                                                    <div className="flex flex-col items-center justify-center text-slate-400">
                                                        <FileText className="w-12 h-12 mb-4 opacity-10" />
                                                        <p className="font-bold italic">No papers uploaded yet.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            papers.map((paper) => (
                                                <tr key={paper.id} className="hover:bg-slate-50/50 transition-colors group">
                                                    <td className="px-8 py-6 whitespace-nowrap">
                                                        <p className="text-xs font-bold text-slate-900">Vol. {paper.issue?.volume}, No. {paper.issue?.number}</p>
                                                        <p className="text-[10px] font-bold text-slate-400">{paper.issue?.year}</p>
                                                    </td>
                                                    <td className="px-8 py-6 max-w-md">
                                                        <p className="font-bold text-slate-800 text-sm mb-1 leading-snug line-clamp-2">{paper.title}</p>
                                                        <p className="text-xs text-slate-500 line-clamp-1">{paper.authors}</p>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-tight border border-emerald-100 italic">
                                                            {paper.category}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-6 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <a href={`/storage/${paper.file_url}`} target="_blank" className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View PDF">
                                                                <Eye className="w-4 h-4" />
                                                            </a>
                                                            <button
                                                                onClick={() => deletePaper(paper.id)}
                                                                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                                                title="Delete Paper"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
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
                </div>
            </div>
        </AdminLayout>
    );
}
