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
  futureLoader: "points" | "PLYLoader" | "GaussianSplatLoader";
  assetUrl?: string;
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
  secondaryTo: string;
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
  eyebrow: "Halton Region 3D Capture Studio",
  title: "Interactive 3D Photos & Virtual Tours",
  subtitle:
    "Explore real-world spaces online through immersive 3D walkthroughs and digital twins.",
  primaryLabel: "Get a Quote",
  primaryTo: "/get-quote",
  secondaryLabel: "View Projects",
  secondaryTo: "/projects",
};

export const whatWeDoItems: WhatWeDoItem[] = [
  {
    title: "3D Photos",
    description:
      "Create rich spatial imagery that helps people understand scale, layout, and finish before they arrive in person.",
  },
  {
    title: "Virtual Tours",
    description:
      "Let visitors move through a property, project, exhibit, or venue online at their own pace from any device.",
  },
  {
    title: "Digital Twins",
    description:
      "Build a lasting visual record of a real-world space for documentation, presentation, and future reference.",
  },
  {
    title: "Web Embedding",
    description:
      "Publish interactive experiences on your website, landing pages, and presentations with simple hosted delivery.",
  },
  {
    title: "Progress Documentation",
    description:
      "Track change over time for construction, fit-outs, installations, and site development with clear visual updates.",
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
      "We handle on-site capture, processing, hosting, and delivery so your team can stay focused on the project itself.",
  },
  {
    title: "No Equipment Required",
    description:
      "There is no camera kit to buy, no scanner to manage, and no learning curve for your staff.",
  },
  {
    title: "No Platform Management",
    description:
      "You do not need to maintain software subscriptions or troubleshoot the technology behind the final experience.",
  },
  {
    title: "Local Service",
    description:
      "Halton Spatial works locally across Halton Region and nearby communities with responsive scheduling and on-site support.",
  },
  {
    title: "Modern Visualization Technology",
    description:
      "Your project benefits from contemporary 3D presentation tools without forcing clients and stakeholders into technical workflows.",
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
      "Property marketing experiences built to help buyers and tenants understand a space before the first visit.",
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
      "Recurring visual records that support progress tracking, milestone review, and historical reference.",
    bullets: ["Progress tracking", "Site documentation", "Historical records"],
  },
  {
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    summary:
      "Immersive presentations for retail, hospitality, and office environments where layout and atmosphere matter.",
    bullets: ["Retail", "Hospitality", "Office environments"],
  },
  {
    slug: "arts-culture",
    title: "Arts & Culture",
    summary:
      "Digital preservation and public-facing presentation for exhibits, installations, and sculptural work.",
    bullets: ["Sculptures", "Installations", "Exhibits"],
  },
  {
    slug: "drone-capture",
    title: "Drone Capture",
    summary:
      "Aerial coverage for large sites, outdoor environments, and overview storytelling across complex spaces.",
    bullets: ["Large properties", "Outdoor spaces", "Site overviews"],
  },
];

export const serviceOfferings = serviceCategories.map((service) => ({
  title: service.title,
  description: service.summary,
}));

export const projects: Project[] = [
  {
    id: 1,
    slug: "oakville-lakeshore-residence",
    title: "Oakville Lakeshore Residence",
    location: "Oakville, Ontario",
    industry: "Real Estate",
    cardLabel: "Featured Property Tour",
    type: "Interactive Residential Walkthrough",
    metric: "4,800 sq ft home",
    details: "Luxury listing presentation with hosted tour delivery",
    summary:
      "A premium residential tour designed to help remote buyers understand layout, finishes, and flow before an in-person showing.",
    description:
      "This capture package combined immersive walkthrough storytelling with polished hosted delivery, giving agents and buyers a stronger sense of how the space feels beyond still photography alone.",
    image: imageUrl("1600607687920-4e2a09cf159d"),
    gallery: [
      imageUrl("1600607687920-4e2a09cf159d"),
      imageUrl("1600585154340-be6161a56a0c"),
      imageUrl("1600566753190-17f0baa2a6c3"),
    ],
    deliverables: [
      "Hosted interactive walkthrough",
      "Web-ready embed",
      "Agent share link",
    ],
    scope: ["Interior capture", "Exterior highlights", "Branded delivery page"],
    featured: true,
    viewer: {
      title: "Residential viewer placeholder",
      summary: "Future 3D tour embed area for a residential digital twin.",
      sceneType: "digital-twin",
      interactionHint: "Drag to orbit and explore a future hosted scene.",
      futureLoader: "PLYLoader",
    },
    instagramNote:
      "Ideal for before-and-after reels, agent walkthrough teasers, and listing launch content.",
  },
  {
    id: 2,
    slug: "milton-industrial-expansion",
    title: "Milton Industrial Expansion",
    location: "Milton, Ontario",
    industry: "Construction & Development",
    cardLabel: "Monthly Site Documentation",
    type: "Construction Progress Capture",
    metric: "18-acre active site",
    details: "Recurring drone and ground-based documentation",
    summary:
      "Recurring captures created a clear visual timeline for stakeholders reviewing progress without constant site visits.",
    description:
      "The project focused on consistent site-wide documentation that could support reporting, owner updates, and internal coordination across an active development schedule.",
    image: imageUrl("1504307651254-35680f356dfd"),
    gallery: [
      imageUrl("1504307651254-35680f356dfd"),
      imageUrl("1541888946425-d81bb19240f5"),
      imageUrl("1485083269755-a7b559a4fe5e"),
    ],
    deliverables: [
      "Recurring progress views",
      "Stakeholder-ready updates",
      "Historical visual archive",
    ],
    scope: [
      "Drone overviews",
      "Ground-level checkpoints",
      "Milestone comparisons",
    ],
    featured: true,
    viewer: {
      title: "Site progress viewer placeholder",
      summary:
        "Future timeline viewer for comparing spatial documentation across milestones.",
      sceneType: "point-cloud",
      interactionHint:
        "Orbit the placeholder scene to preview how future site models can be explored.",
      futureLoader: "PLYLoader",
    },
    instagramNote:
      "Supports milestone posts, progress reels, and behind-the-scenes site updates.",
  },
  {
    id: 3,
    slug: "burlington-flagship-showroom",
    title: "Burlington Flagship Showroom",
    location: "Burlington, Ontario",
    industry: "Commercial & Retail Spaces",
    cardLabel: "Retail Experience Capture",
    type: "Commercial Space Tour",
    metric: "12,000 sq ft showroom",
    details: "Sales and leasing support for a customer-facing environment",
    summary:
      "An interactive walkthrough designed to help customers, partners, and leasing stakeholders understand the space remotely.",
    description:
      "The showroom capture focused on circulation, merchandising zones, and brand presentation so the business could use one asset across sales conversations, internal planning, and online promotion.",
    image: imageUrl("1524758631624-e2822e304c36"),
    gallery: [
      imageUrl("1524758631624-e2822e304c36"),
      imageUrl("1497366754035-f200968a6e72"),
      imageUrl("1564501049412-61c2a3083791"),
    ],
    deliverables: [
      "Hosted experience",
      "Embedded viewer section",
      "Presentation-ready stills",
    ],
    scope: [
      "Front-of-house capture",
      "Merchandising zones",
      "Customer path mapping",
    ],
    featured: true,
    hasInteractiveViewer: true,
    viewer: {
      title: "Embedded 3D retail showcase",
      summary:
        "Future interactive viewer slot for a Three.js, PLY, or Gaussian Splat project embed.",
      sceneType: "gaussian-splat",
      interactionHint:
        "Use the mouse or touch to orbit the prototype scene and imagine a finished showroom capture.",
      futureLoader: "GaussianSplatLoader",
    },
    instagramNote:
      "Works well for opening campaigns, behind-the-scenes merch installs, and launch-week teaser content.",
  },
  {
    id: 4,
    slug: "hamilton-public-art-walkthrough",
    title: "Hamilton Public Art Walkthrough",
    location: "Hamilton, Ontario",
    industry: "Arts, Museums & Public Installations",
    cardLabel: "Exhibit Documentation",
    type: "Cultural Space Preservation",
    metric: "Multi-room installation",
    details: "Interactive documentation for interpretation and public access",
    summary:
      "A digital record of an installation environment that supports archive, access, and community engagement goals.",
    description:
      "This concept case study demonstrates how interactive documentation can preserve the relationship between artwork, architecture, and circulation through a public-facing experience.",
    image: imageUrl("1518998053901-5348d3961a04"),
    gallery: [
      imageUrl("1518998053901-5348d3961a04"),
      imageUrl("1564399579883-451a5d44ec08"),
      imageUrl("1548625361-58a9b86aa83b"),
    ],
    deliverables: [
      "Interactive archive view",
      "Curatorial embed support",
      "Remote public access",
    ],
    scope: [
      "Gallery capture",
      "Interpretive story framing",
      "Public engagement delivery",
    ],
    viewer: {
      title: "Exhibit viewer placeholder",
      summary:
        "Future photogrammetry or splat-driven exhibit presentation area.",
      sceneType: "photogrammetry",
      interactionHint:
        "Orbit the abstract scene to preview how future cultural captures can be presented online.",
      futureLoader: "GaussianSplatLoader",
    },
    instagramNote:
      "Strong fit for exhibition previews, install progress, and visitor engagement posts.",
  },
  {
    id: 5,
    slug: "mississauga-mixed-use-aerial",
    title: "Mississauga Mixed-Use Aerial Survey",
    location: "Mississauga, Ontario",
    industry: "Drone & Aerial Documentation",
    cardLabel: "Aerial Site Overview",
    type: "Drone Documentation Project",
    metric: "Large multi-building site",
    details: "Aerial context and overview storytelling for a complex property",
    summary:
      "Aerial capture created a broader understanding of access, scale, and site relationships for a developing mixed-use property.",
    description:
      "This project focused on large-scale spatial context, helping stakeholders understand how multiple buildings and outdoor zones relate across the wider site.",
    image: imageUrl("1508614999368-9260051292e5"),
    gallery: [
      imageUrl("1508614999368-9260051292e5"),
      imageUrl("1500530855697-b586d89ba3ee"),
      imageUrl("1494526585095-c41746248156"),
    ],
    deliverables: [
      "Aerial overview assets",
      "Project update visuals",
      "Site-wide presentation support",
    ],
    scope: [
      "Drone flight planning",
      "Site overview capture",
      "Remote stakeholder sharing",
    ],
    viewer: {
      title: "Aerial point-cloud placeholder",
      summary:
        "Future point-cloud and survey-style viewer for large outdoor captures.",
      sceneType: "ply",
      interactionHint:
        "Orbit the placeholder scene to preview site-scale exploration.",
      futureLoader: "PLYLoader",
    },
    instagramNote:
      "Ideal for flyover clips, project overview reels, and phased development updates.",
  },
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
      "A custom capture project designed to create an interactive record of a personal vehicle with a combination of high-resolution DSLR photography and 4k iPhone footage.",
    description:
      "This project focused on capturing a personal vehicle from multiple perspectives, providing a comprehensive and immersive view of the vehicle's features and details.",
    image: imageUrl("1508614999368-9260051292e5"),
    gallery: [
      imageUrl("1508614999368-9260051292e5"),
      imageUrl("1500530855697-b586d89ba3ee"),
      imageUrl("1494526585095-c41746248156"),
    ],
    deliverables: [
      "Aerial overview assets",
      "Project update visuals",
      "Site-wide presentation support",
    ],
    scope: [
      "Drone flight planning",
      "Site overview capture",
      "Remote stakeholder sharing",
    ],
    viewer: {
      title: "Aerial point-cloud placeholder",
      summary:
        "Future point-cloud and survey-style viewer for large outdoor captures.",
      sceneType: "ply",
      interactionHint:
        "Orbit the placeholder scene to preview site-scale exploration.",
      futureLoader: "PLYLoader",
    },
    instagramNote:
      "Ideal for flyover clips, project overview reels, and phased development updates.",
  },
];

export const portfolioItems: PortfolioItem[] = projects;
export const properties: Property[] = projects;
export const featuredProjects = projects.filter((project) => project.featured);
export const projectFilters = [
  "All",
  ...industries.map((industry) => industry.name),
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

export const technologyShowcase = {
  eyebrow: "Interactive 3D Visualization",
  title: "Built to showcase spaces in a more immersive way.",
  description:
    "Halton Spatial is structured around modern 3D visualization workflows so future projects can support richer online exploration, clearer documentation, and more compelling project storytelling.",
  supportingPoints: [
    "Future support for PLY point clouds",
    "Future Gaussian Splat integrations",
    "Embeddable viewer experiences for websites and project pages",
  ],
};

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
  title: "Ready to Bring Your Space Online?",
  subtitle:
    "Tell us what you are documenting, marketing, or building and we will shape the right capture approach for it.",
  primaryLabel: "Get a Quote",
  primaryTo: "/get-quote",
};
