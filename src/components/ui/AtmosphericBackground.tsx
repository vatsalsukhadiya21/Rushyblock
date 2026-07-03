"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

interface Particle {
  id: number;
  startX: string;
  startY: string;
  endY: string;
  endX: string;
  duration: number;
  delay: number;
}

export function AtmosphericBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Soft springs for elegant, non-jerky mouse tracking
  const mouseX = useSpring(50, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(50, { stiffness: 40, damping: 25 });
  
  const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.05), transparent 40%)`;

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to percentages
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate sparse particles once on client to prevent hydration mismatch
    setParticles(
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        startX: `${Math.random() * 100}vw`,
        startY: `${Math.random() * 100 + 10}vh`,
        endY: `${Math.random() * 100 - 20}vh`,
        endX: `${Math.random() * 100 + (Math.random() - 0.5) * 10}vw`,
        duration: Math.random() * 20 + 25,
        delay: Math.random() * 20,
      }))
    );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505] pointer-events-none selection:bg-transparent">
      
      {/* 1. Deep Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,25,30,0.3)_0%,rgba(5,5,5,1)_100%)]" />

      {/* 2. Floating Aurora / Blobs (Strictly CSS Gradients, No Filter Blur) */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full mix-blend-screen opacity-40 bg-[radial-gradient(circle,rgba(62,219,240,0.12)_0%,transparent_60%)]"
        animate={{
          x: ["0%", "12%", "-5%", "0%"],
          y: ["0%", "-8%", "10%", "0%"],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] rounded-full mix-blend-screen opacity-30 bg-[radial-gradient(circle,rgba(100,100,255,0.08)_0%,transparent_60%)]"
        animate={{
          x: ["0%", "-15%", "5%", "0%"],
          y: ["0%", "15%", "-5%", "0%"],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{ duration: 38, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* 3. Fog / Smoke */}
      <motion.div
        className="absolute bottom-[-10%] left-[-20%] w-[140%] h-[40%] bg-[linear-gradient(to_top,rgba(62,219,240,0.03)_0%,transparent_100%)]"
        animate={{
          x: ["-8%", "8%", "-8%"],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 4. Mouse-Reactive Spotlight */}
      <motion.div
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{ background: spotlightBackground }}
      />

      {/* 5. Sparse Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          initial={{ x: p.startX, y: p.startY, opacity: 0 }}
          animate={{
            y: [p.startY, p.endY],
            x: [p.startX, p.endX],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* 6. Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: NOISE_SVG }}
      />

      {/* 7. Dark Vignette Edge */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

    </div>
  );
}
