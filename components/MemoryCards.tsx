"use client";

import { motion } from "framer-motion";

interface Memory {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    shadow: string;
}

// Custom Icons to replace generic emojis
const HeartIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
);
const StarIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
);
const MoonIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" /></svg>
);
const SparkleIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" /></svg>
);

const memories: Memory[] = [
    {
        title: "The Beginning",
        description: "The exact moment the universe aligned and our paths finally crossed.",
        icon: <SparkleIcon />,
        color: "from-rose-100 to-rose-200",
        shadow: "shadow-rose-300/50",
    },
    {
        title: "Pure Joy",
        description: "Those days when we laughed until our stomachs hurt and time stood still.",
        icon: <HeartIcon />,
        color: "from-purple-100 to-pink-100",
        shadow: "shadow-pink-300/50",
    },
    {
        title: "Our Adventures",
        description: "Hand in hand, exploring the world and writing our own story.",
        icon: <MoonIcon />,
        color: "from-blue-100 to-indigo-100",
        shadow: "shadow-indigo-300/50",
    },
    {
        title: "Blooming Love",
        description: "Watching our bond grow deeper, stronger, and more beautiful every day.",
        icon: <StarIcon />,
        color: "from-amber-100 to-orange-100",
        shadow: "shadow-amber-300/50",
    },
];

export default function MemoryCards() {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-[#fff5f5]">
            {/* Background ambience */}
            <div className="absolute inset-0 bg-[url('/textures/snow.svg')] opacity-40 mix-blend-multiply" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-rose-50 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-rose-900/80 mb-4 tracking-wide">
                        Chapters of Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -12 }}
                            className={`group relative rounded-3xl p-8 bg-white/40 backdrop-blur-md border border-white/60 hover:border-white transition-all duration-500`}
                        >
                            {/* Card Glow Effect on Hover */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${memory.color} blur-xl -z-10`} />

                            {/* Hard Shadow for Depth */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${memory.shadow} blur-md`} />

                            <div className="flex flex-col items-center text-center h-full">
                                {/* Icon Circle */}
                                <div className={`mb-6 p-4 rounded-full bg-white shadow-sm text-gray-400 group-hover:text-rose-500 group-hover:scale-110 group-hover:shadow-md transition-all duration-500`}>
                                    {memory.icon}
                                </div>

                                <h3 className="text-xl font-serif font-bold mb-4 text-gray-800 group-hover:text-rose-900 transition-colors">
                                    {memory.title}
                                </h3>

                                <p className="text-sm md:text-base text-gray-600 font-serif italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    {memory.description}
                                </p>

                                {/* Decorative Bottom Dot */}
                                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}