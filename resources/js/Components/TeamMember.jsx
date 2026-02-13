import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function TeamMember({ name, role, title, phone, email, scholar, image, variant = 'grid' }) {
    if (variant === 'large') {
        return (
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow max-w-lg mx-auto w-full group">
                <div className="w-48 h-48 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-slate-50 shadow-inner relative">
                    {image ? (
                        <img src={image} alt={name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-4xl font-serif font-bold text-blue-800">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <span className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-2">{role}</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 text-center mb-2">{name}</h3>
                {title && <p className="text-slate-500 text-sm text-center mb-4">{title}</p>}

                <div className="flex flex-col gap-2 mt-4 text-center text-slate-600 text-sm">
                    {email && (
                        <p className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4 text-blue-500" />
                            <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors font-medium">{email}</a>
                        </p>
                    )}
                    {phone && (
                        <p className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4 text-blue-500" />
                            <a href={`tel:${phone.split(',')[0].trim()}`} className="hover:text-blue-600 transition-colors font-medium">{phone}</a>
                        </p>
                    )}
                    {scholar && (
                        <p className="mt-2">
                            <a href="#" className="inline-flex items-center gap-1 text-blue-700 font-bold hover:underline">
                                <ExternalLink className="w-4 h-4" /> Google Scholar Profile
                            </a>
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-slate-100 relative">
                {image ? (
                    <img src={image} alt={name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl font-serif font-bold text-blue-800">
                        {name.charAt(0)}
                    </div>
                )}
            </div>
            <span className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-1">{role}</span>
            <h3 className="text-xl font-serif font-bold text-slate-900 text-center mb-2">{name}</h3>
            {title && <p className="text-slate-500 text-xs text-center mb-4 line-clamp-3">{title}</p>}

            <div className="flex gap-2 mt-auto">
                {email && (
                    <a href={`mailto:${email}`} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title={email}>
                        <Mail className="w-5 h-5" />
                    </a>
                )}
                {phone && (
                    <a href={`tel:${phone.split(',')[0].trim()}`} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title={phone}>
                        <Phone className="w-5 h-5" />
                    </a>
                )}
                {scholar && (
                    <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Google Scholar">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                )}
            </div>
        </div>
    );
}
