import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export default function NotFound() {
  return (
    <>
    <Seo
      title="Page not found — Sri Tulasi Agritech"
      description="The page you are looking for no longer exists. Return to the Sri Tulasi Agritech home page."
      path="/404"
      noindex
    />
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Back to home
        </Link>
      </div>
    </div>
    </>
  );
}
