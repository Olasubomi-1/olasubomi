import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const skills = [
  "After Effects", "Blender", "Cinema 4D", "Premiere Pro",
  "Remotion", "Motion Graphics", "3D Animation", "SaaS Videos",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5★", label: "Star Rated" },
  { value: "🌍", label: "Global Clients" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* PROFILE IMAGE: replace with your photo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center mb-8">
              <User className="w-16 h-16 text-muted-foreground" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Afolayan O. Jason
            </h1>
            <p className="text-primary font-medium text-lg mb-6">Motion Designer</p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I'm Jason, a motion designer specialising in 3D product animation, SaaS launch videos
              and cinematic motion graphics. I work with founders, ecommerce brands and creative teams
              who want visuals that don't just look good. They convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Tools & Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-card border border-border/30"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="block text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs tracking-widest uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-glow"
              asChild
            >
              <a href="mailto:olasubomiafolayan@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Let's Work Together
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
