import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    category: "Seeds & Quality",
    question: "What makes Sri Tulasi seeds different from other brands?",
    answer:
      "Our seeds undergo rigorous quality testing at every stage of production. We use advanced hybrid breeding techniques, conduct germination rate verification, and maintain strict seed certification standards. Each batch is tested for purity, viability, and disease resistance, ensuring only the highest-performing seeds reach farmers.",
  },
  {
    id: 2,
    category: "Farming Tips",
    question: "What's the ideal sowing time and soil preparation for your maize varieties?",
    answer:
      "Maize should be sown during the monsoon (June-July) or post-monsoon (October-November) seasons depending on your region. Prepare well-drained soil with a pH of 6.0-7.0, incorporate organic matter, and ensure proper moisture retention. Our agronomic team provides personalized guidance based on your location and soil type.",
  },
  {
    id: 3,
    category: "Productivity",
    question: "What yield can I expect with Sri Tulasi hybrid seeds?",
    answer:
      "Yields vary based on soil quality, weather, irrigation, and farming practices. Our maize hybrids typically deliver 45-50 quintals/hectare under optimal conditions, sunflower yields 15-18 quintals/hectare, and paddy produces 50-60 quintals/hectare. We provide comprehensive yield prediction charts and crop management guidelines.",
  },
  {
    id: 4,
    category: "Support & Services",
    question: "Do you provide after-sales support and crop advisory?",
    answer:
      "Yes, we offer comprehensive support throughout the growing season. Our team provides pre-sowing soil analysis, crop management recommendations, pest & disease identification, and harvest guidance. Farmers can reach our support team via phone, WhatsApp, or through our regional agronomic centers located in all our operating states.",
  },
  {
    id: 5,
    category: "Procurement",
    question: "How can I purchase Sri Tulasi seeds and what are the payment options?",
    answer:
      "You can purchase directly from our authorized dealers, regional offices, or online through our website. We accept cash, digital payments (UPI, bank transfer), and offer flexible payment terms for bulk orders. Farmers also have access to our loyalty program which provides seasonal discounts and exclusive early access to new varieties.",
  },
];

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="pt-28 md:pt-36 pb-2 md:pb-3 px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-leaf/10 border border-leaf/30 mb-4 sm:mb-6">
            <Leaf className="h-3 sm:h-4 w-3 sm:w-4 text-leaf" />
            <span className="text-xs sm:text-sm font-medium text-leaf tracking-wider uppercase">Questions?</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our seeds, farming practices, and support services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <motion.button
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    expanded === item.id
                      ? "bg-gradient-to-r from-primary/5 to-leaf/5 border-2 border-leaf/40 shadow-soft"
                      : "bg-white border-2 border-gray-100 hover:border-leaf/30 hover:shadow-soft"
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 p-5 md:p-6">
                    {/* Category Badge */}
                    <div
                      className={`px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase transition-colors whitespace-nowrap ${
                        expanded === item.id
                          ? "bg-leaf text-white"
                          : "bg-primary text-white group-hover:bg-primary/90"
                      }`}
                    >
                      {item.category}
                    </div>

                    {/* Question & Icon */}
                    <div className="flex-1 flex items-start justify-between gap-3">
                      <p
                        className={`font-medium text-sm md:text-base leading-tight transition-colors ${
                          expanded === item.id ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {item.question}
                      </p>
                      <motion.div
                        animate={{ rotate: expanded === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-colors ${
                            expanded === item.id ? "text-leaf" : "text-gray-400 group-hover:text-leaf"
                          }`}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {expanded === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t-2 border-leaf/20 pt-4">
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>

                          {/* Decorative line */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="mt-4 h-1 w-12 bg-gradient-to-r from-leaf to-primary/40 rounded-full origin-left"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 mx-4 md:-mx-6 lg:-mx-10 text-center p-5 md:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-primary/90 via-leaf/75 to-primary/90 shadow-2xl"
        >
          <p className="font-display text-white/95 mb-3 md:mb-5 text-base md:text-xl lg:text-2xl font-medium md:font-semibold leading-relaxed">
            Still have questions? Our expert team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-full bg-white text-primary font-medium md:font-semibold hover:bg-white/95 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
          >
            Get Expert Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
