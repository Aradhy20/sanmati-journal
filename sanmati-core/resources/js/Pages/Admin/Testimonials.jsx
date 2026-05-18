import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@inertiajs/react';
import { 
    Plus, 
    Trash2, 
    Star, 
    Quote, 
    User, 
    Briefcase,
    X,
    Check,
    Search,
    ThumbsUp,
    MessageSquareQuote
} from 'lucide-react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Testimonials({ testimonials }) {
    const [isAdding, setIsAdding] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        role: '',
        text: '',
        stars: 5,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/testimonials', {
            onSuccess: () => {
                setIsAdding(false);
                reset();
            },
        });
    };

    return (
        <AdminLayout>
            <div className="space-y-8 max-w-[1600px] mx-auto">
                {/* Header Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                            Academic Endorsements
                            <div className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-black text-amber-600 uppercase tracking-widest">
                                Global Recognition
                            </div>
                        </h1>
                        <p className="text-slate-500 text-sm mt-1 font-medium italic">"Testimonials are the voice of satisfied stakeholders, building trust through lived experiences."</p>
                    </div>

                    <button 
                        onClick={() => setIsAdding(true)}
                        className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group"
                    >
                        <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                        Add Testimonial
                    </button>
                </div>

                {/* Grid of Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {testimonials.data.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="group bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative flex flex-col"
                            >
                                <div className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50 transition-colors">
                                    <Quote className="w-12 h-12 fill-current" />
                                </div>

                                <div className="flex items-center gap-2 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className={`w-4 h-4 ${i < item.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-700 text-sm font-medium leading-relaxed mb-8 italic flex-grow relative z-10">
                                    "{item.text}"
                                </p>

                                <div className="flex items-center justify-between items-end pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                                            {item.image_url ? (
                                                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover rounded-2xl" />
                                            ) : (
                                                <User className="w-6 h-6" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-900 leading-tight uppercase tracking-wide">{item.name}</p>
                                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{item.role}</p>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => { if(confirm('Remove this testimonial?')) post(`/admin/testimonials/${item.id}`, { _method: 'delete' }) }}
                                        className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 opacity-0 group-hover:opacity-100 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Add Testimonial Slide-over */}
                <AnimatePresence>
                    {isAdding && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-end p-4 md:p-8">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsAdding(false)}
                                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="relative bg-white w-full max-w-lg h-full rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
                            >
                                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Add Feedback</h2>
                                        <p className="text-xs text-slate-500 font-medium">Capture scholarly appreciation from mentors/authors</p>
                                    </div>
                                    <button 
                                        onClick={() => setIsAdding(false)}
                                        className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <form onSubmit={submit} className="flex-grow overflow-y-auto p-8 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Reviewer Name</label>
                                        <input 
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none"
                                            placeholder="e.g. Dr. Ramesh Kumar"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Professional Designation</label>
                                        <input 
                                            type="text"
                                            value={data.role}
                                            onChange={e => setData('role', e.target.value)}
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none"
                                            placeholder="e.g. Professor at IIT Roorkee"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Testimonial Content</label>
                                        <textarea 
                                            value={data.text}
                                            onChange={e => setData('text', e.target.value)}
                                            rows="4"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-medium text-slate-700 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all outline-none resize-none shadow-sm"
                                            placeholder="Describe their experience with Sanmati Journal..."
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Star Rating</label>
                                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setData('stars', star)}
                                                    className="transition-transform active:scale-90"
                                                >
                                                    <Star 
                                                        className={`w-8 h-8 ${star <= data.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                                                    />
                                                </button>
                                            ))}
                                            <span className="ml-auto text-sm font-black text-amber-600">{data.stars}.0 / 5.0</span>
                                        </div>
                                    </div>
                                </form>

                                <div className="p-8 border-t border-slate-100 bg-slate-50/50">
                                    <button 
                                        onClick={submit}
                                        disabled={processing}
                                        className="w-full py-4 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 disabled:opacity-50 flex items-center justify-center gap-3"
                                    >
                                        {processing ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <ThumbsUp className="w-5 h-5" />
                                                Publish Endorsement
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </AdminLayout>
    );
}
