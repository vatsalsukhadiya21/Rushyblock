import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Zap } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";

export function RustShowcase() {
  const codeSnippet = `#[program]
pub mod rushy_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, data: u64) -> Result<()> {
        let account = &mut ctx.accounts.my_account;
        account.data = data;
        msg!("Initialized with data: {}!", data);
        Ok(())
    }
}`;

  return (
    <section id="rust" className="py-24 relative bg-[var(--muted)]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold mb-6">
              <Terminal className="w-4 h-4" />
              Powered by Rust
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Write Once. <br />
              Deploy Fearlessly.
            </h2>
            
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Rust is the modern standard for high-performance, secure smart contracts. Our curriculum dives deep into ownership, borrowing, and memory safety without a garbage collector.
            </p>

            <ul className="space-y-4">
              {[
                { icon: <Shield className="w-5 h-5 text-emerald-400" />, title: "Memory Safe", desc: "Zero null pointer dereferences or buffer overflows." },
                { icon: <Zap className="w-5 h-5 text-amber-400" />, title: "Blazing Fast", desc: "Performance matching C++ and superior concurrency." },
                { icon: <Cpu className="w-5 h-5 text-[var(--primary)]" />, title: "Ecosystem Ready", desc: "Native support for Solana, Polkadot, and more." },
              ].map((feature, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 bg-[var(--background)] p-2 rounded-lg border border-[var(--border)] shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-[var(--muted-foreground)]">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PremiumCard className="!p-0 border-none bg-[#0d1117] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-2 text-xs text-[#8b949e] font-mono">lib.rs - Solana Anchor</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-[#e6edf3] leading-relaxed">
                  <code>
                    <span className="text-[#ff7b72]">#[program]</span>{"\n"}
                    <span className="text-[#ff7b72]">pub</span> <span className="text-[#ff7b72]">mod</span> <span className="text-[#d2a8ff]">rushy_contract</span> {"{"}{"\n"}
                    {"    "}<span className="text-[#ff7b72]">use</span> <span className="text-[#ff7b72]">super::*</span>;{"\n\n"}
                    {"    "}<span className="text-[#ff7b72]">pub</span> <span className="text-[#ff7b72]">fn</span> <span className="text-[#d2a8ff]">initialize</span>(ctx: Context&lt;Initialize&gt;, data: <span className="text-[#79c0ff]">u64</span>) -&gt; Result&lt;()&gt; {"{"}{"\n"}
                    {"        "}<span className="text-[#ff7b72]">let</span> account = <span className="text-[#ff7b72]">&mut</span> ctx.accounts.my_account;{"\n"}
                    {"        "}account.data = data;{"\n"}
                    {"        "}<span className="text-[#79c0ff]">msg!</span>(<span className="text-[#a5d6ff]">"Initialized with data: {}!"</span>, data);{"\n"}
                    {"        "}Ok(()){"\n"}
                    {"    "}{"}"}{"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </PremiumCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
