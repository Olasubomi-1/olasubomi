import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import visualIdentityVideo from "@/assets/visual-identity.mp4";
import productAnimationVideo from "@/assets/product-animation.mp4";

const categories = [
  {
    id: "long-form",
    title: "Long Form Videos",
    assets: [
      { id: 1, image: project1, title: "Brand Documentary Series" },
      { id: 2, image: project4, title: "Product Launch Film" },
      { id: 3, image: project1, title: "Corporate Story" },
      { id: 4, image: project4, title: "Creative Feature" },
    ],
  },
  {
    id: "motion-visuals",
    title: "Motion Visuals",
    assets: [
      { id: 5, video: visualIdentityVideo, title: "Visual Identity Animations" },
      { id: 6, iframe: "https://drive.google.com/file/d/1hqczKetFN1WoRQrYHZAl5C4fUpmYN9C4/preview", title: "Product Animation" },
      { id: 7, image: project2, title: "UI Animations" },
      { id: 8, image: project2, title: "Logo Reveal" },
    ],
  },
  {
    id: "short-form",
    title: "Short Form Content",
    assets: [
      { id: 9, image: project3, title: "Social Media Reels" },
      { id: 10, image: project3, title: "Instagram Stories" },
      { id: 11, image: project3, title: "TikTok Campaigns" },
      { id: 12, image: project3, title: "YouTube Shorts" },
    ],
  },
];

const CategorySlider = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 4000 + index * 1000, stopOnInteraction: false })]
  );
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="mb-20"
    >
      {/* Category Title */}
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 px-6 md:px-12 text-foreground">
        {category.title}
      </h3>

      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-6 md:px-12">
          {category.assets.map((asset) => (
            <motion.div
              key={asset.id}
              className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%] xl:flex-[0_0_28%] min-w-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                  {asset.iframe ? (
                    <iframe
                      src={asset.iframe}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      allow="autoplay"
                      style={{ border: 'none' }}
                    />
                  ) : asset.video ? (
                    <video
                      src={asset.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                </div>
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-white font-medium text-lg">{asset.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section 
      id="work" 
      className="py-24 md:py-32 bg-gradient-to-b from-white via-white/95 to-[#03045A]/5 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20 px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">Selected Work</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            A curated collection of projects across video, motion, and content creation.
          </p>
        </motion.div>

        {/* Category Sliders */}
        {categories.map((category, index) => (
          <CategorySlider key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
