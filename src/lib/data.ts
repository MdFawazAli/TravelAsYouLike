// Mock data for the hotel booking platform

export interface Hotel {
  id: string;
  name: string;
  location: string;
  country: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  originalPrice?: number;
  image: string;
  images: string[];
  amenities: string[];
  description: string;
  highlights: string[];
  rooms: Room[];
  reviews: Review[];
}

export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  bedType: string;
  size: string;
  amenities: string[];
  image: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  country: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  hotelCount: number;
  startingPrice: number;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    hotelCount: 1243,
    startingPrice: 45,
  },
  {
    id: "2",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
    hotelCount: 567,
    startingPrice: 120,
  },
  {
    id: "3",
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    hotelCount: 892,
    startingPrice: 80,
  },
  {
    id: "4",
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    hotelCount: 234,
    startingPrice: 250,
  },
  {
    id: "5",
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    hotelCount: 421,
    startingPrice: 150,
  },
  {
    id: "6",
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    hotelCount: 1105,
    startingPrice: 95,
  },
];

export const packages: Package[] = [
  {
    id: "1",
    title: "Bali Bliss Retreat",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&h=600&fit=crop",
    duration: "7 nights",
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    includes: ["Flights", "Hotel", "Spa", "Tours"],
  },
  {
    id: "2",
    title: "Greek Island Hopping",
    destination: "Santorini & Mykonos",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    duration: "10 nights",
    price: 1499,
    originalPrice: 2199,
    rating: 4.8,
    includes: ["Flights", "Hotels", "Ferries", "Breakfast"],
  },
  {
    id: "3",
    title: "Japanese Heritage Tour",
    destination: "Tokyo & Kyoto",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=600&fit=crop",
    duration: "8 nights",
    price: 1199,
    originalPrice: 1799,
    rating: 4.7,
    includes: ["Flights", "Hotels", "Rail Pass", "Guide"],
  },
  {
    id: "4",
    title: "Maldives Paradise",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop",
    duration: "5 nights",
    price: 1999,
    originalPrice: 2899,
    rating: 4.9,
    includes: ["Flights", "Overwater Villa", "All-Inclusive", "Snorkeling"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Travel Enthusiast",
    avatar: "SM",
    comment:
      "Travel As You Like made our honeymoon absolutely perfect. The hotel recommendations were spot-on, and the booking process was seamless. We saved over $500 compared to other platforms!",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Business Traveler",
    avatar: "JC",
    comment:
      "As someone who travels weekly for work, I need reliability. This platform has never let me down. The instant confirmation and 24/7 support are game-changers.",
    rating: 5,
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    role: "Family Vacationer",
    avatar: "MR",
    comment:
      "Finding family-friendly hotels used to be so stressful. The filters here are incredibly detailed, and the real guest photos helped us choose the perfect resort for our kids.",
    rating: 4,
  },
];

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "The Grand Azure Resort & Spa",
    location: "Seminyak, Bali",
    country: "Indonesia",
    rating: 4.8,
    reviewCount: 2341,
    pricePerNight: 189,
    originalPrice: 259,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Beach Access", "Gym", "Bar", "Room Service"],
    description:
      "Nestled along the pristine shores of Seminyak, The Grand Azure Resort & Spa offers an unparalleled luxury experience. With breathtaking ocean views, world-class dining, and rejuvenating spa treatments, every moment is designed for pure indulgence. Our meticulously appointed rooms blend Balinese charm with modern elegance.",
    highlights: [
      "Beachfront infinity pool",
      "Award-winning restaurant",
      "Traditional Balinese spa",
      "Sunset rooftop bar",
    ],
    rooms: [
      {
        id: "r1",
        name: "Deluxe Ocean View",
        description: "Spacious room with panoramic ocean views and private balcony.",
        pricePerNight: 189,
        maxGuests: 2,
        bedType: "King",
        size: "45 m²",
        amenities: ["Ocean View", "Balcony", "Rain Shower", "Mini Bar"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Premium Suite",
        description: "Luxurious suite with separate living area and jacuzzi.",
        pricePerNight: 349,
        maxGuests: 3,
        bedType: "King",
        size: "72 m²",
        amenities: ["Ocean View", "Jacuzzi", "Living Room", "Butler Service"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
      {
        id: "r3",
        name: "Royal Villa",
        description: "Private villa with pool, garden, and full kitchen.",
        pricePerNight: 599,
        maxGuests: 4,
        bedType: "King + Twin",
        size: "120 m²",
        amenities: ["Private Pool", "Garden", "Kitchen", "24/7 Butler"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Emily Thompson",
        avatar: "ET",
        rating: 5,
        date: "2024-12-15",
        title: "Absolutely magical stay!",
        comment:
          "From the moment we arrived, everything was perfect. The staff went above and beyond, and the ocean view from our room was breathtaking.",
        country: "United States",
      },
      {
        id: "rv2",
        author: "Marco Rossi",
        avatar: "MR",
        rating: 4,
        date: "2024-11-28",
        title: "Great resort, minor improvements possible",
        comment:
          "Beautiful property with excellent facilities. The spa is world-class. Only suggestion would be faster WiFi in the rooms.",
        country: "Italy",
      },
      {
        id: "rv3",
        author: "Aiko Tanaka",
        avatar: "AT",
        rating: 5,
        date: "2024-11-10",
        title: "Best holiday ever",
        comment:
          "The infinity pool overlooking the ocean is stunning. Breakfast buffet has incredible variety. Will definitely return!",
        country: "Japan",
      },
    ],
  },
  {
    id: "2",
    name: "Santorini Cliffside Suites",
    location: "Oia, Santorini",
    country: "Greece",
    rating: 4.9,
    reviewCount: 1876,
    pricePerNight: 320,
    originalPrice: 450,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Concierge", "Airport Transfer"],
    description:
      "Perched on the iconic cliffs of Oia, our suites offer the quintessential Santorini experience. Watch spectacular sunsets from your private terrace, swim in our infinity pool overlooking the caldera, and savor authentic Greek cuisine at our rooftop restaurant.",
    highlights: [
      "Caldera views from every suite",
      "Infinity pool with sunset views",
      "Private wine tasting experience",
      "Complimentary sunset sailing",
    ],
    rooms: [
      {
        id: "r1",
        name: "Caldera View Suite",
        description: "Cave-style suite carved into the cliff with caldera panorama.",
        pricePerNight: 320,
        maxGuests: 2,
        bedType: "King",
        size: "50 m²",
        amenities: ["Caldera View", "Terrace", "Plunge Pool", "Mini Bar"],
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Honeymoon Villa",
        description: "Romantic villa with private heated pool and outdoor dining area.",
        pricePerNight: 520,
        maxGuests: 2,
        bedType: "King",
        size: "85 m²",
        amenities: ["Heated Pool", "Outdoor Dining", "Wine Cellar", "Butler"],
        image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Sophie Laurent",
        avatar: "SL",
        rating: 5,
        date: "2024-12-20",
        title: "Dream honeymoon destination",
        comment:
          "The views are even more stunning in person. Our private plunge pool overlooking the caldera made every morning feel like a dream.",
        country: "France",
      },
    ],
  },
  {
    id: "3",
    name: "Kyoto Zen Garden Hotel",
    location: "Higashiyama, Kyoto",
    country: "Japan",
    rating: 4.7,
    reviewCount: 1234,
    pricePerNight: 165,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=800&fit=crop",
    ],
    amenities: ["Onsen", "WiFi", "Restaurant", "Garden", "Tea Room", "Concierge"],
    description:
      "Experience authentic Japanese hospitality in the heart of Kyoto's historic district. Our hotel seamlessly blends traditional Japanese aesthetics with modern comforts, featuring serene zen gardens, natural hot spring baths, and exquisite kaiseki dining.",
    highlights: [
      "Traditional onsen baths",
      "Zen meditation garden",
      "Kaiseki restaurant",
      "Walking distance to temples",
    ],
    rooms: [
      {
        id: "r1",
        name: "Tatami Suite",
        description: "Traditional Japanese room with tatami floors and garden view.",
        pricePerNight: 165,
        maxGuests: 2,
        bedType: "Futon",
        size: "35 m²",
        amenities: ["Garden View", "Tatami", "Tea Set", "Yukata"],
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  {
    id: "4",
    name: "Alpine Luxe Chalet",
    location: "Zermatt, Swiss Alps",
    country: "Switzerland",
    rating: 4.6,
    reviewCount: 987,
    pricePerNight: 275,
    originalPrice: 375,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop",
    ],
    amenities: ["Spa", "WiFi", "Restaurant", "Ski Storage", "Fireplace", "Gym"],
    description:
      "A luxurious alpine retreat offering stunning Matterhorn views, ski-in/ski-out access, and world-class dining. Unwind by the fireplace after a day on the slopes.",
    highlights: [
      "Matterhorn panoramic views",
      "Ski-in/ski-out access",
      "Heated outdoor pool",
      "Michelin-star restaurant",
    ],
    rooms: [
      {
        id: "r1",
        name: "Mountain View Room",
        description: "Cozy room with Matterhorn views and fireplace.",
        pricePerNight: 275,
        maxGuests: 2,
        bedType: "King",
        size: "40 m²",
        amenities: ["Mountain View", "Fireplace", "Balcony", "Coffee Machine"],
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  {
    id: "5",
    name: "Marina Bay Luxury Tower",
    location: "Marina Bay, Singapore",
    country: "Singapore",
    rating: 4.8,
    reviewCount: 3102,
    pricePerNight: 245,
    originalPrice: 320,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar", "Gym", "Business Center"],
    description:
      "Iconic luxury in the heart of Singapore's Marina Bay district. Rooftop infinity pool, multiple award-winning restaurants, and panoramic city skyline views.",
    highlights: [
      "Rooftop infinity pool",
      "Marina Bay skyline views",
      "Five restaurants & bars",
      "Connected to shopping mall",
    ],
    rooms: [
      {
        id: "r1",
        name: "Skyline Deluxe",
        description: "Modern room with floor-to-ceiling city views.",
        pricePerNight: 245,
        maxGuests: 2,
        bedType: "King",
        size: "42 m²",
        amenities: ["City View", "Rain Shower", "Nespresso", "Smart TV"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  {
    id: "6",
    name: "Amalfi Coast Boutique Hotel",
    location: "Positano, Amalfi Coast",
    country: "Italy",
    rating: 4.9,
    reviewCount: 1567,
    pricePerNight: 380,
    originalPrice: 490,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Terrace", "Boat Tours"],
    description:
      "A charming boutique hotel cascading down the cliffs of Positano with breathtaking Mediterranean views, authentic Italian cuisine, and personalized concierge service.",
    highlights: [
      "Cliffside terrace dining",
      "Private beach access",
      "Lemon grove gardens",
      "Complimentary boat tours",
    ],
    rooms: [
      {
        id: "r1",
        name: "Sea View Terrace",
        description: "Elegant room with private terrace overlooking the Mediterranean.",
        pricePerNight: 380,
        maxGuests: 2,
        bedType: "King",
        size: "48 m²",
        amenities: ["Sea View", "Terrace", "Mini Bar", "Bathrobes"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
];
