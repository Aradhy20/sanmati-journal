import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [institution, setInstitution] = useState('');
    const [country, setCountry] = useState('India');

    const handleRegister = (e) => {
        e.preventDefault();
        window.location.href = '/role-selection';
    };

    return (
        <MainLayout title="Author Registration | Sanmati Spectrum Journal" description="Create a Sanmati Spectrum author account to submit research papers and track peer review status.">
            <div className="py-12 bg-slate-50 min-h-[85vh] flex items-center justify-center">
                <div className="max-w-lg w-full mx-auto px-4 space-y-6">
                    
                    <div className="text-center space-y-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Author Registration
                        </span>
                        <h1 className="text-2xl font-serif font-bold text-slate-900">Create Scholar Account</h1>
                        <p className="text-xs text-slate-600 font-medium">Register to submit manuscripts, view reviewer comments, and receive publication DOIs.</p>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-4">
                        <form onSubmit={handleRegister} className="space-y-4">
                            
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Full Name & Title</label>
                                <div className="relative flex items-center">
                                    <User className="w-4 h-4 text-slate-400 absolute left-3.5" />
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Dr. Namrata Jain"
                                        className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Academic Email</label>
                                <div className="relative flex items-center">
                                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="namrata@tmu.ac.in"
                                        className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Institution / University</label>
                                <div className="relative flex items-center">
                                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5" />
                                    <input
                                        type="text"
                                        required
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        placeholder="Teerthanker Mahaveer University (TMU)"
                                        className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
                                <div className="relative flex items-center">
                                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                            >
                                Continue to Role Selection <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    <div className="text-center">
                        <p className="text-xs text-slate-600 font-medium">
                            Already have an account?{' '}
                            <Link href="/login" className="font-bold text-blue-600 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
