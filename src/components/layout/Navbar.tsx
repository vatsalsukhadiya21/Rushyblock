"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Code2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

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
  const { theme, setTheme } = useTheme();
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
        <Link href="/" className="flex items-center gap-2 group interactive">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground/5 border border-white/10"
          >
            <Code2 className="w-4 h-4 text-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
          <span className="font-bold text-[15px] tracking-tight group-hover:opacity-80 transition-opacity">Portfolio.</span>
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

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors interactive"
            aria-label="Toggle Theme"
          >
            <span className="text-[15px] opacity-70 hover:opacity-100 transition-opacity">
              {mounted ? (theme === "dark" ? "🌞" : "🌙") : " "}
            </span>
          </button>

          <Button
            variant="primary"
            size="sm"
            className="interactive h-9 px-6 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(62,219,240,0.15)] hover:shadow-[0_0_25px_rgba(62,219,240,0.3)] transition-shadow"
          >
            Resume
          </Button>
        </div>

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
          <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between px-2">
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsMobileMenuOpen(false);
              }}
              className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Toggle Theme
            </button>
            <Button variant="primary" size="sm" className="rounded-full px-6">
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
