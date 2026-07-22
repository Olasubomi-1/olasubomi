import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    name: "3D Product Animation",
    tagline: "Make your product impossible to scroll past.",
    features: [
      "Photorealistic 3D product renders — studio quality",
      "Cinematic product reveal animations",
      "Optimised for Amazon, Shopify and social media ads",
      "Multiple format delivery — 4K, vertical and square",
    ],
    featured: false,
  },
  {
    name: "App & SaaS Promo Video",
    tagline: "Everything you need to launch with confidence.",
    features: [
      "60–90 second SaaS explainer or app promo video",
      "Custom motion graphics and branded intro sequence",
      "Sound design and voiceover sync",
      "1080p + vertical format for social media ads",
    ],
    featured: true,
  },
  {
    name: "Short-Form Ad Content",
    tagline: "Viral-ready content built for the feed.",
    features: [
      "15–30 second social media ads and reels",
      "Motion graphics and animated text overlays",
      "Vertical format for TikTok, Reels and Shorts",
      "Ready for paid ads or organic posting",
    ],
    featured: false,
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
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Services</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Pick what fits your project. Get a custom quote in 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative"
            >
              {service.featured && (
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 blur-[1px] pointer-events-none" />
              )}
              <div
                className={`relative glass rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover-lift ${
                  service.featured
                    ? "border-2 border-primary/40 shadow-[0_0_40px_hsl(213_62%_40%/0.12)]"
                    : "border border-border/30 hover:border-primary/15"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-tight mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.tagline}
                </p>
                <div className="divider-gradient mb-6" />
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full rounded-full py-6 text-sm font-semibold tracking-wide ${
                    service.featured
                      ? "shadow-lg hover:shadow-glow"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                  variant={service.featured ? "default" : "secondary"}
                  asChild
                >
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Need something custom?{" "}
          <Link to="/quote" className="text-primary hover:underline font-medium">
            Request a quote
          </Link>{" "}
          and we'll figure it out.
        </motion.p>
      </div>
    </section>
  );
}