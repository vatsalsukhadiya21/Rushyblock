"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/ui/PageTransition";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { HeroVisual } from "@/components/ui/HeroVisual";

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.1]);
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  const premiumEasing = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
    }
  };

  return (
    <PageTransition>
      <div className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center px-6 md:px-12 max-w-7xl mx-auto py-24 lg:py-0">
          <ParallaxLayer offset={15} className="z-10 relative w-full">
            <motion.div 
              style={{ opacity: heroOpacity, y: heroY }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
            >
              
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="lg:col-span-7 flex flex-col items-start w-full lg:pr-8"
              >
                <motion.div variants={itemVariants} className="mb-10 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                    Full Stack Engineering
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight font-heading mb-8 leading-[1.1]"
                >
                  Documenting my journey <br />
                  into Blockchain, Rust <br />
                  and the <span className="text-primary">Arbitrum ecosystem.</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl lg:text-[22px] text-muted-foreground/90 mb-12 max-w-2xl leading-[1.7] font-light"
                >
                  Rushyblock is my personal learning portfolio where I document concepts, workshop notes, projects, and experiments throughout my Blockchain and Rust journey.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                  <Link href="/learning-journey" className="interactive w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto">
                      View Selected Work
                    </Button>
                  </Link>
                  <Link href="/contact" className="interactive group relative flex items-center justify-center gap-2 text-muted-foreground font-medium hover:text-foreground transition-colors duration-300 h-14 px-4 w-full sm:w-auto overflow-hidden">
                    <span className="relative z-10">About Me</span> 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10" />
                    <span className="absolute bottom-3 left-4 right-10 h-[2px] bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 rounded-full" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }} // Ensure visual enters after text completes
                className="lg:col-span-5 flex justify-center lg:justify-end w-full"
              >
                <HeroVisual />
              </motion.div>

            </motion.div>
          </ParallaxLayer>
        </section>

        {/* Continuous Atmospheric Connector */}
        <div className="w-full h-px relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(62,219,240,0.03)_0%,transparent_70%)] pointer-events-none" />
        </div>

        {/* Feature Highlights - Structural Asymmetry */}
        <section className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto z-20 -mt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none -z-10" />
          
          <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start relative z-10"
          >
            <div className="md:col-span-5 md:sticky md:top-32">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-heading font-bold tracking-tight leading-[1.1] mb-6">
                Technical <br /> Philosophy
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
                Every concept I learn is approached with curiosity, practical implementation, and continuous experimentation. My goal is not only to understand Blockchain and Rust, but also to apply them through real-world projects.
              </motion.p>
            </div>

            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-16">
              {[
                {
                  title: "Blockchain Mindset",
                  desc: "Understanding how decentralized systems establish trust, transparency, and security without relying on central authorities.",
                  number: "01"
                },
                {
                  title: "Rust Thinking",
                  desc: "Learning ownership, borrowing, memory safety, and efficient system programming through hands-on coding.",
                  number: "02"
                },
                {
                  title: "Hands-on Learning",
                  desc: "Applying knowledge gained from seminars, workshops, documentation, and personal projects to strengthen practical understanding.",
                  number: "03"
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.01,
                    rotateX: 2,
                    rotateY: -1,
                    boxShadow: "0 30px 60px -15px rgba(0,0,0,0.4)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.12)"
                  }}
                  style={{ perspective: 1000 }}
                  className="flex gap-6 items-start group cursor-default p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-colors duration-500"
                >
                  <span className="text-sm font-medium text-muted-foreground font-mono mt-1 group-hover:text-primary transition-colors duration-300">
                    {feature.number}
                  </span>
                  <div className="group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
