"use client";

import { motion } from "framer-motion";

export default function Hero({ name = "Beautiful" }: { name?: string }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blush px-4 relative overflow-hidden">
      {/* Soft glowing background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-lavender/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-pink/30 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-800 mb-6"
        >
          Happy Birthday
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl font-serif text-gray-700 mb-8 text-glow"
        >
          {name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Today is a celebration of you, and all the joy you bring to the world.
          May this year be filled with endless happiness, love, and beautiful moments.
        </motion.p>
      </motion.div>
    </section>
  );
}
