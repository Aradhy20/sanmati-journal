import { router, useForm } from '@inertiajs/react';
import {
    Image as ImageIcon,
    Plus,
    Trash2,
    Upload
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Gallery({ gallery = [] }) {
    const { data, setData, post, reset, processing } = useForm({
        url: '',
        caption: '',
        category: 'news',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/gallery', {
            onSuccess: () => reset(),
        });
    };

    const deleteItem = (id) => {
        if (confirm('Are you sure you want to delete this photo?')) {
            router.delete(`/admin/gallery/${id}`);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Media Library</h1>
                        <p className="text-slate-500 text-sm">Manage and categorize photos for the gallery and news sections.</p>
                    </div>
                </div>

                {/* Upload Form */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Plus className="text-blue-600 w-5 h-5" /> Add New Photo
                    </h3>
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Upload Photo</label>
                                <input
                                    type="file"
                                    onChange={e => setData('image', e.target.files[0])}
                                    required
                                    accept="image/*"
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                <select
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    required
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                                >
                                    <option value="news">News & Events</option>
                                    <option value="campus">Campus Life</option>
                                    <option value="academic">Academic Sessions</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Caption</label>
                            <input
                                value={data.caption}
                                onChange={e => setData('caption', e.target.value)}
                                type="text"
                                placeholder="Brief description of the photo"
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                        <button
                            disabled={processing}
                            type="submit"
                            className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md disabled:opacity-50"
                        >
                            Add to Media Library
                        </button>
                    </form>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gallery.length === 0 ? (
                        <div className="col-span-full bg-white p-20 flex flex-col items-center justify-center text-slate-400 border border-slate-200 rounded-3xl">
                            <ImageIcon className="w-16 h-16 mb-4 opacity-10" />
                            <p className="font-bold italic text-lg">No photos in the library yet.</p>
                        </div>
                    ) : (
                        gallery.map((item) => (
                            <div key={item.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all">
                                <div className="relative h-48 bg-slate-100">
                                    <img src={`/storage/${item.url}`} alt={item.caption} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                        <button
                                            onClick={() => deleteItem(item.id)}
                                            className="p-2 bg-white/90 backdrop-blur text-rose-600 rounded-lg shadow-sm hover:bg-rose-600 hover:text-white transition-all"
                                            title="Delete Photo"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/20 shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm font-medium text-slate-700 line-clamp-2 leading-relaxed">
                                        {item.caption || "No caption provided"}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
