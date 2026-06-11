export type ProjectIndustry =
  | "Real Estate"
  | "Construction & Development"
  | "Commercial & Retail Spaces"
  | "Arts, Museums & Public Installations"
  | "Personal & Unique Spaces"
  | "Drone & Aerial Documentation";

export type ViewerSceneType =
  | "abstract"
  | "point-cloud"
  | "ply"
  | "gaussian-splat"
  | "photogrammetry"
  | "digital-twin";

export interface ViewerMedia {
  title: string;
  summary: string;
  sceneType: ViewerSceneType;
  interactionHint: string;
}

export interface Company {
  name: string;
  email: string;
  phone: string;
  serviceArea: string;
  region: string;
  instagramHandle: string;
  instagramUrl: string;
}

export interface HomeHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
}

export interface WhatWeDoItem {
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
}

export interface Industry {
  name: ProjectIndustry;
  description: string;
  audience: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface InstagramSection {
  title: string;
  description: string;
  buttonLabel: string;
  checklist: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  industry: ProjectIndustry;
  cardLabel: string;
  type: string;
  metric: string;
  details: string;
  summary: string;
  description: string;
  image: string;
  videoUrl?: string;
  gallery: string[];
  deliverables: string[];
  scope: string[];
  featured?: boolean;
  hasInteractiveViewer?: boolean;
  viewer: ViewerMedia;
  instagramNote: string;
}

export type PortfolioItem = Project;
export type Property = Project;

const imageUrl = (id: string, width = 1600, height = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`;

export const company: Company = {
  name: "Halton Spatial",
  email: "hello@haltonspatial.com",
  phone: "(365) 778-1337",
  serviceArea:
    "Serving Toronto, Mississauga, Hamilton, Burlington, Oakville and Milton throughout the Halton Region and nearby communities. ❤️",
  region: "Halton Region, Ontario",
  instagramHandle: "@HaltonSpatial",
  instagramUrl: "https://instagram.com/HaltonSpatial",
};

export const homeHero: HomeHero = {
  eyebrow: "Halton Region Visual Studio",
  title: "Bring your space online.",
  subtitle:
    "Thoughtfully crafted visuals and immersive tours that help people feel a place before they ever arrive.",
  primaryLabel: "Get a Quote",
  primaryTo: "/get-quote",
  secondaryLabel: "View Tesla Project",
};

export const whatWeDoItems: WhatWeDoItem[] = [
  {
    title: "3D Photos",
    description:
      "Beautiful imagery that gives people a stronger sense of space, light, and layout before they step inside.",
  },
  {
    title: "Virtual Tours",
    description:
      "Smooth, intuitive tours that invite people to explore at their own pace from any screen.",
  },
  {
    title: "Digital Twins",
    description:
      "A lasting digital version of your space, ready to revisit, share, and build on over time.",
  },
  {
    title: "Web Embedding",
    description:
      "Ready for your website, your presentation, or wherever you want the experience to live.",
  },
  {
    title: "Progress Documentation",
    description:
      "A clear visual record of how a space changes, grows, and comes together over time.",
  },
];

export const services = whatWeDoItems.map((item) => item.title);

export const industries: Industry[] = [
  {
    name: "Real Estate",
    description:
      "Interactive property marketing that helps buyers, tenants, and decision-makers understand a space before booking a visit.",
    audience:
      "Residential listings, luxury homes, commercial leasing, and development marketing.",
    image: imageUrl("1600585154340-be6161a56a0c"),
  },
  {
    name: "Construction & Development",
    description:
      "Capture recurring site conditions, milestones, and handoff-ready records for teams that need visual accountability.",
    audience:
      "Builders, developers, general contractors, consultants, and owners.",
    image: imageUrl("1504307651254-35680f356dfd"),
  },
  {
    name: "Commercial & Retail Spaces",
    description:
      "Showcase stores, hospitality venues, offices, and customer environments with a stronger sense of flow and atmosphere.",
    audience:
      "Retail, hospitality, office, and destination-focused businesses.",
    image: imageUrl("1524758631624-e2822e304c36"),
  },
  {
    name: "Arts, Museums & Public Installations",
    description:
      "Preserve exhibits, public art, and cultural spaces with interactive documentation that supports access and interpretation.",
    audience:
      "Museums, galleries, municipalities, curators, and cultural organizations.",
    image: imageUrl("1518998053901-5348d3961a04"),
  },
  {
    name: "Drone & Aerial Documentation",
    description:
      "Add site-wide context for large properties, outdoor spaces, and active developments where overhead visibility matters.",
    audience:
      "Large properties, campuses, development sites, and outdoor public spaces.",
    image: imageUrl("1508614999368-9260051292e5"),
  },
  {
    name: "Personal & Unique Spaces",
    description:
      "Capture the spaces that matter to you with a custom approach to fit your project, property, or passion.",
    audience: "Unique properties, personal projects, and one-of-a-kind spaces.",
    image: imageUrl("1500530855697-b586d89ba3ee"),
  },
];

export const whyHaltonSpatial: BenefitItem[] = [
  {
    title: "Full-Service Capture",
    description:
      "From the first visit to the final handoff, we take care of the details so you can stay focused on the bigger picture.",
  },
  {
    title: "No Equipment Required",
    description:
      "No hardware to buy. No software to learn. Just a polished result, ready to use.",
  },
  {
    title: "No Platform Management",
    description:
      "We handle the platform side quietly in the background, so the experience stays simple for you and your audience.",
  },
  {
    title: "Local Service",
    description:
      "Local, responsive, and easy to work with from the first conversation to the final delivery.",
  },
  {
    title: "Modern Visualization Technology",
    description:
      "Modern visuals with a calm, effortless feel. Powerful behind the scenes, approachable everywhere else.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Capture",
    description:
      "We visit the site, plan the path through the space, and collect the visual data needed for the final experience.",
  },
  {
    step: "02",
    title: "Process",
    description:
      "The capture is cleaned, organized, and prepared for fast online viewing, documentation, and presentation.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "You receive hosted outputs, embeds, preview links, and assets tailored to the way your team plans to use them.",
  },
  {
    step: "04",
    title: "Share",
    description:
      "Publish the experience across your website, proposals, investor updates, social channels, and client communication.",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "real-estate-tours",
    title: "Real Estate Tours",
    summary:
      "Give buyers and tenants a better feel for a space before the first showing.",
    bullets: [
      "Property marketing",
      "Interactive walkthroughs",
      "Shareable links",
    ],
  },
  {
    slug: "construction-documentation",
    title: "Construction Documentation",
    summary:
      "A clear visual timeline that helps teams stay aligned from first phase to final finish.",
    bullets: ["Progress tracking", "Site documentation", "Historical records"],
  },
  {
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    summary:
      "Show the flow, feel, and character of a space with more clarity than still images alone.",
    bullets: ["Retail", "Hospitality", "Office environments"],
  },
  {
    slug: "arts-culture",
    title: "Arts & Culture",
    summary:
      "Thoughtful digital presentation for exhibits, installations, and spaces people want to experience again.",
    bullets: ["Sculptures", "Installations", "Exhibits"],
  },
  {
    slug: "drone-capture",
    title: "Drone Capture",
    summary:
      "A wider point of view for properties, outdoor spaces, and projects that deserve a broader perspective.",
    bullets: ["Large properties", "Outdoor spaces", "Site overviews"],
  },
];

export const serviceOfferings = serviceCategories.map((service) => ({
  title: service.title,
  description: service.summary,
}));

export const projects: Project[] = [
  {
    id: 6,
    slug: "tesla-model-3-aerial-capture",
    title: "Tesla Model 3 Capture",
    location: "Burlington, Ontario",
    industry: "Personal & Unique Spaces",
    cardLabel: "Vehicle Capture",
    type: "Vehicle Documentation Project",
    metric: "Single vehicle",
    details: "Aerial and ground-based capture for a personal project",
    summary:
      "A custom visual capture designed to present a personal vehicle with clarity, depth, and a more cinematic sense of presence.",
    description:
      "This project was about making a personal vehicle feel as striking online as it does in person. We captured it from multiple angles to highlight form, finish, and detail, then shaped everything into a viewing experience that feels clean, smooth, and easy to explore.",
    image: "/images/tesla-1.png",
    videoUrl: "/videos/tesla.mp4",
    gallery: [
      "/images/tesla-1.png",
      "/images/tesla-2.png",
      "/images/tesla-3.png",
    ],
    featured: true,
    deliverables: ["3D assets", "Embeddable viewer", "Shareable media"],
    scope: [
      "DSLR photography",
      "iPhone video capture",
      "Custom processing and delivery",
    ],
    viewer: {
      title: "Aerial point-cloud placeholder",
      summary:
        "Future point-cloud and survey-style viewer for large outdoor captures.",
      sceneType: "ply",
      interactionHint:
        "Orbit the placeholder scene to preview site-scale exploration.",
    },
    instagramNote:
      "Ideal for flyover clips, project overview reels, and phased development updates.",
  },
];

export const portfolioItems: PortfolioItem[] = projects;
export const properties: Property[] = projects;
export const featuredProjects = projects.filter((project) => project.featured);
export const homeProjects = projects.filter((project) => project.featured);
export const projectFilters = [
  "All",
  ...new Set(projects.map((project) => project.industry)),
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The walkthrough helped clients understand the property immediately. It felt far more informative than photography on its own.",
    name: "Maya Chen",
    role: "Real Estate Broker",
  },
  {
    quote:
      "Recurring captures gave our team a much clearer way to report progress and keep stakeholders aligned across the project.",
    name: "Daniel Ortiz",
    role: "Construction Project Manager",
  },
  {
    quote:
      "We wanted something approachable for the public but more advanced than a gallery of stills. The interactive presentation solved that gap.",
    name: "Sarah Baptiste",
    role: "Museum Curator",
  },
];

export const instagramSection: InstagramSection = {
  title: "Follow the work as it happens.",
  description:
    "Instagram is where Halton Spatial shares new projects, behind-the-scenes captures, work in progress, technology demos, and local projects from across the region.",
  buttonLabel: "Follow on Instagram",
  checklist: [
    "New projects",
    "Behind-the-scenes captures",
    "Work in progress",
    "Technology demonstrations",
    "Local project updates",
  ],
};

export const finalCta = {
  title: "Ready to show your space in its best light?",
  subtitle:
    "Tell us what you have in mind, and we will shape a simple, thoughtful plan around it.",
  primaryLabel: "Get a Quote",
  primaryTo: "/get-quote",
};
