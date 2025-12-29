"use client";

import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { CometCard } from "@/components/ui/comet-card";
import { motion } from "framer-motion";

export default function MemoriesPage() {
    // Add your image and video filenames here
    // Supports: .JPG, .JPEG, .PNG (images) and .MP4, .MOV, .WEBM (videos)
    const mediaFiles = [
        "1.JPG",
        "285B44CB-E147-4DBD-B286-CBE082583E84.JPG",
        "531d1374-2493-49c3-9025-ebf2b51fb13e.JPG",
        "664AA780-04B1-48DA-B1C2-533BB289FE5F.JPG",
        "video1.MP4",
        // Add more files here (images or videos)
        // Example: "video1.MP4", "photo5.JPG", etc.
    ];

    // Helper function to check if file is a video
    const isVideo = (filename: string): boolean => {
        const videoExtensions = [".MP4", ".MOV", ".WEBM", ".AVI", ".MKV"];
        const upperFilename = filename.toUpperCase();
        return videoExtensions.some((ext) => upperFilename.endsWith(ext));
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blush">
            <Navbar />
            <div className="pt-24 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-gray-800"
                    >
                        Our Memories
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediaFiles.map((filename, index) => {
                            const isVideoFile = isVideo(filename);

                            return (
                                <MediaCard
                                    key={filename}
                                    filename={filename}
                                    index={index}
                                    isVideo={isVideoFile}
                                />
                            );
                        })}
                    </div>

                    {mediaFiles.length === 0 && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-center text-gray-600 mt-12 text-sm"
                        >
                            Add your media filenames (images or videos) to the mediaFiles array in the code
                        </motion.p>
                    )}
                </div>
            </div>
        </main>
    );
}

// Media Card Component (handles both images and videos)
function MediaCard({
    filename,
    index,
    isVideo,
}: {
    filename: string;
    index: number;
    isVideo: boolean;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (isVideo && videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.log("Video play error:", err);
            });
        }
    };

    const handleMouseLeave = () => {
        if (isVideo && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to start
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CometCard className="h-full">
                <div className="glassmorphism-strong rounded-2xl overflow-hidden h-full min-h-[300px] relative bg-gradient-to-br from-pastel-lavender/30 to-pastel-pink/30">
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={`/photos/${filename}`}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />
                    ) : (
                        <Image
                            src={`/photos/${filename}`}
                            alt={`Memory ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}
                    {isVideo && (
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </div>
                    )}
                </div>
            </CometCard>
        </motion.div>
    );
}

