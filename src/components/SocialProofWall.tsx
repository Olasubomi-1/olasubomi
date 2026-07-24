import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    platform: "Crypto Brand",
    stars: 5,
    review: "Clean work, fast delivery. Exactly what we needed.",
    client: "TAWK CRYPTO",
  },
  {
    platform: "Agency",
    stars: 5,
    review: "Professional and easy to work with. The quality speaks for itself.",
    client: "VODEE STUDIO",
  },
  {
    platform: "Fiverr",
    stars: 5,
    review: "Solid communication throughout. Delivered ahead of schedule with no revisions needed.",
    client: "Daniel Hartmann",
  },
  {
    platform: "Amazon Seller",
    stars: 5,
    review: "High-quality visuals and quick turnaround. Will definitely work together again.",
    client: "Marcus Weber",
  },
];

export default function SocialProofWall() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Trusted By Brands Across Industries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="glass border border-border/30 rounded-2xl p-7 h-full flex flex-col hover-lift transition-all duration-500 hover:border-primary/15">
                {/* Platform badge */}
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-4">
                  {review.platform}
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 + i * 0.05, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Review */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
                  "{review.review}"
                </p>

                <div className="divider-gradient mb-4" />

                <p className="text-foreground font-semibold text-sm tracking-wide">
                  {review.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
