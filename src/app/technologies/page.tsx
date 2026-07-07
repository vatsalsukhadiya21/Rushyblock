"use client";

import { motion, Variants } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Blocks, Layers, Layout, Cpu, Globe2, Palette } from "lucide-react";

const knowledgeAreas = [
  {
    category: "Blockchain Fundamentals",
    items: [
      { name: "What is Blockchain?", icon: <Blocks className="w-5 h-5 text-primary" /> },
      { name: "What is Web3?", icon: <Globe2 className="w-5 h-5 text-secondary" /> },
      { name: "Ethereum", icon: <Layers className="w-5 h-5 text-primary" /> },
      { name: "Arbitrum", icon: <Cpu className="w-5 h-5 text-secondary" /> },
      { name: "Smart Contracts", icon: <CodeIcon className="w-5 h-5 text-primary" /> },
      { name: "Gas Fees", icon: <Palette className="w-5 h-5 text-secondary" /> },
    ],
  },
  {
    category: "Rust Programming",
    items: [
      { name: "Ownership", icon: <CodeIcon className="w-5 h-5 text-primary" /> },
      { name: "Borrowing", icon: <Layers className="w-5 h-5 text-secondary" /> },
      { name: "Lifetimes", icon: <Blocks className="w-5 h-5 text-primary" /> },
      { name: "Structs", icon: <Layout className="w-5 h-5 text-secondary" /> },
      { name: "Enums", icon: <Globe2 className="w-5 h-5 text-primary" /> },
      { name: "Traits", icon: <Palette className="w-5 h-5 text-secondary" /> },
    ],
  },
  {
    category: "Seminar & Workshop Learnings",
    items: [
      { name: "Session 1", icon: <Layout className="w-5 h-5 text-primary" /> },
      { name: "Session 2", icon: <Layout className="w-5 h-5 text-secondary" /> },
      { name: "Rust Workshop", icon: <CodeIcon className="w-5 h-5 text-primary" /> },
      { name: "Blockchain Workshop", icon: <Blocks className="w-5 h-5 text-secondary" /> },
      { name: "Key Takeaways", icon: <Layers className="w-5 h-5 text-primary" /> },
      { name: "Resources", icon: <Globe2 className="w-5 h-5 text-secondary" /> },
    ],
  },
];

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function Technologies() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-24">
        <SectionHeading
          title="Knowledge Hub"
          subtitle="Documenting the learning journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {knowledgeAreas.map((techGroup, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold font-heading px-2 text-foreground/90">
                {techGroup.category}
              </h3>
              
              <div className="flex flex-col gap-4">
                {techGroup.items.map((item, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <GlassCard className="p-5 flex flex-col gap-4 interactive cursor-pointer hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="font-semibold text-lg">{item.name}</span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
