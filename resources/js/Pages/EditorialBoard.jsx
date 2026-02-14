import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import React from 'react';
import { ExternalLink } from 'lucide-react';

const BoardMember = ({ name, title, affiliation, image, scholarUrl }) => {
    const [imgError, setImgError] = React.useState(false);

    const getGradient = (name) => {
        const gradients = [
            'from-blue-500 to-indigo-600',
            'from-purple-500 to-pink-600',
            'from-green-500 to-teal-600',
            'from-orange-500 to-red-600',
            'from-cyan-500 to-blue-600',
            'from-violet-500 to-purple-600',
        ];
        const index = name.charCodeAt(0) % gradients.length;
        return gradients[index];
    };

    const getInitials = (name) => {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
        }
        return name.charAt(0);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden group">
            {/* Photo Area */}
            <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                {image && !imgError ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className={`w-full h-full flex items-center justify-center text-white font-bold text-5xl bg-gradient-to-br ${getGradient(name)}`}>
                        {getInitials(name)}
                    </div>
                )}
                {/* Role badge overlay */}
                <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-full shadow-sm">
                        {title}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors leading-snug">
                    {name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{affiliation}</p>

                {scholarUrl && (
                    <a
                        href={scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full hover:bg-blue-100 transition-colors"
                    >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.978 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                        </svg>
                        Google Scholar
                        <ExternalLink className="w-3 h-3" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default function EditorialBoard() {
    return (
        <MainLayout>
            <PageHeader
                title="Editorial Board"
                breadcrumb="Editorial Team"
                subtitle="Distinguished scholars contributing to our review process"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BoardMember
                        name="Prof. Pralhad Joshi"
                        title="Vice-Chancellor"
                        affiliation="Kumar Bhaskar Varma Sanskrit & Ancient Studies University, Assam"
                        image="/Prof. Prahlad joshi.jpeg"
                    />
                    <BoardMember
                        name="Dr. Kalpna Jain"
                        title="Principal / Associate Professor"
                        affiliation="Teerthanker Mahaveer University, Moradabad"
                    />
                    <BoardMember
                        name="Prof. S. P. Subashini"
                        title="Dean, Faculty of Nursing"
                        affiliation="Teerthanker Mahaveer University, Moradabad"
                        image="/Dr. S. P. Subashini.jpeg"
                    />
                    <BoardMember
                        name="Dr. Harishchandra Verma"
                        title="Principal/Director"
                        affiliation="Shri Vishwanath College of Pharmacy, Sultanpur"
                    />
                    <BoardMember
                        name="Dr. Amita Kumari"
                        title="Assistant Professor"
                        affiliation="Vinoba Bhave University, Hazaribagh, Jharkhand"
                        image="/Amita kumari.jpeg"
                    />
                    <BoardMember
                        name="Mr. Parikshit Layek"
                        title="Assistant Professor"
                        affiliation="Teerthanker Mahaveer University, Moradabad"
                        image="/Parikshit Layek.jpeg"
                    />
                    <BoardMember
                        name="Ms. Vaishali Ranjeet Vichare"
                        title="Assistant Professor"
                        affiliation="Teerthanker Mahaveer University, Moradabad"
                        image="/Vaishali Ranjeet vichare.jpeg"
                    />
                </div>
            </div>
        </MainLayout>
    );
}
