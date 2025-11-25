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
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03045A] via-[#03045A]/95 to-[#0a0e5f] z-10" />
        <img
          src={heroImage}
          alt="Creative background"
          className="w-full h-full object-cover opacity-10"
        />
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/3 rounded-full blur-3xl z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
          <div className="space-y-6">
            <p className="text-sm md:text-base text-white/60 tracking-[0.3em] uppercase font-light">
              Hi, I am
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-none">
              Jason
            </h1>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl text-white font-light leading-relaxed">
              I design motion that <span className="font-semibold italic">feels alive</span>, blending design, timing, and storytelling in every frame.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
              My work turns products into experiences and messages into visuals that catch eyes and keep them, helping brands show their value without saying a word.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase text-white border border-white/20 hover:bg-white hover:text-[#03045A] transition-all duration-300"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
