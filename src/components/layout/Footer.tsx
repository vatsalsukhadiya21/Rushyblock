"use client";

import Link from "next/link";
import { GitBranch, MessageCircle, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight interactive">
            Rushyblock.
          </Link>
          <p className="text-sm text-muted-foreground">
            A personal knowledge hub documenting my journey through Blockchain, Rust, and the Arbitrum ecosystem.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: GitBranch, href: "https://github.com/vatsalsukhadiya21" },
            { icon: Briefcase, href: "https://www.linkedin.com/in/vatsal-sukhadiya/" },
            { icon: Mail, href: "mailto:whatscr4000@gmail.com" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary hover:text-white transition-colors interactive"
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
        © 2026 Vatsal Sukhadiya.<br className="md:hidden" /> Built with Next.js, Tailwind CSS, and Framer Motion.
      </div>
    </footer>
  );
}
