export interface Tour {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  duration: string
  price: number
  originalPrice: number
  category: string
  location: string
  highlights: string[]
  includes: string[]
  image: string
  rating: number
  reviews: number
  featured: boolean
  difficulty: string
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "alleppey-backwater-odyssey",
    title: "Alleppey Backwater Odyssey",
    tagline: "Float through Kerala Venice on a luxury houseboat",
    description: "Drift along emerald waterways on a traditional kettuvallam, past paddy fields and coconut groves.",
    longDescription: "Experience the timeless beauty of Kerala backwaters on this exclusive houseboat journey through Alleppey. Your floating villa glides past quaint villages, duck farms, and ancient churches as local fishermen cast their Chinese fishing nets at dusk.",
    duration: "3 Days / 2 Nights",
    price: 18500,
    originalPrice: 24000,
    category: "Backwaters",
    location: "Alleppey, Kerala",
    highlights: ["Private AC houseboat", "Sunset canoe ride", "Village walk", "Ayurvedic massage", "Kathakali show"],
    includes: ["All meals on board", "Welcome drinks", "Village tour", "Canoe transfer", "Parking"],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    rating: 4.9,
    reviews: 312,
    featured: true,
    difficulty: "Easy",
  },
  {
    id: "2",
    slug: "munnar-tea-highland-escape",
    title: "Munnar Tea Highland Escape",
    tagline: "Misty peaks, rolling tea estates, and wilderness",
    description: "Trek through sea-green tea gardens, spot Nilgiri Tahr, and breathe air scented with cardamom.",
    longDescription: "Munnar sits at 1,600m in the Western Ghats, wrapped in clouds and blanketed by some of the world finest tea estates. This curated escape takes you through TATA tea plantations, Eravikulam National Park for wildlife sightings, and hidden waterfalls reachable only on foot.",
    duration: "4 Days / 3 Nights",
    price: 22000,
    originalPrice: 28500,
    category: "Hill Station",
    location: "Munnar, Kerala",
    highlights: ["Tea factory tour", "Eravikulam wildlife safari", "Mattupetty dam boat ride", "Spice plantation walk", "Sunset at Top Station"],
    includes: ["Accommodation", "Breakfast and dinner", "All transfers", "Entry tickets", "Guide"],
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    rating: 4.8,
    reviews: 248,
    featured: true,
    difficulty: "Moderate",
  },
  {
    id: "3",
    slug: "wayanad-tribal-forest-trail",
    title: "Wayanad Tribal Forest Trail",
    tagline: "Ancient tribes, wild forests, and secret waterfalls",
    description: "Journey into one of India biodiversity hotspots with expert naturalists and tribal guides.",
    longDescription: "Wayanad is Kerala hidden gem. This immersive trail pairs wildlife safaris with homestays in Adivasi communities where you learn to cook bamboo rice and track jungle paths.",
    duration: "3 Days / 2 Nights",
    price: 15800,
    originalPrice: 19500,
    category: "Wildlife",
    location: "Wayanad, Kerala",
    highlights: ["Jeep safari at Muthanga", "Edakkal cave trek", "Tribal homestay", "Soochipara waterfall", "Bamboo cooking class"],
    includes: ["Eco accommodation", "All meals", "Safari fees", "Tribal guide", "Transfers"],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    rating: 4.7,
    reviews: 189,
    featured: true,
    difficulty: "Moderate",
  },
  {
    id: "4",
    slug: "thekkady-spice-wildlife-retreat",
    title: "Thekkady Spice and Wildlife Retreat",
    tagline: "Where the cardamom hills meet Periyar Lake",
    description: "Boat through Periyar Wildlife Sanctuary and walk spice plantations fragrant with pepper and cardamom.",
    longDescription: "Thekkady is the aromatic heart of Kerala. Periyar National Park surrounds a glittering lake where elephants wade to the shore at dawn.",
    duration: "2 Days / 1 Night",
    price: 12500,
    originalPrice: 15000,
    category: "Wildlife",
    location: "Thekkady, Kerala",
    highlights: ["Periyar boat safari", "Bamboo rafting", "Spice plantation walk", "Elephant interaction", "Cooking class"],
    includes: ["Resort stay", "Breakfast", "Safari permit", "Plantation tour", "Transfers"],
    image: "https://images.unsplash.com/photo-1584553421349-3557471bed79?w=800&q=80",
    rating: 4.6,
    reviews: 203,
    featured: false,
    difficulty: "Easy",
  },
  {
    id: "5",
    slug: "kovalam-beach-ayurveda-retreat",
    title: "Kovalam Beach Ayurveda Retreat",
    tagline: "Ancient healing by the Arabian Sea",
    description: "Restore body and mind with authentic Panchakarma therapies on Kerala most celebrated coast.",
    longDescription: "Kovalam crescent beaches and healing traditions have drawn travellers for centuries. This wellness retreat pairs daily Ayurvedic consultations with Panchakarma programme.",
    duration: "5 Days / 4 Nights",
    price: 35000,
    originalPrice: 42000,
    category: "Wellness",
    location: "Kovalam, Kerala",
    highlights: ["Panchakarma programme", "Yoga at sunrise", "Lighthouse beach walk", "Kalaripayattu show", "Seafood feast"],
    includes: ["Luxury resort", "All meals", "Daily treatments", "Yoga sessions", "Airport transfer"],
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    rating: 4.9,
    reviews: 156,
    featured: true,
    difficulty: "Easy",
  },
  {
    id: "6",
    slug: "fort-kochi-heritage-walk",
    title: "Fort Kochi Heritage Walk",
    tagline: "Five centuries of spice trade history in one city",
    description: "Wander Dutch palaces, Jewish synagogues, Portuguese churches, and Chinese fishing nets in this layered port city.",
    longDescription: "Fort Kochi is a living museum where every alley tells a story of merchants, missionaries, and maharajas.",
    duration: "2 Days / 1 Night",
    price: 9800,
    originalPrice: 12000,
    category: "Heritage",
    location: "Kochi, Kerala",
    highlights: ["Chinese fishing nets at sunset", "Kathakali performance", "Synagogue visit", "Dutch Palace murals", "Spice market walk"],
    includes: ["Boutique hotel", "Breakfast", "Expert guide", "All entry fees", "Ferry transfers"],
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    rating: 4.8,
    reviews: 421,
    featured: false,
    difficulty: "Easy",
  },
]

export const categories = ["All", "Backwaters", "Hill Station", "Wildlife", "Wellness", "Heritage"]
export const getFeaturedTours = () => tours.filter(t => t.featured)
export const getTourBySlug = (slug: string) => tours.find(t => t.slug === slug)
export const getToursByCategory = (cat: string) => cat === "All" ? tours : tours.filter(t => t.category === cat)
