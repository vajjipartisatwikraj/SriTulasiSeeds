import maize from "@/assets/product-maize.jpg";
import sunflower from "@/assets/product-sunflower.jpg";
import rice from "@/assets/product-rice.jpg";
import hero from "@/assets/hero-fields.jpg";
import farmer1 from "@/assets/gallery-farmer1.jpg";
import farmer2 from "@/assets/gallery-farmer2.jpg";
import fields from "@/assets/gallery-fields.jpg";
import processing from "@/assets/gallery-processing.jpg";
import packaging from "@/assets/gallery-packaging.jpg";
import hands from "@/assets/gallery-hands.jpg";
import sunflowerField from "@/assets/gallery-sunflower-field.jpg";

export const IMG = {
  hero,
  products: { maize, sunflower, rice } as Record<string, string>,
  gallery: [
    { src: farmer1, category: "Farmers", alt: "Indian farmer in green field" },
    { src: fields, category: "Farms", alt: "Aerial view of crop rows" },
    { src: processing, category: "Processing", alt: "Seed processing facility" },
    { src: packaging, category: "Packaging", alt: "Premium seed packaging" },
    { src: hands, category: "Seeds", alt: "Hands holding seeds and soil" },
    { src: sunflowerField, category: "Farms", alt: "Sunflower field" },
    { src: farmer2, category: "Farmers", alt: "Indian woman farmer in paddy field" },
    { src: maize, category: "Seeds", alt: "Maize seeds" },
    { src: sunflower, category: "Seeds", alt: "Sunflower seeds" },
    { src: rice, category: "Seeds", alt: "Rice paddy seeds" },
  ],
};
