"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Simple floating particle component for atmosphere
const Particle = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 0, x: Math.random() * 100 - 50 }}
        animate={{
            opacity: [0, 0.8, 0],
            y: -150, // Float upwards
            x: Math.random() * 100 - 50 + (Math.random() > 0.5 ? 20 : -20), // Slight horizontal drift
        }}
        transition={{
            duration: Math.random() * 5 + 5, // Random duration between 5-10s
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
        }}
        className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
    />
);

export default function RomanticHero({ name = "My Love" }: { name?: string }) {
    const [particles, setParticles] = useState<number[]>([]);

    // Generate particles on mount
    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => i);
        setParticles(newParticles);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pastel-pink to-pastel-lavender px-4 relative overflow-hidden">
            {/* 1. Dynamic Background - Breathing Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-200/40 rounded-full blur-3xl opacity-70 mix-blend-multiply"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-pastel-lavender/40 rounded-full blur-3xl opacity-70 mix-blend-multiply"
            />

            {/* 2. Atmosphere - Floating dust motes */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((i) => (
                    <div key={i} className="absolute" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}>
                        <Particle delay={Math.random() * 5} />
                    </div>
                ))}
            </div>

            {/* 3. Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center max-w-3xl relative z-10 flex flex-col items-center"
            >
                {/* Subtle decorative element */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="mb-6 text-rose-400 opacity-80"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-6xl font-serif text-rose-900/80 mb-4 tracking-wide"
                >
                    Happy Birthday,
                </motion.h1>

                {/* The Name - The centerpiece */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-8 relative"
                >
                    {/* A soft glow behind the name */}
                    <div className="absolute inset-0 bg-rose-300/30 blur-xl rounded-full -z-10 scale-110" />
                    <motion.p
                        // A subtle heartbeat pulse animation on the name
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-rose-600"
                        style={{ textShadow: "0 4px 12px rgba(244, 63, 94, 0.2)" }}
                    >
                        {name}
                    </motion.p>
                </motion.div>

                {/* Romantic Copy */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-2xl text-rose-800/90 max-w-xl mx-auto leading-relaxed font-serif italic"
                >
                    &quot;You are the greatest gift life has ever given me. Today, I celebrate the incredible person you are, and another year of loving you more than the last.&quot;
                </motion.p>
            </motion.div>
        </section>
    );
}