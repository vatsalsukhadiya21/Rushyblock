"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionTemplate, useTransform } from "framer-motion";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Springs for organic movement
  const mouseX = useSpring(0, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset (-1 to 1) relative to screen center for consistent feel
      const offsetX = (e.clientX - centerX) / (window.innerWidth / 2);
      const offsetY = (e.clientY - centerY) / (window.innerHeight / 2);
      
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Lighting Tracking - converts -1,1 to percentages for CSS gradients
  const lightX = useTransform(mouseX, [-1, 1], ["0%", "100%"]);
  const lightY = useTransform(mouseY, [-1, 1], ["0%", "100%"]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${lightX} ${lightY}, rgba(62,219,240,0.15) 0%, transparent 70%)`;

  // Depth Offsets (Foreground moves most, Background moves least)
  const fgX = useTransform(mouseX, [-1, 1], [-25, 25]);
  const fgY = useTransform(mouseY, [-1, 1], [-25, 25]);
  const mgX = useTransform(mouseX, [-1, 1], [-12, 12]);
  const mgY = useTransform(mouseY, [-1, 1], [-12, 12]);
  const bgX = useTransform(mouseX, [-1, 1], [-5, 5]);
  const bgY = useTransform(mouseY, [-1, 1], [-5, 5]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] flex items-center justify-center pointer-events-none mt-12 lg:mt-0"
      style={{ perspective: 1200 }}
    >
      {/* 1. Background Atmosphere & Bloom */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(62,219,240,0.06)_0%,transparent_60%)] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_60%)] rounded-full mix-blend-screen" />
      </motion.div>

      {/* 2. Midground Glassmorphic Shards */}
      <motion.div
        style={{ x: mgX, y: mgY, rotateZ: 30, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Shard 1 - Soft Rectangle */}
        <motion.div
          animate={{ rotateY: 360, rotateX: 20 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[65%] h-[65%] border border-white/10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div className="absolute inset-0 rounded-3xl" style={{ background: spotlight }} />
        </motion.div>

        {/* Shard 2 - Perfect Circle */}
        <motion.div
          animate={{ rotateX: -360, rotateY: -15 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute w-[50%] h-[50%] border border-primary/20 rounded-full bg-gradient-to-tr from-primary/[0.03] to-transparent"
          style={{ transformStyle: "preserve-3d" }}
        >
           <motion.div className="absolute inset-0 rounded-full" style={{ background: spotlight }} />
        </motion.div>
      </motion.div>

      {/* 3. Foreground Tech Accents */}
      <motion.div
        style={{ x: fgX, y: fgY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Outer Orbit */}
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute w-[75%] h-[75%] border border-dashed border-border/50 rounded-full opacity-60"
        />
        
        {/* Central Core */}
        <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)]" />
        <div className="absolute w-8 h-8 rounded-full border border-primary/40 animate-ping" style={{ animationDuration: '4s' }} />
        
        {/* Orbital Nodes */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[80%] h-[80%]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_15px_rgba(62,219,240,0.8)]" />
          <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-1 h-1 rounded-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
