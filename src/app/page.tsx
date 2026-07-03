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
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
            >
              
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="lg:col-span-7 flex flex-col items-start w-full"
              >
                <motion.div variants={itemVariants} className="mb-10">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Frontend Engineering
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight font-heading mb-10 leading-[1]"
                >
                  Building digital <br className="hidden md:block" />
                  experiences with <br className="hidden md:block" />
                  uncompromising precision.
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl leading-relaxed"
                >
                  I design and engineer exceptional interfaces that balance aesthetics with high-performance execution. Every interaction, every pixel, deeply considered.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                  <Link href="/showcase" className="interactive w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto">
                      View Selected Work
                    </Button>
                  </Link>
                  <Link href="/contact" className="interactive group relative flex items-center justify-center gap-2 text-muted-foreground font-medium hover:text-foreground transition-colors duration-300 h-14 px-4 w-full sm:w-auto overflow-hidden">
                    <span className="relative z-10">Contact Me</span> 
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
                A robust foundation enables extraordinary experiences. We prioritize semantic structure, minimal dependency overhead, and strictly typed architectures to deliver interfaces that feel alive without compromising stability.
              </motion.p>
            </div>

            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-16">
              {[
                {
                  title: "Performance First",
                  desc: "React Server Components and edge rendering strategies ensure immediate interactivity.",
                  number: "01"
                },
                {
                  title: "Fluid Motion",
                  desc: "Physics-based interpolation and spring dynamics replace rigid CSS transitions.",
                  number: "02"
                },
                {
                  title: "Design Systems",
                  desc: "Scalable, token-driven architectures that maintain absolute consistency.",
                  number: "03"
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: -1,
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
                    backgroundColor: "rgba(255,255,255,0.03)"
                  }}
                  style={{ perspective: 1000 }}
                  className="flex gap-6 items-start group cursor-default p-6 -m-6 rounded-2xl"
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
