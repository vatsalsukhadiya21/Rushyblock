"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "@/components/providers/CursorProvider";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    const { setCursorState } = useCursor();
    
    return (
      <motion.div
        ref={ref}
        onMouseEnter={() => {
          if (hoverEffect) setCursorState("hover");
        }}
        onMouseLeave={() => {
          if (hoverEffect) setCursorState("default");
        }}
        whileHover={
          hoverEffect 
            ? { 
                y: -2,
                rotateX: 1,
                rotateY: -1,
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              } 
            : undefined
        }
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-md)] bg-card text-card-foreground p-6 md:p-10",
          "border border-border group",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);

PremiumCard.displayName = "PremiumCard";
