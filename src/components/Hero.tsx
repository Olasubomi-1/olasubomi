import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Abstract Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
                Visual Creator.<br />
                <span className="bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">Motion Designer.</span>
              </h1>
            </div>

            {/* Sub-text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              I design motion that feels alive, blending design, timing, and storytelling 
              to create visuals that captivate and connect.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button 
                onClick={scrollToWork}
                size="lg"
                className="group text-base hover-lift shadow-lg hover:shadow-glow"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="text-base glass border-border/50 hover:border-primary/50"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Profile Image Placeholder - Abstract Circle */}
            <div className="pt-12 flex justify-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue rounded-full animate-glow" />
                <div className="absolute inset-2 bg-background rounded-full" />
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-blue/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
