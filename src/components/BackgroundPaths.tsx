import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useMemo } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
  const paths = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      strokeWidth: 0.5 + i * 0.03,
      opacity: 0.08 + i * 0.008,
      duration: 20 + Math.random() * 10,
    }));
  }, [position]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={path.strokeWidth}
            strokeOpacity={0.15 + i * 0.012}
            initial={{ pathLength: 0.3, opacity: 0.2 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.35, 0.15],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  const title = "Motion Graphics & 3D Animation";

  const scrollToWork = useCallback(() => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const words = title.split(" ");

  return (
    <section
      id="intro"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0F1F" }}
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-[0.25em] last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0, rotateX: -80 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        delay: 0.5 + (wordIndex * 5 + letterIndex) * 0.04,
                        type: "spring",
                        damping: 20,
                        stiffness: 150,
                      }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              I create cinematic product animations, app promo videos and explainer
              content that converts viewers into buyers
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <Button
                onClick={scrollToWork}
                size="lg"
                className="group rounded-full px-10 py-6 text-base tracking-wide shadow-lg hover:shadow-glow hover-lift"
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 py-6 text-base tracking-wide border-border/40 hover:border-primary/40"
                asChild
              >
                <a href="mailto:olasubomiafolayan@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get a Free Quote
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
