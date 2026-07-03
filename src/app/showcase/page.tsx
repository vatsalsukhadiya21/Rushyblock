"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Play, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Experience",
    description: "A high-performance headless e-commerce storefront with complex animations and perfect Lighthouse scores.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Shopify"],
    videoPlaceholder: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial dashboard with complex data visualization, WebSockets, and elegant dark mode.",
    tags: ["React", "TypeScript", "Recharts", "Zustand"],
    videoPlaceholder: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AI Collaboration Tool",
    description: "Real-time collaborative canvas powered by AI, featuring infinite scroll and cursor tracking.",
    tags: ["Next.js", "Canvas API", "Socket.io", "OpenAI"],
    videoPlaceholder: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
  },
];

export default function Showcase() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-24">
        <SectionHeading
          title="Selected Work"
          subtitle="A showcase of premium frontend applications built with modern tools."
        />

        <div className="flex flex-col gap-24 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <GlassCard className="p-0 overflow-hidden" hoverEffect={false}>
                <div className="flex flex-col lg:flex-row">
                  {/* Video/Image Placeholder Area */}
                  <div className={`relative w-full lg:w-3/5 aspect-video lg:aspect-auto overflow-hidden ${project.videoPlaceholder}`}>
                    {/* Simulated Video Thumbnail Image */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-0" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      <div className="w-20 h-20 rounded-full glass flex items-center justify-center cursor-pointer interactive">
                        <Play className="w-8 h-8 text-primary ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors interactive">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors interactive">
                        <GitBranch className="w-4 h-4" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
