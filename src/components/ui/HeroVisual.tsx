"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{
    id: number;
    yEnd: number;
    duration: number;
    delay: number;
    left: string;
    top: string;
  }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        yEnd: Math.random() * -100 - 50,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        left: `${30 + Math.random() * 40}%`,
        top: `${60 + Math.random() * 20}%`,
      }))
    );
  }, []);
  
  // High-fidelity smooth cursor tracking (spring for luxury feel)
  const mouseX = useSpring(0, { stiffness: 40, damping: 25, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
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

  // Outer tilt (responds to cursor)
  const rotateX = useTransform(mouseY, [-1, 1], [20, -20]);
  const rotateY = useTransform(mouseX, [-1, 1], [-25, 25]);
  
  // Subtle float
  const floatY = useSpring(0, { stiffness: 20, damping: 10 });
  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t += 0.05;
      floatY.set(Math.sin(t) * 15);
    }, 50);
    return () => clearInterval(interval);
  }, [floatY]);

  const CUBE_SIZE = 180;
  const HALF = CUBE_SIZE / 2;

  const faces = [
    { name: "front", rotate: "rotateY(0deg)", isFront: true },
    { name: "back", rotate: "rotateY(180deg)" },
    { name: "left", rotate: "rotateY(-90deg)" },
    { name: "right", rotate: "rotateY(90deg)" },
    { name: "top", rotate: "rotateX(90deg)" },
    { name: "bottom", rotate: "rotateX(-90deg)" },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-[600px] flex items-center justify-center pointer-events-none mt-12 lg:mt-0"
      style={{ perspective: 1800 }}
    >
      {/* Ambient Blue Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(62,219,240,0.15)_0%,transparent_60%)] blur-3xl mix-blend-screen" />

      {/* Tiny Glowing Particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          animate={{ 
            y: [0, p.yEnd], 
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_2px_rgba(62,219,240,0.8)]"
          style={{
            left: p.left,
            top: p.top,
          }}
        />
      ))}

      {/* Holographic Platform */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="w-[300px] h-[300px] border-[2px] border-primary/20 rounded-full flex items-center justify-center relative"
          style={{ transform: `translateY(${HALF + 80}px) rotateX(80deg)`, transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-2 border border-primary/40 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-8 border border-primary/10 rounded-full" />
          {/* Floor Reflection Glow */}
          <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full" />
        </div>
      </motion.div>

      {/* Outer Tilt Container */}
      <motion.div
        style={{ rotateX, rotateY, y: floatY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Inner Continuous Rotation Container */}
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex items-center justify-center"
        >
          
          {/* Main Cube */}
          {faces.map((face) => (
            <div
              key={face.name}
              className="absolute flex items-center justify-center overflow-hidden bg-zinc-950/80 backdrop-blur-sm border-[1.5px] border-primary/50 shadow-[inset_0_0_40px_rgba(62,219,240,0.15),0_0_20px_rgba(62,219,240,0.2)]"
              style={{
                width: CUBE_SIZE,
                height: CUBE_SIZE,
                transform: `${face.rotate} translateZ(${HALF}px)`,
                backfaceVisibility: "hidden"
              }}
            >
              {/* Metallic Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/80 pointer-events-none" />
              
              {/* Circuit Panels */}
              <div className="absolute inset-3 border border-primary/20" />
              <div className="absolute inset-6 border border-primary/10" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/20" />
              <div className="absolute left-0 top-1/2 h-[1px] w-full bg-primary/20" />
              <div className="absolute top-3 left-3 w-2 h-2 bg-primary/60 shadow-[0_0_8px_rgba(62,219,240,1)]" />
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-primary/60 shadow-[0_0_8px_rgba(62,219,240,1)]" />

              {/* R Engraving on Face */}
              <div 
                className="relative z-10 text-[90px] font-black font-heading tracking-tighter"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(62,219,240,0.8)",
                  background: "linear-gradient(135deg, #fff 0%, rgba(62,219,240,0.8) 50%, transparent 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  filter: "drop-shadow(0px 0px 15px rgba(62,219,240,0.8))"
                }}
              >
                R
              </div>
            </div>
          ))}

          {/* Small Orbiting Cubes */}
          {[1, 2, 3].map((i) => {
            const orbitSize = 250;
            const size = 20;
            return (
              <motion.div
                key={`small-cube-${i}`}
                animate={{ rotateY: [0, -360], rotateX: [0, 360] }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute"
                  style={{
                    width: size,
                    height: size,
                    transform: `rotateY(${i * 120}deg) translateZ(${orbitSize}px)`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Small cube faces */}
                  {["rotateY(0deg)", "rotateY(180deg)", "rotateY(-90deg)", "rotateY(90deg)", "rotateX(90deg)", "rotateX(-90deg)"].map((rot, idx) => (
                    <div
                      key={idx}
                      className="absolute w-full h-full bg-primary/10 border border-primary/50 shadow-[0_0_10px_rgba(62,219,240,0.5)]"
                      style={{ transform: `${rot} translateZ(${size/2}px)` }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </motion.div>
      
      {/* Vignette Overlay for smooth blending into background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,hsl(var(--background))_80%)] pointer-events-none z-[60]" />
    </div>
  );
}
