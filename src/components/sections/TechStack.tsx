import * as React from "react";
import { motion } from "framer-motion";

export function TechStack() {
  // We use placeholder text/icons for the tech stack to simulate logos
  const tech = ["Rust", "Solana", "Anchor", "Next.js", "TypeScript", "Tailwind CSS", "Web3.js", "Ethereum"];

  return (
    <section className="py-16 relative bg-[var(--card)] border-y border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wider text-[var(--muted-foreground)] uppercase">
            Master the Industry Standard Stack
          </p>
        </div>
        
        {/* Simple marquee effect using framer motion or CSS */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap px-8"
            animate={{ x: [0, -1035] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the array for seamless loop */}
            {[...tech, ...tech].map((t, i) => (
              <div key={i} className="text-2xl md:text-3xl font-bold text-[var(--foreground)] opacity-40 hover:opacity-100 transition-opacity cursor-default">
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
