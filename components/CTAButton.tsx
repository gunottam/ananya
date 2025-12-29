"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAButton() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-rose-50/50 to-white overflow-hidden relative">

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Gentle Lead-in Text */}
                    <p className="font-serif text-xl md:text-2xl text-gray-500 italic mb-8 opacity-80">
                        &quot;Every picture tells a part of our story...&quot;
                    </p>

                    <Link href="/memories" className="relative group">
                        {/* 1. The Ripple/Heartbeat Effect behind the button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                            <motion.div
                                animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 bg-rose-200 rounded-full blur-md"
                            />
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                className="absolute inset-0 bg-rose-300 rounded-full blur-sm"
                            />
                        </div>

                        {/* 2. The Main Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-10 py-5 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-serif text-xl tracking-wide shadow-xl overflow-hidden"
                            style={{
                                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            {/* Shimmer Effect overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />

                            <span className="relative z-10 flex items-center gap-3">
                                Relive Our Journey
                                {/* Animated Arrow */}
                                <motion.svg
                                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </motion.svg>
                            </span>
                        </motion.button>
                    </Link>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-sm text-gray-400 tracking-widest uppercase"
                    >
                        Take a walk down memory lane
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}