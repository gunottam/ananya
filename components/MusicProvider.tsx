"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type MusicContextType = {
  start: () => void;
  stop: () => void;
  toggle: () => void;
  isPlaying: boolean;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
};

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // On mount, check sessionStorage to see if music was started earlier in the session
  useEffect(() => {
    const started = sessionStorage.getItem("musicStarted") === "true";
    if (started && audioRef.current) {
      // Try to resume (may be blocked by autoplay policies unless there was a gesture earlier)
      audioRef.current.volume = 0.4;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Play blocked; leave isPlaying false until user triggers
        });
    }
  }, []);

  const start = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.4;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        sessionStorage.setItem("musicStarted", "true");
      })
      .catch((e) => {
        console.log("Music play failed:", e);
      });
  };

  const stop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    sessionStorage.setItem("musicStarted", "false");
  };

  const toggle = () => {
    if (isPlaying) stop();
    else start();
  };

  return (
    <MusicContext.Provider value={{ start, stop, toggle, isPlaying }}>
      {children}
      <audio ref={audioRef} loop style={{ display: "none" }}>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>
    </MusicContext.Provider>
  );
};

export default MusicProvider;
