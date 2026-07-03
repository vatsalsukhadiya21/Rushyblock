import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProjectShowcase() {
  const projects = [
    {
      title: "DeFi Lending Protocol",
      category: "Solana Smart Contract",
      desc: "A fully functional lending and borrowing protocol built with Rust and Anchor. Features isolated lending pools and dynamic interest rate curves.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4facce?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3",
      tech: ["Rust", "Anchor", "Next.js"]
    },
    {
      title: "NFT Launchpad",
      category: "Full-Stack dApp",
      desc: "Minting platform handling fair-launch mechanics, anti-bot measures, and metadata generation.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3",
      tech: ["Metaplex", "React", "TypeScript"]
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Student Work</h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              We believe in learning by shipping. Explore production-grade dApps built by our alumni.
            </p>
          </div>
          <Button variant="outline">View All Projects</Button>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-[var(--radius-lg)] aspect-video bg-[var(--muted)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[var(--radius-lg)] pointer-events-none"></div>
                </div>

                <div className="w-full lg:w-2/5 flex flex-col gap-6">
                  <div>
                    <span className="text-[var(--primary)] font-mono text-sm font-bold mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-[var(--muted)] text-[var(--foreground)] text-sm rounded-md border border-[var(--border)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-2">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--primary)] transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--primary)] transition-colors">
                      <Code2 className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
