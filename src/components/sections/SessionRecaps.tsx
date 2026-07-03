import * as React from "react";
import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Quote } from "lucide-react";

export function SessionRecaps() {
  const recaps = [
    {
      author: "Alex J.",
      role: "Cohort 1 Graduate",
      quote: "The transition from Web2 to Web3 finally clicked for me. The deep dive into Rust memory management was intense but incredibly rewarding.",
      metrics: "Built 3 dApps"
    },
    {
      author: "Sarah M.",
      role: "Cohort 2 Graduate",
      quote: "I thought smart contracts were just about Solidity. Learning Solana and Anchor opened up a whole new world of high-performance architecture.",
      metrics: "Now a Protocol Engineer"
    },
    {
      author: "David K.",
      role: "Cohort 3 Graduate",
      quote: "The mentors don't just teach syntax; they teach you how to think in decentralized systems. Worth every hour.",
      metrics: "Founded Web3 Startup"
    }
  ];

  return (
    <section className="py-24 relative bg-[var(--muted)]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Cohort Success</h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              Real outcomes from developers who committed to the journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recaps.map((recap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <PremiumCard className="h-full flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-[var(--primary)]/40 mb-6" />
                  <p className="text-lg leading-relaxed italic mb-8">"{recap.quote}"</p>
                </div>
                
                <div className="pt-6 border-t border-[var(--border)] flex justify-between items-end">
                  <div>
                    <h4 className="font-bold">{recap.author}</h4>
                    <p className="text-sm text-[var(--muted-foreground)]">{recap.role}</p>
                  </div>
                  <div className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded">
                    {recap.metrics}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
