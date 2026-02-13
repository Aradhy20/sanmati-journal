import { router, useForm } from '@inertiajs/react';
import {
    Users,
    Plus,
    Trash2,
    Edit,
    UserPlus,
    Mail,
    GraduationCap,
    Briefcase,
    Image as ImageIcon
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Team({ team = [] }) {
    const { data, setData, post, reset, processing } = useForm({
        name: '',
        role: '',
        qualifications: '',
        experience: '',
        bio: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/team', {
            onSuccess: () => reset(),
        });
    };

    const deleteMember = (id) => {
        if (confirm('Are you sure you want to remove this member?')) {
            router.delete(`/admin/team/${id}`);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Editorial Board</h1>
                        <p className="text-slate-500 text-sm">Manage the distinguished members of our editorial team.</p>
                    </div>
                </div>

                {/* Quick Add Form */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <UserPlus className="text-blue-600 w-5 h-5" /> New Board Member
                    </h3>
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    required
                                    type="text"
                                    placeholder="e.g., Dr. Aradhya Jain"
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Designation / Role</label>
                                <input
                                    value={data.role}
                                    onChange={e => setData('role', e.target.value)}
                                    required
                                    type="text"
                                    placeholder="e.g., Editor-in-Chief"
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Qualifications</label>
                                <input
                                    value={data.qualifications}
                                    onChange={e => setData('qualifications', e.target.value)}
                                    type="text"
                                    placeholder="e.g., PhD in Engineering"
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Affiliation / Experience</label>
                                <input
                                    value={data.experience}
                                    onChange={e => setData('experience', e.target.value)}
                                    type="text"
                                    placeholder="e.g., Professor at XYZ University"
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Profile Photo</label>
                            <input
                                type="file"
                                onChange={e => setData('photo', e.target.files[0])}
                                accept="image/*"
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        <button
                            disabled={processing}
                            type="submit"
                            className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md disabled:opacity-50"
                        >
                            Add to Editorial Board
                        </button>
                    </form>
                </div>

                {/* Team List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.length === 0 ? (
                        <div className="col-span-full bg-white p-20 flex flex-col items-center justify-center text-slate-400 border border-slate-200 rounded-3xl">
                            <Users className="w-16 h-16 mb-4 opacity-10" />
                            <p className="font-bold italic text-lg">No board members added yet.</p>
                        </div>
                    ) : (
                        team.map((member) => (
                            <div key={member.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all group">
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-100 border border-slate-100 flex items-center justify-center overflow-hidden">
                                            {member.photo_url ? (
                                                <img src={`/storage/${member.photo_url}`} alt={member.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <GraduationCap className="w-10 h-10 text-slate-300" />
                                            )}
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => deleteMember(member.id)}
                                                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{member.name}</h4>
                                            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{member.role}</p>
                                        </div>

                                        <div className="pt-4 border-t border-slate-50 space-y-3">
                                            <div className="flex gap-3 text-sm text-slate-500">
                                                <GraduationCap className="w-4 h-4 mt-0.5 shrink-0" />
                                                <p className="leading-tight">{member.qualifications || 'No qualifications listed'}</p>
                                            </div>
                                            <div className="flex gap-3 text-sm text-slate-500">
                                                <Briefcase className="w-4 h-4 mt-0.5 shrink-0" />
                                                <p className="leading-tight">{member.experience || 'No experience listed'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
