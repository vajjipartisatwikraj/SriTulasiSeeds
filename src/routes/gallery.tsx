import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { IMG } from "@/lib/images";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

const CATEGORIES = ["All", "Farms", "Seeds", "Farmers", "Processing"];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = IMG.gallery.filter((g) => cat === "All" || g.category === cat);

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Sri Tulasi Agritech Gallery",
    image: IMG.gallery
      .filter((g) => g.type !== "video")
      .map((g) => ({
        "@type": "ImageObject",
        contentUrl: g.src.startsWith("http") ? g.src : `${SITE_URL}${g.src}`,
        description: g.alt,
        caption: g.category,
      })),
    video: IMG.gallery
      .filter((g) => g.type === "video")
      .map((g) => ({
        "@type": "VideoObject",
        name: g.alt,
        description: g.alt,
        contentUrl: g.src,
        thumbnailUrl: g.poster,
        uploadDate: "2026-01-01",
      })),
  };

  return (
    <PageTransition>
      <Seo
        title="Gallery — Farms, Seeds & Farmers | Sri Tulasi Agritech"
        description="A visual story of Sri Tulasi Agritech — our farms, hybrid seed processing, packaging facility, and the farmers we serve across six Indian states."
        path="/gallery"
        keywords="seed company gallery, agricultural farms India, seed processing facility, farmer photos"
        jsonLd={[
          gallerySchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ]}
      />
      <section className="pt-36 pb-16 px-6 lg:px-10 gradient-leaf">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Gallery"
            title={<>From soil to seed — <span className="text-gradient">a visual story.</span></>}
            description="A cinematic look at the people, places and processes behind every Sri Tulasi seed bag."
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  cat === c
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-white/70 text-foreground hover:bg-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [&>*]:mb-5">
          {items.map((g, i) => {
            const isVideo = g.type === "video";
            return (
              <motion.button
                key={g.src}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                onClick={() => setLightbox(i)}
                className="block w-full break-inside-avoid overflow-hidden rounded-3xl group relative shadow-soft bg-primary/5"
              >
                {isVideo ? (
                  <div className="relative aspect-[4/5] w-full">
                    <video
                      src={g.src}
                      poster={g.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-elegant transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6 sm:h-7 sm:w-7 ml-0.5 fill-current" />
                      </span>
                    </div>
                    <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                      {g.category} · Video
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-4 left-4 text-white text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {g.category}
                    </span>
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>
            {items[lightbox].type === "video" ? (
              <motion.video
                initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
                src={items[lightbox].src}
                poster={items[lightbox].poster}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[95vw] sm:max-w-[90vw] rounded-2xl shadow-elegant bg-black"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                className="max-h-[85vh] max-w-[95vw] sm:max-w-[90vw] rounded-2xl shadow-elegant object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
