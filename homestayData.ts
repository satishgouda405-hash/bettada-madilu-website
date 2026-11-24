export const BUSINESS = {
  name: 'Bettada Madilu Homestay',
  alternateName: 'Bettada Maadilu Homestay',
  kannadaMeaning: 'In the Lap of the Hills',
  tagline: 'Your Basecamp to Kudremukh Peak',
  locationShort: 'Mullodi, Kudremukh',
  address: 'Mullodi, Kudremukh, Karnataka 577124',
  landmark: 'Near Samse / Kudremukh Forest Checkpost',
  phoneDisplay: '+91 63632 49754',
  phoneRaw: '916363249754',
  phoneLocal: '063632 49754',
  hours: 'Open 24 Hours (Monday – Sunday)',
  rating: 4.9,
  reviewCount: 203,
  hosts: 'Abhilash (Abhilasha Anna) & Sharadha Amma',
  coordinates: '13.2189° N, 75.2528° E',
  peakElevation: '1,894 M',
  startingPrice: '₹2,000',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Bettada+madilu+home+stay+Mullodi+Kudremukh+Karnataka+577124',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Mullodi,%20Kudremukh,%20Karnataka%20577124&t=k&z=14&ie=UTF8&iwloc=&output=embed',
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(message)}`
}

export interface StayOption {
  id: string
  badge: string
  name: string
  subtitle: string
  description: string
  capacity: string
  bedType: string
  price: string
  priceNote: string
  image: string
  imagePosition?: string
  amenities: string[]
  featured?: boolean
}

export const STAY_OPTIONS: StayOption[] = [
  {
    id: 'malnad-homestay',
    badge: 'Most Popular · Families & Groups',
    name: 'Malnad Hill-View Homestay',
    subtitle: '4 Large Bedrooms · 2 Bathrooms · 1 Living Room',
    description:
      'Wake up to rolling Kudremukh mist directly from our traditional terracotta-roofed Malnad home. Simple, spotless, hygienic rooms with clean washrooms, a breezy veranda facing the hills, and full home-cooked Malnad meals.',
    capacity: 'Up to 16–20+ Guests',
    bedType: '4 Spacious Bedrooms + Floor Bedding for Groups',
    price: '₹2,000',
    priceNote: '/ night starting tariff · Custom per-head meal packages available',
    image: '/images/guests-balcony.jpg',
    imagePosition: 'object-center',
    amenities: [
      '4 Large Scenic Bedrooms',
      '2 Clean Hygienic Washrooms',
      '1 Common Living Room & Veranda',
      'Panoramic Kudremukh Hill Views',
      '4-Meal Trekking Plan Available',
      'Natural Waterfall Stream Access',
    ],
    featured: true,
  },
  {
    id: 'mountain-tents',
    badge: 'Trekker Favorite · Under The Stars',
    name: 'Valley-View Dome Tent Stay',
    subtitle: 'Pitched Beside the Homestay on Raised Platforms',
    description:
      'Fall asleep to Western Ghats crickets and crackling campfire warmth in sturdy waterproof dome tents pitched right in our front yard overlooking the misty slopes — with full access to clean homestay washrooms and hot Malnad food.',
    capacity: '2 – 3 Guests per Tent',
    bedType: 'Weatherproof Dome Tents with Sleeping Mats & Blankets',
    price: 'Budget-Friendly',
    priceNote: 'All-inclusive stay + 4-meal trek package on enquiry',
    image: '/images/tents-house.jpg',
    imagePosition: 'object-bottom',
    amenities: [
      'Waterproof Tarpaulin Base',
      'Clean Washroom Access',
      'Evening Bonfire Gathering',
      'Direct Valley & Peak Views',
      'Early Morning Trek Wake-Up',
      '4x4 Jeep Coordination',
    ],
  },
  {
    id: 'group-basecamp',
    badge: '20+ Group Specialist',
    name: 'Complete Trek Squad Basecamp',
    subtitle: 'Rooms + Tents + Bonfire + 4x4 Jeep Logistics',
    description:
      'Tailor-made for large trekking batches, college squads, corporate offsites, and big family reunions. Reserve the entire homestay and tent lawn with seamless midnight jeep transfers, trek guidance, and generous family-style dining.',
    capacity: '20+ Guests Together',
    bedType: 'Combined 4 Bedrooms + Veranda + Multiple Tents',
    price: 'Best Group Value',
    priceNote: 'Reasonable group tariff in the Samse–Mullodi belt',
    image: '/images/group-front.jpg',
    imagePosition: 'object-top',
    amenities: [
      'Full 20+ Group Capacity',
      'Midnight 4x4 Jeep Pickup',
      'Checkpost Basecamp Drop',
      'Packed Trail Lunch Boxes',
      'Pork Pepper Dry & Malnad Feast',
      'Trek Permission Assistance',
    ],
  },
]

export interface JourneyStep {
  step: string
  time: string
  title: string
  tag: string
  description: string
  highlights: string[]
  image: string
}

export const TREK_JOURNEY: JourneyStep[] = [
  {
    step: '01',
    time: 'Any Hour · Even Midnight',
    title: '4x4 Jeep Pickup Through Mullodi Trails',
    tag: '24/7 Reliable Transfers',
    description:
      'Arriving late at night near Samse or the Kudremukh Forest Checkpost? No stress. Abhilash arranges sturdy 4x4 jeeps even at midnight to safely bring your group up the rugged Mullodi mountain trail straight to our glowing veranda.',
    highlights: [
      'Pre-arranged odd-hour & midnight pickup',
      'Safe off-road Mullodi 4x4 jeep drivers',
      '24-hour check-in support every day',
    ],
    image: '/images/hero-poster.jpg',
  },
  {
    step: '02',
    time: '08:00 PM · Arrival Evening',
    title: 'Malnad Dinner & Starlit Bonfire',
    tag: 'Meal 1 of 4 + Campfire',
    description:
      'Unwind around a warm crackling wood campfire as mountain mist drifts past. Gather for Sharadha Amma’s piping hot, hygienic Malnad dinner served in generous portions — highlighted by our guest-favorite Pork Pepper Dry alongside homely veg & non-veg classics.',
    highlights: [
      'Fresh, authentic home-cooked Malnad dinner',
      'Signature Pork Pepper Dry (guest favorite)',
      'Warm evening bonfire under starry skies',
    ],
    image: '/images/bonfire.jpg',
  },
  {
    step: '03',
    time: '05:30 AM · Summit Morning',
    title: 'Early Breakfast, Packed Lunch & Trek Drop',
    tag: 'Meals 2 & 3 of 4 + Basecamp Drop',
    description:
      'Because we sit right in Mullodi minutes from the Kudremukh Forest Checkpost, you skip long morning commutes. Fuel up on hot early-morning breakfast, grab your freshly packed trail lunch boxes, and ride our 4x4 jeep to the trek start point.',
    highlights: [
      'Hot early-morning breakfast before the climb',
      'Freshly packed lunch boxes for Kudremukh Peak',
      'End-to-end trek permission & basecamp drop support',
    ],
    image: '/images/group-front.jpg',
  },
  {
    step: '04',
    time: '04:30 PM · Post-Trek Unwind',
    title: 'Evening Snacks & Natural Waterfall Dip',
    tag: 'Meal 4 of 4 + Stream Refresh',
    description:
      'Return tired and triumphant from the 1,894m summit to hot Malnad evening snacks and steaming filter coffee or tea. Wash away the trail dust in the refreshing natural mountain waterfall stream nearby before heading home with lifelong memories.',
    highlights: [
      'Piping hot post-trek evening snacks & tea/coffee',
      'Refreshing natural mountain waterfall stream',
      'Clean hot-water freshen-up & warm farewell',
    ],
    image: '/images/waterfall-swim.jpg',
  },
]

export interface GalleryPhoto {
  id: string
  src: string
  title: string
  caption: string
  category: 'The Stay' | 'Campfire & Nights' | 'Waterfall & Nature' | 'Happy Trekkers'
  aspect: 'wide' | 'tall' | 'square'
  isAnimated?: boolean
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'pan-gif',
    src: '/images/hero-pan.gif',
    title: 'Misty Morning Panorama',
    caption: 'Live morning view of Bettada Madilu nestled against the Kudremukh ridges in Mullodi.',
    category: 'The Stay',
    aspect: 'wide',
    isAnimated: true,
  },
  {
    id: 'bonfire',
    src: '/images/bonfire.jpg',
    title: 'Crackling Mullodi Bonfire',
    caption: 'Late-night stories, mountain chill, and glowing embers right outside the homestay.',
    category: 'Campfire & Nights',
    aspect: 'tall',
  },
  {
    id: 'tents-house',
    src: '/images/tents-house.jpg',
    title: 'Terracotta Roof & Valley Tents',
    caption: 'Our classic orange-and-terracotta Malnad house alongside pitched camping tents.',
    category: 'The Stay',
    aspect: 'wide',
  },
  {
    id: 'waterfall',
    src: '/images/waterfall-swim.jpg',
    title: 'Natural Waterfall Stream Dip',
    caption: 'Guests cooling off in the crystal-fresh cascading mountain stream near the stay.',
    category: 'Waterfall & Nature',
    aspect: 'wide',
  },
  {
    id: 'guests-balcony',
    src: '/images/guests-balcony.jpg',
    title: 'Veranda Overlooking the Ghats',
    caption: 'Unobstructed views of Kudremukh’s emerald slopes straight from the front porch.',
    category: 'Happy Trekkers',
    aspect: 'square',
  },
  {
    id: 'group-front',
    src: '/images/group-front.jpg',
    title: 'Trekking Squad Ready for Summit',
    caption: 'A batch of trekkers gearing up right outside Bettada Madilu before heading to the checkpost.',
    category: 'Happy Trekkers',
    aspect: 'tall',
  },
]

export interface GuestReview {
  id: string
  author: string
  tag: string
  rating: number
  text: string
  highlight: string
}

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'r1',
    author: 'Karthik R.',
    tag: 'Kudremukh Trek Group · 18 Guests',
    rating: 5,
    text: 'Abhilasha Anna and Sharadha Amma treated our entire group of 18 like their own family. We reached Samse close to midnight and their 4x4 jeep was waiting right on time. Easily the cleanest and warmest homestay in Mullodi.',
    highlight: 'Midnight 4x4 Jeep & Family Care',
  },
  {
    id: 'r2',
    author: 'Sneha & Friends',
    tag: 'Weekend Trekkers · Bengaluru',
    rating: 5,
    text: 'The Malnad food alone is worth the trip! Dinner on arrival, early morning breakfast, neatly packed lunch boxes for the Kudremukh peak trek, and hot evening snacks when we returned. Do NOT miss their Pork Pepper Dry!',
    highlight: '4-Meal Plan & Pork Pepper Dry',
  },
  {
    id: 'r3',
    author: 'Prashanth M.',
    tag: 'Family Stay · Mysuru',
    rating: 5,
    text: 'Waking up to fog rolling over the hills right from the veranda felt magical. Rooms and washrooms are super hygienic and reasonably priced compared to other stays around Samse. Safe and welcoming for families.',
    highlight: 'Hygienic Rooms & Scenic Views',
  },
  {
    id: 'r4',
    author: 'Rohan Kulkarni',
    tag: 'Trekking Squad · 22 People',
    rating: 5,
    text: 'Located right in Mullodi super close to the Kudremukh Forest Checkpost. Abhilash helped with our trek arrangements and dropped us at the base early so we beat the crowd. Bonfire night was unforgettable!',
    highlight: 'Prime Checkpost Location',
  },
  {
    id: 'r5',
    author: 'Divya Nair',
    tag: 'Solo & Group Trekker',
    rating: 5,
    text: 'Felt 100% safe and cared for. Sharadha Amma kept checking if we had eaten enough after the long hike. Generous portions, spotless washrooms, and genuine Malnad warmth you rarely find today.',
    highlight: 'Warm, Safe Hospitality',
  },
  {
    id: 'r6',
    author: 'Akshay Gowda',
    tag: 'Corporate Outing · 20+ Group',
    rating: 5,
    text: 'Best value for money in the entire Kudremukh belt. Tents + rooms easily hosted our huge gang, the waterfall dip refreshed everyone, and the hosts handled every jeep transfer smoothly.',
    highlight: 'Best Value for Large Groups',
  },
]
