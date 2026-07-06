"use client";

import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { useCursor } from "@/components/providers/CursorProvider";

export function PremiumCursor() {
  const { cursorState, setCursorState } = useCursor();

  // Highly responsive spring configuration to eliminate cursor lag
  const springConfig = { damping: 25, stiffness: 700, mass: 0.05 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setCursorState("interactive");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, setCursorState]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    hover: {
      scale: 1.5,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    interactive: {
      scale: 0.5,
      backgroundColor: "rgba(255, 255, 255, 1)",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{ x: cursorX, y: cursorY }}
      variants={variants}
      animate={cursorState}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
