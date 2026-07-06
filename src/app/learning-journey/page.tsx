"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useRef } from "react";
import { BookOpen, Code, Database, Globe } from "lucide-react";

const journeyData = [
  {
    phase: "Phase 1",
    title: "intro Arbitrum",
    description: "Initial introduction to the Arbitrum ecosystem and understanding layer 2 scaling solutions.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    phase: "Phase 2",
    title: "Block chain",
    description: "Deep dive into core blockchain principles, consensus mechanisms, and decentralized networks.",
    icon: <Database className="w-6 h-6 text-secondary" />,
  },
  {
    phase: "Phase 3",
    title: "Account creation",
    description: "Exploring wallet integrations, secure account creation, and key management within dApps.",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    phase: "Phase 4",
    title: "Rust",
    description: "Learning Rust programming language for high-performance and secure smart contract development.",
    icon: <Code className="w-6 h-6 text-secondary" />,
  },
  {
    phase: "Phase 5",
    title: "Certification",
    description: "Validating knowledge and skills through official certification and practical assessments.",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
];

export default function LearningJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-24">
        <SectionHeading
          title="Learning Journey"
          subtitle="The path of continuous growth and technical mastery."
        />

        <div className="relative max-w-4xl mx-auto mt-20" ref={containerRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/50 rounded-full -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-primary to-secondary rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    {item.icon}
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <GlassCard className="relative p-8 group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                      <div className="relative">
                        <span className="text-primary font-bold font-mono text-xl mb-2 block">
                          {item.phase}
                        </span>
                        <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
