import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAFooter() {
  return (
    <footer id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", damping: 20 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to Make Something Great?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Let's build something your audience won't forget.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="rounded-full px-12 py-7 text-base font-semibold tracking-wide shadow-lg hover:shadow-glow hover-lift"
              asChild
            >
              <a href="/quote" className="animate-[pulse_3s_ease-in-out_infinite]">Work With Me</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:olasubomiafolayan@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              olasubomiafolayan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/olasubomi-afolayan001/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Afolayan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
