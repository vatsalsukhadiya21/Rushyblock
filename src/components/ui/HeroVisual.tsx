"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-fidelity smooth cursor tracking
  const mouseX = useSpring(0, { stiffness: 30, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use window center to avoid expensive layout thrashing from getBoundingClientRect on every mouse move
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;
      
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Depth offsets
  const fgX = useTransform(mouseX, [-1, 1], [-40, 40]);
  const fgY = useTransform(mouseY, [-1, 1], [-40, 40]);
  const mgX = useTransform(mouseX, [-1, 1], [-15, 15]);
  const mgY = useTransform(mouseY, [-1, 1], [-15, 15]);
  const bgX = useTransform(mouseX, [-1, 1], [-5, 5]);
  const bgY = useTransform(mouseY, [-1, 1], [-5, 5]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-[600px] flex items-center justify-center pointer-events-none mt-12 lg:mt-0"
      style={{ perspective: 1500 }}
    >
      {/* 1. Massive Volumetric Background (Escapes container to blend with environment) */}
      <motion.div 
        style={{ x: bgX, y: bgY, willChange: "transform, opacity" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] flex items-center justify-center"
      >
        <div className="absolute w-[60%] h-[120%] bg-[radial-gradient(ellipse,rgba(62,219,240,0.15)_0%,transparent_70%)] rotate-45 mix-blend-screen blur-2xl" />
        <div className="absolute w-[120%] h-[60%] bg-[radial-gradient(ellipse,rgba(62,219,240,0.12)_0%,transparent_70%)] rotate-45 mix-blend-screen blur-2xl" />
        <div className="absolute w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_60%)] rounded-full mix-blend-screen blur-3xl" />
      </motion.div>

      {/* 2. The Intense Focal Point (Premium Centerpiece) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_100px_40px_rgba(62,219,240,0.8)] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-primary/50 to-transparent rotate-45 blur-[1px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rotate-45 blur-[1px]" />
      </div>

      {/* Breathing Master Container with Edge Masking */}
      {/* The mask makes the 3D object fade seamlessly into the background, removing the "isolated box" look */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
      >
        {/* 3. Deep Neural Rings & Reflections (Midground) */}
        <motion.div
          style={{ x: mgX, y: mgY, transformStyle: "preserve-3d" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotateX: [0, -360], rotateY: [0, 360], rotateZ: [0, 90] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%]" 
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Cinematic Glass Panes cutting through space */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[30%] border-t border-b border-primary/20 bg-gradient-to-b from-primary/[0.05] to-transparent backdrop-blur-[4px]" style={{ transform: "rotateX(45deg) rotateY(45deg) translateZ(50px)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-full border-l border-r border-white/10 bg-gradient-to-r from-white/[0.02] to-transparent backdrop-blur-[4px]" style={{ transform: "rotateX(-45deg) rotateY(-45deg) translateZ(-50px)" }} />
            
            {/* Ambient Concentric Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-primary/30 rounded-full" style={{ transform: "rotateX(75deg)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/10 rounded-full" style={{ transform: "rotateY(75deg)" }} />
          </motion.div>
        </motion.div>

        {/* 4. Foreground Geometric Detail */}
        <motion.div
          style={{ x: fgX, y: fgY, transformStyle: "preserve-3d" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, -360], rotateZ: [0, -90] }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150%] h-[150%]" 
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Expansive Architectural Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-primary/20" style={{ transform: "translateZ(100px)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-white/10" style={{ transform: "translateZ(-100px)" }} />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-primary/10" style={{ transform: "rotateY(90deg) translateZ(100px)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-white/5" style={{ transform: "rotateX(90deg) translateZ(100px)" }} />

            {/* Micro Floating Nodes */}
            <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 bg-primary/40 shadow-[0_0_10px_rgba(62,219,240,1)]" style={{ transform: "translateZ(150px)" }} />
            <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,1)]" style={{ transform: "translateZ(-120px)" }} />
            <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-primary/30" style={{ transform: "rotateY(90deg) translateZ(120px)" }} />
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Edge Fade Overlay (Replaces expensive CSS mask) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,hsl(var(--background))_75%)] pointer-events-none z-[60]" />
    </div>
  );
}
