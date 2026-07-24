import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "what-makes-a-great-product-animation-video",
    category: "Motion Design",
    title: "What Makes a Great Product Animation Video",
    excerpt: "The difference between a video people skip and one they watch twice.",
    date: "April 2025",
  },
  {
    slug: "how-i-built-the-whatsgaming-fc-26-promo",
    category: "SaaS",
    title: "How I Built the WhatsGaming FC 26 Promo",
    excerpt: "A breakdown of the brief, the process and what made it work.",
    date: "April 2025",
  },
  {
    slug: "saas-explainer-videos-what-works",
    category: "3D Animation",
    title: "SaaS Explainer Videos: What Works and What Doesn't",
    excerpt: "After working with multiple SaaS brands, here's what I've learned.",
    date: "April 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Insights</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Motion design, creative process and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block glass rounded-2xl border border-border/30 overflow-hidden hover-lift transition-all duration-300 group"
                >
                  {/* Thumbnail placeholder */}
                  <div className="aspect-video bg-muted/30 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Thumbnail</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                    <span className="text-primary text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                      Read More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
