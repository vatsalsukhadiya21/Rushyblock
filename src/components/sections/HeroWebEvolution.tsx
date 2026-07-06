"use client";

import React, { memo, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Inject highly optimized CSS animations
const GlobalStyles = memo(() => (
  <style>{`
    @keyframes spin-y { to { transform: rotateY(360deg); } }
    @keyframes spin-all { to { transform: rotateX(360deg) rotateY(360deg); } }
    @keyframes float-y { 0%, 100% { transform: translateY(-15px); } 50% { transform: translateY(15px); } }
    @keyframes spin-z { to { transform: rotateZ(360deg); } }
    @keyframes spin-z-rev { to { transform: rotateZ(-360deg); } }
    .preserve-3d { transform-style: preserve-3d; }
  `}</style>
));

// Single SVG Definition for Circuit Pattern to prevent duplicated DOM nodes
const SVGSymbols = memo(() => (
  <svg style={{ display: "none" }}>
    <defs>
      <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10,10 L30,30 H50 M80,20 V40 L60,60 M20,80 L40,60 V40 M70,80 L90,60 H70" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="1.5" fill="currentColor" />
        <circle cx="50" cy="30" r="1.5" fill="currentColor" />
        <circle cx="80" cy="20" r="1.5" fill="currentColor" />
        <circle cx="60" cy="60" r="1.5" fill="currentColor" />
        <circle cx="40" cy="40" r="1.5" fill="currentColor" />
        <circle cx="90" cy="60" r="1.5" fill="currentColor" />
        <path d="M0,50 H20 L30,40 M100,50 H80 L70,40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </pattern>
    </defs>
  </svg>
));

const CubeFace = memo(({ rotate, translate, showLogo = false }: { rotate: string, translate: string, showLogo?: boolean }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center overflow-hidden border border-[var(--primary)]/30 bg-gradient-to-br from-[#0a192f] to-[#020c1b] text-[var(--primary)]"
    style={{ transform: `${rotate} ${translate}`, backfaceVisibility: "hidden" }}
  >
    {/* Single SVG rect referencing pattern reduces DOM nodes massively */}
    <svg className="absolute inset-0 w-full h-full opacity-30"><rect width="100%" height="100%" fill="url(#circuit)" /></svg>
    
    {showLogo && (
      <div className="absolute inset-0 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(62,219,240,0.6)]">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white">
          <path d="M6 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          <path d="M6 3H14C17.3137 3 20 5.68629 20 9C20 12.3137 17.3137 15 14 15H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          <path d="M12 15L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="text-[var(--primary)]" />
        </svg>
      </div>
    )}
  </div>
));

const SmallCube = memo(({ delay = 0, duration = 15, radius, yOffset, size = 32 }: { delay?: number, duration?: number, radius: number, yOffset: number, size?: number }) => {
  const z = size / 2;
  return (
    <div
      className="absolute top-1/2 left-1/2 z-20 preserve-3d pointer-events-none"
      style={{ 
        marginTop: yOffset,
        animation: `spin-y ${duration}s linear infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="absolute preserve-3d" style={{ transform: `translateX(${radius}px)` }}>
        <div
          className="relative preserve-3d"
          style={{ 
            width: size, height: size, marginLeft: -z, marginTop: -z,
            animation: `spin-all ${duration / 2}s linear infinite`
          }}
        >
          {[`translateZ(${z}px)`, `rotateY(180deg) translateZ(${z}px)`, `rotateY(-90deg) translateZ(${z}px)`, `rotateY(90deg) translateZ(${z}px)`, `rotateX(90deg) translateZ(${z}px)`, `rotateX(-90deg) translateZ(${z}px)`].map((t, i) => (
             <div key={i} className="absolute inset-0 bg-[#0a192f] border border-[var(--primary)]/40" style={{ transform: t, backfaceVisibility: "hidden" }} />
          ))}
        </div>
      </div>
    </div>
  );
});

export function HeroWebEvolution() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Reusing spring config
  const springConfig = { stiffness: 100, damping: 30 };
  const rotateXMouse = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateYMouse = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const rAFRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (rAFRef.current) return;
    
    // Batch mouse updates to a single rAF
    rAFRef.current = requestAnimationFrame(() => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      rAFRef.current = null;
    });
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    rAFRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section id="evolution" className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-20">
      <GlobalStyles />
      <SVGSymbols />
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-background to-transparent opacity-50 z-0 pointer-events-none" />
      
      {/* Ambient 3D glow (Fast radial gradient instead of expensive blur filter) */}
      <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-10 pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              Premium Web3 Engineering
            </div>
            
            <h1 className="text-[56px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.1] tracking-tight">
              The Evolution <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] drop-shadow-sm">
                of Trust
              </span>
            </h1>
            
            <p className="text-[20px] md:text-[22px] text-[var(--muted-foreground)] max-w-xl font-light leading-[1.6]">
              From reading static pages to owning your digital destiny. Master the protocols that are rebuilding the internet with uncompromising precision and security.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg">Start Building</Button>
              <Button variant="outline" size="lg">View Curriculum</Button>
            </div>
          </motion.div>

          <div 
            className="lg:col-span-5 relative w-full h-[500px] lg:h-[600px] flex items-center justify-center [perspective:1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Holographic Floor Platform */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[100px] [transform:rotateX(75deg)] z-0 pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-[var(--primary)]/30 filter drop-shadow-[0_0_10px_rgba(62,219,240,0.5)] animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[var(--primary)]/20 border-dashed animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-[var(--primary)]/10 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[radial-gradient(circle,var(--primary)_0%,transparent_60%)] opacity-20 rounded-full" />
            </div>

            <motion.div 
              style={{ rotateX: rotateXMouse, rotateY: rotateYMouse }}
              className="relative w-full h-full flex items-center justify-center preserve-3d z-10"
            >
              <div className="relative flex items-center justify-center preserve-3d" style={{ animation: "float-y 6s ease-in-out infinite" }}>
                
                {/* Orbital Rings - nested for pure CSS composition */}
                <div style={{ transform: "rotateX(70deg)" }} className="absolute preserve-3d pointer-events-none">
                  <div className="w-[320px] h-[320px] rounded-full border border-[var(--primary)]/20" style={{ animation: "spin-z 20s linear infinite" }} />
                </div>
                <div style={{ transform: "rotateX(60deg) rotateY(20deg)" }} className="absolute preserve-3d pointer-events-none">
                  <div className="w-[380px] h-[380px] rounded-full border border-[var(--primary)]/10 border-dashed" style={{ animation: "spin-z-rev 25s linear infinite" }} />
                </div>

                {/* Orbiting Cubes */}
                <SmallCube delay={0} duration={15} radius={160} yOffset={20} size={32} />
                <SmallCube delay={2} duration={12} radius={190} yOffset={-40} size={24} />
                <SmallCube delay={5} duration={18} radius={140} yOffset={60} size={40} />

                {/* Main Cube */}
                <div className="relative w-[180px] h-[180px] preserve-3d" style={{ animation: "spin-all 30s linear infinite" }}>
                  <CubeFace rotate="rotateY(0deg)" translate="translateZ(90px)" showLogo={true} />
                  <CubeFace rotate="rotateY(90deg)" translate="translateZ(90px)" />
                  <CubeFace rotate="rotateY(180deg)" translate="translateZ(90px)" />
                  <CubeFace rotate="rotateY(-90deg)" translate="translateZ(90px)" />
                  <CubeFace rotate="rotateX(90deg)" translate="translateZ(90px)" />
                  <CubeFace rotate="rotateX(-90deg)" translate="translateZ(90px)" />
                </div>
                
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
