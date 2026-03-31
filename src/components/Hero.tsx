import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-background" />
      
      {/* Soft radial glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-primary/[0.07] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-ocean/[0.05] rounded-full blur-[100px]" />
      
      {/* Grid lines (subtle) */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-xs font-medium tracking-widest uppercase text-muted-foreground font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.95]">
                Motion Graphics & 3D Animation
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-gradient">
                for SaaS Brands, Ecommerce and Gaming
              </h1>
            </motion.div>

            {/* Sub-text */}
            <motion.p 
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I design motion that feels alive — blending design, timing, and storytelling 
              to create visuals that captivate and connect.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button 
                onClick={scrollToWork}
                size="lg"
                className="group text-sm tracking-wide hover-lift shadow-lg hover:shadow-glow rounded-full px-8"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="text-sm tracking-wide glass border-border/40 hover:border-primary/40 rounded-full px-8"
              >
                <Mail className="w-4 h-4 mr-1" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
