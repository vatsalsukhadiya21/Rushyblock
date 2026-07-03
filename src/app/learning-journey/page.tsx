"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useRef } from "react";
import { BookOpen, Code, Database, Globe } from "lucide-react";

const journeyData = [
  {
    year: "2021",
    title: "The Beginning",
    description: "Started learning HTML, CSS, and basic JavaScript. Built simple static pages and learned about web accessibility.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    year: "2022",
    title: "Frontend Frameworks",
    description: "Dove deep into React.js. Learned about component lifecycles, hooks, and state management with Redux and Context API.",
    icon: <Code className="w-6 h-6 text-secondary" />,
  },
  {
    year: "2023",
    title: "Fullstack Architecture",
    description: "Transitioned to Next.js for SSR and SSG. Explored backend technologies, REST APIs, and database integration.",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    year: "2024",
    title: "Premium UX/UI Engineering",
    description: "Mastered Framer Motion, Tailwind CSS, and advanced styling techniques to build cinematic, highly interactive web experiences.",
    icon: <BookOpen className="w-6 h-6 text-secondary" />,
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
                          {item.year}
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
