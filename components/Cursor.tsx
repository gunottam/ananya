"use client";

import { useEffect, useState, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    id: number;
    size: number;
    life: number; // 1 to 0
}

export default function Cursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    // Refs for logic (no re-renders)
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const cursorPosRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Particle[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const lastParticleTime = useRef(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a, button, [role='button']") !== null;
            setIsHovering(isInteractive);
        };

        const animate = (time: number) => {
            if (!cursorRef.current || !canvasRef.current) return;

            // 1. Move Main Cursor (Smooth Lerp)
            const ease = 0.15;
            cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * ease;
            cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * ease;

            cursorRef.current.style.transform = `translate(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px)`;

            // 2. Handle Particles (Canvas)
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

                // Spawn new particle based on movement or time
                const dx = mouseRef.current.x - cursorPosRef.current.x;
                const dy = mouseRef.current.y - cursorPosRef.current.y;
                const speed = Math.sqrt(dx * dx + dy * dy);

                // Spawn particles if moving fast enough or every 50ms
                if (speed > 2 || time - lastParticleTime.current > 50) {
                    particlesRef.current.push({
                        x: cursorPosRef.current.x,
                        y: cursorPosRef.current.y,
                        id: Math.random(),
                        size: Math.random() * 4 + 2, // Random size
                        life: 1.0,
                    });
                    lastParticleTime.current = time;
                }

                // Draw and Update Particles
                particlesRef.current.forEach((p, index) => {
                    p.life -= 0.02; // Fade speed
                    p.y -= 0.5; // Float up slightly

                    if (p.life <= 0) {
                        particlesRef.current.splice(index, 1);
                    } else {
                        ctx.globalAlpha = p.life;
                        ctx.fillStyle = "rgba(255, 182, 193, 0.8)"; // Pastel Pink

                        // Draw Mini Heart
                        ctx.beginPath();
                        const topCurveHeight = p.size * 0.3;
                        ctx.moveTo(p.x, p.y + topCurveHeight);
                        // top left curve
                        ctx.bezierCurveTo(
                            p.x, p.y,
                            p.x - p.size / 2, p.y,
                            p.x - p.size / 2, p.y + topCurveHeight
                        );
                        // bottom left curve
                        ctx.bezierCurveTo(
                            p.x - p.size / 2, p.y + (p.size + topCurveHeight) / 2,
                            p.x, p.y + (p.size + topCurveHeight) / 2,
                            p.x, p.y + p.size
                        );
                        // bottom right curve
                        ctx.bezierCurveTo(
                            p.x, p.y + (p.size + topCurveHeight) / 2,
                            p.x + p.size / 2, p.y + (p.size + topCurveHeight) / 2,
                            p.x + p.size / 2, p.y + topCurveHeight
                        );
                        // top right curve
                        ctx.bezierCurveTo(
                            p.x + p.size / 2, p.y,
                            p.x, p.y,
                            p.x, p.y + topCurveHeight
                        );
                        ctx.fill();
                    }
                });
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Handle Resize for Canvas
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
            checkMobile();
        };
        handleResize();

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("resize", handleResize);

        // Initialize
        cursorPosRef.current = { x: mouseRef.current.x, y: mouseRef.current.y };
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isMobile]);

    // Hide default cursor
    useEffect(() => {
        if (isMobile) return;
        document.body.classList.add("custom-cursor-active");
        return () => {
            document.body.classList.remove("custom-cursor-active");
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* 1. Canvas for the Particle Trail (Mini Hearts) */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9998]"
            />

            {/* 2. Main Cursor (Big Glowing Heart) */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    transform: "translate(-50%, -50%)", // Centering logic
                }}
            >
                <div
                    className={`relative transition-all duration-300 ease-out flex items-center justify-center ${isHovering ? "scale-125" : "scale-100"
                        }`}
                >
                    {/* SVG Heart Shape */}
                    <svg
                        width={isHovering ? "40" : "24"}
                        height={isHovering ? "40" : "24"}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_10px_rgba(255,105,180,0.6)]"
                    >
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill={isHovering ? "#ff69b4" : "#ffb6c1"} // Hot pink on hover, pastel pink normally
                            stroke={isHovering ? "#fff" : "none"}
                            strokeWidth="1.5"
                        />
                    </svg>

                    {/* Inner Glow Pulse */}
                    {isHovering && (
                        <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-20 animate-pulse" />
                    )}
                </div>
            </div>

            {/* CSS to hide default cursor */}
            <style jsx global>{`
        .custom-cursor-active,
        .custom-cursor-active a,
        .custom-cursor-active button {
          cursor: none !important;
        }
      `}</style>
        </>
    );
}