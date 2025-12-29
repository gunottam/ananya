"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MemoryCards from "@/components/MemoryCards";
import PrincessSection from "@/components/PrincessSection";
import LoveLetter from "@/components/LoveLetter";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { useMusic } from "@/components/MusicProvider";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-300 via-pink-500 to-rose-300 origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const IntroOverlay = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white px-4 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-md space-y-8"
      >
        <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">
          For the best experience
        </p>
        <h1 className="text-3xl md:text-4xl font-serif italic text-rose-100">
          &quot;Please put on your headphones...&quot;
        </h1>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors tracking-widest uppercase"
        >
          Enter Our World
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default function HomeClient() {
  const [hasStarted, setHasStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  const music = useMusic();

  // Parallax Background transforms
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Disable scroll until entered
  useEffect(() => {
    if (!hasStarted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [hasStarted]);

  return (
    <>
      <AnimatePresence>
        {!hasStarted && <IntroOverlay onEnter={() => { setHasStarted(true); music.start(); }} />}
      </AnimatePresence>

      {/* Main Content */}
      <main className="min-h-screen relative overflow-hidden bg-[#fff0f5]">

        {/* --- GLOBAL CINEMATIC BACKGROUND --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Film Grain */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/noise.svg')] mix-blend-overlay" />

          {/* Moving Clouds / Fog Layers (Parallax) */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-40">
            <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-rose-200/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-200/20 rounded-full blur-[100px]" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-30">
            <div className="absolute top-[40%] right-[20%] w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[100px]" />
          </motion.div>
        </div>

        <ScrollProgress />

        {/* Only render content if started (or keep hidden behind overlay) */}
        <div className={`transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />

          <div className="flex flex-col gap-0"> {/* Gap 0 because sections have their own padding */}

            <section id="home">
              <Hero name="Ananya" />
            </section>

            <SectionWrapper>
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 h-20 w-[1px] bg-gradient-to-b from-transparent to-rose-300/50" />
                <MemoryCards />
              </div>
            </SectionWrapper>

            <SectionWrapper>
              <PrincessSection />
            </SectionWrapper>

            <SectionWrapper>
              {/* Parallax Quote Break */}
              <div className="py-20 text-center relative overflow-hidden">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-2xl md:text-4xl font-serif italic text-rose-900/60"
                >
                  &quot;In every universe, I would still choose you.&quot;
                </motion.p>
              </div>
            </SectionWrapper>

            <SectionWrapper>
              <LoveLetter />
            </SectionWrapper>

            <SectionWrapper>
              <CTAButton />
            </SectionWrapper>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
