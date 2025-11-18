import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Luxury Brand Identity",
    category: "Branding",
    image: project1,
    description: "Complete brand identity for a premium lifestyle brand",
  },
  {
    id: 2,
    title: "Editorial Design",
    category: "Design",
    image: project2,
    description: "Modern magazine layout and typography system",
  },
  {
    id: 3,
    title: "Campaign Creative",
    category: "Advertising",
    image: project3,
    description: "Award-winning advertising campaign for luxury fashion",
  },
  {
    id: 4,
    title: "Digital Experience",
    category: "UX/UI",
    image: project4,
    description: "Sophisticated web platform with seamless user experience",
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground">
            A curated collection of projects that showcase creativity, strategy, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0 md:opacity-0"
                } flex flex-col justify-end p-6 md:p-8`}
              >
                <span className="text-sm font-medium text-accent mb-2">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              {/* Mobile: Always show info */}
              <div className="md:hidden bg-background p-6 border-t border-border">
                <span className="text-sm font-medium text-accent mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
