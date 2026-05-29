import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, Check, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";
import { Seo } from "@/components/Seo";
import { breadcrumbSchema } from "@/lib/seo";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sri Tulasi Agritech",
  url: "https://sritulasiseeds.lovable.app/contact",
  mainEntity: { "@id": "https://sritulasiseeds.lovable.app/#localbusiness" },
};

function FloatingInput({
  label, type = "text", value, onChange, required, textarea,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const float = focus || value.length > 0;
  const props = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    required,
    className:
      "peer w-full bg-transparent px-4 pt-6 pb-2 rounded-xl border border-border focus:border-leaf focus:ring-2 focus:ring-leaf/20 outline-none transition resize-none",
  };
  return (
    <div className="relative">
      {textarea ? (
        <textarea rows={5} {...props} />
      ) : (
        <input type={type} {...props} />
      )}
      <label className={`absolute left-4 transition-all pointer-events-none ${
        float ? "top-1.5 text-xs text-leaf font-semibold" : "top-4 text-muted-foreground"
      }`}>
        {label}{required && " *"}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <PageTransition>
      <Seo
        title="Contact Sri Tulasi Agritech — Hyderabad, Telangana | Seed Inquiries"
        description="Get in touch with Sri Tulasi Agritech for hybrid seed orders, distributor inquiries, and agronomic support. Hyderabad office, phone +91 70366 09999."
        path="/contact"
        keywords="contact Sri Tulasi, seed distributor Hyderabad, seed company Telangana, agricultural inquiry"
        jsonLd={[
          contactPageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <section className="pt-36 pb-12 px-6 lg:px-10 gradient-leaf">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contact"
            title={<>Let's grow <span className="text-gradient">together.</span></>}
            description="Whether you're a farmer, distributor, or partner — we'd love to hear from you."
          />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <InfoCard icon={MapPin} title="Visit Us">
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.line3}
            </InfoCard>
            <InfoCard icon={Phone} title="Call Us">
              <a href={`tel:${SITE.phone}`} className="hover:text-primary transition-colors">
                {SITE.phone}
              </a>
              <p className="text-xs text-muted-foreground mt-1">{SITE.owner}, Owner</p>
            </InfoCard>
            <InfoCard icon={Clock} title="Business Hours">
              Monday – Saturday<br />
              9:00 AM – 7:00 PM IST
            </InfoCard>
            <div className="p-6 rounded-3xl bg-card border border-border">
              <p className="text-sm font-semibold mb-4">Follow us</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social"
                    className="h-11 w-11 rounded-full gradient-leaf flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft space-y-5"
          >
            <h3 className="font-display text-3xl font-semibold">Send a message</h3>
            <p className="text-sm text-muted-foreground">We typically respond within one business day.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingInput label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <FloatingInput label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            </div>
            <FloatingInput label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <FloatingInput label="Your message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} required />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-soft"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <section className="pb-12 md:pb-16 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden border border-border shadow-soft aspect-[16/7]">
          <iframe
            title="Sri Tulasi Agritech location"
            src="https://www.google.com/maps?q=VSS+Nandadeep+Apartment,+Medchal+Rd,+Dandamudi+Enclave,+Jeedimetla,+Hyderabad,+Telangana+500067&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </PageTransition>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border hover:border-leaf transition-colors">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-leaf text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h4 className="mt-4 font-display font-semibold text-lg">{title}</h4>
      <div className="mt-2 text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}
