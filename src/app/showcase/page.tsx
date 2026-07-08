"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Play, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Introduction to Web3",
    description: "Understanding Web3, decentralization, wallets and blockchain.",
    tags: ["Blockchain", "Web3", "Wallets", "Decentralization"],
    videoPlaceholder: "bg-[url('https://img.youtube.com/vi/M1-AmTsrU3A/maxresdefault.jpg')] bg-cover bg-center",
    youtubeId: "M1-AmTsrU3A",
  },
  {
    title: "Rust Programming Fundamentals",
    description: "Learning Rust fundamentals including ownership, borrowing and memory safety.",
    tags: ["Ownership", "Borrowing", "Lifetimes", "Cargo"],
    videoPlaceholder: "bg-[url('https://img.youtube.com/vi/9cALHJ1gzME/maxresdefault.jpg')] bg-cover bg-center",
    youtubeId: "9cALHJ1gzME",
  },
  {
    title: "Smart Contracts with Stylus",
    description: "Building smart contracts on Arbitrum using Stylus and Rust.",
    tags: ["Stylus", "Smart Contracts", "Arbitrum", "Rust"],
    videoPlaceholder: "bg-[url('https://img.youtube.com/vi/Wpdadlx3j_o/maxresdefault.jpg')] bg-cover bg-center",
    youtubeId: "Wpdadlx3j_o",
  },
];

export default function Showcase() {
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});

  const playVideo = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-24">
        <SectionHeading
          title="Featured Learning Sessions"
          subtitle="A curated collection of seminars and technical sessions from my Blockchain, Rust, and Arbitrum learning journey."
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
                  <div className={`relative w-full lg:w-3/5 aspect-video lg:aspect-auto overflow-hidden bg-black ${!playingVideos[index] ? project.videoPlaceholder : ''}`}>
                    <AnimatePresence mode="wait">
                      {!playingVideos[index] ? (
                        <motion.div
                          key="thumbnail"
                          initial={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full cursor-pointer"
                          onClick={() => playVideo(index)}
                        >
                          {/* Simulated Video Thumbnail Image */}
                          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-0" />
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                            <div className="w-20 h-20 rounded-full glass flex items-center justify-center interactive">
                              <Play className="w-8 h-8 text-primary ml-2" />
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="player"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                      <button 
                        onClick={() => playVideo(index)}
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors interactive"
                      >
                        <ExternalLink className="w-4 h-4" /> Watch Session
                      </button>
                      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors interactive">
                        <GitBranch className="w-4 h-4" /> My Notes
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
