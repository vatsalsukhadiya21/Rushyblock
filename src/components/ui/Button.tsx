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
      primary: "bg-primary text-background hover:bg-primary/90 shadow-sm",
      secondary: "bg-secondary text-background hover:bg-secondary/90 shadow-sm",
      outline: "border border-border text-foreground hover:bg-muted transition-colors",
      ghost: "text-foreground hover:bg-muted transition-colors",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm rounded-md",
      md: "h-11 px-8 text-base rounded-lg",
      lg: "h-14 px-10 text-lg rounded-xl",
    };

    const buttonContent = (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-colors overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
      </motion.button>
    );

    return buttonContent;
  }
);

Button.displayName = "Button";
