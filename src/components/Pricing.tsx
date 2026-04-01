import { motion } from "framer-motion";
import { CircleCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic · Quick Edit",
    price: "$80",
    badge: "Starter",
    description: "Perfect for Amazon sellers and brands that need fast, clean visuals.",
    features: [
      "30 second motion graphics video",
      "Background music included",
      "1080p MP4 delivery",
      "3 day turnaround",
      "1 revision",
    ],
    featured: false,
  },
  {
    name: "Standard · Promo Video",
    price: "$150",
    badge: "Most Popular",
    description: "Ideal for SaaS brands and app developers who need a polished promo.",
    features: [
      "60–75 second app promo or explainer video",
      "Custom motion graphics and text animations",
      "Background music and sound design",
      "1080p + vertical format for social media",
      "4 day turnaround",
      "2 revisions",
    ],
    featured: true,
  },
  {
    name: "Premium · Commercial Grade",
    price: "$220",
    badge: "Premium",
    description: "Full cinematic production for brands that want to make a serious impact.",
    features: [
      "90 second cinematic commercial video",
      "4K delivery in multiple formats",
      "Advanced motion graphics and transitions",
      "Sound design and voiceover sync",
      "5 day turnaround",
      "3 revisions",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            No hidden fees. No surprises. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                {/* Badge */}
                <span
                  className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-5 ${
                    plan.featured
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {plan.badge}
                </span>

                {/* Name & Price */}
                <h3 className="text-lg font-semibold tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/project</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="divider-gradient mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
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
                  <a href="mailto:olasubomiafolayan@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Need something custom?{" "}
          <a
            href="mailto:olasubomiafolayan@gmail.com"
            className="text-primary hover:underline font-medium"
          >
            Message me
          </a>{" "}
          directly and we'll work something out.
        </motion.p>
      </div>
    </section>
  );
}
