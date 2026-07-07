"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Blocks, Layers, Layout, Cpu, Globe2, Palette } from "lucide-react";

const knowledgeAreas = [
  {
    category: "Blockchain Foundations",
    items: [
      { name: "What is Blockchain?", description: "Understanding distributed ledgers", slug: "blockchain", icon: <Blocks className="w-5 h-5 text-primary" /> },
      { name: "What is Web3?", description: "The decentralized internet", slug: "web3", icon: <Globe2 className="w-5 h-5 text-secondary" /> },
      { name: "Ethereum", description: "Layer 1 Blockchain", slug: "ethereum", icon: <Layers className="w-5 h-5 text-primary" /> },
      { name: "Arbitrum", description: "Ethereum Layer 2 Scaling", slug: "arbitrum", icon: <Cpu className="w-5 h-5 text-secondary" /> },
      { name: "Smart Contracts", description: "Self-executing blockchain programs", slug: "smart-contracts", icon: <CodeIcon className="w-5 h-5 text-primary" /> },
    ],
  },
  {
    category: "Rust Ecosystem",
    items: [
      { name: "Ownership", description: "Rust memory management model", slug: "ownership", icon: <CodeIcon className="w-5 h-5 text-primary" /> },
      { name: "Borrowing", description: "Safe reference system", slug: "borrowing", icon: <Layers className="w-5 h-5 text-secondary" /> },
      { name: "Lifetimes", description: "Reference validation", slug: "lifetimes", icon: <Blocks className="w-5 h-5 text-primary" /> },
      { name: "Structs", description: "Custom data structures", slug: "structs", icon: <Layout className="w-5 h-5 text-secondary" /> },
      { name: "Enums", description: "Multiple state representation", slug: "enums", icon: <Globe2 className="w-5 h-5 text-primary" /> },
    ],
  },
  {
    category: "Learning Notes",
    items: [
      { name: "Session 1", description: "Blockchain fundamentals seminar", slug: "session-1", icon: <Layout className="w-5 h-5 text-primary" /> },
      { name: "Session 2", description: "Rust programming workshop", slug: "session-2", icon: <Layout className="w-5 h-5 text-secondary" /> },
      { name: "Rust Workshop", description: "Hands-on coding exercises", slug: "rust-workshop", icon: <CodeIcon className="w-5 h-5 text-primary" /> },
      { name: "Blockchain Workshop", description: "Building decentralized applications", slug: "blockchain-workshop", icon: <Blocks className="w-5 h-5 text-secondary" /> },
      { name: "Key Takeaways", description: "Important concepts learned", slug: "key-takeaways", icon: <Layers className="w-5 h-5 text-primary" /> },
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
          title="Learning Repository"
          subtitle="A structured collection of concepts, seminars, workshops, and personal notes from my Blockchain & Rust learning journey."
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
                    <Link href={`/learning/${item.slug}`}>
                      <GlassCard className="p-5 flex flex-col interactive cursor-pointer hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-lg leading-tight">{item.name}</span>
                            <span className="text-sm text-foreground/50 truncate mt-0.5">{item.description}</span>
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
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
