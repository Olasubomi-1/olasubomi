const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Creating Impact Through Design
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                With over a decade of experience leading creative teams and shaping brand narratives,
                I've had the privilege of working with industry leaders across fashion, technology,
                and luxury sectors.
              </p>
              <p>
                My approach combines strategic thinking with bold creative execution, always focused
                on delivering measurable results and unforgettable experiences.
              </p>
              <p>
                From concept to completion, I believe in the power of design to transform businesses
                and connect with audiences on a deeper level.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-accent">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-accent">15+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
