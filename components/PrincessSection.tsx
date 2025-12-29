"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 1. Twinkling Sparkle Component
const Sparkle = ({ style }: { style: React.CSSProperties }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
        }}
        className="absolute text-yellow-400 pointer-events-none"
        style={{ ...style, fontSize: Math.random() * 10 + 10 + "px" }}
    >
        ✦
    </motion.div>
);

export default function PrincessSection() {
    const [sparkles, setSparkles] = useState<any[]>([]);

    // Generate random sparkles on mount
    useEffect(() => {
        const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            },
        }));
        setSparkles(newSparkles);
    }, []);

    return (
        <section className="py-32 px-4 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background Gradient - Soft Royal Gold & Rose */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fff0f5] via-[#fff5e6] to-[#fff0f5]" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Floating Sparkles */}
            <div className="absolute inset-0 max-w-4xl mx-auto">
                {sparkles.map((s) => (
                    <Sparkle key={s.id} style={s.style} />
                ))}
            </div>

            <div className="max-w-3xl mx-auto relative z-10 text-center">
                {/* THE CROWN / TIARA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <motion.div
                        // Floating Animation
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 2, -2, 0],
                            filter: ["drop-shadow(0 0 0px gold)", "drop-shadow(0 0 15px gold)", "drop-shadow(0 0 0px gold)"]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gold-500"
                    >
                        {/* Elegant SVG Tiara */}
                        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M60 10C60 10 70 25 85 25C100 25 110 15 110 40V65H10V40C10 15 20 25 35 25C50 25 60 10 60 10Z"
                                stroke="#d4af37"
                                strokeWidth="2"
                                fill="rgba(255, 215, 0, 0.1)"
                            />
                            <circle cx="60" cy="10" r="4" fill="#d4af37" />
                            <circle cx="35" cy="25" r="3" fill="#d4af37" />
                            <circle cx="85" cy="25" r="3" fill="#d4af37" />
                            <circle cx="10" cy="40" r="2" fill="#d4af37" />
                            <circle cx="110" cy="40" r="2" fill="#d4af37" />
                            <path d="M60 35L63 45H57L60 35Z" fill="#d4af37" /> {/* Center Diamond */}
                        </svg>
                    </motion.div>
                </motion.div>

                {/* HEADLINE */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif text-yellow-600/80 mb-6 tracking-wide"
                    style={{ textShadow: "0 2px 10px rgba(212, 175, 55, 0.2)" }}
                >
                    My Forever Princess
                </motion.h2>

                {/* ROMANTIC BODY COPY */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-4"
                >
                    <p className="text-xl md:text-2xl text-gray-600 font-serif italic">
                        &quot;You don&apos;t need a crown to rule my heart.&quot;
                    </p>
                    <div className="w-16 h-[1px] bg-yellow-400/50 mx-auto my-6" />
                    <p className="text-lg md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto">
                        Today we celebrate you, but the truth is, you treat everyone around you with such grace and kindness every single day.
                        <br /><br />
                        In my story, <strong>you are the queen</strong>, the magic, and the happy ending.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}