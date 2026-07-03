"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxLayer({ children, offset = 30, className = "" }: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  // Apply a subtle spring to smooth out the scroll tie
  const y = useSpring(rawY, { damping: 40, stiffness: 400, mass: 0.2 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
