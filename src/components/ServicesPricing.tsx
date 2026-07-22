import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const saasPlans = [
  {
    name: "Starter Launch",
    price: "$100",
    tagline: "Get your product in front of the right people, fast.",
    features: [
      "30 second SaaS explainer or app promo video",
      "Motion graphics and animated text",
      "1080p MP4 — ready for Product Hunt, LinkedIn and your website",
    ],
    featured: false,
  },
  {
    name: "Growth Package",
    price: "$200",
    tagline: "Everything you need to launch with confidence.",
    features: [
      "60 second SaaS explainer video",
      "Custom motion graphics + branded intro sequence",
      "1080p + vertical format for social media ads",
    ],
    featured: true,
  },
  {
    name: "Full Launch Package",
    price: "$350",
    tagline: "Your complete launch visual toolkit.",
    features: [
      "90 second cinematic SaaS commercial",
      "Motion graphics, transitions and sound design",
      "4K delivery + 3 format versions — YouTube, Reels, LinkedIn",
    ],
    featured: false,
  },
];

const ecommercePlans = [
  {
    name: "Product Spotlight",
    price: "$70",
    tagline: "Make your product impossible to scroll past.",
    features: [
      "1 photorealistic 3D product render — studio quality",
      "1 x 15 second product reveal animation",
      "High resolution PNG + MP4 — ready for Amazon, Shopify and Etsy",
    ],
    featured: false,
  },
  {
    name: "Store Ready Package",
    price: "$120",
    tagline: "Everything your store needs to look premium.",
    features: [
      "3 photorealistic 3D product renders — multiple angles",
      "1 x 30 second product promo video",
      "Optimised for Amazon, Shopify and social media ads",
    ],
    featured: true,
  },
  {
    name: "Brand Launch Package",
    price: "$200",
    tagline: "Full visual identity for your product launch.",
    features: [
      "5 photorealistic 3D product renders",
      "1 x 60 second cinematic product commercial",
      "4K delivery + all social media formats",
    ],
    featured: false,
  },
];

const groups = [
  { key: "saas", label: "For SaaS Founders & App Developers", plans: saasPlans },
  { key: "ecommerce", label: "For Ecommerce & Shop Owners", plans: ecommercePlans },
];

export default function ServicesPricing() {
  const [activeGroup, setActiveGroup] = useState(0);
  const currentGroup = groups[activeGroup];

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            What I Do
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Pick your category. Pick your package. Let's get to work.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          {groups.map((group, i) => (
            <button
              key={group.key}
              onClick={() => setActiveGroup(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeGroup === i
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  : "bg-card/40 text-muted-foreground border-border/30 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {group.label}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentGroup.plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.featured && (
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 blur-[1px] pointer-events-none" />
                )}

                <div
                  className={`relative glass rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover-lift ${
                    plan.featured
                      ? "border-2 border-primary/40 shadow-[0_0_40px_hsl(213_62%_40%/0.12)]"
                      : "border border-border/30 hover:border-primary/15"
                  }`}
                >
                  {plan.featured && (
                    <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-4 bg-primary/20 text-primary">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-lg font-semibold tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">/project</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  <div className="divider-gradient mb-6" />

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full rounded-full py-6 text-sm font-semibold tracking-wide ${
                      plan.featured
                        ? "shadow-lg hover:shadow-glow"
                        : "bg-secondary hover:bg-secondary/80 text-foreground"
                    }`}
                    variant={plan.featured ? "default" : "secondary"}
                    asChild
                  >
                    <a
                      href="mailto:olasubomiafolayan@gmail.com"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Start a Project
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom note */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Need something custom or have a bigger project in mind?{" "}
          <a
            href="mailto:olasubomiafolayan@gmail.com"
            className="text-primary hover:underline font-medium"
          >
            Message me
          </a>{" "}
          directly and we'll figure it out.
        </motion.p>
      </div>
    </section>
  );
}
