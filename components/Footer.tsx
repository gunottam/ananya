"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-pastel-cream to-pastel-pink">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-gray-600 mb-2">Made with love</p>
        <p className="text-sm text-gray-500">
          Wishing you the happiest of birthdays ✨
        </p>
      </motion.div>
    </footer>
  );
}

