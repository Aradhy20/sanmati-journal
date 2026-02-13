import PageHeader from '../Components/PageHeader';
import MainLayout from '../Layouts/MainLayout';
import React from 'react';

const BoardMember = ({ name, title, affiliation, image }) => {
    const [imgError, setImgError] = React.useState(false);

    return (
        <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all h-full group">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200 flex items-center justify-center">
                    {image && !imgError ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl bg-slate-100">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{title}</p>
                </div>
            </div>
            <p className="text-slate-500 text-sm mt-auto pt-4 border-t border-slate-50">{affiliation}</p>
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
