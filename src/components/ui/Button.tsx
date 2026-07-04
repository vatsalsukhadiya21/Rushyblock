"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-primary text-background shadow-[0_4px_20px_rgba(62,219,240,0.15)] ring-1 ring-primary/50",
      secondary: "bg-white/5 text-foreground hover:bg-white/10 border border-white/10 shadow-sm",
      outline: "border border-white/10 text-foreground hover:bg-white/5 transition-colors",
      ghost: "text-foreground hover:bg-white/5 transition-colors",
    };

    const sizes = {
      sm: "h-9 px-5 text-sm rounded-full",
      md: "h-11 px-8 text-base rounded-full",
      lg: "h-14 px-10 text-lg rounded-full",
    };

    const buttonContent = (
      <motion.button
        ref={ref}
        whileHover={{ 
          scale: 1.03, 
          y: -3,
          boxShadow: variant === "primary" ? "0 20px 40px -12px rgba(62,219,240,0.4)" : "0 15px 30px -10px rgba(0,0,0,0.15)"
        }}
        whileTap={{ 
          scale: 0.98, 
          y: 0,
          boxShadow: variant === "primary" ? "0 5px 15px -5px rgba(62,219,240,0.2)" : "0 5px 15px -5px rgba(0,0,0,0.05)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.4 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-colors overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
      </motion.button>
    );

    return buttonContent;
  }
);

Button.displayName = "Button";
