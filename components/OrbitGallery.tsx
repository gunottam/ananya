"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface GalleryItem {
    id: string;
    type: "image" | "video";
    src: string;
    alt?: string;
}

interface OrbitGalleryProps {
    centerItem: GalleryItem;
    orbitItems?: GalleryItem[];
    radius?: number;
}

export default function OrbitGallery({
    centerItem,
    orbitItems = [],
    radius = 300,
}: OrbitGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isHoveringCenter, setIsHoveringCenter] = useState(false);
    const [rotation, setRotation] = useState(0);
    const requestRef = useRef<number>();
    const speedRef = useRef(0.04);

    useEffect(() => {
        if (!orbitItems || orbitItems.length === 0) return;

        const animate = () => {
            const isInteracting = activeIndex !== null || isHoveringCenter;
            const targetSpeed = isInteracting ? 0.002 : 0.04;
            speedRef.current += (targetSpeed - speedRef.current) * 0.05;
            setRotation((prev) => (prev + speedRef.current) % 360);
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [activeIndex, isHoveringCenter, orbitItems]);

    const centerScale = isHoveringCenter ? 1.4 : (activeIndex !== null ? 0.9 : 1);
    const centerFilter = isHoveringCenter
        ? "brightness(1.1) sepia(10%)"
        : (activeIndex !== null ? "grayscale(30%) blur(2px) brightness(0.8)" : "sepia(0%)");

    if (!orbitItems || orbitItems.length === 0) return null;

    return (
        <div className="relative w-full h-[800px] flex items-center justify-center overflow-visible perspective-container">

            {/* 1. Rotating Orbit Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <motion.div
                    animate={{ rotateX: 70, rotateZ: rotation }}
                    className="w-[600px] h-[600px] rounded-full border-2 border-dashed border-rose-300/50"
                />
            </div>

            <div className="relative w-[800px] h-[800px] flex items-center justify-center z-20">

                {/* --- CENTER ANCHOR --- */}
                <div className="relative flex items-center justify-center z-30">

                    {/* Glowing Aura behind Center */}
                    <div className={`absolute inset-0 bg-rose-500/30 blur-[60px] rounded-full transition-all duration-500 ${isHoveringCenter ? 'scale-150 opacity-100' : 'scale-110 opacity-70'}`} />

                    <motion.div
                        onMouseEnter={() => setIsHoveringCenter(true)}
                        onMouseLeave={() => setIsHoveringCenter(false)}
                        animate={{
                            scale: centerScale,
                            filter: centerFilter,
                            zIndex: isHoveringCenter ? 60 : 30,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-[320px] h-[420px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(244,63,94,0.4)] border-2 border-white/80 ring-4 ring-rose-300/50 cursor-pointer bg-rose-100"
                    >
                        <MediaItem item={centerItem} priority />

                        {/* Romantic Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-rose-900/50 via-transparent to-transparent transition-opacity duration-300 ${isHoveringCenter ? 'opacity-0' : 'opacity-100'}`} />

                        {!isHoveringCenter && activeIndex === null && (
                            <div className="absolute bottom-6 left-0 right-0 text-center">
                                <p className="text-white/95 font-serif italic text-xl tracking-wide drop-shadow-lg">My Whole World</p>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* --- ORBITING SATELLITES --- */}
                {orbitItems.map((item, index) => {
                    const angleStep = 360 / orbitItems.length;
                    const currentAngle = rotation + index * angleStep;
                    const radian = (currentAngle * Math.PI) / 180;

                    const x = Math.cos(radian) * radius;
                    const z = Math.sin(radian) * radius;
                    const waveOffset = Math.sin(radian * 2 + index) * 40;
                    const y = waveOffset;

                    const depthRatio = (z + radius) / (radius * 2);
                    const scale = 0.5 + 0.5 * depthRatio;
                    const opacity = 0.5 + 0.5 * depthRatio;
                    const blur = isHoveringCenter ? 4 : (1 - depthRatio) * 4;

                    const zIndex = Math.round(z) + 100;
                    const isActive = activeIndex === index;

                    return (
                        <motion.div
                            key={item.id}
                            className="absolute top-1/2 left-1/2 -ml-[80px] -mt-[100px] cursor-pointer will-change-transform"
                            style={{ x, y, zIndex: isActive ? 1000 : zIndex }}
                            animate={{
                                scale: isHoveringCenter ? 0.5 : (isActive ? 1.4 : scale),
                                opacity: isHoveringCenter ? 0.3 : (isActive ? 1 : opacity),
                                filter: isActive ? "blur(0px) brightness(1.05)" : `blur(${blur}px) brightness(0.95)`,
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div
                                className={`relative w-[160px] h-[200px] rounded-xl overflow-hidden transition-all duration-500 bg-white ${isActive
                                    ? "shadow-[0_0_40px_rgba(251,113,133,0.6)] border-2 border-rose-400 ring-2 ring-white scale-[1.02]"
                                    : "shadow-md border border-rose-200/60"
                                    }`}
                            >
                                <MediaItem item={item} />

                                {/* Vintage Golden Sheen */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-amber-200/30 pointer-events-none mix-blend-overlay opacity-80" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// Helper Component
function MediaItem({ item, priority = false }: { item: GalleryItem; priority?: boolean }) {
    if (item.type === "video") {
        return (
            <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
            />
        );
    }
    return (
        <Image
            src={item.src}
            alt={item.alt || "Memory"}
            fill
            className="object-cover"
            priority={priority}
        />
    );
}