"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const cases = [
    {
        id: 'ubi',
        title: 'UBI: Movilidad de Siguiente Nivel',
        tag: 'Mobile & Cloud Infrastructure',
        challenge: 'Crear una plataforma de movilidad escalable con sincronización en tiempo real.',
        solution: 'Desarrollo de App Nativa (iOS/Android), junto con WebApp y bot en Telegram, con una arquitectura de backend optimizada en AWS para soportar picos de alta demanda.',
        techStack: ['Swift', 'Kotlin', 'Node.js', 'AWS', 'Telegram API'],
        cta: 'Explorar Arquitectura',
        workflow: '/workflow-ubi.png'
    },
    {
        id: 'freedoglabs',
        title: 'Freedoglabs: El Hub Fintech',
        tag: 'Fintech / SaaS Dashboard',
        challenge: 'Fragmentación de datos de pagos entre múltiples proveedores (Clip, Stripe, Openpay).',
        solution: 'Dashboard unificado que centraliza la conciliación bancaria y visualización de flujos transaccionales en una sola interfaz, junto con envío de links de pago por medio de un bot de WhatsApp.',
        techStack: ['Next.js', 'Python', 'PostgreSQL', 'Stripe', 'Clip', 'Openpay'],
        cta: 'Explorar Arquitectura',
        workflow: '/workflow-freedoglabs.png'
    },
    {
        id: 'pixie',
        title: 'Pixie: Bot Financiero',
        tag: 'Conversational Commerce',
        challenge: 'Darle a los usuarios un método confiable para registrar gastos y movimientos financieros con solo un mensaje.',
        solution: 'Un bot transaccional en WhatsApp que permite consultas y reportes financieros mediante flujos conversacionales seguros.',
        techStack: ['WhatsApp Business API', 'Node.js', 'MongoDB', 'Payment Gateway'],
        cta: 'Ver Flujo Conversacional',
        workflow: '/workflow-pixie.png'
    },
    {
        id: 'ai-music',
        title: 'AI Music Engine: Data & Content',
        tag: 'AI & Data Engineering',
        challenge: 'Automatizar la curaduría musical y scraping para sistemas de radio/Spotify.',
        solution: 'Sistema híbrido (Python + MySQL + OpenAI) que procesa metadatos y genera recomendaciones inteligentes de contenido.',
        techStack: ['Python', 'MySQL', 'OpenAI', 'Spotify API', 'Web Scraping'],
        cta: 'Explorar el Modelo',
        workflow: '/workflow-pytsmaster.png'
    },
    {
        id: 'iot',
        title: 'IoT Project: Control Embebido',
        tag: 'IoT & Systems Engineering',
        challenge: 'Conectividad y monitoreo de hardware remoto.',
        solution: 'Implementación de protocolos MQTT para comunicación bidireccional entre dispositivos y nube.',
        techStack: ['MQTT', 'Python', 'AWS IoT Core', 'React', 'Docker'],
        cta: 'Ver Arquitectura IoT',
        workflow: '/workflow-poseidon.png'
    },
];


export default function Portfolio() {
    const cardVariants: Variants = {
        hiddenLeft: { opacity: 0, x: -50 },
        hiddenRight: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            }
        }
    }

    return (
        <section className="py-12 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-secondary text-center text-sm uppercase tracking-widest mb-4" >
                    Portafolio
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-center text-surface mb-6" >
                    Casos de Estudio
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-textMuted text-center max-w-2xl mx-auto mb-16" >
                    No solo proyectos. Arquitecturas diseñadas para resolver problemas reales.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.id}
                            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative bg-bgMain border border-slate-800 rounded-xl overflow-hidden hover:border-secondary transition-colors flex flex-col" >
                            <div className="w-full h-48 bg-primary flex items-center justify-center border-b border-slate-800">
                                <div className="flex flex-col items-center gap-2 text-textMuted/40">
                                    <Image src={caseItem.workflow} alt={caseItem.id} width={256} height={256} />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block self-start bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-4" >
                                    {caseItem.tag}
                                </motion.span>

                                <h3 className="text-xl font-bold text-textPrimary mb-5">
                                    {caseItem.title}
                                </h3>

                                <div className="mb-4">
                                    <p className="text-xs font-mono uppercase tracking-widest text-secondary mb-1">
                                        El Reto
                                    </p>
                                    <p className="text-textSecondary text-sm leading-relaxed">
                                        {caseItem.challenge}
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <p className="text-xs font-mono uppercase tracking-widest text-secondary mb-1">
                                        La Solución
                                    </p>
                                    <p className="text-textSecondary text-sm leading-relaxed">
                                        {caseItem.solution}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {caseItem.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-primary text-accent text-xs font-mono px-3 py-1 rounded-full" >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-auto self-start flex items-center gap-2 text-secondary hover:text-accent text-sm font-semibold transition-colors" >
                                    {caseItem.cta}
                                    <ExternalLink size={14} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}