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
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background" />
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            Trusted by brands and creators who value quality and storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass border border-border/30 rounded-2xl p-7 md:p-8 h-full flex flex-col hover-lift transition-all duration-500 hover:border-primary/15">
                {/* Quote */}
                <Quote className="w-5 h-5 text-primary/40 mb-5" />

                {/* Testimonial */}
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 flex-grow font-body">
                  "{review.testimonial}"
                </p>

                {/* Divider */}
                <div className="divider-gradient mb-4" />

                {/* Client Info */}
                <div>
                  <h4 className="text-foreground font-semibold text-sm tracking-wide">
                    {review.name}
                  </h4>
                  <p className="text-muted-foreground text-xs mt-0.5 font-body">
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
