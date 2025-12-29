"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-16 px-4 overflow-hidden bg-gradient-to-t from-[#fff0f5] to-white">

            {/* Soft Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-rose-200/20 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                {/* The Heartbeat */}
                <motion.div
                    className="flex justify-center mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-3xl text-rose-300">❦</span>
                </motion.div>

                {/* The Promise */}
                <p className="font-serif text-xl md:text-2xl text-rose-900/80 italic mb-4 tracking-wide">
                    &quot;Created with every beat of my heart, just for you.&quot;
                </p>

                {/* The Signature */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-[1px] bg-rose-200 mb-2" />
                    <p className="text-xs text-rose-400 uppercase tracking-[0.2em]">
                        Yours Forever &bull; {currentYear}
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}