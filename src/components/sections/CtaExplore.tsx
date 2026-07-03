import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CtaExplore() {
  return (
    <section className="py-32 relative bg-[var(--background)] overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-background to-background z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto">
            Join the next cohort and transform your career. Spaces are limited to ensure high-quality mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Apply for Next Cohort
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
