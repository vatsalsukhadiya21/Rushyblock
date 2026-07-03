import * as React from "react";
import { motion } from "framer-motion";
import { Code2, MessageCircle, Globe } from "lucide-react";

export function MentorSpotlight() {
  const mentors = [
    {
      name: "Elena Rodriguez",
      role: "Protocol Lead @ DeFi Core",
      bio: "Former systems engineer at Google. Now building high-frequency trading programs on Solana.",
      image: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "Marcus Chen",
      role: "Smart Contract Auditor",
      bio: "Secured over $500M in TVL. Specializes in Rust and Anchor vulnerabilities.",
      image: "https://i.pravatar.cc/300?img=11"
    },
    {
      name: "Dr. Amara Singh",
      role: "Cryptography Researcher",
      bio: "PhD in Zero-Knowledge Proofs. Bringing zk-SNARKs to consumer dApps.",
      image: "https://i.pravatar.cc/300?img=44"
    }
  ];

  return (
    <section id="mentors" className="py-24 relative bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Learn from the Best</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Our mentors are active builders and researchers in the Web3 ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-[var(--radius-lg)] aspect-square bg-[var(--muted)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[var(--primary)] hover:text-[#0a0f16] transition-colors text-white">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[var(--primary)] hover:text-[#0a0f16] transition-colors text-white">
                      <Code2 className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[var(--primary)] hover:text-[#0a0f16] transition-colors text-white">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{mentor.name}</h3>
              <p className="text-[var(--primary)] font-medium mb-3">{mentor.role}</p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {mentor.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
