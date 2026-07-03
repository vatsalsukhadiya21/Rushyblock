import * as React from "react";
import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function InteractiveRoadmap() {
  const steps = [
    { num: "01", title: "Web3 Fundamentals", desc: "Cryptography, Consensus Mechanisms, and Distributed Ledgers." },
    { num: "02", title: "Rust Programming", desc: "Ownership, Borrowing, Lifetimes, and safe systems programming." },
    { num: "03", title: "Smart Contracts", desc: "Writing, testing, and deploying secure Anchor programs on Solana." },
    { num: "04", title: "dApp Development", desc: "Connecting React/Next.js frontends to blockchain programs using Web3.js." },
  ];

  return (
    <section id="roadmap" className="py-24 relative bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Your Path to Mastery</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            A structured, rigorous curriculum designed to take you from Web2 developer to Web3 architect.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--card)] border-2 border-[var(--primary)] -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-[var(--primary)]"></div>
                  
                  {/* Content Left */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end' : 'md:justify-start md:order-2'} pl-12 md:pl-0 pr-0 md:pr-12`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <PremiumCard className={`relative p-6 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                        <span className="text-[var(--primary)] font-mono text-sm font-bold mb-2 block">Phase {step.num}</span>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-[var(--muted-foreground)] text-sm">{step.desc}</p>
                      </PremiumCard>
                    </motion.div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : ''}`}></div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
