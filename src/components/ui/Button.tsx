"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      magnetic = true,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(37,99,235,0.4)]",
      secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_rgba(6,182,212,0.4)]",
      outline: "border border-border/50 text-foreground hover:bg-muted/50 backdrop-blur-sm",
      ghost: "text-foreground hover:bg-muted/50",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm rounded-md",
      md: "h-11 px-8 text-base rounded-lg",
      lg: "h-14 px-10 text-lg rounded-xl",
    };

    const buttonContent = (
      <motion.button
        ref={ref}
        whileHover={magnetic ? { scale: 1.05 } : { scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-colors overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </motion.button>
    );

    return buttonContent;
  }
);

Button.displayName = "Button";
