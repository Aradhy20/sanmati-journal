import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import React from 'react';

const BoardMember = ({ name, title, affiliation, image }) => {
    const [imgError, setImgError] = React.useState(false);

    // Generate a consistent color based on name
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
        <div className="flex flex-col p-6 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full group">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                    {image && !imgError ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className={`w-full h-full flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-br ${getGradient(name)}`}>
                            {getInitials(name)}
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">{name}</h3>
                    <p className="text-blue-600 text-sm font-semibold">{title}</p>
                </div>
            </div>
            <p className="text-slate-600 text-sm mt-auto pt-4 border-t border-slate-100 leading-relaxed">{affiliation}</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
