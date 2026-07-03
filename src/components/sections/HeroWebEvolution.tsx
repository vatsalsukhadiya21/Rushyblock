import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroWebEvolution() {
  return (
    <section id="evolution" className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-20">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-background to-transparent opacity-50 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              The Next Era of the Internet
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              The Evolution <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                of Trust
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl font-light">
              From reading static pages (Web1), to writing centralized social graphs (Web2), to owning your digital destiny (Web3). Master the protocols that are rebuilding the internet.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg">Start Building</Button>
              <Button variant="outline" size="lg">View Curriculum</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full flex flex-col justify-center items-center"
          >
            {/* Conceptual Visualization (Web1 -> Web2 -> Web3) */}
            <div className="relative w-full max-w-md aspect-square rounded-full border border-[var(--border)] flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-[var(--border)] border-dashed animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-12 rounded-full border border-[var(--primary)]/30 animate-[spin_40s_linear_infinite_reverse]"></div>
              
              <div className="z-10 flex flex-col gap-8 text-center bg-background/80 backdrop-blur-md p-8 rounded-full border border-[var(--primary)]/20 shadow-[0_0_50px_rgba(62,219,240,0.1)]">
                 <div className="opacity-40 line-through">Web1: Read</div>
                 <div className="opacity-60 line-through">Web2: Read, Write</div>
                 <div className="text-2xl font-bold text-[var(--primary)]">Web3: Read, Write, Own</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
