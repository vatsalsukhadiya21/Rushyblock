"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/ui/PageTransition";
import { ArrowRight, Sparkles, Code2, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Home() {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <PageTransition>
      <div className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-4xl flex flex-col items-center z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-primary"
            >
              <Sparkles className="w-4 h-4" />
              <span>Building the Future of the Web</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-heading mb-6 leading-[1.1]"
            >
              Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              I build exceptional and accessible digital experiences that are fast, intuitive, and meticulously designed.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/showcase" className="interactive">
                <Button size="lg" className="w-full sm:w-auto">
                  View Projects <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="interactive">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Highlights - Scroll Storytelling */}
        <section className="w-full py-32 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Modern Frontend",
                  desc: "Expertise in React, Next.js, and modern state management tools.",
                  icon: <Code2 className="w-6 h-6 text-primary" />,
                },
                {
                  title: "Premium Design",
                  desc: "Pixel-perfect implementation with Framer Motion and Tailwind CSS.",
                  icon: <Sparkles className="w-6 h-6 text-secondary" />,
                },
                {
                  title: "Responsive",
                  desc: "Flawless experiences across all devices and screen sizes.",
                  icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <GlassCard className="h-full flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
