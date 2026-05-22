import maize from "@/assets/product-maize.jpg";
import hero from "@/assets/hero-fields.jpg";

export const IMG = {
  hero,
  products: { maize, sunflower: "https://sritulasiseeds.sgp1.cdn.digitaloceanspaces.com/sunflower.jpg", rice: "/paddy.jpg" } as Record<string, string>,
  gallery: [
    { src: "/gallery (1).jpeg", category: "Farms", alt: "Farm landscape view" },
    { src: "/gallery (2).jpeg", category: "Seeds", alt: "Premium seeds close-up" },
    { src: "/gallery (3).jpeg", category: "Farmers", alt: "Farmer in field" },
    { src: "/gallery (4).jpeg", category: "Processing", alt: "Seed processing facility" },
    { src: "/gallery (5).jpeg", category: "Packaging", alt: "Seed packaging line" },
    { src: "/gallery (6).jpeg", category: "Farms", alt: "Crop field view" },
    { src: "/gallery (7).jpeg", category: "Seeds", alt: "Seeds display" },
    { src: "/gallery (8).jpeg", category: "Farmers", alt: "Farmer working in field" },
  ],
};
