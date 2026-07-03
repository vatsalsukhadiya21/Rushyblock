import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hoverEffect 
            ? { 
                y: -6, 
                boxShadow: "0 20px 40px rgba(62,219,240,0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              } 
            : undefined
        }
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--card)] text-[var(--card-foreground)] p-6 md:p-10",
          "border border-[var(--border)]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

PremiumCard.displayName = "PremiumCard";
