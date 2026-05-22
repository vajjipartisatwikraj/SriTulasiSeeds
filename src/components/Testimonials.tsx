import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import data from "@/data/testimonials.json";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = data.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % total), 5500);
    return () => clearInterval(t);
  }, [total]);

  const go = (d: number) => setI((p) => (p + d + total) % total);
  const t = data[i];

  return (
    <div className="relative">
      <div className="relative mx-auto max-w-3xl">
        <Quote className="absolute -top-6 -left-2 h-20 w-20 text-leaf-soft" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative bg-card rounded-3xl p-5 sm:p-10 md:p-14 shadow-soft border border-border"
          >
            <div className="flex gap-1 mb-3 sm:mb-4">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className={`h-3 sm:h-4 w-3 sm:w-4 ${k < t.rating ? "fill-leaf text-leaf" : "text-border"}`} />
              ))}
            </div>
            <p className="font-display text-lg sm:text-2xl md:text-3xl leading-snug text-foreground">
              "{t.text}"
            </p>
            <div className="mt-5 sm:mt-8 flex items-center gap-3 sm:gap-4">
              <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full gradient-leaf flex items-center justify-center font-display font-bold text-primary text-sm sm:text-base">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium sm:font-semibold text-sm sm:text-base">{t.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.state}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} aria-label="Previous"
          className="h-11 w-11 rounded-full bg-white border border-border hover:bg-leaf-soft transition-colors flex items-center justify-center">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {data.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next"
          className="h-11 w-11 rounded-full bg-white border border-border hover:bg-leaf-soft transition-colors flex items-center justify-center">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
