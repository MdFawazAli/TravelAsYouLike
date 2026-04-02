// Hotel partner data for Travel As You Like Limited

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
  packageId?: string;
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
    name: "Majorca",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1617532408070-369f42b448b0?w=800&h=600&fit=crop",
    hotelCount: 845,
    startingPrice: 199,
  },
  {
    id: "2",
    name: "Dalaman",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1529528553681-62a7d70dc888?w=800&h=600&fit=crop",
    hotelCount: 632,
    startingPrice: 329,
  },
  {
    id: "3",
    name: "Rhodes",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1664118145742-f2ad1c09c10b?w=800&h=600&fit=crop",
    hotelCount: 478,
    startingPrice: 399,
  },
  {
    id: "4",
    name: "Tenerife",
    country: "Canary Islands",
    image: "https://images.unsplash.com/photo-1588858487152-b62691c6c1e7?w=800&h=600&fit=crop",
    hotelCount: 567,
    startingPrice: 379,
  },
  {
    id: "5",
    name: "Costa Del Sol",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1771518667287-5a0e5351f694?w=800&h=600&fit=crop",
    hotelCount: 923,
    startingPrice: 369,
  },
  {
    id: "6",
    name: "Crete",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1554465149-476c5d52d7fd?w=800&h=600&fit=crop",
    hotelCount: 712,
    startingPrice: 419,
  },
];

export const packages: Package[] = [
  {
    id: "1",
    title: "Spain Sunshine for Every Style",
    destination: "Majorca, Costa Blanca & More",
    image: "https://images.unsplash.com/photo-1735586971748-96f7425c0162?w=800&h=600&fit=crop",
    duration: "7 nights",
    price: 199,
    originalPrice: 299,
    rating: 4.8,
    includes: ["Flights", "Hotel", "Transfers", "Breakfast"],
  },
  {
    id: "2",
    title: "Turkey All Inclusive Heaven",
    destination: "Dalaman, Antalya & Bodrum",
    image: "https://images.unsplash.com/photo-1753724933350-c2e0e2990445?w=800&h=600&fit=crop",
    duration: "7 nights",
    price: 329,
    originalPrice: 499,
    rating: 4.9,
    includes: ["Flights", "All Inclusive", "Transfers", "5 Star"],
  },
  {
    id: "3",
    title: "Greece Magic in Every Moment",
    destination: "Rhodes, Kos, Crete & Corfu",
    image: "https://images.unsplash.com/photo-1696519669474-3001c0e2b548?w=800&h=600&fit=crop",
    duration: "7 nights",
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    includes: ["Flights", "Hotel", "Transfers", "All Inclusive"],
  },
  {
    id: "4",
    title: "Canaries Sunshine All Year Round",
    destination: "Tenerife, Lanzarote & More",
    image: "https://images.unsplash.com/photo-1563188620-da3bd5cb19db?w=800&h=600&fit=crop",
    duration: "7 nights",
    price: 379,
    originalPrice: 549,
    rating: 4.7,
    includes: ["Flights", "Hotel", "Transfers", "Half Board"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Travel Enthusiast",
    avatar: "SM",
    comment:
      "Travel As You Like made our family holiday absolutely perfect. The hotel recommendations were spot-on, and the booking process was seamless. We saved over £500 compared to other platforms!",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Business Traveler",
    avatar: "JC",
    comment:
      "As someone who travels regularly, I need reliability. This platform has never let me down. The instant confirmation and 24/7 support are game-changers.",
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
  // ═══════════════════════════════════════
  // SPAIN — Sunshine for Every Style
  // ═══════════════════════════════════════
  {
    id: "1",
    packageId: "1",
    name: "Club Cala Romani",
    location: "Calas De Mallorca, Majorca",
    country: "Spain",
    rating: 4.5,
    reviewCount: 1842,
    pricePerNight: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1617532408070-369f42b448b0?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617532408070-369f42b448b0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Beach Access", "Kids Club"],
    description:
      "Club Cala Romani is a fantastic holiday resort nestled in the beautiful Calas De Mallorca on the east coast of Majorca. With direct access to the stunning turquoise coves, this resort offers the perfect blend of relaxation and entertainment. Families and couples alike will love the spacious apartments, multiple swimming pools, and vibrant evening entertainment.",
    highlights: [
      "Direct access to crystal-clear coves",
      "Multiple swimming pools",
      "Family-friendly entertainment",
      "All-inclusive options available",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Apartment",
        description: "Comfortable apartment with balcony and garden or pool views.",
        pricePerNight: 249,
        maxGuests: 4,
        bedType: "Twin/Double",
        size: "40 m²",
        amenities: ["Balcony", "Kitchenette", "Air Con", "TV"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Superior Sea View",
        description: "Upgraded apartment with stunning Mediterranean sea views.",
        pricePerNight: 349,
        maxGuests: 4,
        bedType: "Twin/Double",
        size: "45 m²",
        amenities: ["Sea View", "Balcony", "Kitchenette", "Air Con"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "David Williams",
        avatar: "DW",
        rating: 5,
        date: "2025-08-15",
        title: "Perfect family holiday!",
        comment: "The coves are absolutely stunning and the kids club kept our little ones entertained all day. We'll definitely be back next year.",
        country: "United Kingdom",
      },
      {
        id: "rv2",
        author: "Laura Bennett",
        avatar: "LB",
        rating: 4,
        date: "2025-07-22",
        title: "Great resort, lovely location",
        comment: "Beautiful location with easy access to the beach. The all-inclusive food was good with plenty of variety. Pool area gets busy in peak hours though.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "2",
    packageId: "1",
    name: "Gran Hotel Bali",
    location: "Benidorm, Costa Blanca",
    country: "Spain",
    rating: 4.6,
    reviewCount: 3215,
    pricePerNight: 199,
    originalPrice: 279,
    image: "https://images.unsplash.com/photo-1584725173614-98c5925b7a02?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584725173614-98c5925b7a02?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar", "Gym"],
    description:
      "Towering over the Benidorm skyline, the Gran Hotel Bali is one of the tallest hotels in Europe and an iconic landmark on the Costa Blanca. This impressive 4-star hotel offers panoramic views of the Mediterranean, a luxurious spa, multiple dining options, and is just a short walk from Poniente Beach. Perfect for those seeking a vibrant holiday experience.",
    highlights: [
      "One of Europe's tallest hotels",
      "Panoramic Mediterranean views",
      "Rooftop pool and terrace",
      "Steps from Poniente Beach",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Double Room",
        description: "Modern room with city or mountain views and private balcony.",
        pricePerNight: 199,
        maxGuests: 2,
        bedType: "Double",
        size: "28 m²",
        amenities: ["Balcony", "Air Con", "Mini Bar", "Safe"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Premium Sea View",
        description: "Spacious room with breathtaking views of the Mediterranean Sea.",
        pricePerNight: 289,
        maxGuests: 2,
        bedType: "King",
        size: "35 m²",
        amenities: ["Sea View", "Balcony", "Mini Bar", "Bathrobes"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Michael Taylor",
        avatar: "MT",
        rating: 5,
        date: "2025-09-10",
        title: "Incredible views and great value",
        comment: "The views from the 40th floor are absolutely breathtaking. Great location, excellent breakfast buffet, and wonderful staff.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "3",
    packageId: "1",
    name: "AluaSun Costa Park",
    location: "Torremolinos, Costa Del Sol",
    country: "Spain",
    rating: 4.4,
    reviewCount: 2156,
    pricePerNight: 369,
    originalPrice: 479,
    image: "https://images.unsplash.com/photo-1771518667287-5a0e5351f694?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1771518667287-5a0e5351f694?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Entertainment", "Kids Club"],
    description:
      "The AluaSun Costa Park in Torremolinos is a popular all-inclusive resort on the sunny Costa Del Sol. Located close to the vibrant town centre and beautiful beaches, this hotel offers a fantastic pool area, lively entertainment programme, and excellent dining options. A firm favourite with British holidaymakers looking for sunshine and great value.",
    highlights: [
      "All-inclusive options available",
      "Close to Torremolinos centre",
      "Large pool and sun terrace",
      "Nightly entertainment programme",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Room",
        description: "Comfortable room with balcony overlooking the pool or gardens.",
        pricePerNight: 369,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "25 m²",
        amenities: ["Balcony", "Air Con", "Safe", "TV"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Karen Hughes",
        avatar: "KH",
        rating: 4,
        date: "2025-06-20",
        title: "Great all-inclusive value",
        comment: "Brilliant hotel for the price. The entertainment team were fantastic and kept us laughing every night. Food was varied and plentiful.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "4",
    packageId: "1",
    name: "H·TOP Olympic",
    location: "Calella, Costa Brava",
    country: "Spain",
    rating: 4.3,
    reviewCount: 1678,
    pricePerNight: 289,
    originalPrice: 389,
    image: "https://images.unsplash.com/photo-1638380445975-c93ba541ab16?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1638380445975-c93ba541ab16?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Gym", "Spa"],
    description:
      "The H·TOP Olympic hotel sits in the charming coastal town of Calella on the beautiful Costa Brava. Just a short stroll from the sandy beach and the bustling town centre, this modern hotel features an outdoor pool, wellness area, and varied dining. Ideal for couples and families wanting to explore the stunning Catalan coastline.",
    highlights: [
      "Steps from Calella Beach",
      "Modern wellness centre",
      "Easy access to Barcelona",
      "Half board options available",
    ],
    rooms: [
      {
        id: "r1",
        name: "Double Room",
        description: "Bright and modern room with balcony and pool or garden view.",
        pricePerNight: 289,
        maxGuests: 2,
        bedType: "Double",
        size: "22 m²",
        amenities: ["Balcony", "Air Con", "Safe", "Hairdryer"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  // ═══════════════════════════════════════
  // TURKEY — All Inclusive Heaven
  // ═══════════════════════════════════════
  {
    id: "5",
    packageId: "2",
    name: "Green Nature Resort And Spa",
    location: "Icmeler, Dalaman Area",
    country: "Turkey",
    rating: 4.7,
    reviewCount: 2876,
    pricePerNight: 429,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1529528553681-62a7d70dc888?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1529528553681-62a7d70dc888?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar", "Beach Access", "Gym", "Room Service"],
    description:
      "The 5-star Green Nature Resort And Spa in Icmeler offers an exceptional all-inclusive Turkish holiday experience. Set against a stunning mountain backdrop and just moments from the beach, this resort boasts multiple pools, a world-class spa, gourmet dining, and a warm, welcoming atmosphere. The perfect retreat for those seeking luxury without compromise.",
    highlights: [
      "5-star all-inclusive luxury",
      "Award-winning spa facilities",
      "Beachfront location in Icmeler",
      "Multiple à la carte restaurants",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard All-Inclusive Room",
        description: "Spacious room with mountain or garden views and all-inclusive package.",
        pricePerNight: 429,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "32 m²",
        amenities: ["Balcony", "Air Con", "Mini Bar", "Safe"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Deluxe Sea View Suite",
        description: "Luxurious suite with separate lounge and panoramic Aegean views.",
        pricePerNight: 619,
        maxGuests: 4,
        bedType: "King",
        size: "55 m²",
        amenities: ["Sea View", "Lounge Area", "Jacuzzi Bath", "Butler Service"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Emma Richardson",
        avatar: "ER",
        rating: 5,
        date: "2025-09-05",
        title: "Best holiday we've ever had!",
        comment: "From the moment we arrived, we were treated like royalty. The spa is world-class, the food is incredible, and the beach is pristine. Already booked for next year!",
        country: "United Kingdom",
      },
      {
        id: "rv2",
        author: "Robert Clarke",
        avatar: "RC",
        rating: 5,
        date: "2025-08-18",
        title: "Truly five star experience",
        comment: "The all-inclusive here is on another level. Genuine à la carte restaurants, premium drinks, and immaculate facilities throughout. Cannot fault it.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "6",
    packageId: "2",
    name: "Labranda Ephesus Princess",
    location: "Kusadasi, Izmir Area",
    country: "Turkey",
    rating: 4.5,
    reviewCount: 2134,
    pricePerNight: 359,
    originalPrice: 479,
    image: "https://images.unsplash.com/photo-1456118580194-a93787bccd1e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1456118580194-a93787bccd1e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar", "Waterpark", "Beach Access"],
    description:
      "Located in the vibrant resort of Kusadasi, the Labranda Ephesus Princess offers a spectacular 5-star all-inclusive experience. With its own aquapark, expansive pool complex, private beach area, and proximity to the ancient ruins of Ephesus, this resort perfectly blends fun, relaxation, and culture.",
    highlights: [
      "On-site aquapark with slides",
      "Private beach area",
      "Near ancient Ephesus ruins",
      "Ultra all-inclusive package",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard All-Inclusive",
        description: "Well-appointed room with garden or pool views and all-inclusive benefits.",
        pricePerNight: 359,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "30 m²",
        amenities: ["Balcony", "Air Con", "Mini Bar", "Safe"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Chris Patterson",
        avatar: "CP",
        rating: 5,
        date: "2025-07-30",
        title: "Aquapark was a huge hit!",
        comment: "The kids absolutely loved the waterpark. The food variety was impressive and the staff couldn't do enough for us. Highly recommended.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "7",
    packageId: "2",
    name: "Sunstar Resort Hotel",
    location: "Alanya, Antalya Area",
    country: "Turkey",
    rating: 4.6,
    reviewCount: 1987,
    pricePerNight: 329,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1590591479045-508f8fe779a4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590591479045-508f8fe779a4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar", "Beach Access", "Gym"],
    description:
      "The Sunstar Resort Hotel in Alanya is a stunning 5-star all-inclusive resort set along the beautiful Antalya coastline. Featuring a private beach, multiple pools, a relaxing spa, and a wide range of dining options, this hotel is ideal for those seeking a premium Turkish Riviera experience at outstanding value.",
    highlights: [
      "5-star beachfront resort",
      "Private sandy beach",
      "Full Turkish spa experience",
      "All-inclusive with premium drinks",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Room",
        description: "Comfortable room with balcony and garden or sea views.",
        pricePerNight: 329,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "28 m²",
        amenities: ["Balcony", "Air Con", "Mini Bar", "Satellite TV"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Sophie Adams",
        avatar: "SA",
        rating: 5,
        date: "2025-08-25",
        title: "Wonderful all-inclusive resort",
        comment: "Amazing value for a 5-star hotel. The beach was gorgeous, food was excellent, and the staff were incredibly friendly and helpful.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "8",
    packageId: "2",
    name: "Mandarin Resort Hotel",
    location: "Bodrum, Bodrum Area",
    country: "Turkey",
    rating: 4.4,
    reviewCount: 1456,
    pricePerNight: 419,
    originalPrice: 559,
    image: "https://images.unsplash.com/photo-1564167020633-a2e9434bc11f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564167020633-a2e9434bc11f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar", "Beach Access", "Water Sports"],
    description:
      "Nestled on the stunning Bodrum peninsula, the Mandarin Resort Hotel offers a refined all-inclusive holiday experience. With its own private beach, expansive pool area, and elegant dining options, this resort captures the essence of the Turkish Aegean. The vibrant Bodrum town centre is just a short transfer away.",
    highlights: [
      "Private beach on Bodrum peninsula",
      "Elegant pool and lounge area",
      "Water sports centre",
      "Close to Bodrum nightlife",
    ],
    rooms: [
      {
        id: "r1",
        name: "Garden View Room",
        description: "Stylish room with balcony overlooking the lush resort gardens.",
        pricePerNight: 419,
        maxGuests: 2,
        bedType: "Double",
        size: "26 m²",
        amenities: ["Balcony", "Air Con", "Mini Bar", "Safe"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  {
    id: "9",
    packageId: "2",
    name: "Pineta Park Deluxe Hotel",
    location: "Icmeler, Dalaman Area",
    country: "Turkey",
    rating: 4.3,
    reviewCount: 1234,
    pricePerNight: 379,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1661163090068-ebfdaf6c433a?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1661163090068-ebfdaf6c433a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Gym", "Entertainment"],
    description:
      "Set amidst fragrant pine forests in Icmeler, the Pineta Park Deluxe Hotel offers a peaceful retreat with all-inclusive convenience. Surrounded by stunning natural beauty and just a short walk from the beach, this hotel features excellent facilities and warm Turkish hospitality throughout your stay.",
    highlights: [
      "Set in pine forest surroundings",
      "Walking distance to beach",
      "All-inclusive dining",
      "Evening entertainment programme",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Room",
        description: "Cosy room surrounded by pine trees with garden or forest views.",
        pricePerNight: 379,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "24 m²",
        amenities: ["Balcony", "Air Con", "TV", "Safe"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  // ═══════════════════════════════════════
  // GREECE — Magic in Every Moment
  // ═══════════════════════════════════════
  {
    id: "10",
    packageId: "3",
    name: "LABRANDA Blue Bay Resort",
    location: "Ialyssos, Rhodes",
    country: "Greece",
    rating: 4.6,
    reviewCount: 2345,
    pricePerNight: 399,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1664118145742-f2ad1c09c10b?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1664118145742-f2ad1c09c10b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Beach Access", "Kids Club", "Spa"],
    description:
      "The LABRANDA Blue Bay Resort in Ialyssos offers a premium all-inclusive Greek island experience on the beautiful island of Rhodes. With its stunning pool complex, direct beach access, excellent dining, and family-friendly facilities, this resort is perfect for creating unforgettable Mediterranean memories.",
    highlights: [
      "All-inclusive on Rhodes",
      "Expansive pool complex",
      "Direct beach access",
      "Dedicated kids' entertainment",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard All-Inclusive",
        description: "Bright room with balcony and garden or pool views, all meals included.",
        pricePerNight: 399,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "28 m²",
        amenities: ["Balcony", "Air Con", "Mini Fridge", "Safe"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Superior Sea View",
        description: "Upgraded room with stunning views of the Aegean Sea.",
        pricePerNight: 529,
        maxGuests: 3,
        bedType: "King",
        size: "35 m²",
        amenities: ["Sea View", "Balcony", "Mini Bar", "Bathrobes"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Helen Cooper",
        avatar: "HC",
        rating: 5,
        date: "2025-09-12",
        title: "Absolutely loved Rhodes!",
        comment: "The resort was perfect for our family. Clean, well-maintained, and the staff went above and beyond. The beach is gorgeous. Highly recommend!",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "11",
    packageId: "3",
    name: "Labranda Marine Aquapark Resort",
    location: "Tigaki, Kos",
    country: "Greece",
    rating: 4.7,
    reviewCount: 1876,
    pricePerNight: 539,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1752253509968-1e42d76d47ed?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1752253509968-1e42d76d47ed?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "Waterpark", "WiFi", "Restaurant", "Bar", "Beach Access", "Kids Club"],
    description:
      "The Labranda Marine Aquapark Resort on the beautiful island of Kos is a family holiday paradise. Featuring an exciting aquapark with multiple slides, a stunning pool complex, and a pristine beach, this all-inclusive resort in Tigaki delivers non-stop fun for all ages alongside fantastic Greek cuisine and warm hospitality.",
    highlights: [
      "Exciting on-site aquapark",
      "All-inclusive on Kos island",
      "Beautiful Tigaki beach",
      "Entertainment for all ages",
    ],
    rooms: [
      {
        id: "r1",
        name: "Family All-Inclusive Room",
        description: "Spacious family room with aquapark access and all meals included.",
        pricePerNight: 539,
        maxGuests: 4,
        bedType: "Double + Sofa Bed",
        size: "35 m²",
        amenities: ["Balcony", "Air Con", "Mini Fridge", "Safe"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Mark Johnson",
        avatar: "MJ",
        rating: 5,
        date: "2025-08-05",
        title: "Kids haven't stopped talking about it!",
        comment: "The aquapark was the highlight. Brilliant all-inclusive food, friendly staff, and Tigaki beach is stunning. One of our best family holidays.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "12",
    packageId: "3",
    name: "Hersonissos Palace",
    location: "Hersonissos, Crete",
    country: "Greece",
    rating: 4.5,
    reviewCount: 2567,
    pricePerNight: 419,
    originalPrice: 569,
    image: "https://images.unsplash.com/photo-1554465149-476c5d52d7fd?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1554465149-476c5d52d7fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Beach Access", "Spa", "Entertainment"],
    description:
      "Overlooking the sparkling waters of the Cretan Sea, the Hersonissos Palace is a well-established all-inclusive resort in one of Crete's most popular destinations. With excellent facilities, beautiful gardens, a large pool area, and easy access to the lively Hersonissos strip, it's the ideal base for exploring the island's rich culture and stunning beaches.",
    highlights: [
      "Seafront location in Crete",
      "Lively Hersonissos nearby",
      "Large pool and gardens",
      "All-inclusive dining options",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Sea View",
        description: "Comfortable room with balcony and views of the Cretan Sea.",
        pricePerNight: 419,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "26 m²",
        amenities: ["Sea View", "Balcony", "Air Con", "Safe"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Angela Morrison",
        avatar: "AM",
        rating: 4,
        date: "2025-07-15",
        title: "Lovely Cretan holiday",
        comment: "Great location, lovely pools, and the all-inclusive food was surprisingly good. Crete is beautiful and this hotel is perfectly placed to explore.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "13",
    packageId: "3",
    name: "Labranda Sandy Beach Resort",
    location: "St Georges South, Corfu",
    country: "Greece",
    rating: 4.6,
    reviewCount: 1543,
    pricePerNight: 429,
    originalPrice: 579,
    image: "https://images.unsplash.com/photo-1756979962888-a5a14a03253a?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1756979962888-a5a14a03253a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Beach Access", "Kids Club", "Water Sports"],
    description:
      "The Labranda Sandy Beach Resort is a fantastic all-inclusive hotel located on the stunning island of Corfu. Set directly on a beautiful sandy beach in St Georges South, this resort offers crystal-clear waters, excellent facilities, and the warm Greek hospitality that Corfu is famous for. Perfect for families and couples alike.",
    highlights: [
      "Direct sandy beach access",
      "All-inclusive on Corfu",
      "Water sports available",
      "Stunning Ionian Sea views",
    ],
    rooms: [
      {
        id: "r1",
        name: "Beach View Room",
        description: "Charming room with direct views of the sandy beach and Ionian Sea.",
        pricePerNight: 429,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "28 m²",
        amenities: ["Sea View", "Balcony", "Air Con", "Mini Fridge"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Peter & Jane Watson",
        avatar: "PW",
        rating: 5,
        date: "2025-09-20",
        title: "Paradise in Corfu",
        comment: "The beach is absolutely stunning — crystal-clear water right on your doorstep. All-inclusive was great quality. We didn't want to leave!",
        country: "United Kingdom",
      },
    ],
  },
  // ═══════════════════════════════════════
  // CANARY ISLANDS — Sunshine All Year Round
  // ═══════════════════════════════════════
  {
    id: "14",
    packageId: "4",
    name: "Blue Sea Callao Garden Hotel",
    location: "Callao Salvaje, Tenerife",
    country: "Canary Islands",
    rating: 4.5,
    reviewCount: 2134,
    pricePerNight: 379,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1588858487152-b62691c6c1e7?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588858487152-b62691c6c1e7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Entertainment", "Kids Club"],
    description:
      "The Blue Sea Callao Garden Hotel in Callao Salvaje is a popular aparthotel on the sunny coast of Tenerife. Offering spacious self-catering apartments with kitchenettes, a lovely pool area, and regular entertainment, this hotel is perfect for families and couples looking for a relaxed Canary Islands getaway with year-round sunshine.",
    highlights: [
      "Year-round Tenerife sunshine",
      "Spacious self-catering apartments",
      "Relaxed pool and terrace area",
      "Family entertainment programme",
    ],
    rooms: [
      {
        id: "r1",
        name: "Studio Apartment",
        description: "Well-equipped studio with kitchenette and balcony with pool or garden views.",
        pricePerNight: 379,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "35 m²",
        amenities: ["Kitchenette", "Balcony", "Air Con", "TV"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Rachel Thompson",
        avatar: "RT",
        rating: 4,
        date: "2025-11-10",
        title: "Lovely winter sun escape",
        comment: "Perfect for a November getaway. Warm sunshine, clean apartments, and a great pool area. The kitchenette was handy for saving on eating out. Will visit again!",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "15",
    packageId: "4",
    name: "Blue Sea Los Fiscos Hotel",
    location: "Puerto Del Carmen, Lanzarote",
    country: "Canary Islands",
    rating: 4.3,
    reviewCount: 1876,
    pricePerNight: 379,
    originalPrice: 489,
    image: "https://images.unsplash.com/photo-1652040472711-ffa87c573ebe?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1652040472711-ffa87c573ebe?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Entertainment", "Sun Terrace"],
    description:
      "The Blue Sea Los Fiscos Hotel is ideally located in the heart of Puerto Del Carmen, Lanzarote's most popular resort. Just steps from the beautiful Playa Grande beach and surrounded by shops, restaurants, and bars, this friendly hotel offers comfortable rooms, a heated pool, and a warm welcome.",
    highlights: [
      "Heart of Puerto Del Carmen",
      "Steps from Playa Grande beach",
      "Heated swimming pool",
      "Lively location with shops and bars",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard Double",
        description: "Comfortable room with balcony and pool or garden view in central location.",
        pricePerNight: 379,
        maxGuests: 2,
        bedType: "Twin/Double",
        size: "22 m²",
        amenities: ["Balcony", "Air Con", "Safe", "TV"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
    ],
    reviews: [],
  },
  {
    id: "16",
    packageId: "4",
    name: "Globales Costa Tropical",
    location: "Costa De Antigua, Fuerteventura",
    country: "Canary Islands",
    rating: 4.4,
    reviewCount: 1654,
    pricePerNight: 399,
    originalPrice: 529,
    image: "https://images.unsplash.com/photo-1653999904379-112dd805bfaa?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1653999904379-112dd805bfaa?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Kids Club", "Entertainment", "Gym"],
    description:
      "The Globales Costa Tropical in Costa De Antigua offers an excellent all-inclusive Fuerteventura experience. With its large pool complex, varied dining, fun entertainment programme, and proximity to some of the island's most beautiful beaches, this resort delivers a fantastic value holiday in the Canary Islands.",
    highlights: [
      "All-inclusive in Fuerteventura",
      "Large pool complex",
      "Near stunning island beaches",
      "Great family entertainment",
    ],
    rooms: [
      {
        id: "r1",
        name: "Standard All-Inclusive",
        description: "Comfortable room with garden views and full all-inclusive package.",
        pricePerNight: 399,
        maxGuests: 3,
        bedType: "Twin/Double",
        size: "26 m²",
        amenities: ["Balcony", "Air Con", "Safe", "TV"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Steve & Carol Evans",
        avatar: "SE",
        rating: 4,
        date: "2025-12-05",
        title: "Brilliant winter getaway",
        comment: "Fuerteventura in December was perfect — 24 degrees and sunny every day! The all-inclusive was great value. Pool area was spacious and never felt crowded.",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: "17",
    packageId: "4",
    name: "Aparthotel Green Field",
    location: "Playa Del Ingles, Gran Canaria",
    country: "Canary Islands",
    rating: 4.5,
    reviewCount: 2341,
    pricePerNight: 489,
    originalPrice: 629,
    image: "https://images.unsplash.com/photo-1595413219772-485e051c142f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595413219772-485e051c142f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    ],
    amenities: ["Pool", "WiFi", "Restaurant", "Bar", "Spa", "Entertainment", "Gym"],
    description:
      "The Aparthotel Green Field in the heart of Playa Del Ingles is a top-rated aparthotel surrounded by lush tropical gardens. Offering spacious apartments, a gorgeous pool area, and easy access to the famous Maspalomas sand dunes and beach, this property is perfect for those seeking a premium Gran Canaria holiday.",
    highlights: [
      "Lush tropical garden setting",
      "Near Maspalomas sand dunes",
      "Spacious modern apartments",
      "Premium pool and spa area",
    ],
    rooms: [
      {
        id: "r1",
        name: "One-Bedroom Apartment",
        description: "Spacious apartment with separate bedroom, lounge, and garden or pool views.",
        pricePerNight: 489,
        maxGuests: 4,
        bedType: "Double + Sofa Bed",
        size: "50 m²",
        amenities: ["Kitchenette", "Lounge", "Balcony", "Air Con"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      },
      {
        id: "r2",
        name: "Premium Pool View",
        description: "Upgraded apartment with direct pool views and enhanced amenities.",
        pricePerNight: 589,
        maxGuests: 4,
        bedType: "King + Sofa Bed",
        size: "55 m²",
        amenities: ["Pool View", "Kitchenette", "Lounge", "Bathrobes"],
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=500&fit=crop",
      },
    ],
    reviews: [
      {
        id: "rv1",
        author: "Diane Foster",
        avatar: "DF",
        rating: 5,
        date: "2025-10-28",
        title: "Stunning gardens, perfect location",
        comment: "The tropical gardens are absolutely beautiful. Walking distance to the dunes and beach. Apartments are clean and spacious. A real gem in Gran Canaria!",
        country: "United Kingdom",
      },
    ],
  },
];

export function getHotelsByPackage(packageId: string): Hotel[] {
  return hotels.filter((h) => h.packageId === packageId);
}

export function getPackageById(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}
