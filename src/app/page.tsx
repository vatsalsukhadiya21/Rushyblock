"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/ui/PageTransition";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <PageTransition>
      <div className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-5xl z-10"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Frontend Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight font-heading mb-8 leading-[1]"
            >
              Building digital <br className="hidden md:block" />
              experiences with <br className="hidden md:block" />
              uncompromising precision.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              I design and engineer exceptional interfaces that balance aesthetics with high-performance execution. Every interaction, every pixel, deeply considered.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <Link href="/showcase" className="interactive">
                <Button size="lg">
                  View Selected Work
                </Button>
              </Link>
              <Link href="/contact" className="interactive group flex items-center justify-center sm:justify-start gap-2 text-foreground font-medium hover:text-primary transition-colors">
                Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Highlights - Structural Asymmetry */}
        <section className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
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
