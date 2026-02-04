import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';
import Image from "next/image";

const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'X', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
    return (
        <footer className="py-4 px-6 bg-bgDark">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-12">
                    <div className="w-40 h-28 flex items-center justify-center mb-4">
                        <Image src={"/freedog_logo_white.png"} alt={"Freedog logo"} width={500} height={500} className="w-full h-full object-contain"/>
                    </div>
                    <p className="text-textMuted text-sm text-center max-w-md">
                        Agencia boutique de arquitectura de software especializada en soluciones transaccionales y de alta disponibilidad.
                    </p>
                </div>

                <div className="w-full h-px bg-slate-700 mb-12" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-12 mb-12">
                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <p className="text-bgMain font-semibold text-sm uppercase tracking-widest">
                            Contacto
                        </p>
                        <p className="text-textMuted text-sm italic">
                            ¿Listo para escalar?
                        </p>
                        <a href="mailto:contacto@freedogstudios.com" className="flex items-center gap-2 text-secondary hover:text-accent text-sm font-semibold transition-colors duration-300" >
                            <Mail size={16} />
                            contacto@freedogstudios.com
                        </a>
                    </div>
                    <div className="flex gap-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a key={social.label} href={social.href} aria-label={social.label} className="text-textMuted hover:text-secondary transition-colors duration-300" >
                                <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-textMuted text-xs">
                        © 2025 Freedog Studios. Todos los derechos reservados.
                    </p>
                    <a href="#" className="text-textMuted hover:text-secondary text-xs transition-colors duration-300" >
                    Políticas de Privacidad
                    </a>
                </div>
            </div>
        </footer>
    );
}