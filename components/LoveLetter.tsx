"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoveLetter() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [letterContent, setLetterContent] = useState(
        "Meri pyari Ananya\n\n" +
        "Jab pehli baar tum mere khayalon mein aayi thi usi pal se tum meri life ka woh hissa ban gayi ho jise main har roz har haal mein choose karta hoon Dheere dheere tum sirf ek khayal nahi rahi tum meri reality ban gayi aur aaj sach kahoon toh tum mere liye sab kuch ho\n\n" +
        "Tumhare saath waqt bitana sirf khushi nahi deta balki sukoon deta hai Tumhare paas rehkar mujhe aisa lagta hai jaise main khud ke us hisse ke saath hoon jo kahin kho sa gaya tha aur jo sirf tumhare saath aakar hi wapas mila Tumhari presence mere liye healing jaisi hai quiet warm aur pure\n\n" +
        "Tumne meri life ko aur bhi meaningful bana diya hai Ananya Tumne mujhe complete nahi kiya tumne mujhe better banaya hai Aur shayad isi liye tum mere liye itni special ho Tumhari beauty sirf tumhari looks mein nahi balki tumhari simplicity tumhari kindness aur tumhari muskaan mein hai I love you honestly deeply and wholeheartedly\n\n" +
        "Main tumhe sirf aaj ke liye nahi chahta Main tumhe apne kal mein chahta hoon Ek din tumse shaadi karna tumhare saath subah uthna aur zindagi ke har phase mein tumhara haath pakad ke chalna yeh sirf khwab nahi hai yeh meri intention hai\n\n" +
        "Hamesha tumhara\nGunottam ♡"
    );


    // Auto-resize textarea logic
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLetterContent(e.target.value);
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    return (
        <section className="py-24 px-4 min-h-screen flex items-center justify-center bg-[#fdf2f8] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-100/50 via-transparent to-rose-200/30 pointer-events-none" />

            <div className="max-w-2xl w-full mx-auto relative z-10 perspective-1000">

                {/* Header (Only visible when open) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-3xl md:text-4xl font-serif text-center mb-8 text-rose-900/80 tracking-widest uppercase"
                        >
                            My Vows to You
                        </motion.h2>
                    )}
                </AnimatePresence>

                <div className="relative w-full min-h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="wait">

                        {/* STATE 1: THE ENVELOPE (LOCKED) */}
                        {!isOpen ? (
                            <motion.div
                                key="envelope"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.1, opacity: 0, rotateX: -90 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="bg-white w-full max-w-md aspect-[4/3] shadow-2xl rounded-lg relative flex items-center justify-center cursor-pointer group"
                                onClick={() => setIsOpen(true)}
                                style={{
                                    background: "linear-gradient(135deg, #fff0f5 0%, #fff 100%)",
                                    boxShadow: "0 25px 50px -12px rgba(255, 182, 193, 0.5)"
                                }}
                            >
                                {/* Envelope Flap Lines (CSS Art) */}
                                <div className="absolute inset-0 border-4 border-rose-100 rounded-lg pointer-events-none" />
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-rose-50/50 border-b border-rose-200" style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }} />

                                {/* The Wax Seal Button */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative z-20 flex flex-col items-center justify-center"
                                >
                                    <div className="w-20 h-20 bg-red-700 rounded-full shadow-lg flex items-center justify-center border-4 border-red-800/50 relative overflow-hidden">
                                        {/* Wax Texture */}
                                        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')]" />
                                        <span className="text-3xl text-red-900/80 font-serif font-bold">A</span>
                                    </div>
                                    <motion.p
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="mt-4 text-rose-400 font-serif italic text-sm"
                                    >
                                        Click to open
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ) : (

                            /* STATE 2: THE LETTER (OPEN) */
                            <motion.div
                                key="letter"
                                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ duration: 0.8, type: "spring", damping: 20 }}
                                className="bg-[#fffdf7] w-full p-8 md:p-12 rounded-sm shadow-xl relative"
                                style={{
                                    // Paper texture and realistic shadow
                                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,1) inset"
                                }}
                            >
                                {/* Date Stamp */}
                                <div className="absolute top-6 right-8 text-rose-300 font-serif text-sm italic">
                                    {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </div>

                                {/* Content Area */}
                                {isEditing ? (
                                    <textarea
                                        value={letterContent}
                                        onChange={handleInput}
                                        onBlur={() => setIsEditing(false)}
                                        autoFocus
                                        className="w-full bg-transparent resize-none focus:outline-none text-gray-700 leading-loose text-xl md:text-2xl"
                                        style={{
                                            fontFamily: "'Dancing Script', cursive", // Ensure you have this font or a similar cursive one loaded
                                            minHeight: "400px",
                                        }}
                                    />
                                ) : (
                                    <div
                                        onClick={() => setIsEditing(true)}
                                        className="w-full cursor-text text-gray-800 leading-loose text-xl md:text-2xl whitespace-pre-line"
                                        style={{
                                            fontFamily: "'Dancing Script', cursive",
                                        }}
                                    >
                                        {letterContent}
                                    </div>
                                )}

                                {/* Bottom Signature Decor */}
                                <div className="mt-8 flex justify-end">
                                    <div className="text-rose-400 opacity-60">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-xs text-center text-gray-300 mt-8 italic">
                                    (Tap text to edit your vows)
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Font is imported globally in app/globals.css */}
        </section>
    );
}