import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, Search } from "lucide-react";

import visualIdentityVideo from "@/assets/visual-identity.mp4";
import productAnimationVideo from "@/assets/product-animation.mp4";
import sunbruLogoVideo from "@/assets/sunbru-logo-intro.mp4";
import render3dVideo from "@/assets/3d-product-video.mp4";
import perfumeVideo from "@/assets/3d-perfume-animation.mp4";
import whatsgamePromoVideo from "@/assets/whatsgame-promo.mp4";
import renderAuroe from "@/assets/3d-render-auroe.jpg";

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
      { id: 21, video: whatsgamePromoVideo, title: "Promo Videos" },
      { id: 22, iframe: "https://www.youtube.com/embed/u1imsQsZoZ8?autoplay=1&mute=1&loop=1&playlist=u1imsQsZoZ8&playsinline=1", title: "Bread Ad" },
      { id: 23, iframe: "https://www.youtube.com/embed/DuvhryPBhcQ?autoplay=1&mute=1&loop=1&playlist=DuvhryPBhcQ&playsinline=1", title: "MyCharrg Launch" },
      { id: 24, iframe: "https://www.youtube.com/embed/5LcH0AZr9QU?autoplay=1&mute=1&loop=1&playlist=5LcH0AZr9QU&playsinline=1", title: "PureFi Launch" },
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
      { id: 18, image: renderAuroe, title: "Auroe Product Render" },
      { id: 19, video: render3dVideo, title: "3D Product Animation" },
      { id: 20, video: perfumeVideo, title: "3D Perfume Animation" },
    ],
  },
];


type PreviewMedia = {
  src: string;
  title: string;
  type: "video" | "iframe" | "image";
};

function getIframePreviewSrc(src: string) {
  const url = new URL(src);
  url.searchParams.set("autoplay", "1");
  url.searchParams.set("mute", "0");
  url.searchParams.set("controls", "1");
  url.searchParams.delete("loop");
  url.searchParams.delete("playlist");
  return url.toString();
}

function ProjectGrid({
  category,
  onPreview,
}: {
  category: Category;
  onPreview: (media: PreviewMedia) => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      key={category.id}
      id="portfolio-panel"
      role="tabpanel"
      aria-labelledby={`portfolio-tab-${category.id}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {category.assets.map((asset) => {
        const media = asset.video
          ? { src: asset.video, title: asset.title, type: "video" as const }
          : asset.iframe
            ? { src: asset.iframe, title: asset.title, type: "iframe" as const }
            : asset.image
              ? { src: asset.image, title: asset.title, type: "image" as const }
              : null;

        if (!media) return null;

        return (
          <article key={asset.id} className="group min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card">
              <div className="aspect-video overflow-hidden">
                {asset.video ? (
                  <video
                    src={asset.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : asset.iframe ? (
                  <iframe
                    src={asset.iframe}
                    title={asset.title}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    className="pointer-events-none h-full w-full"
                    style={{ border: "none" }}
                  />
                ) : (
                  <img
                    src={asset.image}
                    alt={asset.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <button
                type="button"
                aria-label={`Preview ${asset.title}`}
                onClick={() => onPreview(media)}
                className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/65 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {media.type === "image" ? <Search className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
                </span>
              </button>
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">{asset.title}</p>
          </article>
        );
      })}
    </motion.div>
  );
}

export default function LayerOfProof() {
  const [activeTab, setActiveTab] = useState(0);
  const [preview, setPreview] = useState<PreviewMedia | null>(null);

  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/[0.05] blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Layer of Proof</h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Every category. Every format. Every result.
          </p>
        </motion.div>

        <div
          className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`portfolio-tab-${category.id}`}
              aria-selected={activeTab === index}
              aria-controls="portfolio-panel"
              onClick={() => setActiveTab(index)}
              className={`rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                activeTab === index
                  ? "border-primary/50 bg-primary text-primary-foreground shadow-lg"
                  : "border-border/40 bg-card/50 text-foreground hover:border-primary/40 hover:bg-card"
              }`}
            >
              <span className="block font-semibold">{category.title}</span>
              <span className={`mt-1 block text-xs ${activeTab === index ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                {category.assets.length} {category.assets.length === 1 ? "project" : "projects"}
              </span>
            </button>
          ))}
        </div>

        <ProjectGrid
          category={categories[activeTab]}
          onPreview={setPreview}
        />

        <Dialog
          open={!!preview}
          onOpenChange={(open) => {
            if (!open) setPreview(null);
          }}
        >
          <DialogContent className="w-[95vw] max-w-6xl border-border/30 bg-background/95 p-4 backdrop-blur-xl sm:p-6">
            <DialogTitle className="sr-only">{preview?.title ?? "Project preview"}</DialogTitle>
            <div className="flex min-h-[45vh] w-full items-center justify-center">
              {preview?.type === "video" ? (
                <video
                  key={preview.src}
                  src={preview.src}
                  autoPlay
                  controls
                  playsInline
                  className="max-h-[78vh] max-w-full rounded-xl bg-black"
                />
              ) : preview?.type === "iframe" ? (
                <iframe
                  key={preview.src}
                  src={getIframePreviewSrc(preview.src)}
                  title={preview.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full rounded-xl"
                  style={{ border: "none" }}
                />
              ) : preview?.type === "image" ? (
                <img
                  src={preview.src}
                  alt={preview.title}
                  className="max-h-[78vh] max-w-full rounded-xl object-contain"
                />
              ) : null}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
