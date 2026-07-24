import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "what-makes-a-great-product-animation-video",
    title: "What Makes a Great Product Animation Video",
    description: "Breaking down the key elements that separate average from outstanding.",
  },
  {
    slug: "how-i-built-the-whatsgaming-fc-26-promo",
    title: "How I Built the WhatsGaming FC 26 Promo",
    description: "A behind-the-scenes look at the creative process and tools used.",
  },
  {
    slug: "saas-explainer-videos-what-works-and-what-doesnt",
    title: "SaaS Explainer Videos: What Works and What Doesn't",
    description: "Lessons learned from producing dozens of SaaS explainers.",
  },
];

export default function Blog() {
  return (
    <section id="insights" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Insights</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/insights/${post.slug}`} className="glass border border-border/30 rounded-2xl p-8 h-full flex flex-col hover-lift transition-all duration-500 hover:border-primary/15 group cursor-pointer">
                <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
