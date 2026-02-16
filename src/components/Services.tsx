import { Video, Sparkles, Zap, Film } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Film,
    title: "Long Form Videos",
    description: "Cinematic brand documentaries, product films, and storytelling content that captivates and engages audiences.",
  },
  {
    icon: Sparkles,
    title: "Motion Visuals",
    description: "Dynamic motion graphics, animated logos, and visual effects that bring brands to life with movement and energy.",
  },
  {
    icon: Zap,
    title: "Short Form Content",
    description: "Viral-ready social media content, reels, and TikToks optimized for maximum engagement and shareability.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "End-to-end video production from concept to delivery, including filming, editing, and post-production.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Services</h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            Professional video content creation tailored to elevate your brand and captivate your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass border border-border/30 rounded-2xl p-8 md:p-10 h-full hover-lift transition-all duration-500 hover:border-primary/20">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm md:text-base">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
