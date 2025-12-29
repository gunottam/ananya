"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LoveLetter() {
  const [isEditing, setIsEditing] = useState(false);
  const [letterContent, setLetterContent] = useState(
    "My dearest,\n\nOn this special day, I want you to know how much you mean to me. Your smile lights up my world, and your presence makes every moment magical.\n\nToday, we celebrate not just another year, but the beautiful person you are and all the joy you bring to those around you.\n\nWith all my love,\nAlways"
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pastel-mint to-pastel-cream">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center mb-12 text-gray-800"
        >
          A Letter for You
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-2xl relative border-2 border-amber-200/50"
          style={{
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
          }}
        >
          {/* Decorative corner */}
          <div className="absolute top-4 left-4 text-2xl opacity-20">💌</div>
          <div className="absolute top-4 right-4 text-2xl opacity-20">💌</div>
          
          {/* Paper texture effect */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none rounded-2xl" />
          
          {isEditing ? (
            <textarea
              value={letterContent}
              onChange={(e) => setLetterContent(e.target.value)}
              onBlur={() => setIsEditing(false)}
              className="w-full min-h-[400px] p-4 text-lg text-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-pastel-rose rounded-lg bg-transparent relative z-10"
              style={{
                fontFamily: "'Dancing Script', 'Kalam', cursive",
                lineHeight: "1.8",
              }}
              autoFocus
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsEditing(true)}
              className="cursor-text min-h-[400px] p-4 text-lg text-gray-700 leading-relaxed relative z-10 whitespace-pre-line"
              style={{
                fontFamily: "'Dancing Script', 'Kalam', cursive",
                lineHeight: "1.8",
              }}
            >
              {letterContent}
            </motion.div>
          )}
          <p className="text-sm text-gray-500 mt-4 text-center italic relative z-10">
            Click to edit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
