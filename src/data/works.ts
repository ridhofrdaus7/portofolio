export type WorkItem = {
  id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  year: string;
  image: string;
  color: string;
  deliverables: string[];
};

export const works: WorkItem[] = [
  {
    id: 1,
    brand: "Aura Skincare",
    category: "Beauty Brand",
    title: "Brand Identity System",
    description:
      "A clean, premium identity for a natural skincare brand, built to look fresh on packaging, socials, ads, and every product launch moment.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1600&auto=format&fit=crop",
    color: "#B6C4A2",
    deliverables: ["Logo", "Packaging", "Social Kit"],
  },
  {
    id: 2,
    brand: "Aura Skincare",
    category: "Beauty Brand",
    title: "Launch Campaign",
    description:
      "A scroll-stopping launch campaign with consistent key visuals for hero banners, Instagram content, marketplace graphics, and paid ads.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop",
    color: "#E8B4A9",
    deliverables: ["Campaign", "Ads", "Marketplace"],
  },
  {
    id: 3,
    brand: "Vanguard Studio",
    category: "Studio Brand",
    title: "Portfolio Website",
    description:
      "An editorial portfolio website with big layouts, smooth scroll energy, and a visual system that lets creative work take the spotlight.",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1600&auto=format&fit=crop",
    color: "#D4763A",
    deliverables: ["Web Design", "Art Direction", "Prototype"],
  },
  {
    id: 4,
    brand: "Vanguard Studio",
    category: "Studio Brand",
    title: "Studio Deck",
    description:
      "A sharp company profile and pitch deck system designed to make proposals, partnerships, and client presentations feel more convincing.",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
    color: "#FFB000",
    deliverables: ["Pitch Deck", "Layout", "Template"],
  },
  {
    id: 5,
    brand: "Nexus Finance",
    category: "Finance Brand",
    title: "Dashboard UI",
    description:
      "A finance dashboard interface that makes complex data feel quick to read, using modular components and a clear information hierarchy.",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    color: "#2E6BFF",
    deliverables: ["UI Design", "Dashboard", "Design System"],
  },
  {
    id: 6,
    brand: "Nexus Finance",
    category: "Finance Brand",
    title: "Mobile Banking Flow",
    description:
      "A mobile banking flow focused on fast transactions, simple onboarding, and reusable UI components for a smoother product experience.",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop",
    color: "#37BFA7",
    deliverables: ["Mobile UI", "User Flow", "Prototype"],
  },
  {
    id: 7,
    brand: "Lumina Archive",
    category: "Editorial Brand",
    title: "Digital Magazine",
    description:
      "A digital editorial experience blending strong photography, bold type contrast, and article layouts that keep readers locked in.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop",
    color: "#C8B8A9",
    deliverables: ["Editorial", "Web Layout", "Typography"],
  },
  {
    id: 8,
    brand: "Lumina Archive",
    category: "Editorial Brand",
    title: "Exhibition Visual",
    description:
      "A poster and publication system for exhibitions, balancing an artistic attitude with clear event information and memorable visuals.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop",
    color: "#8C6E63",
    deliverables: ["Poster", "Publication", "Motion Key"],
  },
];
