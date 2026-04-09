import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const BlogPost = () => {
  const { slug } = useParams();
  const title = slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Blog Post";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary text-sm mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h1>
            <div className="glass rounded-2xl border border-border/30 p-8 md:p-12 text-center">
              <p className="text-muted-foreground text-lg">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
