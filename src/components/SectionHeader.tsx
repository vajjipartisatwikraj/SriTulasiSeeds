import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-soft text-primary text-[10px] sm:text-xs font-medium sm:font-medium tracking-wide uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium sm:font-semibold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}
