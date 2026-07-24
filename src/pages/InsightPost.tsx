import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { insightPosts } from "@/data/insights";

const InsightPost = () => {
  const { slug } = useParams();
  const post = insightPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Afolayan O. Jason`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", post.excerpt);
    }
  }, [post]);

  if (!post) return <Navigate to="/insights" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-primary text-sm mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-sm mb-10">{post.readTime}</p>
            <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-5">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InsightPost;