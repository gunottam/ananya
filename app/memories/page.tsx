"use client";

import Navbar from "@/components/Navbar";
import OrbitGallery, { GalleryItem } from "@/components/OrbitGallery";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// 1. Cinematic Particle
const GlowParticle = ({ delay }: { delay: number }) => {
    const size = Math.random() * 4 + 2; // (2px - 6px)
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
                opacity: [0, 1, 0], // Full opacity at peak
                scale: [0, 1.2, 0],
                y: -120, // Float higher
                x: Math.random() * 60 - 30
            }}
            transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            // Warm gradient, pop against background
            className="absolute rounded-full bg-gradient-to-tr from-amber-300 to-rose-400 blur-[1px] shadow-[0_0_10px_rgba(251,113,133,0.4)]"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: size + "px",
                height: size + "px",
            }}
        />
    );
};

export default function MemoriesPage() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollYProgress } = useScroll();

    // Parallax effect for the background text
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const centerItem: GalleryItem = {
        id: "core",
        type: "image",
        src: "/photos/main.jpeg",
        alt: "The Heart of It All"
    };

    const orbitItems: GalleryItem[] = [
        { id: "1", type: "image", src: "/photos/1.jpeg" },
        { id: "v1", type: "video", src: "/photos/video1.MP4" },
        { id: "2", type: "image", src: "/photos/2.jpeg" },
        { id: "3", type: "image", src: "/photos/3.jpeg" },
        { id: "v2", type: "video", src: "/photos/video2.MP4" },
        { id: "4", type: "image", src: "/photos/4.jpeg" },
        { id: "5", type: "image", src: "/photos/5.jpeg" },
        { id: "v3", type: "video", src: "/photos/video3.MP4" },
        { id: "6", type: "image", src: "/photos/6.jpeg" },
        { id: "7", type: "image", src: "/photos/7.jpeg" },
        { id: "v4", type: "video", src: "/photos/video4.MP4" },
        { id: "8", type: "image", src: "/photos/8.jpeg" },
    ];

    return (
        <main className="min-h-screen relative bg-[#fff5f7] overflow-x-hidden">
            <Navbar />

            {/* --- CREATIVE LAYER 1: FILM GRAIN TEXTURE --- */}
            <div className="fixed inset-0 pointer-events-none z-[5] opacity-30 mix-blend-multiply">
                <div className="w-full h-full bg-[url('/textures/stardust.svg')] animate-pulse" />
            </div>

            {/* --- CREATIVE LAYER 2: SHIFTING AURORA BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Deep Rose Aura */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                        opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-rose-300/30 rounded-full blur-[120px] mix-blend-multiply"
                />

                {/* Golden Warmth Aura */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] bg-amber-200/30 rounded-full blur-[100px] mix-blend-multiply"
                />

                {/* Lavender Dream Aura */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-200/30 rounded-full blur-[120px] mix-blend-multiply"
                />
            </div>

            {/* --- CREATIVE LAYER 3: GIANT BACKGROUND TYPOGRAPHY --- */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]">
                <motion.h1
                    style={{ y: yBg }}
                    className="text-[20vw] font-serif font-bold text-rose-900 leading-none whitespace-nowrap"
                >
                    ETERNAL
                </motion.h1>
            </div>

            {/* --- CREATIVE LAYER 4: FLOATING PARTICLES (DUST) --- */}
            <div className="absolute inset-0 z-[1] pointer-events-none h-full w-full">
                {/* INCREASED DUST: Changed length from 30 to 100, and reduced delay multiplier for faster fill */}
                {isMounted && Array.from({ length: 100 }).map((_, i) => <GlowParticle key={i} delay={i * 0.1} />)}
            </div>

            {/* --- MAIN CONTENT LAYER --- */}
            <div className="relative z-10 flex flex-col min-h-screen">

                {/* Spacer for Navbar */}
                <div className="h-24"></div>

                <div className="w-full flex-1 flex flex-col items-center justify-center py-10">

                    {/* Cinematic Header */}
                    <div className="text-center mb-12 relative z-20 pointer-events-none select-none">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-rose-800 to-rose-500 mb-3 tracking-wide drop-shadow-sm">
                                Fragments of Forever
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="flex items-center justify-center gap-4"
                        >
                            <div className="h-[1px] w-12 bg-rose-300/50" />
                            <p className="text-rose-400 font-serif italic text-lg tracking-widest uppercase">
                                Timeless Moments
                            </p>
                            <div className="h-[1px] w-12 bg-rose-300/50" />
                        </motion.div>
                    </div>

                    {/* Orbit Gallery - Better Placement */}
                    <div className="w-full flex items-center justify-center relative mb-20">
                        {/* Floor Spotlight Effect */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-rose-500/10 blur-[60px] rounded-[100%] pointer-events-none" />

                        <OrbitGallery
                            centerItem={centerItem}
                            orbitItems={orbitItems}
                            radius={320}
                        />
                    </div>
                </div>

                {/* --- FOOTER --- */}
                <div className="relative z-20">
                    <Footer />
                </div>
            </div>

            {/* --- CREATIVE LAYER 5: VIGNETTE --- */}
            <div className="fixed inset-0 pointer-events-none z-[4] bg-radial-gradient-vignette opacity-40" />

            <style jsx global>{`
                .bg-radial-gradient-vignette {
                    background: radial-gradient(circle at center, transparent 40%, #5e2c38 150%);
                }
            `}</style>
        </main>
    );
}