import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    name: "3D Product Animation",
    statement:
      "I turn products into cinematic, scroll-stopping renders that look like studio work, built for Amazon, Shopify, and social.",
  },
  {
    name: "App & SaaS Promo Video",
    statement:
      "I create the videos that launch products, explainer clarity, motion polish, sound designed to hold attention.",
  },
  {
    name: "Short-Form Ad Content",
    statement:
      "Vertical-first content built for the feed, TikTok, Reels, Shorts, that doesn't feel like an ad.",
  },
  {
    name: "Long-Form Content",
    statement:
      "Vlogs, tutorials, podcasts, I edit long-form into something people actually stay for, not click away from.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">What I Do</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Pick what fits your project. Get a custom quote in 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              <h3 className="text-xl font-semibold tracking-tight mb-3">{capability.name}</h3>
              <div className="divider-gradient mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">{capability.statement}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-sm font-semibold tracking-wide shadow-lg hover:shadow-glow"
            asChild
          >
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
