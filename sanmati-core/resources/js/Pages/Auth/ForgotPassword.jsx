import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleReset = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <MainLayout title="Forgot Password | Sanmati Spectrum Journal" description="Request a password reset link for your Sanmati Spectrum account.">
            <div className="py-12 bg-slate-50 min-h-[85vh] flex items-center justify-center">
                <div className="max-w-md w-full mx-auto px-4 space-y-6">
                    
                    <Link href="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
                        <ArrowLeft className="w-4 h-4" /> Back to Sign In
                    </Link>

                    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                        {sent ? (
                            <div className="text-center space-y-4 py-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Reset Link Sent!</h2>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                    We have sent a secure password reset link to <strong className="text-slate-900">{email}</strong>. Check your inbox and follow instructions.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleReset} className="space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-xl font-serif font-bold text-slate-900">Reset Your Password</h1>
                                    <p className="text-xs text-slate-600 font-medium">Enter your registered academic email address to receive recovery instructions.</p>
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
                                            placeholder="author@university.edu"
                                            className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/20 transition-all"
                                >
                                    Send Password Reset Link
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
