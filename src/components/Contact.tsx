import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
              Let's Create<br />
              <span className="text-gradient">Something Extraordinary</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto font-body">
              Whether you're launching a new brand or reimagining an existing one,
              I'd love to hear about your project.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="hover-lift shadow-lg hover:shadow-glow rounded-full px-8 text-sm tracking-wide"
              asChild
            >
              <a href="mailto:olasubomiafolayan@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-4 justify-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/olasubomi-afolayan001/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300 glass"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300 glass"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
