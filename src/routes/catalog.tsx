import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import products from "@/data/products.json";
import { ProductCard, type Product } from "@/components/ProductCard";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";

const FILTERS = ["All", "Maize", "Sunflower", "Rice"];

export default function CatalogPage() {
  useEffect(() => { document.title = "Catalog — Sri Tulasi Agritech"; }, []);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("All");

  const list = useMemo(() => {
    return (products as Product[]).filter((p) => {
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase());
      const matchF = filter === "All" || p.name.toLowerCase().includes(filter.toLowerCase());
      return matchQ && matchF;
    });
  }, [q, filter]);

  return (
    <PageTransition>
      <section className="pt-20 md:pt-36 pb-10 md:pb-16 px-4 md:px-6 lg:px-10 gradient-leaf">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Seed Catalog"
            title={<>Engineered hybrids for <span className="text-gradient">every season.</span></>}
            description="Browse our complete range of premium hybrid seeds, each with detailed agronomic data and quality assurance."
          />
        </div>
      </section>

      <section className="py-6 md:py-12 px-4 md:px-6 lg:px-10 sticky top-10 z-20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-3 md:gap-4 p-2 md:p-3 rounded-2xl glass shadow-soft">
          <div className="relative flex-1">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-3.5 md:h-4 w-3.5 md:w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search seeds, climate, features..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-10 pr-3 py-2 md:py-3 rounded-xl bg-white border border-border focus:border-leaf focus:ring-2 focus:ring-leaf/20 outline-none transition text-sm md:text-base"
            />
          </div>
          <div className="flex gap-1.5 md:gap-2 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-medium md:font-semibold whitespace-nowrap transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-white text-foreground hover:bg-leaf-soft"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4 md:pb-6 px-4 md:px-6 lg:px-10\">
        <div className="mx-auto max-w-7xl">
          {list.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12 md:py-20 text-sm md:text-base"
            >
              No products match your search.
            </motion.p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
              {list.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
