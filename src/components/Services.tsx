import { Palette, Megaphone, Layout, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Comprehensive brand identity development, positioning, and visual systems that resonate with your audience.",
  },
  {
    icon: Megaphone,
    title: "Campaign Creative",
    description: "Integrated marketing campaigns that drive engagement and deliver measurable results across all channels.",
  },
  {
    icon: Layout,
    title: "Art Direction",
    description: "Visual storytelling and creative direction for editorial, advertising, and digital experiences.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Building and mentoring high-performing creative teams to execute bold, innovative work.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive creative solutions tailored to elevate your brand and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = index % 2 === 1;
            return (
              <div
                key={service.title}
                className={`group p-8 rounded-lg border border-border transition-all duration-300 animate-slide-up ${
                  isBlue ? "hover:border-blue" : "hover:border-accent"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${
                  isBlue 
                    ? "bg-blue/10 group-hover:bg-blue/20" 
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}>
                  <Icon className={`w-6 h-6 ${isBlue ? "text-blue" : "text-accent"}`} />
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
