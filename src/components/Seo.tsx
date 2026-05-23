import { Helmet } from "react-helmet-async";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string; // route path, e.g. "/catalog"
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  /** JSON-LD objects (Product, FAQPage, BreadcrumbList, etc.). */
  jsonLd?: object | object[];
  noindex?: boolean;
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
  jsonLd,
  noindex,
}: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sri Tulasi Agritech" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
