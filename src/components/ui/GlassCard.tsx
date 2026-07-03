"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
  glowColor?: string;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      children,
      hoverEffect = true,
      glowColor = "rgba(37,99,235,0.15)",
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative rounded-2xl glass-card overflow-hidden group p-6",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
