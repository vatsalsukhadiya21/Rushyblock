"use client";

import { motion, Variants } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Blocks, Layers, Layout, Cpu, Globe2, Palette } from "lucide-react";

const technologies = [
  {
    category: "Frontend Core",
    items: [
      { name: "React", level: 95, icon: <Layout className="w-5 h-5 text-primary" /> },
      { name: "Next.js", level: 90, icon: <Globe2 className="w-5 h-5 text-secondary" /> },
      { name: "TypeScript", level: 85, icon: <CodeIcon className="w-5 h-5 text-primary" /> },
    ],
  },
  {
    category: "Styling & Animation",
    items: [
      { name: "Tailwind CSS", level: 98, icon: <Palette className="w-5 h-5 text-secondary" /> },
      { name: "Framer Motion", level: 90, icon: <Layers className="w-5 h-5 text-primary" /> },
      { name: "CSS/SASS", level: 95, icon: <Palette className="w-5 h-5 text-secondary" /> },
    ],
  },
  {
    category: "Architecture & Systems",
    items: [
      { name: "State Management", level: 88, icon: <Blocks className="w-5 h-5 text-primary" /> },
      { name: "Performance Eval", level: 85, icon: <Cpu className="w-5 h-5 text-secondary" /> },
      { name: "Web Accessibility", level: 92, icon: <Globe2 className="w-5 h-5 text-primary" /> },
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
          title="Technologies"
          subtitle="The tools and frameworks I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {technologies.map((techGroup, index) => (
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
                    <GlassCard className="p-5 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="font-semibold text-lg">{item.name}</span>
                        <span className="ml-auto font-mono text-sm text-primary">
                          {item.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
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
