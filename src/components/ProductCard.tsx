import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";
import { IMG } from "@/lib/images";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  features: string[];
  germination: string;
  climate: string;
  tags: string[];
};

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/2.2] overflow-hidden">
        <img
          src={IMG.products[product.image]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-leaf/30 border border-leaf backdrop-blur text-[11px] font-semibold tracking-wide text-white">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-white text-primary flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="p-4 md:p-7">
        <p className="text-[10px] sm:text-xs font-medium sm:font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-leaf">{product.tagline}</p>
        <h3 className="mt-1.5 md:mt-2 font-display text-lg sm:text-2xl font-medium sm:font-semibold">{product.name}</h3>
        <p className="mt-2 md:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        <ul className="mt-3 md:mt-5">
          <li className="flex items-center gap-2 text-[10px] sm:text-xs">
            <Leaf className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-leaf shrink-0" />
            <span className="font-medium sm:font-bold text-foreground">{product.germination}</span>
          </li>
        </ul>
      </div>
    </motion.article>
  );
}
