import { Video, Sparkles, Zap, Film } from "lucide-react";

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
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground">
            Professional video content creation tailored to elevate your brand and captivate your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = index % 2 === 1;
            return (
              <div
                key={service.title}
                className={`group p-8 rounded-lg border border-border/50 glass transition-all duration-300 animate-slide-up hover-lift ${
                  isBlue ? "hover:border-blue" : "hover:border-primary"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${
                  isBlue 
                    ? "bg-blue/10 group-hover:bg-blue/20" 
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <Icon className={`w-6 h-6 ${isBlue ? "text-blue" : "text-primary"}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
