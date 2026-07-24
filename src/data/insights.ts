export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "what-makes-a-great-product-animation-video",
    title: "What Makes a Great Product Animation Video",
    excerpt: "Breaking down the key elements that separate average from outstanding.",
    readTime: "4 min read",
    body: [
      "Placeholder intro paragraph — replace with your own words about what actually sets a great product animation apart from a forgettable one.",
      "Placeholder body paragraph covering pacing, lighting, storytelling and the small motion details that make a viewer stop scrolling.",
      "Placeholder closing paragraph — wrap up with a takeaway or a call to action for the reader.",
    ],
  },
  {
    slug: "how-i-built-the-whatsgaming-fc-26-promo",
    title: "How I Built the WhatsGaming FC 26 Promo",
    excerpt: "A behind-the-scenes look at the creative process and tools used.",
    readTime: "5 min read",
    body: [
      "Placeholder intro — set the scene for the WhatsGaming FC 26 project and what the brief was.",
      "Placeholder body — walk through the concept, tools, and creative decisions that shaped the final promo.",
      "Placeholder closing — reflect on what worked, what you'd do differently, and results.",
    ],
  },
  {
    slug: "saas-explainer-videos-what-works-and-what-doesnt",
    title: "SaaS Explainer Videos — What Works and What Doesn't",
    excerpt: "Lessons learned from producing dozens of SaaS explainers.",
    readTime: "6 min read",
    body: [
      "Placeholder intro — frame the problem most SaaS founders face with explainer videos.",
      "Placeholder body — patterns that consistently convert vs. common mistakes that kill retention.",
      "Placeholder closing — a short checklist teams can apply to their next explainer.",
    ],
  },
];