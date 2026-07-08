"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, GitBranch, Link } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-24">
        <SectionHeading
          title="Contact Information"
          subtitle="Thank you for visiting Rushyblock. This website showcases my learning journey, projects, workshops, and technical exploration in Blockchain, Rust, and the Arbitrum ecosystem."
        />

        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <GlassCard className="p-8 h-full flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2">Contact Details</h3>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:vatsalsukhadiya2107@gmail.com" className="font-medium hover:text-primary transition-colors interactive">
                      vatsalsukhadiya2107@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href="https://github.com/vatsalsukhadiya21" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors interactive">
                      vatsalsukhadiya21
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Link className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/vatsal-sukhadiya/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors interactive">
                      vatsal-sukhadiya
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Vadodara, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <GlassCard className="p-8">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all interactive"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all interactive"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none interactive"
                    placeholder="How can I help you?"
                  />
                </div>

                <Button className="w-full mt-2 interactive">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Email functionality will be available soon.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
