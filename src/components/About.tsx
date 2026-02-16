import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Bringing Stories<br />
              <span className="text-gradient">to Life</span>
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                As a visual creator, I specialize in crafting compelling video content that resonates. 
                From long-form documentaries to scroll-stopping social media content, I create visuals 
                that capture attention and drive engagement.
              </p>
              <p>
                My approach blends cinematic techniques with modern editing styles, always focused
                on telling authentic stories that connect with audiences across all platforms.
              </p>
              <p>
                Whether it's a brand film, motion graphics, or viral short-form content, I believe 
                in the power of visual storytelling to inspire action and create lasting impressions.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-border/30 hover-lift group">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-7xl font-bold text-gradient">6+</span>
                <span className="text-muted-foreground text-sm tracking-widest uppercase font-body">Years Experience</span>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-border/30 hover-lift group">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-7xl font-bold text-gradient">100+</span>
                <span className="text-muted-foreground text-sm tracking-widest uppercase font-body">Projects Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
