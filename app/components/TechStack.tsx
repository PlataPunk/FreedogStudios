"use client";

import Image from 'next/image';
import { motion, Variants } from "framer-motion";

export default function TechStack() {
    const technologies = [
        { name: 'AWS', logo: '/aws_logo.png' },
        { name: 'Python', logo: '/python_logo.png' },
        { name: 'Node.js', logo: '/node_dark_logo.png' },
        { name: 'Android', logo: '/android_logo.png' },
        { name: 'iOS', logo: '/ios_logo.png' },
        { name: 'n8n', logo: '/n8n_full_white_logo.png' }
    ];

    const partners = [
        { name: 'Stripe', logo: '/stripe_logo.png' },
        { name: 'Clip', logo: '/clip_logo.png' },
        { name: 'Openpay', logo: '/openpay_logo.png' },
    ];

    const logoStyle = "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y:0,
            transition: { duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98], },
        }
    };

    const hoverVariants: Variants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.2,
            transition: { duration: 1.3, ease: [0.21, 0.47, 0.32, 0.98], },
        },
    };

    return (
        <section className="py-10 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="text-textMuted text-center text-sm uppercase tracking-widest mb-4">
                        Tecnologías
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-8 mb-12">

                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                            className="w-24 h-24  rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow">
                            <motion.div
                                variants={hoverVariants}
                                className="w-12 h-12 bg-textMuted/10 rounded-lg flex items-center justify-center">
                                <Image src={tech.logo} alt={tech.name} width={500} height={500} className={logoStyle} />
                            </motion.div>
                            <span className="text-textSecondary text-xs font-semibold">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-10 h-px bg-textMuted/30 mx-auto mb-4 origin-center"/>

                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="text-textMuted text-center text-sm uppercase tracking-widest mb-4">
                    Partners
                </motion.p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-8">
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.name}
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                            className="w-24 h-24 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow">
                            <motion.div
                                variants={hoverVariants}
                                className="w-12 h-12 bg-textMuted/10 rounded-lg flex items-center justify-center">
                                <Image src={partner.logo} alt={partner.name} width={500} height={500} className={logoStyle} />
                            </motion.div>
                            <span className="text-textSecondary text-xs font-semibold">{partner.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}