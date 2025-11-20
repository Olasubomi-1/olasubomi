const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Bringing Stories to Life Through Visuals
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
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
          </div>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="border-l-2 border-blue pl-6 space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-blue">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="border-l-2 border-blue pl-6 space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-blue">15+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
