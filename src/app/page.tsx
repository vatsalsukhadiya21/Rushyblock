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

  const premiumEasing = [0.16, 1, 0.3, 1] as const; // Cinematic, smooth ease-out

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: premiumEasing }
    }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
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
                variants={stagger}
                initial="initial"
                animate="animate"
                className="lg:col-span-7 flex flex-col items-start w-full"
              >
                <motion.div variants={fadeInUp} className="mb-10">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Frontend Engineering
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight font-heading mb-10 leading-[1]"
                >
                  Building digital <br className="hidden md:block" />
                  experiences with <br className="hidden md:block" />
                  uncompromising precision.
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl leading-relaxed"
                >
                  I design and engineer exceptional interfaces that balance aesthetics with high-performance execution. Every interaction, every pixel, deeply considered.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                  <Link href="/showcase" className="interactive w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto">
                      View Selected Work
                    </Button>
                  </Link>
                  <Link href="/contact" className="interactive group flex items-center justify-center gap-2 text-muted-foreground font-medium hover:text-foreground transition-colors h-14 px-4 w-full sm:w-auto">
                    Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
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
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: premiumEasing }}
              className="md:col-span-5 md:sticky md:top-32"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight leading-[1.1] mb-6">
                Technical <br /> Philosophy
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A robust foundation enables extraordinary experiences. We prioritize semantic structure, minimal dependency overhead, and strictly typed architectures to deliver interfaces that feel alive without compromising stability.
              </p>
            </motion.div>

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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: premiumEasing, delay: idx * 0.15 }}
                  className="flex gap-6 items-start group cursor-default"
                >
                  <span className="text-sm font-medium text-muted-foreground font-mono mt-1 group-hover:text-foreground transition-colors">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
