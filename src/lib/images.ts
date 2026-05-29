const CDN = "https://sritulasiseeds.sgp1.cdn.digitaloceanspaces.com";

export type GalleryItem = {
  src: string;
  category: "Farms" | "Seeds" | "Farmers" | "Processing" | "Packaging";
  alt: string;
  type?: "image" | "video";
  poster?: string;
};

export const IMG = {
  hero: `${CDN}/about(field).jpg`,
  about: {
    maize: `${CDN}/about(maize).jpeg`,
    field: `${CDN}/about(field).jpeg`,
    fieldAlt: `${CDN}/about(field).jpg`,
  },
  products: {
    maize: `${CDN}/maize1.jpeg`,
    sunflower: `${CDN}/sunflower-main.jpg`,
    rice: `${CDN}/paddy-main.jpg`,
  } as Record<string, string>,
  gallery: [
    // Farms
    { src: `${CDN}/farms1.jpeg`, category: "Farms", alt: "Sri Tulasi seed multiplication farm" },
    { src: `${CDN}/farms2.jpeg`, category: "Farms", alt: "Hybrid seed crop in full bloom" },
    { src: `${CDN}/farms3.jpeg`, category: "Farms", alt: "Open field cultivation landscape" },
    { src: `${CDN}/farms4.jpeg`, category: "Farms", alt: "Irrigated seed production field" },
    { src: `${CDN}/farms5.jpeg`, category: "Farms", alt: "Mature crop ready for harvest" },
    // Seeds
    { src: `${CDN}/maize1.jpeg`, category: "Seeds", alt: "Premium hybrid maize cob" },
    { src: `${CDN}/maize2.jpeg`, category: "Seeds", alt: "Hybrid maize seed close-up" },
    { src: `${CDN}/maize3.jpeg`, category: "Seeds", alt: "Quality tested maize grains" },
    { src: `${CDN}/maize4.jpeg`, category: "Seeds", alt: "Golden maize harvest" },
    { src: `${CDN}/paddy-main.jpg`, category: "Seeds", alt: "Aromatic paddy seed variety" },
    { src: `${CDN}/sunflower-main.jpg`, category: "Seeds", alt: "Oil-rich hybrid sunflower" },
    // Farmers
    { src: `${CDN}/farmer1.jpeg`, category: "Farmers", alt: "Farmer in Sri Tulasi seed field" },
    { src: `${CDN}/farmer2.jpeg`, category: "Farmers", alt: "Farmer inspecting crop quality" },
    { src: `${CDN}/farmer3.jpeg`, category: "Farmers", alt: "Farmer with hybrid harvest" },
    { src: `${CDN}/farmer4.jpeg`, category: "Farmers", alt: "Farmer tending seed plot" },
    { src: `${CDN}/farmer5.jpeg`, category: "Farmers", alt: "Farmer at work in field" },
    { src: `${CDN}/farmer6.jpeg`, category: "Farmers", alt: "Farmer with mature crop" },
    { src: `${CDN}/farmer7.jpeg`, category: "Farmers", alt: "Farmer showcasing seed yield" },
    // Processing (videos)
    { src: `${CDN}/processing-vid1.mp4`, category: "Processing", alt: "Seed processing line in operation", type: "video", poster: `${CDN}/maize2.jpeg` },
    { src: `${CDN}/processing-vid2.mp4`, category: "Processing", alt: "Hybrid seed grading and cleaning", type: "video", poster: `${CDN}/maize3.jpeg` },
    { src: `${CDN}/processing-vid3.mp4`, category: "Processing", alt: "Quality control during seed processing", type: "video", poster: `${CDN}/maize4.jpeg` },
  ] as GalleryItem[],
};
