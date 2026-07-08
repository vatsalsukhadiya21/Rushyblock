"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Learning Journey", href: "/learning-journey" },
  { name: "Technologies", href: "/technologies" },
  { name: "Showcase", href: "/showcase" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
        isScrolled ? "pt-4 px-4" : "pt-8 px-6 md:px-12"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative",
          isScrolled
            ? "w-full md:max-w-4xl lg:max-w-5xl h-16 px-6 rounded-2xl bg-background/60 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "w-full max-w-7xl h-14 rounded-none bg-transparent border-transparent shadow-none"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group interactive" style={{ perspective: 400 }}>
          <motion.div
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-8 h-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of block */}
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-foreground/5 border border-white/10" 
              style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
            >
              <span className="font-black text-[14px] text-foreground group-hover:text-primary transition-colors duration-300">R</span>
            </div>
            {/* Back of block */}
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30" 
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="font-black text-[14px] text-primary">R</span>
            </div>
          </motion.div>
          <span className="font-bold text-[15px] tracking-tight group-hover:opacity-80 transition-opacity">Rushyblock.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors interactive rounded-full group",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-300 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop elements removed */}

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-24 left-4 right-4 bg-background/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                pathname === link.href ? "bg-white/10 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile elements removed */}
        </motion.div>
      )}
    </motion.header>
  );
}
