import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03045A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#03045A]/90 z-10" />
        <img
          src={heroImage}
          alt="Creative background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-white/80">Hi, I am</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
              Jason
            </h1>
          </div>
          <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto text-balance leading-relaxed">
            I'm a <span className="text-white font-semibold">visual creator</span> crafting content 
            that captivates, tells stories, and brings brands to life.
          </p>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto text-balance">
            From cinematic long-form videos to dynamic motion visuals and viral short-form content, 
            I create visuals that <span className="text-white font-medium">connect and inspire</span>.
          </p>
          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors group mt-4"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
