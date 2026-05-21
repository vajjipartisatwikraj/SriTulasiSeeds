import { Link } from "@tanstack/react-router";
import { Sprout, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="font-display font-semibold text-xl">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-md text-white/75 leading-relaxed">
            Cultivating trust since {SITE.established}. Premium seeds, modern science, and a deep
            commitment to the Indian farmer.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/75 hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                {SITE.address.line1}<br />
                {SITE.address.line2}<br />
                {SITE.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5" />
              <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with care for Indian agriculture.</p>
        </div>
      </div>
    </footer>
  );
}
