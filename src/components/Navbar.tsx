import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sprout } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent" : "glass shadow-soft"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-colors ${
            transparent ? "bg-white/15 text-white" : "bg-primary text-primary-foreground"
          }`}>
            <Sprout className="h-5 w-5" />
          </span>
          <span className={`font-display font-semibold tracking-tight text-lg ${
            transparent ? "text-white" : "text-foreground"
          }`}>
            {SITE.short}<span className="text-leaf"> Agritech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                transparent ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-primary"
              }`}
              activeOptions={{ exact: true }}
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? (transparent ? "text-white" : "text-primary") : ""}>
                    {n.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full ${
                        transparent ? "bg-white" : "bg-leaf"
                      }`}
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03] ${
            transparent
              ? "bg-white text-primary hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          Get in Touch
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ${
            transparent ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mb-4 rounded-3xl glass p-4 shadow-elegant"
          >
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-4 py-3 rounded-xl text-foreground/80 hover:bg-leaf-soft hover:text-primary font-medium"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "!bg-leaf-soft !text-primary" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-center"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
