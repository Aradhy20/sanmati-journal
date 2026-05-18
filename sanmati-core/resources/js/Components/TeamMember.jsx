import { Mail, Phone, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamMember({ name, role, title, phone, email, scholar, image, variant = 'grid' }) {
    const isLarge = variant === 'large';
    
    const containerClasses = isLarge 
        ? "flex flex-col items-center p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 max-w-xl mx-auto w-full group relative overflow-hidden"
        : "flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden h-full";

    const photoContainerClasses = isLarge
        ? "w-48 h-48 rounded-full bg-dark mb-8 overflow-hidden border-4 border-white shadow-2xl relative z-10"
        : "w-28 h-28 rounded-3xl bg-dark mb-6 overflow-hidden border-2 border-white shadow-lg relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500";

    return (
        <div className={containerClasses}>
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors duration-700" />
            
            <div className={photoContainerClasses}>
                {image ? (
                    <img loading="lazy" src={image} alt={name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-3xl font-serif font-black text-white">
                        {name.charAt(0)}
                    </div>
                )}
            </div>

            <div className="relative z-10 text-center flex flex-col items-center h-full">
                <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-4 bg-secondary" />
                    <span className="text-secondary font-black text-[9px] uppercase tracking-[0.3em]">{role}</span>
                </div>
                
                <h3 className={`${isLarge ? 'text-3xl' : 'text-xl'} font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300`}>
                    {name}
                </h3>
                
                {title && (
                    <p className="text-muted text-xs font-semibold leading-relaxed mb-6 max-w-[200px]">
                        {title}
                    </p>
                )}

                <div className="mt-auto flex flex-col items-center gap-4 w-full">
                    {/* Social/Contact Strip */}
                    <div className="flex gap-4 p-2 bg-surface rounded-full border border-gray-50">
                        {email && (
                            <a href={`mailto:${email}`} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark/40 hover:text-primary hover:shadow-md transition-all" title={email}>
                                <Mail className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {phone && (
                            <a href={`tel:${phone.split(',')[0].trim()}`} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark/40 hover:text-secondary hover:shadow-md transition-all" title={phone}>
                                <Phone className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {scholar && (
                            <a href={typeof scholar === 'string' ? scholar : '#'} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark/40 hover:text-emerald-600 hover:shadow-md transition-all" title="Google Scholar">
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
