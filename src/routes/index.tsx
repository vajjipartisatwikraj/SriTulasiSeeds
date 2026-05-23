import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, ShieldCheck, Leaf, Microscope } from "lucide-react";
import products from "@/data/products.json";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { PageTransition } from "@/components/PageTransition";
import { CountUp } from "@/components/CountUp";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard, type Product } from "@/components/ProductCard";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { IndiaMap } from "@/components/IndiaMap";
import { FAQ } from "@/components/FAQ";
import { Seo } from "@/components/Seo";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Sri Tulasi seeds different from other brands?",
      acceptedAnswer: { "@type": "Answer", text: "Every batch is lab-tested for germination, purity and disease resistance, then verified in field trials before release to farmers." },
    },
    {
      "@type": "Question",
      name: "What yield can I expect with Sri Tulasi hybrid seeds?",
      acceptedAnswer: { "@type": "Answer", text: "Under optimal conditions, our maize hybrids deliver 45–50 q/ha, sunflower 15–18 q/ha, and paddy 50–60 q/ha." },
    },
    {
      "@type": "Question",
      name: "Which Indian states does Sri Tulasi Agritech serve?",
      acceptedAnswer: { "@type": "Answer", text: "We supply hybrid maize, sunflower and paddy seeds across Andhra Pradesh, Telangana, Madhya Pradesh, Haryana, Karnataka, and Uttar Pradesh." },
    },
    {
      "@type": "Question",
      name: "Do you provide after-sales agronomic support?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — pre-sowing soil analysis, crop management guidance, pest & disease support, and harvest advisory via phone, WhatsApp and regional centers." },
    },
  ],
};

const productsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: (products as Product[]).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      brand: { "@type": "Brand", name: "Sri Tulasi Agritech" },
      category: "Agricultural Seeds",
      url: `${SITE_URL}/catalog#${p.id}`,
    },
  })),
};

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Sri Tulasi Agritech — Premium Hybrid Maize, Sunflower & Paddy Seeds | Hyderabad"
        description="Premium lab-tested hybrid seeds for Indian farmers. Trusted by 12,000+ growers across 6 states since 2017. Maize, sunflower & paddy varieties from Hyderabad, Telangana."
        path="/"
        keywords="hybrid seeds India, maize seeds, sunflower seeds, paddy seeds, premium seeds Hyderabad, Telangana seed company"
        jsonLd={[
          homeFaqSchema,
          productsItemList,
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Process />
      <TestimonialsSection />
      <GalleryPreview />
      <Reach />
      <FAQ />
    </PageTransition>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://sritulasiseeds.sgp1.cdn.digitaloceanspaces.com/Untitled%20-%20May%2021,%202026%20at%2021.03.08%20(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-leaf/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 sm:py-32 text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl md:-ml-8"
        >
          <span className="inline-flex items-center gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full glass-dark text-[10px] sm:text-xs font-normal sm:font-medium tracking-[0.08em] sm:tracking-[0.16em] uppercase">
            <Sprout className="h-3.5 w-3.5" /> Since {SITE.established} · Hyderabad, India
          </span>
          <h1 className="mt-4 sm:mt-6 font-display text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-medium sm:font-semibold leading-[1.05] tracking-tight">
            Empowering Indian<br />
            <span className="italic font-light">agriculture</span> with<br />
            premium seeds.
          </h1>
          <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-lg text-white/85 leading-relaxed">
            We craft high-performance hybrid seeds backed by modern science, rigorous testing,
            and an unwavering commitment to the Indian farmer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              to="/catalog"
              className="group inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-white text-primary font-medium sm:font-semibold shadow-elegant hover:scale-[1.03] transition-transform text-sm sm:text-base"
            >
              Explore Catalog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-7 py-3 sm:py-4 rounded-full glass-dark text-white font-medium sm:font-semibold hover:bg-white/15 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-[8px] sm:text-xs tracking-[0.3em] uppercase"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: SITE.stats.tons, suffix: "+", label: "Tons of Seeds Sold" },
    { value: SITE.stats.states, suffix: "", label: "Indian States Covered" },
    { value: SITE.stats.since, suffix: "", label: "Trusted Since" },
    { value: SITE.stats.farmers, suffix: "+", label: "Farmers Connected" },
  ];
  return (
    <section className="relative px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-px rounded-b-3xl overflow-hidden bg-border shadow-elegant">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card p-8 md:p-10"
          >
            <p className="font-display text-2xl md:text-5xl font-medium md:font-semibold text-gradient">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    { icon: Microscope, title: "Modern Testing", desc: "Lab-validated germination, purity and vigour." },
    { icon: ShieldCheck, title: "Farmer Trust", desc: "Built over years of consistent results in the field." },
    { icon: Leaf, title: "Sustainable", desc: "Seeds and practices that nourish soil for generations." },
  ];
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4 items-center">
          <motion.img
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={IMG.gallery[0].src} alt="Farmer" loading="lazy"
            className="rounded-3xl aspect-[3/4] object-cover w-full shadow-soft row-span-2"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <img src={IMG.gallery[4].src} alt="Seeds" loading="lazy" className="rounded-3xl aspect-square object-cover w-full shadow-soft" />
            <img src="/landscape-summer-farm-wheat-field-harvest-crops.jpg" alt="Fields" loading="lazy" className="rounded-3xl aspect-square object-cover w-full shadow-soft" />
          </motion.div>
        </div>

        <div>
          <SectionHeader
            eyebrow="About Sri Tulasi"
            title={<>Seeds engineered for<br /><span className="text-gradient">India's harvests.</span></>}
            description="Founded in 2017 in Hyderabad, Sri Tulasi Agritech blends time-honoured farming wisdom with modern science to deliver hybrid seeds that perform — season after season, state after state."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-5 rounded-2xl bg-card border border-border hover:border-leaf transition-colors">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-leaf text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-display font-medium md:font-semibold text-base md:text-lg">{p.title}</h4>
                  <p className="mt-1 text-xs md:text-sm text-muted-foreground">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 bg-earth/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Our Catalog"
            title={<>Premium seeds.<br /><span className="text-gradient">Proven performance.</span></>}
          />
          <Link to="/catalog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium sm:font-semibold hover:bg-primary/90 transition text-sm sm:text-base">
            View Full Catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {(products as Product[]).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          center
          eyebrow="Our Process"
          title={<>From seed to <span className="text-gradient">farmer's hand.</span></>}
          description="A six-stage journey that defines every batch — meticulous, transparent, and built for trust."
        />
        <div className="mt-20">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 gradient-leaf">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          center
          eyebrow="Farmer Voices"
          title={<>Trusted across <span className="text-gradient">six states.</span></>}
        />
        <div className="mt-16">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const items = IMG.gallery.slice(0, 6);
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Gallery"
            title={<>Moments from <span className="text-gradient">the fields.</span></>}
          />
          <Link to="/gallery" className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium sm:font-semibold hover:bg-primary/90 text-sm sm:text-base">
            Open Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 [grid-auto-rows:160px]">
          {items.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-3xl group ${
                i === 0 ? "row-span-2 col-span-2" : i === 3 ? "row-span-2" : ""
              }`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 text-white text-[10px] font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                {g.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reach() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-10 bg-earth/40">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="National Footprint"
            title={<>Serving farmers across <span className="text-gradient">India.</span></>}
            description="From the rice paddies of Andhra Pradesh to the wheat fields of Haryana — our seeds are at home in six diverse Indian states."
          />
          <ul className="mt-10 grid grid-cols-2 gap-3">
            {SITE.states.map((s) => (
              <li key={s} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
                <span className="h-2.5 w-2.5 rounded-full bg-leaf animate-pulse" />
                <span className="text-sm md:text-base font-normal md:font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <IndiaMap />
      </div>
    </section>
  );
}
