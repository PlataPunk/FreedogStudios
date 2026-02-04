"use client";

import { motion, Variants } from "framer-motion";
import { CreditCard, MessageSquare, Brain, Cloud } from 'lucide-react';

const services = [
    {
        id: 'fintech',
        icon: CreditCard,
        title: 'Ecosistemas de Pago & Integraciones PSP',
        focus: 'Más allá de un botón de pago. Hablamos de la arquitectura detrás.',
        copy: 'Implementamos infraestructuras de pago robustas y escalables. Desde la orquestación de múltiples PSPs hasta la creación de dashboards unificados para el control financiero en tiempo real.',
        keywords: ['Stripe', 'Openpay', 'Clip', 'Reconciliación Bancaria', 'Ledgers'],
        badge: 'Powered by Freedoglabs',
    },
    {
        id: 'conversacional',
        icon: MessageSquare,
        title: 'Automatización Transaccional & Bots',
        focus: 'No son bots de "Preguntas Frecuentes". Son bots que venden y cobran.',
        copy: 'Diseñamos flujos conversacionales inteligentes que cierran ventas. Integramos lógica transaccional directamente en WhatsApp y canales sociales, conectando tu inventario y pasarelas de pago con el usuario final.',
        keywords: ['WhatsApp Business API', 'Flujos de Pago', 'CRM Integration'],
        badge: null,
    },
    {
        id: 'ai',
        icon: Brain,
        title: 'Inteligencia de Datos & Modelos Híbridos',
        focus: 'Ingeniería de datos aplicada a problemas reales.',
        copy: 'Convertimos grandes volúmenes de datos en ventajas competitivas. Desarrollamos motores de recomendación, modelos de scraping avanzado y arquitecturas de IA híbridas que optimizan la toma de decisiones.',
        keywords: ['LLMs', 'Predictive Analytics', 'Web Scraping', 'Data Engineering'],
        badge: null,
    },
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Infraestructura Cloud & Sistemas Embebidos',
        focus: 'La parte "hard" de la tecnología.',
        copy: 'Construimos la base sólida que tu software necesita. Expertos en despliegues sobre AWS y desarrollo de sistemas embebidos mediante protocolos MQTT para proyectos de Internet de las Cosas.',
        keywords: ['AWS', 'Docker', 'MQTT', 'Arquitectura de Microservicios'],
        badge: null,
    },
];

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };

    return (
        <section className="py-20 px-6 bg-primary">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-6xl mx-auto">
                <motion.div variants={cardVariants} className="text-center mb-16">
                    <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-4 font-bold">
                        Servicios
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Especializaciones
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
                        Soluciones enterprise diseñadas para escalar con precisión absoluta.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -5, borderColor: "var(--color-secondary)" }}
                                className="relative bg-bg-main/5 border border-slate-800 rounded-2xl p-8 transition-colors group">
                                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
                                    <Icon size={28} className="text-secondary" />
                                </div>
                                {service.badge && (
                                    <span className="absolute top-6 right-8 bg-secondary/10 text-secondary text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-secondary/20">
                                        {service.badge}
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-secondary text-sm font-medium italic mb-5 opacity-90">
                                    {service.focus}
                                </p>
                                <p className="text-text-muted text-base leading-relaxed mb-8 font-light">
                                    {service.copy}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="bg-primary/50 text-text-muted text-[11px] font-medium px-3 py-1 rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}