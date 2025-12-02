import { Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Let's Create Something
              <span className="block bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">Extraordinary</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're launching a new brand or reimagining an existing one,
              I'd love to hear about your project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="hover-lift shadow-lg hover:shadow-glow"
              asChild
            >
              <a href="mailto:olasubomiafolayan@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://www.linkedin.com/in/olasubomi-afolayan001/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all hover-lift glass"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all hover-lift glass"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
