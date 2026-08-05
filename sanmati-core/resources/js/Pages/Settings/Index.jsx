import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Bell, Moon, Sun, Globe, Check, Save } from 'lucide-react';
import MainLayout from '../../Layouts/MainLayout';

export default function UserSettings() {
    const [activeTab, setActiveTab] = useState('profile');
    const [saved, setSaved] = useState(false);

    // Profile state
    const [name, setName] = useState('Dr. Namrata Jain');
    const [bio, setBio] = useState('Assistant Professor in Law & Legal Studies specializing in multidisciplinary academic research and peer review governance.');
    const [orcid, setOrcid] = useState('0000-0002-1823-4567');
    const [institution, setInstitution] = useState('Teerthanker Mahaveer University (TMU)');

    // Security state
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // Notifications state
    const [emailSubmissions, setEmailSubmissions] = useState(true);
    const [emailReviews, setEmailReviews] = useState(true);

    const handleSave = (e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <MainLayout title="Account Settings | Sanmati Spectrum Journal" description="Manage your scholar profile, ORCID iD, password security, and notification preferences.">
            <div className="py-12 bg-slate-50 min-h-[85vh]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                        <div className="space-y-1">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Settings & Preferences
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Account Preferences</h1>
                            <p className="text-xs text-slate-600 font-medium">Manage your scholar profile, ORCID iD, security credentials, and email preferences.</p>
                        </div>
                    </div>

                    {/* Main Container */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        
                        {/* Sidebar Navigation */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-4 shadow-sm h-fit space-y-1">
                            {[
                                { id: 'profile', label: 'Scholar Profile', icon: User },
                                { id: 'security', label: 'Security & 2FA', icon: Shield },
                                { id: 'notifications', label: 'Email Alerts', icon: Bell }
                            ].map(tab => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full px-4 py-3 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all ${
                                            activeTab === tab.id
                                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                                : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Settings Form Content */}
                        <div className="md:col-span-3 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
                            
                            {saved && (
                                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600" /> Account preferences updated successfully!
                                </div>
                            )}

                            <form onSubmit={handleSave} className="space-y-6">
                                
                                {activeTab === 'profile' && (
                                    <div className="space-y-4">
                                        <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">Scholar Profile</h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">ORCID iD</label>
                                                <input
                                                    type="text"
                                                    value={orcid}
                                                    onChange={(e) => setOrcid(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">University Affiliation</label>
                                            <input
                                                type="text"
                                                value={institution}
                                                onChange={(e) => setInstitution(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Academic Biography</label>
                                            <textarea
                                                rows={4}
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'security' && (
                                    <div className="space-y-4">
                                        <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">Security & Password</h2>

                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Current Password</label>
                                            <input
                                                type="password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">New Password</label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'notifications' && (
                                    <div className="space-y-4">
                                        <h2 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">Email Preferences</h2>

                                        <label className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer">
                                            <span className="text-xs font-bold text-slate-800">Submission Status Updates</span>
                                            <input
                                                type="checkbox"
                                                checked={emailSubmissions}
                                                onChange={(e) => setEmailSubmissions(e.target.checked)}
                                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                                            />
                                        </label>

                                        <label className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer">
                                            <span className="text-xs font-bold text-slate-800">Peer Review Invitations & Deadlines</span>
                                            <input
                                                type="checkbox"
                                                checked={emailReviews}
                                                onChange={(e) => setEmailReviews(e.target.checked)}
                                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                                            />
                                        </label>
                                    </div>
                                )}

                                <div className="pt-4 border-t border-slate-100 flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all"
                                    >
                                        <Save className="w-4 h-4" /> Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
