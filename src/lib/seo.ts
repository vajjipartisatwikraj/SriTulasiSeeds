// Central SEO configuration & JSON-LD builders for Sri Tulasi Agritech.
// Keep all canonical URLs absolute and consistent with sitemap.xml.

export const SITE_URL = "https://sritulasiseeds.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/black-png.png`;

export const ORG_NAME = "Sri Tulasi Agritech";
export const ORG_LEGAL = "SRI TULASI PVT. LTD";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  legalName: ORG_LEGAL,
  url: SITE_URL,
  logo: `${SITE_URL}/black-png.png`,
  foundingDate: "2017",
  founder: { "@type": "Person", name: "Thammaneni Veere Nagi Reddy" },
  description:
    "Sri Tulasi Agritech produces premium hybrid maize, sunflower and paddy seeds — trusted by 12,000+ farmers across six Indian states since 2017.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "802 Pet Baseerabad, Jeedimatla, Quthbullapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7036609999",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "te", "hi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-7093535139",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "te", "hi"],
    },
  ],
  areaServed: [
    "Andhra Pradesh", "Telangana", "Madhya Pradesh",
    "Haryana", "Karnataka", "Uttar Pradesh",
  ].map((s) => ({ "@type": "State", name: s })),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: ORG_NAME,
  image: `${SITE_URL}/black-png.png`,
  url: SITE_URL,
  telephone: "+91-7036609999",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "802 Pet Baseerabad, Jeedimatla, Quthbullapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.5197, longitude: 78.4615 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
