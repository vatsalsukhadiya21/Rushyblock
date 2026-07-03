import * as React from "react";
import { motion } from "framer-motion";
import { Link2, ShieldCheck, Zap } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function BlockchainVisualizer() {
  const blocks = [
    { id: 1, hash: "0x1a...f9", time: "10s ago", icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
    { id: 2, hash: "0x8b...2c", time: "22s ago", icon: <Link2 className="w-5 h-5 text-[var(--primary)]" /> },
    { id: 3, hash: "0xc4...e1", time: "Pending", icon: <Zap className="w-5 h-5 text-amber-400" />, pending: true },
  ];

  return (
    <section className="py-24 relative bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Demystifying the Chain</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Understand consensus, cryptographic hashing, and distributed ledgers through interactive, real-time visual modules.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {blocks.map((block, index) => (
            <React.Fragment key={block.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-full md:w-64"
              >
                <PremiumCard className={`p-6 flex flex-col gap-4 border-t-4 ${block.pending ? 'border-t-amber-400' : 'border-t-[var(--primary)]'}`}>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono bg-[var(--muted)] px-2 py-1 rounded">Block #{block.id + 104230}</span>
                    {block.icon}
                  </div>
                  <div className="space-y-1 mt-4">
                    <p className="text-xs text-[var(--muted-foreground)]">Hash</p>
                    <p className="font-mono text-sm">{block.hash}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-[var(--muted-foreground)]">Status</p>
                    <p className="text-sm font-semibold">{block.time}</p>
                  </div>
                </PremiumCard>
              </motion.div>
              
              {index < blocks.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.4 }}
                  className="hidden md:block h-1 w-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] origin-left"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
