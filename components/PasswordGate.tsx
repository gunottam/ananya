"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const CORRECT_PASSWORD = "ananya";

export default function PasswordGate() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false); // State for success animation
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
            setIsUnlocked(true);
            // Wait for the unlock animation before pushing
            setTimeout(() => {
                router.push("/home");
            }, 800);
        } else {
            setError(true);
            setPassword("");
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blush px-4 overflow-hidden relative">

            {/* Decorative background blobs */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 glassmorphism-strong rounded-[2rem] p-8 md:p-12 w-full max-w-md shadow-[0_8px_32px_rgba(255,182,193,0.3)] border border-white/40"
            >
                {/* Lock Icon Header */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        animate={{
                            scale: isUnlocked ? 1.2 : 1,
                            rotate: isUnlocked ? -15 : 0 // Tilt when unlocked
                        }}
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-inner transition-colors duration-500 ${isUnlocked ? "bg-green-100 text-green-500" : "bg-white/50 text-pink-400"
                            }`}
                    >
                        {isUnlocked ? (
                            // Unlocked Icon
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                            </svg>
                        ) : (
                            // Locked Heart Icon
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 11v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"></path>
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M12 16v2"></path>
                            </svg>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-serif font-light text-gray-800 mb-2 tracking-wide">
                        Just for You
                    </h1>
                    <p className="text-gray-500 text-sm tracking-widest uppercase">
                        Our Little World
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                    <motion.div
                        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="relative group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                placeholder="What's the magic word?"
                                className={`w-full px-6 py-4 rounded-full bg-white/40 backdrop-blur-md border outline-none text-center text-gray-700 placeholder-gray-400 transition-all duration-300 ${error
                                        ? "border-red-300 bg-red-50/50"
                                        : "border-white/50 focus:border-pink-300 focus:bg-white/60 focus:shadow-[0_0_20px_rgba(255,192,203,0.3)]"
                                    }`}
                            />
                            {/* Animated line at bottom */}
                            <div className={`absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent transition-transform duration-500 ${password ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`} />
                        </div>
                    </motion.div>

                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-pink-500 text-xs text-center font-medium"
                            >
                                Not quite... try again, my love.
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        // Subtle heartbeat animation
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-pastel-lavender to-pastel-pink text-white font-medium tracking-widest uppercase text-sm shadow-lg hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300"
                    >
                        {isUnlocked ? "Unlocking..." : "Enter"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}