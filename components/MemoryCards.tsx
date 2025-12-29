"use client";

import { motion } from "framer-motion";

interface Memory {
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const memories: Memory[] = [
  {
    title: "First Meeting",
    description: "The moment our paths crossed and everything changed.",
    emoji: "✨",
    color: "from-pastel-lavender/40 to-pastel-pink/40",
  },
  {
    title: "Laughter Together",
    description: "Those moments when time stands still and joy fills the air.",
    emoji: "💕",
    color: "from-pastel-pink/40 to-pastel-rose/40",
  },
  {
    title: "Adventures",
    description: "Every journey we&apos;ve taken, creating stories to last forever.",
    emoji: "🌙",
    color: "from-pastel-rose/40 to-pastel-lavender/40",
  },
  {
    title: "Growing Together",
    description: "Watching our bond deepen with each passing day.",
    emoji: "🌸",
    color: "from-pastel-blush/40 to-pastel-lavender/40",
  },
];

export default function MemoryCards() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pastel-cream to-pastel-lavender/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800"
        >
          Precious Memories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glassmorphism-strong rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${memory.color}`}
            >
              <div className="text-4xl mb-4 text-center">{memory.emoji}</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800 text-center">
                {memory.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                {memory.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
