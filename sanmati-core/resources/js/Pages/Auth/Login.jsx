import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, BookOpen, KeyRound } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/dashboard/author';
    };

    return (
        <MainLayout title="Researcher Sign In | Sanmati Spectrum Journal" description="Sign in to your Sanmati Spectrum author, reviewer, or editor portal to manage submissions and peer reviews.">
            <div className="py-12 bg-slate-50 min-h-[85vh] flex items-center justify-center">
                <div className="max-w-md w-full mx-auto px-4 space-y-6">
                    
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-600/20">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-serif font-bold text-slate-900">Sign In to Sanmati Journal</h1>
                        <p className="text-xs text-slate-600 font-medium">Access your author portal, reviewer workspace, or editorial queue.</p>
                    </div>

                    {/* Auth Form Card */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Academic Email</label>
                                <div className="relative flex items-center">
                                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="author@university.edu"
                                        className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
                                    <Link href="/forgot-password" className="text-xs font-bold text-blue-600 hover:underline">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="relative flex items-center">
                                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="w-full bg-slate-50 border border-slate-200 pl-10 pr-10 py-3 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-1">
                                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600 select-none">
                                    <input
                                        type="checkbox"
                                        checked={remember}
                                        onChange={(e) => setRemember(e.target.checked)}
                                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                                    />
                                    Keep me signed in
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                            >
                                Sign In to Portal <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="relative flex items-center justify-center my-4">
                            <div className="border-t border-slate-200 w-full" />
                            <span className="bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 absolute">
                                OR OAUTH SIGN IN
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="p-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 flex items-center justify-center gap-2 transition-all">
                                <span>Google</span>
                            </button>
                            <button className="p-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 flex items-center justify-center gap-2 transition-all">
                                <span>ORCID iD</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="text-center space-y-2">
                        <p className="text-xs text-slate-600 font-medium">
                            Don't have an author account?{' '}
                            <Link href="/register" className="font-bold text-blue-600 hover:underline">
                                Register as Author / Reviewer
                            </Link>
                        </p>
                        <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted Academic Security
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
