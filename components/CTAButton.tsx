"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pastel-cream to-pastel-lavender/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/memories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(232, 213, 255, 0.4)",
                  "0 0 40px rgba(232, 213, 255, 0.6)",
                  "0 0 20px rgba(232, 213, 255, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-pastel-lavender to-pastel-pink text-white font-medium text-lg md:text-xl soft-glow hover:shadow-2xl transition-all"
            >
              Relive Our Memories
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

