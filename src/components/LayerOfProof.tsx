import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Search } from "lucide-react";

import visualIdentityVideo from "@/assets/visual-identity.mp4";
import productAnimationVideo from "@/assets/product-animation.mp4";
import sassAnimationVideo from "@/assets/sass-animation.mp4";
import sunbruLogoVideo from "@/assets/sunbru-logo-intro.mp4";
import lastnVideo from "@/assets/lastn.mp4";
import render3dVideo from "@/assets/3d-product-video.mp4";
import perfumeVideo from "@/assets/3d-perfume-animation.mp4";
import renderAuroe from "@/assets/3d-render-auroe.jpg";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

type Asset = {
  id: number;
  title: string;
  iframe?: string;
  video?: string;
  image?: string;
};

type Category = {
  id: string;
  title: string;
  assets: Asset[];
};

const categories: Category[] = [
  {
    id: "motion-visuals",
    title: "Motion Visuals",
    assets: [
      { id: 1, video: visualIdentityVideo, title: "SaaS Video" },
      { id: 2, video: productAnimationVideo, title: "App Promo" },
      { id: 3, video: sunbruLogoVideo, title: "Logo Intro" },
    ],
  },
  {
    id: "long-form",
    title: "Long Form Videos",
    assets: [
      { id: 4, iframe: "https://www.youtube.com/embed/fXwg7ZSMxqA?autoplay=1&mute=1&loop=1&playlist=fXwg7ZSMxqA", title: "YouTube Video" },
      { id: 5, iframe: "https://www.youtube.com/embed/uVEQ29X9NGA?autoplay=1&mute=1&loop=1&playlist=uVEQ29X9NGA", title: "Interviews" },
      { id: 17, iframe: "https://www.youtube.com/embed/PfD3rVuf624?autoplay=1&mute=1&loop=1&playlist=PfD3rVuf624", title: "Vlog" },
    ],
  },
  {
    id: "short-form",
    title: "Short Form Content",
    assets: [
      { id: 6, iframe: "https://www.youtube.com/embed/Cb6wH9OwO8M?autoplay=1&mute=1&loop=1&playlist=Cb6wH9OwO8M", title: "Instagram Stories" },
      { id: 7, iframe: "https://www.youtube.com/embed/JkaPTTuwDl0?start=8&autoplay=1&mute=1&loop=1&playlist=JkaPTTuwDl0", title: "YouTube Shorts" },
      { id: 8, iframe: "https://www.youtube.com/embed/JkaPTTuwDl0?autoplay=1&mute=1&loop=1&playlist=JkaPTTuwDl0", title: "TikTok Campaign" },
      { id: 9, iframe: "https://www.youtube.com/embed/lwFjc0pI70g?autoplay=1&mute=1&loop=1&playlist=lwFjc0pI70g", title: "Social Media Reels" },
    ],
  },
  {
    id: "3d-renders",
    title: "3D Product Renders",
    assets: [
      { id: 10, image: project1, title: "Product Render 1" },
      { id: 11, image: project2, title: "Product Render 2" },
      { id: 12, image: project3, title: "Product Render 3" },
      { id: 13, image: project4, title: "Product Render 4" },
      { id: 18, image: renderAuroe, title: "Auroe Product Render" },
      { id: 19, video: render3dVideo, title: "3D Product Animation" },
      { id: 20, video: perfumeVideo, title: "3D Perfume Animation" },
    ],
  },
];

const tabLabels = ["Motion Visuals", "Long Form Videos", "Short Form Content", "3D Product Renders"];

/* ── Video/Iframe Slider ── */
function CategorySlider({ category, index }: { category: Category; index: number }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 4000 + index * 1000, stopOnInteraction: false })]
  );
  const [expandedMedia, setExpandedMedia] = useState<{ src: string; type: "video" | "iframe" } | null>(null);

  const handleClick = (asset: Asset) => {
    if (asset.video) setExpandedMedia({ src: asset.video, type: "video" });
    else if (asset.iframe) setExpandedMedia({ src: asset.iframe, type: "iframe" });
  };

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {category.assets.map((asset) => (
            <motion.div
              key={asset.id}
              className="flex-[0_0_80%] sm:flex-[0_0_55%] md:flex-[0_0_42%] lg:flex-[0_0_32%] min-w-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="group relative overflow-hidden rounded-2xl border border-border/30 cursor-pointer hover-lift"
                onClick={() => handleClick(asset)}
              >
                <div className="aspect-[4/5] overflow-hidden bg-card">
                  {asset.iframe ? (
                    <iframe
                      src={asset.iframe}
                      className="w-full h-full object-cover pointer-events-none"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{ border: "none" }}
                    />
                  ) : asset.video ? (
                    <video
                      src={asset.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-foreground font-medium text-sm">{asset.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!expandedMedia} onOpenChange={() => setExpandedMedia(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-border/30">
          <button
            onClick={() => setExpandedMedia(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-card transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-full h-full flex items-center justify-center p-6">
            {expandedMedia?.type === "video" && (
              <video src={expandedMedia.src} autoPlay loop controls playsInline className="max-w-full max-h-full rounded-xl" />
            )}
            {expandedMedia?.type === "iframe" && (
              <iframe
                src={expandedMedia.src.replace("mute=1", "mute=0")}
                className="w-full h-full rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: "none" }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ── Image/Video Gallery with lightbox ── */
function ImageGallery({ category }: { category: Category }) {
  const [lightbox, setLightbox] = useState<{ src: string; type: "image" | "video" } | null>(null);

  const handleClick = (asset: Asset) => {
    if (asset.video) {
      setLightbox({ src: asset.video, type: "video" });
    } else if (asset.image) {
      setLightbox({ src: asset.image, type: "image" });
    }
  };

  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {category.assets.map((asset) => (
          <motion.div
            key={asset.id}
            className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleClick(asset)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/30">
              <div className="aspect-square overflow-hidden bg-card">
                {asset.video ? (
                  <video
                    src={asset.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Search className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">{asset.title}</p>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-border/30">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-card transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="p-6 flex items-center justify-center">
            {lightbox?.type === "image" && (
              <img src={lightbox.src} alt="" className="w-full h-auto rounded-xl" />
            )}
            {lightbox?.type === "video" && (
              <video src={lightbox.src} autoPlay loop controls playsInline className="max-w-full max-h-[80vh] rounded-xl" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ── Main Section ── */
export default function LayerOfProof() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Layer of Proof</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Every category. Every format. Every result.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 3 ? (
            <ImageGallery category={categories[3]} />
          ) : (
            <CategorySlider category={categories[activeTab]} index={activeTab} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
