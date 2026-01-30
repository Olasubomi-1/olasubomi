import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "TAWK CRYPTO",
    role: "Founder",
    testimonial: "Clean work, fast delivery. Exactly what we needed.",
  },
  {
    id: 2,
    name: "VODEE STUDIO",
    role: "Creative Director",
    testimonial: "Professional and easy to work with. The quality speaks for itself.",
  },
  {
    id: 3,
    name: "Chinedu Okafor",
    role: "CEO",
    testimonial: "Solid communication throughout. Delivered ahead of schedule with no revisions needed.",
  },
  {
    id: 4,
    name: "Marcus Weber",
    role: "Brand Manager",
    testimonial: "High-quality visuals and quick turnaround. Will definitely work together again.",
  },
  {
    id: 5,
    name: "Elena Kowalski",
    role: "Marketing Lead",
    testimonial: "Clear, polished, and professional. Made the whole process smooth.",
  },
];

const Reviews = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue/10 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            What Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Trusted by brands and creators who value quality and storytelling.
          </p>
        </motion.div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass border border-border/50 rounded-2xl p-6 md:p-8 h-full flex flex-col hover-lift transition-all duration-500 hover:shadow-glow">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6 flex-grow">
                  "{review.testimonial}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border/30 pt-4">
                  <h4 className="text-foreground font-semibold text-lg mb-1">
                    {review.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
