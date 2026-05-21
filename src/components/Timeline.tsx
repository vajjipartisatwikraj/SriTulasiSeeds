import { motion } from "framer-motion";
import { Sprout, Wheat, Cog, ShieldCheck, Package, Truck } from "lucide-react";

const STEPS = [
  { icon: Sprout, title: "Seed Collection", desc: "Sourcing premium parent seed lines from trusted research partners." },
  { icon: Wheat, title: "Harvesting", desc: "Precision harvesting at optimal maturity for peak germination." },
  { icon: Cog, title: "Processing", desc: "Cleaning, grading and treating with modern processing lines." },
  { icon: ShieldCheck, title: "Quality Testing", desc: "Lab-tested for purity, vigour and viability standards." },
  { icon: Package, title: "Packaging", desc: "Moisture-sealed packs that protect potency in any climate." },
  { icon: Truck, title: "Distribution", desc: "Delivered to farmers across six Indian states on time." },
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-leaf/40 to-transparent hidden md:block" />
      <div className="space-y-10 md:space-y-20">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const left = i % 2 === 0;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative md:grid md:grid-cols-2 md:gap-16 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className={`${left ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <span className="text-leaf font-mono text-sm font-semibold">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className={`mt-5 md:mt-0 ${left ? "md:pl-8" : "md:pr-8"}`}>
                <div className="relative inline-flex items-center justify-center h-20 w-20 rounded-3xl gradient-leaf text-primary shadow-soft">
                  <Icon className="h-9 w-9" />
                </div>
              </div>
              <span className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-4 border-leaf shadow-soft" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
