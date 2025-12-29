"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMusic } from "@/components/MusicProvider";

const MusicToggle = () => {
    const { isPlaying, toggle } = useMusic();

    return (
        <button
            onClick={toggle}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-sm text-gray-700 flex items-center gap-2"
        >
            {isPlaying ? <span>🔊</span> : <span>🔈</span>}
        </button>
    );
};

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/home", label: "Home" },
        { href: "/memories", label: "Memories" },
        { href: "/surprise", label: "Surprise" },
    ];

    return (
        // changed: "fixed top-0" -> "fixed top-6" (Floating effect)
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative px-8 py-3 rounded-full glassmorphism backdrop-blur-xl bg-white/30 border border-white/40 shadow-[0_8px_32px_rgba(255,182,193,0.2)]"
            >
                <div className="flex items-center space-x-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm md:text-base tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-pink-600 font-semibold" : "text-gray-600 hover:text-pink-400"
                                    }`}
                            >
                                {/* Text Label */}
                                <span className="relative z-10 font-serif">{link.label}</span>

                                {/* Romantic Active Background (Soft Pill) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white/60 rounded-full shadow-sm"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Tiny Floating Heart for Active State */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-heart"
                                        className="absolute -top-1 -right-1 text-pink-500"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </motion.div>
                                )}
                            </Link>
                        );
                    })}

                    {/* Music toggle */}
                    <MusicToggle />
                </div>
            </motion.div>
        </nav>
    );
}