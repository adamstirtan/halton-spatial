export type IndustryCategory = 'Real Estate' | 'Construction' | 'Architecture' | 'Arts & Culture' | 'Hospitality'

export interface PortfolioItem {
  id: number
  title: string
  address: string
  category: IndustryCategory
  type: string
  squareFeet: string
  metric: string
  details: string
  description: string
  image: string
  images: string[]
  videoLabel: string
}

export type Property = PortfolioItem

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface PricingPackage {
  name: string
  description: string
  price: string
  featured?: boolean
  services: string[]
}

export interface Industry {
  name: string
  description: string
  image: string
}

export interface ServiceOffering {
  title: string
  description: string
}

export const company = {
  name: 'Splat Spatial Studio',
  email: 'hello@splatspatial.com',
  phone: '(365) 778-1337',
  serviceArea: 'Halton Region, Durham Region, York Region, Peel Region. Toronto, Missisauga, Brampton, Oakville, Burlington, Hamilton, and surrounding areas.',
}

const imageUrl = (id: string, width = 1400, height = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`

export const services = [
  'Interactive 3D Tours',
  'Digital Twin Creation',
  'Drone-Based Capture',
  'Spatial Documentation',
  'Progress Monitoring',
  'Virtual Exhibits'
]

export const serviceOfferings: ServiceOffering[] = [
  {
    title: 'Interactive 3D Tours',
    description: 'High-quality navigable experiences for buildings, venues, exhibits, sites, and physical environments.'
  },
  {
    title: 'Digital Twin Creation',
    description: 'Accurate digital representations of real-world spaces for documentation, planning, marketing, and remote access.'
  },
  {
    title: 'Drone Capture & Mapping',
    description: 'Aerial imagery, spatial context, and reconstruction support for properties, developments, campuses, and venues.'
  },
  {
    title: 'Construction Progress Documentation',
    description: 'Recurring site captures, milestone reporting, and visual records for development teams and stakeholders.'
  },
  {
    title: 'Virtual Exhibits & Cultural Preservation',
    description: 'Interactive experiences for museums, galleries, archives, churches, public art, and heritage organizations.'
  },
  {
    title: 'Venue & Hospitality Experiences',
    description: 'Immersive previews for destinations, hotels, event spaces, restaurants, resorts, and visitor attractions.'
  }
]

export const industries: Industry[] = [
  {
    name: 'Real Estate',
    description: 'Interactive residential, commercial, and luxury property tours that help spaces feel tangible before a visit.',
    image: imageUrl('1600585154340-be6161a56a0c')
  },
  {
    name: 'Construction',
    description: 'Recurring site documentation for progress updates, stakeholder reviews, milestone records, and remote visibility.',
    image: imageUrl('1503387762-592deb58ef4e')
  },
  {
    name: 'Architecture & Design',
    description: 'Spatial captures for studios, showrooms, finished interiors, adaptive reuse, design review, and portfolio storytelling.',
    image: imageUrl('1497366754035-f200968a6e72')
  },
  {
    name: 'Arts & Culture',
    description: 'Digital preservation and interactive access for museums, galleries, sculptures, historic interiors, and cultural assets.',
    image: imageUrl('1564399579883-451a5d44ec08')
  },
  {
    name: 'Hospitality & Tourism',
    description: 'Immersive walkthroughs for hotels, event venues, destinations, restaurants, and experience-led visitor marketing.',
    image: imageUrl('1566073771259-6a8506099945')
  }
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxury Lakefront Home',
    address: 'Luxury Lakefront Home',
    category: 'Real Estate',
    type: 'Interactive Residential Property Tour',
    squareFeet: '4,250 sq ft',
    metric: '4,250 sq ft',
    details: 'Residential capture / Interior and exterior walkthrough',
    description: 'A premium digital twin and guided tour for remote exploration of a waterfront residence.',
    image: imageUrl('1600585154340-be6161a56a0c'),
    images: [
      imageUrl('1600585154340-be6161a56a0c'),
      imageUrl('1600566753190-17f0baa2a6c3'),
      imageUrl('1600607687939-ce8a6c25118c')
    ],
    videoLabel: 'Residential tour teaser placeholder'
  },
  {
    id: 2,
    title: 'Commercial Development Site',
    address: 'Commercial Development Site',
    category: 'Construction',
    type: 'Monthly Drone-Based Construction Capture',
    squareFeet: '18-acre site',
    metric: '18-acre site',
    details: 'Progress monitoring / Aerial and ground capture',
    description: 'Recurring spatial documentation for stakeholder updates, milestone review, and remote site visibility.',
    image: imageUrl('1503387762-592deb58ef4e'),
    images: [
      imageUrl('1503387762-592deb58ef4e'),
      imageUrl('1541888946425-d81bb19240f5'),
      imageUrl('1485083269755-a7b559a4fe5e')
    ],
    videoLabel: 'Construction progress reel placeholder'
  },
  {
    id: 3,
    title: 'Historic Church Interior',
    address: 'Historic Church Interior',
    category: 'Arts & Culture',
    type: 'Preservation-Grade Digital Twin',
    squareFeet: 'Heritage interior',
    metric: 'Heritage interior',
    details: 'Cultural preservation / Nave, altar, and architectural details',
    description: 'High-fidelity spatial capture designed to preserve and share a historic interior for remote audiences.',
    image: imageUrl('1548625361-58a9b86aa83b'),
    images: [
      imageUrl('1548625361-58a9b86aa83b'),
      imageUrl('1524230572899-a752b3835840'),
      imageUrl('1518998053901-5348d3961a04')
    ],
    videoLabel: 'Preservation walkthrough placeholder'
  },
  {
    id: 4,
    title: 'Museum Sculpture Collection',
    address: 'Museum Sculpture Collection',
    category: 'Arts & Culture',
    type: 'Interactive 3D Exhibit',
    squareFeet: '12 collection objects',
    metric: '12 collection objects',
    details: 'Object capture / Gallery-scale visitor experience',
    description: 'A virtual exhibit prototype for sculpture viewing, curatorial interpretation, and accessible digital engagement.',
    image: imageUrl('1564399579883-451a5d44ec08'),
    images: [
      imageUrl('1564399579883-451a5d44ec08'),
      imageUrl('1577083552431-6e5fd01aa342'),
      imageUrl('1547891654-e66ed7ebb968')
    ],
    videoLabel: 'Virtual exhibit preview placeholder'
  },
  {
    id: 5,
    title: 'Wedding Venue Showcase',
    address: 'Wedding Venue Showcase',
    category: 'Hospitality',
    type: 'Immersive Venue Walkthrough',
    squareFeet: 'Indoor and outdoor venue',
    metric: 'Indoor and outdoor venue',
    details: 'Hospitality marketing / Event layout and guest flow',
    description: 'An immersive destination preview that helps couples, planners, and guests understand the venue remotely.',
    image: imageUrl('1519225421980-715cb0215aed'),
    images: [
      imageUrl('1519225421980-715cb0215aed'),
      imageUrl('1519167758481-83f550bb49b3'),
      imageUrl('1523438097201-512ae7d59c44')
    ],
    videoLabel: 'Venue showcase film placeholder'
  },
  {
    id: 6,
    title: 'Design Studio Fit-Out',
    address: 'Design Studio Fit-Out',
    category: 'Architecture',
    type: 'Architectural Space Documentation',
    squareFeet: '8,600 sq ft',
    metric: '8,600 sq ft',
    details: 'Architecture and design / Finished interior capture',
    description: 'A polished spatial record for design review, remote presentation, portfolio use, and client communication.',
    image: imageUrl('1497366754035-f200968a6e72'),
    images: [
      imageUrl('1497366754035-f200968a6e72'),
      imageUrl('1600607687920-4e2a09cf159d'),
      imageUrl('1600210492486-724fe5c67fb3')
    ],
    videoLabel: 'Architecture walkthrough placeholder'
  },
  {
    id: 7,
    title: 'Boutique Hotel Lobby',
    address: 'Boutique Hotel Lobby',
    category: 'Hospitality',
    type: 'Destination Experience Preview',
    squareFeet: 'Guest arrival sequence',
    metric: 'Guest arrival sequence',
    details: 'Hotel and tourism / Lobby, lounge, and amenities',
    description: 'An interactive first impression for guests, event planners, travel partners, and brand marketing teams.',
    image: imageUrl('1566073771259-6a8506099945'),
    images: [
      imageUrl('1566073771259-6a8506099945'),
      imageUrl('1564501049412-61c2a3083791'),
      imageUrl('1542314831-068cd1dbfeeb')
    ],
    videoLabel: 'Hospitality experience placeholder'
  }
]

export const properties: Property[] = portfolioItems

export const testimonials: Testimonial[] = [
  {
    quote:
      'The interactive capture gave remote buyers a real sense of scale and flow before they scheduled an in-person visit.',
    name: 'Maya Chen',
    role: 'Real Estate Professional'
  },
  {
    quote:
      'Monthly captures made stakeholder meetings clearer. Everyone could see site progress without waiting for a field visit.',
    name: 'Daniel Ortiz',
    role: 'Construction Project Manager'
  },
  {
    quote:
      'The digital twin helped us present the finished interior with a level of spatial context photography alone could not provide.',
    name: 'Nadia Bell',
    role: 'Architect'
  },
  {
    quote:
      'We needed both preservation and public access. The interactive exhibit created a careful record and a more engaging visitor experience.',
    name: 'Sarah Baptiste',
    role: 'Museum Curator'
  },
  {
    quote:
      'Couples can walk through our venue before touring in person. It has become one of our most useful planning and sales tools.',
    name: 'Elena Park',
    role: 'Venue Owner'
  }
]

export const pricingPackages: PricingPackage[] = [
  {
    name: 'Single Capture Project',
    description: 'One-time 3D capture and delivery for a specific space, venue, site, exhibit, or object collection.',
    price: 'Custom Quote',
    services: ['Interactive tour delivery', 'Hosted preview link', 'Core spatial capture']
  },
  {
    name: 'Professional Documentation',
    description: 'Multi-session capture with enhanced deliverables for teams that need richer context and reporting.',
    price: 'Custom Quote',
    featured: true,
    services: ['Multiple capture sessions', 'Photography and video support', 'Enhanced documentation package']
  },
  {
    name: 'Enterprise & Ongoing Projects',
    description: 'Recurring documentation, complex environments, custom integrations, and long-term visualization programs.',
    price: 'Custom Quote',
    services: ['Recurring capture schedule', 'Custom viewer and sharing needs', 'Stakeholder-ready deliverables']
  }
]
