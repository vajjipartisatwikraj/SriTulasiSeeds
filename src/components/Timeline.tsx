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
      {/* Center line with animated draw-in */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-leaf/50 to-transparent hidden md:block"
      />
      <div className="space-y-12 md:space-y-24">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const left = i % 2 === 0;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className={`${left ? "md:text-right md:pr-12" : "md:pl-12"}`}
              >
                <span className="text-leaf font-mono text-xs sm:text-sm font-medium sm:font-semibold">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg sm:text-2xl md:text-3xl font-medium sm:font-semibold">{s.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>

              {/* Icon — always pulled close to the center line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: left ? 30 : -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className={`mt-4 md:mt-0 flex ${left ? "md:justify-start md:pl-4" : "md:justify-end md:pr-4"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: left ? -4 : 4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="relative inline-flex items-center justify-center h-16 md:h-20 w-16 md:w-20 rounded-3xl gradient-leaf text-primary shadow-soft"
                >
                  <span className="absolute inset-0 rounded-3xl bg-leaf/30 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="relative h-7 md:h-9 w-7 md:w-9" />
                </motion.div>
              </motion.div>

              {/* Center dot */}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-4 border-leaf shadow-soft"
              >
                <span className="absolute inset-0 rounded-full bg-leaf/40 animate-ping" />
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
