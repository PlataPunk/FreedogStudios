"use client";

import { HeroBackground } from "@/app/animations/HeroBackground";
import { motion, Variants } from "framer-motion";

export default function Hero() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }},
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-primary">
            <div className="max-w-4xl mx-auto text-center z-10">
                <HeroBackground />
                <motion.div className="max-w-5xl mx-auto text-center z-10 antialiased"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible">
                    <motion.h1 variants={itemVariants}
                               className="text-4xl md:text-6xl font-bold text-bg-main mb-6 tracking-tight leading-[1.1]">
                        Somos el brazo tecnológico que potencia la comunicación con tus clientes.
                    </motion.h1>
                    <motion.p variants={itemVariants}
                        className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light" >
                        Implementamos Apps Móviles, IA aplicada a tus Bots y análisis de datos para que sepas exactamente qué necesitan tus usuarios.
                    </motion.p>

                    <motion.div variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4" >
                        <a href="#contacto" className="bg-secondary hover:bg-accent text-bgMain px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto inline-block text-center" >
                            Mándanos un mensaje 👉
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}