import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-16 grid gap-8 md:gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/white-png.png"
              alt="Sri Tulasi Seeds Logo"
              className="h-20 md:h-40 w-20 md:w-40 object-contain"
            />
          </div>
          <p className="mt-3 md:mt-5 max-w-md text-xs md:text-sm text-white/75 leading-relaxed">
            Cultivating trust since {SITE.established}. Premium seeds, modern science, and a deep
            commitment to the Indian farmer.
          </p>
          <div className="mt-4 md:mt-6 flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-medium text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-xs md:text-sm text-white/75 hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-medium text-sm md:text-base mb-3 md:mb-4">Reach Us</h4>
          <ul className="space-y-2 text-xs md:text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <span className="text-xs md:text-sm">
                {SITE.address.line1}<br />
                {SITE.address.line2}<br />
                {SITE.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-3.5 w-3.5 mt-0.5" />
              <a href={`tel:${SITE.phone}`} className="text-xs md:text-sm hover:text-white">{SITE.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-xs md:text-sm text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with care for Indian agriculture.</p>
        </div>
      </div>
    </footer>
  );
}
