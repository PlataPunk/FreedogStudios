"use client";

import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from "react";

export const HeroBackground = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isMobile, setIsMobile] = useState(false);
    const driftX = useMotionValue(0);
    const driftY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {

        // Inicializa las dimensiones solo en el client
        const updateDimensions = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
            setIsMobile(window.innerWidth < 768);
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);


        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", updateDimensions);
        };
    }, [mouseX, mouseY]);

    useEffect(() => {
        if (!isMobile) return;

        const animationX = animate(driftX, [0, 80, -60, 40, 0], {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
        });

        const animationY = animate(driftY, [0, -70, 50, -30, 0], {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
        });

        return () => {
            animationX.stop();
            animationY.stop();
        };
    }, [isMobile, driftX, driftY]);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-primary">
            {/* Patrón de puntos (Grid) */}
            <motion.div
                style={{
                    x: useTransform(isMobile ? driftX : smoothX, (v) => v * 0.05),
                    y: useTransform(isMobile ? driftY : smoothY, (v) => v * 0.05),
                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
                className="absolute inset-0 opacity-20"
            />

            {/* Brillo radial */}
            <motion.div
                style={{
                    left: useTransform(isMobile ? driftX : smoothX, (v) => v + dimensions.width / 2),
                    top: useTransform(isMobile ? driftY : smoothY, (v) => v + dimensions.height / 2),
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
            />
        </div>
    );
}