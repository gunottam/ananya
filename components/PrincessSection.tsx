"use client";

import { motion } from "framer-motion";

export default function PrincessSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pastel-rose via-pastel-lavender to-pastel-pink relative overflow-hidden">
      {/* Soft glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="text-6xl md:text-8xl mb-6"
          >
            👑
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-6 text-glow"
          >
            Today, You&apos;re Royalty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
          >
            On this special day, may you feel like royalty. You deserve all the love,
            admiration, and beautiful moments that life has to offer. Here&apos;s to celebrating
            the incredible person you are.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
