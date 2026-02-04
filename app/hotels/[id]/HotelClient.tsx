// app/hotels/[id]/HotelClient.tsx
'use client';

import React, { useState, useRef } from "react";
import {
  Star,
  Wifi,
  Utensils,
  Dumbbell,
  Waves,
  X,
  ChevronLeft,
  ChevronRight,
  Accessibility,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Users,
  Car,
  Coffee,
  Wind,
  Tv,
  Bed,
  Sofa,
  Thermometer,
} from "lucide-react";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import the map component (reduces bundle size)
const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
});

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */
interface HotelClientProps {
  hotel: {
    id: string;
    name: string;
    location: string;
    rating: number;
    price: number;
    image: string;
    gallery: string[];
    description: string;
    amenities: string[];
    address: string;
    phone: string;
    email: string;
    rooms: Array<{
      id: string;
      type: string;
      description: string;
      price: number;
      maxOccupancy: number;
      available: number;
      amenities: string[];
      images: string[];
      accessible?: boolean;
      accessibilityFeatures?: string[];
    }>;
  };
  location?: {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    longDescription: string;
    attractions: string[];
    bestTime: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Hotel-specific coordinates                                        */
/* ------------------------------------------------------------------ */
const hotelCoordinates: Record<string, { lat: number; lng: number }> = {
  // Nairobi Hotels
  "nairobi-001": { lat: -1.2921, lng: 36.8219 }, // Safari Park Hotel
  "nairobi-002": { lat: -1.2921, lng: 36.8219 }, // Crowne Plaza Nairobi
  "nairobi-003": { lat: -1.2921, lng: 36.8219 }, // Serena Hotel Nairobi
  "nairobi-004": { lat: -1.2921, lng: 36.8219 }, // Villa Rosa Kempinski
  "nairobi-005": { lat: -1.2921, lng: 36.8219 }, // The Bomas of Kenya Resort
  "nairobi-006": { lat: -1.2921, lng: 36.8219 }, // Hilton Nairobi
  "nairobi-007": { lat: -1.2921, lng: 36.8219 }, // Ibis Styles Nairobi
  "nairobi-008": { lat: -1.2921, lng: 36.8219 }, // Radisson Blu Nairobi
  "nairobi-009": { lat: -1.2921, lng: 36.8219 }, // Four Points by Sheraton
  "nairobi-010": { lat: -1.2921, lng: 36.8219 }, // Mercure Hotel Nairobi
  "nairobi-011": { lat: -1.2921, lng: 36.8219 }, // Country Club Hotel

  // Naivasha Hotels
  "naivasha-001": { lat: -0.7176, lng: 36.4311 }, // Lake Naivasha Crescent Camp
  "naivasha-002": { lat: -0.7176, lng: 36.4311 }, // Naivasha Serena Camp
  "naivasha-003": { lat: -0.7176, lng: 36.4311 }, // Hells Gate Game Lodge

  // Nakuru Hotels
  "nakuru-001": { lat: -0.3031, lng: 36.0800 }, // Sarova Stanley Hotel Nakuru
  "nakuru-003": { lat: -0.3031, lng: 36.0800 }, // Lake Elementaita Mountain Lounge
  "nakuru-004": { lat: -0.3031, lng: 36.0800 }, // Menengai Crater Guest House
  "nakuru-005": { lat: -0.3031, lng: 36.0800 }, // Hotel Panorama Resort
  "nakuru-006": { lat: -0.3031, lng: 36.0800 }, // The Lake Nakuru Flamingo Lodge
  "nakuru-007": { lat: -0.3031, lng: 36.0800 }, // Lake Nakuru Lodge
  "nakuru-008": { lat: -0.3031, lng: 36.0800 }, // Rock Hyrax Hotel
  "nakuru-009": { lat: -0.3031, lng: 36.0800 }, // Ziwa Bush Lodge
  "nakuru-010": { lat: -0.3031, lng: 36.0800 }, // Lake Nakuru Sopa Lodge
  "nakuru-011": { lat: -0.3031, lng: 36.0800 }, // Punda Milias Nakuru Camp

  // Samburu Hotels
  "samburu-001": { lat: 1.1833, lng: 36.9000 }, // Samburu Intrepids Tented Camp
  "samburu-002": { lat: 1.1833, lng: 36.9000 }, // Saruni Samburu
  "samburu-003": { lat: 1.1833, lng: 36.9000 }, // Soroi Larsens Camp
  "samburu-004": { lat: 1.1833, lng: 36.9000 }, // Elephant Bedroom Camp
  "samburu-005": { lat: 1.1833, lng: 36.9000 }, // Ashnil Samburu Camp
  "samburu-006": { lat: 1.1833, lng: 36.9000 }, // Samburu Simba Lodge
  "samburu-007": { lat: 1.1833, lng: 36.9000 }, // Elephant Watch Camp & Safaris
  "samburu-008": { lat: 1.1833, lng: 36.9000 }, // Samburu Riverside Camp
  "samburu-009": { lat: 1.1833, lng: 36.9000 }, // Shaba National Reserve
  "samburu-010": { lat: 1.1833, lng: 36.9000 }, // Umoja Camp Site

  // Nanyuki Hotels
  "nanyuki-001": { lat: -0.0167, lng: 37.0667 }, // Maiyan Nanyuki
  "nanyuki-002": { lat: -0.0167, lng: 37.0667 }, // Fairmont Mount Kenya Safari Club
  "nanyuki-003": { lat: -0.0167, lng: 37.0667 }, // Ol Pejeta Bush Camp
  "nanyuki-004": { lat: -0.0167, lng: 37.0667 }, // Solio Lodge
  "nanyuki-005": { lat: -0.0167, lng: 37.0667 }, // Maisha Sweetwaters Camp
  "nanyuki-006": { lat: -0.0167, lng: 37.0667 }, // Falcon Heights Hotel
  "nanyuki-007": { lat: -0.0167, lng: 37.0667 }, // Porini Rhino Camp
  "nanyuki-008": { lat: -0.0167, lng: 37.0667 }, // Sweetwaters Serena Camp
  "nanyuki-009": { lat: -0.0167, lng: 37.0667 }, // Tha Nickolee Hotel
  "nanyuki-010": { lat: -0.0167, lng: 37.0667 }, // Olesamara Collection
  "nanyuki-011": { lat: -0.0167, lng: 37.0667 }, // Comfort Gardens

  // Maasai Mara Hotels
  "maasai-mara-001": { lat: -1.4894, lng: 35.1382 }, // Rekero Camp
  "maasai-mara-002": { lat: -1.4894, lng: 35.1382 }, // Hemingways Ol Seki Mara
  "maasai-mara-003": { lat: -1.4894, lng: 35.1382 }, // Fairmont Mara Safari Club
  "maasai-mara-004": { lat: -1.4894, lng: 35.1382 }, // Mara Serena Safari Lodge
  "maasai-mara-005": { lat: -1.4894, lng: 35.1382 }, // Mara Intrepids
  "maasai-mara-006": { lat: -1.4894, lng: 35.1382 }, // Mara Siria Tented Camp
  "maasai-mara-007": { lat: -1.4894, lng: 35.1382 }, // Serenity Mara Legends Camp
  "maasai-mara-008": { lat: -1.4894, lng: 35.1382 }, // Offbeat Mara Camp

  // Amboseli Hotels
  "amboseli-001": { lat: -2.6458, lng: 37.2536 }, // Ol Tukai Lodge Amboseli
  "amboseli-002": { lat: -2.6458, lng: 37.2536 }, // Sentrim Amboseli Lodge
  "amboseli-003": { lat: -2.6458, lng: 37.2536 }, // Amboseli Serena Safari Lodge
  "amboseli-004": { lat: -2.6458, lng: 37.2536 }, // Tulia Amboseli Safari Camp
  "amboseli-005": { lat: -2.6458, lng: 37.2536 }, // Kibo Safari Camp
  "amboseli-006": { lat: -2.6458, lng: 37.2536 }, // Maasai Simba Camp
  "amboseli-007": { lat: -2.6458, lng: 37.2536 }, // Observation Hill Camp
  "amboseli-008": { lat: -2.6458, lng: 37.2536 }, // Zebra Plain Safari Camp
  "amboseli-009": { lat: -2.6458, lng: 37.2536 }, // WE4Kenya Guest House

  // Tsavo East Hotels
  "tsavo-east-001": { lat: -2.9778, lng: 38.4675 }, // Satao Tented Camp
  "tsavo-east-002": { lat: -2.9778, lng: 38.4675 }, // Voi Wildlife Lodge
  "tsavo-east-003": { lat: -2.9778, lng: 38.4675 }, // Red Elephant Lodge
  "tsavo-east-004": { lat: -2.9778, lng: 38.4675 }, // Sentrim Tsavo Lodge
  "tsavo-east-005": { lat: -2.9778, lng: 38.4675 }, // Ithumba Camp
  "tsavo-east-006": { lat: -2.9778, lng: 38.4675 }, // Voi Safari Lodge
  "tsavo-east-007": { lat: -2.9778, lng: 38.4675 }, // Doa Doa Safari Camp
  "tsavo-east-008": { lat: -2.9778, lng: 38.4675 }, // Epiya Chapeyu

  // Tsavo West Hotels
  "tsavo-west-001": { lat: -3.2400, lng: 38.1200 }, // Ngulia Safari Lodge
  "tsavo-west-002": { lat: -3.2400, lng: 38.1200 }, // Soroi Lions Bluff Lodge
  "tsavo-west-003": { lat: -3.2400, lng: 38.1200 }, // Voyager Ziwani Camp
  "tsavo-west-004": { lat: -3.2400, lng: 38.1200 }, // Salt Lick Safari Lodge
  "tsavo-west-005": { lat: -3.2400, lng: 38.1200 }, // Severin Safari Camp
  "tsavo-west-006": { lat: -3.2400, lng: 38.1200 }, // Kilaguni Serena Safari Lodge
};

/* ------------------------------------------------------------------ */
/*  Amenity icons mapping with available Lucide icons                */
/* ------------------------------------------------------------------ */
const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="text-blue-600" size={24} />,
  "Wi-Fi": <Wifi className="text-blue-600" size={24} />,
  Restaurant: <Utensils className="text-green-600" size={24} />,
  "Fitness Center": <Dumbbell className="text-red-600" size={24} />,
  Pool: <Waves className="text-teal-600" size={24} />,
  Spa: <Wind className="text-purple-600" size={24} />,
  Bar: <Coffee className="text-amber-600" size={24} />,
  "Room Service": <Bell className="text-orange-600" size={24} />,
  Parking: <Car className="text-gray-600" size={24} />,
  "Conference Rooms": <Users className="text-indigo-600" size={24} />,
  "Business Center": <Briefcase className="text-gray-700" size={24} />,
  TV: <Tv className="text-blue-500" size={24} />,
  "Air Conditioning": <Thermometer className="text-blue-400" size={24} />,
  "Ensuite Bathroom": <Bath className="text-cyan-600" size={24} />,
  "Mini Bar": <Coffee className="text-amber-700" size={24} />,
  "Work Desk": <Table className="text-gray-700" size={24} />,
  "Living Area": <Sofa className="text-amber-800" size={24} />,
  Balcony: <Globe className="text-green-500" size={24} />,
  "Premium Toiletries": <Droplets className="text-pink-600" size={24} />,
  Jacuzzi: <Waves className="text-blue-300" size={24} />,
  "Butler Service": <UserCheck className="text-amber-900" size={24} />,
  "Family-friendly": <Users className="text-orange-500" size={24} />,
  "Extra Beds": <Bed className="text-gray-600" size={24} />,
  "Fireplace": <Flame className="text-red-500" size={24} />,
  "Garden": <TreePine className="text-green-600" size={24} />,
  "Beach Access": <Umbrella className="text-blue-400" size={24} />,
  "Tennis Court": <Circle className="text-green-500" size={24} />,
  "Golf Course": <Flag className="text-green-700" size={24} />,
  "Kids Club": <Users className="text-yellow-500" size={24} />,
  "Laundry Service": <RefreshCw className="text-blue-600" size={24} />,
  "Concierge": <Headphones className="text-purple-600" size={24} />,
  "Airport Shuttle": <Car className="text-gray-700" size={24} />,
  "Pet Friendly": <PawPrint className="text-amber-800" size={24} />,
  "Smoke Free": <Wind className="text-gray-500" size={24} />,
  "Hot Tub": <Thermometer className="text-red-400" size={24} />,
  "Sauna": <Thermometer className="text-red-600" size={24} />,
  "Yoga Classes": <Activity className="text-green-400" size={24} />,
  "Bicycle Rental": <Bike className="text-blue-600" size={24} />,
  "Car Rental": <Car className="text-indigo-600" size={24} />,
  "Tour Desk": <Map className="text-green-700" size={24} />,
  "Currency Exchange": <DollarSign className="text-green-600" size={24} />,
  "Gift Shop": <ShoppingBag className="text-pink-600" size={24} />,
  "Library": <Book className="text-amber-700" size={24} />,
  "Game Room": <Gamepad2 className="text-purple-500" size={24} />,
  "BBQ Facilities": <Flame className="text-orange-600" size={24} />,
  "Terrace": <Sun className="text-yellow-500" size={24} />,
  "Sun Deck": <Sun className="text-yellow-600" size={24} />,
  "Water Sports": <Anchor className="text-blue-500" size={24} />,
  "Diving": <Fish className="text-blue-700" size={24} />,
  "Snorkeling": <Fish className="text-blue-400" size={24} />,
  "Fishing": <Fish className="text-green-700" size={24} />,
  "Hiking": <Mountain className="text-gray-700" size={24} />,
  "Cycling": <Bike className="text-green-600" size={24} />,
  "Horse Riding": <Heart className="text-amber-800" size={24} />,
  "Safari Drives": <Car className="text-yellow-700" size={24} />,
  "Bird Watching": <Bird className="text-green-500" size={24} />,
  "Wildlife Viewing": <Eye className="text-amber-900" size={24} />,
  "Cultural Shows": <Music className="text-purple-500" size={24} />,
  "Cooking Classes": <ChefHat className="text-orange-500" size={24} />,
  "Wine Tasting": <Wine className="text-purple-700" size={24} />,
  "Nightclub": <Music className="text-pink-500" size={24} />,
  "Live Music": <Music className="text-red-500" size={24} />,
  "Theater": <Video className="text-indigo-500" size={24} />,
  "Cinema": <Video className="text-blue-700" size={24} />,
};

// Import missing Lucide icons with corrected names
import {
  Bell,
  Briefcase,
  Table,
  Droplets,
  UserCheck,
  Flame,
  TreePine,
  Umbrella,
  Circle,
  Flag,
  RefreshCw,
  Headphones,
  PawPrint,
  Activity,
  Bike,
  Map,
  DollarSign,
  ShoppingBag,
  Book,
  Gamepad2,
  Sun,
  Anchor,
  Fish,
  Mountain,
  Heart,
  Bird,
  Eye,
  Music,
  ChefHat,
  Wine,
  Video,
  Bath,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Room Image Carousel Component                                     */
/* ------------------------------------------------------------------ */
interface RoomImageCarouselProps {
  images: string[];
  roomType: string;
  className?: string;
}

function RoomImageCarousel({ images, roomType, className = "" }: RoomImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = images && images.length > 0 
    ? images 
    : ["/placeholder.svg?height=300&width=400"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-video relative">
        <Image
          src={displayImages[currentImageIndex]}
          alt={`${roomType} room at hotel - ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={currentImageIndex === 0}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg?height=300&width=400";
          }}
        />
        
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition backdrop-blur-sm"
              aria-label="Previous room image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition backdrop-blur-sm"
              aria-label="Next room image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {displayImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? "bg-white scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`View room image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {displayImages.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
          {currentImageIndex + 1} / {displayImages.length}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */
export default function HotelClient({ hotel, location }: HotelClientProps) {
  /* --------------------------- State --------------------------- */
  const [activeSection, setActiveSection] = useState("overview");
  const [roomFilter, setRoomFilter] = useState<"normal" | "accessible">("normal");
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showMoreFacilities, setShowMoreFacilities] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    roomType: "",
  });

  /* --------------------------- Refs --------------------------- */
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    rooms: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    amenities: useRef<HTMLDivElement>(null),
    policy: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
  };

  /* ----------------------- Smooth scroll ---------------------- */
  const scrollToSection = (section: keyof typeof sectionRefs) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* --------------------- Room filtering --------------------- */
  const getFilteredRooms = () => {
    if (roomFilter === "accessible") {
      return hotel.rooms.filter(room => room.accessible === true);
    }
    return hotel.rooms.filter(room => !room.accessible);
  };

  const filteredRooms = getFilteredRooms();
  const hotelCoords = hotelCoordinates[hotel.id] || { lat: -1.2921, lng: 36.8219 };

  /* -------------------- SEO Content Sections ------------------- */
  const seoSections = [
    {
      title: `About ${hotel.name}`,
      content: `${hotel.name} is a premium ${hotel.rating}-star hotel located in the heart of ${hotel.location}, Kenya. Offering luxury accommodations with world-class amenities, this hotel combines modern comfort with authentic Kenyan hospitality. Whether you're visiting for business or leisure, ${hotel.name} provides the perfect base for exploring ${hotel.location} and its surrounding attractions.`
    },
    {
      title: "Location & Accessibility",
      content: `Strategically located in ${hotel.location}, ${hotel.name} offers easy access to major attractions, business districts, and transportation hubs. The hotel's prime location makes it ideal for both tourists exploring Kenya's natural wonders and business travelers attending meetings in the city center.`
    },
    {
      title: "Amenities & Services",
      content: `Guests at ${hotel.name} enjoy a wide range of premium amenities including ${hotel.amenities.slice(0, 5).join(", ")}. Our dedicated staff provides personalized service to ensure every stay is memorable. From fine dining to recreational facilities, we cater to all your needs.`
    },
    {
      title: "Room Features",
      content: `Each room at ${hotel.name} is designed with comfort and luxury in mind. Features include premium bedding, high-speed internet, modern bathrooms, and stunning views. Our accessible rooms are specially designed to accommodate guests with mobility needs.`
    }
  ];

  /* ---------------------- Enhanced Reviews --------------------- */
  const reviews = [
    { 
      name: "John D.", 
      rating: 5, 
      text: "Exceptional service and beautiful property. The staff went above and beyond to make our stay memorable.", 
      date: "2024-03-15",
      location: "London, UK",
      verified: true
    },
    { 
      name: "Sarah M.", 
      rating: 4, 
      text: "Great location, clean rooms, and friendly staff. The breakfast buffet was amazing with local and international options.", 
      date: "2024-03-10",
      location: "New York, USA",
      verified: true
    },
    { 
      name: "Mike L.", 
      rating: 5, 
      text: "Best hotel experience in Kenya! The safari package was well organized and the guides were extremely knowledgeable.", 
      date: "2024-02-28",
      location: "Sydney, Australia",
      verified: true
    },
    { 
      name: "Emma K.", 
      rating: 4, 
      text: "Comfortable beds, excellent room service, and beautiful pool area. Would definitely recommend for families.", 
      date: "2024-02-20",
      location: "Berlin, Germany",
      verified: true
    },
  ];

  /* ----------------------- Enhanced Policies --------------------- */
  const policies = [
    { icon: <Clock size={20} />, text: "Check-in: 2:00 PM | Check-out: 11:00 AM" },
    { icon: <Users size={20} />, text: "Children welcome | Extra beds available" },
    { icon: <Car size={20} />, text: "Free parking available on premises" },
    { icon: <Coffee size={20} />, text: "Complimentary breakfast included" },
    { icon: <Wifi size={20} />, text: "Free high-speed Wi-Fi throughout property" },
    { icon: <RefreshCw size={20} />, text: "Free cancellation up to 48 hours before arrival" },
  ];

  /* ----------------------- Booking Form ----------------------- */
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement booking logic here
    alert(`Booking request sent for ${hotel.name}`);
    setShowBookingModal(false);
  };

  // Generate today's date and tomorrow's date for date inputs
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  /* -------------------------- Render -------------------------- */
  return (
    <>
      {/* Primary Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setRoomFilter("normal");
                scrollToSection("rooms");
              }}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                roomFilter === "normal"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              aria-label="View standard rooms"
            >
              <Bed size={18} />
              Standard Rooms
            </button>

            <button
              onClick={() => {
                setRoomFilter("accessible");
                scrollToSection("rooms");
              }}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                roomFilter === "accessible"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              aria-label="View accessible rooms"
            >
              <Accessibility size={18} />
              Accessible Rooms
            </button>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav className="bg-white border-b sticky top-14 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "rooms", "location", "amenities", "policy", "reviews"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize whitespace-nowrap transition-colors ${
                  activeSection === section
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
                aria-label={`View ${section} section`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Call to Action */}
      <div className="bg-linear-to-r from-orange-50 to-amber-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-1" />
                  {hotel.location}, Kenya
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(hotel.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{hotel.rating}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              aria-label="Book this hotel now"
            >
              Book Now from ${hotel.price}/night
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[hotel.image, ...hotel.gallery].slice(0, 7).map((img, idx) => (
              <div
                key={idx}
                className={`bg-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  idx === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => {
                  setGalleryIndex(idx);
                  setShowGallery(true);
                }}
                aria-label={`View hotel image ${idx + 1}`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${hotel.name} - ${hotel.location} hotel view ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => setShowGallery(true)}
              className="col-span-2 md:col-span-1 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl flex flex-col items-center justify-center font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 p-6"
              aria-label="View all hotel images"
            >
              <span className="text-2xl mb-2">+{Math.max(0, hotel.gallery.length - 6)}</span>
              <span>View All Photos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="py-12 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facilities Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Main Facilities</h3>
              <div className="space-y-5">
                {hotel.amenities.slice(0, 6).map((amenity, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                    <div className="shrink-0">
                      {amenityIcons[amenity] || <Wifi className="text-gray-600" size={24} />}
                    </div>
                    <span className="font-medium text-gray-800">{amenity}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowMoreFacilities(true)}
                className="mt-6 text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2"
                aria-label="View all facilities"
              >
                View All {hotel.amenities.length} Facilities
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-linear-to-br from-orange-500 to-amber-500 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-white">Location Highlights</h3>
              <div className="space-y-4 text-white/90">
                <div className="flex items-start gap-3">
                  <MapPin size={24} className="mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Prime Location</p>
                    <p className="text-sm">{hotel.address}</p>
                  </div>
                </div>
                {location?.attractions.slice(0, 3).map((attraction, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{attraction}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowMap(true)}
                className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full"
                aria-label="View hotel location on map"
              >
                <span className="flex items-center justify-center gap-2">
                  <MapPin size={20} />
                  Show Interactive Map
                </span>
              </button>
            </div>

            {/* Contact & Reviews Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact & Reviews</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Phone className="text-blue-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <a href={`tel:${hotel.phone}`} className="text-blue-600 hover:text-blue-700">
                      {hotel.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Mail className="text-green-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <a href={`mailto:${hotel.email}`} className="text-green-600 hover:text-green-700">
                      {hotel.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < Math.floor(hotel.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold">{hotel.rating}/5</span>
                  <span className="text-gray-500">({reviews.length} reviews)</span>
                </div>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2"
                  aria-label="Read all guest reviews"
                >
                  Read Guest Reviews
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={sectionRefs.overview} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Hotel Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {hotel.description}
              </p>
              <div className="prose prose-lg max-w-none">
                {seoSections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-700">Hotel Category</span>
                  <span className="font-semibold text-gray-900">{hotel.rating}-Star Luxury</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-700">Location</span>
                  <span className="font-semibold text-gray-900">{hotel.location}, Kenya</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-700">Total Rooms</span>
                  <span className="font-semibold text-gray-900">{hotel.rooms.length}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-700">Accessible Rooms</span>
                  <span className="font-semibold text-gray-900">
                    {hotel.rooms.filter(r => r.accessible).length} Available
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-700">Starting Price</span>
                  <span className="font-semibold text-orange-600">${hotel.price}/night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section ref={sectionRefs.rooms} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              {roomFilter === "accessible" ? "Accessible Rooms & Suites" : "Rooms & Suites"}
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Showing {filteredRooms.length} room types</span>
            </div>
          </div>

          {filteredRooms.length > 0 ? (
            <div className="space-y-8">
              {filteredRooms.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Room Images */}
                    <div className="lg:col-span-1">
                      <RoomImageCarousel 
                        images={room.images}
                        roomType={room.type}
                        className="h-80 lg:h-full"
                      />
                    </div>

                    {/* Room Details */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {room.type}
                            </h3>
                            {room.accessible && (
                              <span className="bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full font-medium flex items-center gap-2">
                                <Accessibility size={16} />
                                Wheelchair Accessible
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-6 text-lg">{room.description}</p>

                          {/* Room Features */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Room Features</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {room.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                  <span className="text-gray-700 text-sm">{amenity}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Accessibility Features */}
                          {room.accessible && room.accessibilityFeatures && (
                            <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                <Accessibility size={18} />
                                Accessibility Features
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {room.accessibilityFeatures.map((feature: string, idx: number) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    <span className="text-blue-700 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Room Specifications */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Max Occupancy</div>
                              <div className="text-xl font-bold text-gray-900">{room.maxOccupancy}</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Available</div>
                              <div className="text-xl font-bold text-gray-900">{room.available}</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Bed Type</div>
                              <div className="text-xl font-bold text-gray-900">
                                {room.maxOccupancy <= 2 ? "King Bed" : "Multiple Beds"}
                              </div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Size</div>
                              <div className="text-xl font-bold text-gray-900">35-50 m²</div>
                            </div>
                          </div>
                        </div>

                        {/* Price and Booking */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t">
                          <div>
                            <p className="text-3xl font-bold text-orange-600">${room.price}<span className="text-lg text-gray-600">/night</span></p>
                            <p className="text-sm text-gray-500">Includes taxes, fees, and breakfast</p>
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={() => {
                                setBookingForm({...bookingForm, roomType: room.type});
                                setShowBookingModal(true);
                              }}
                              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                              aria-label={`Book ${room.type}`}
                            >
                              Book Now
                            </button>
                            <button
                              onClick={() => {
                                // Show room details modal
                                alert(`More details about ${room.type}`);
                              }}
                              className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                              aria-label={`View ${room.type} details`}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <Bed size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No {roomFilter === "accessible" ? "accessible" : "standard"} rooms available
                </h3>
                <p className="text-gray-500 mb-6">
                  Please check back later or contact us directly for availability.
                </p>
                <button
                  onClick={() => setRoomFilter(roomFilter === "accessible" ? "normal" : "accessible")}
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  View {roomFilter === "accessible" ? "Standard" : "Accessible"} Rooms Instead
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section ref={sectionRefs.amenities} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Hotel Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotel.amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors group border border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-gray-600 group-hover:text-orange-600 transition-colors">
                    {amenityIcons[amenity] || <Wifi size={32} />}
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-gray-900">
                    {amenity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section ref={sectionRefs.location} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Location & Map</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Details */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{hotel.name} Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange-500 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">{hotel.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="text-blue-500 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Transportation</p>
                      <p className="text-gray-600">Easy access to public transport and major highways</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              {location?.attractions && location.attractions.length > 0 && (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Nearby Attractions</h3>
                  <div className="space-y-4">
                    {location.attractions.map((attraction, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-bold">{index + 1}</span>
                        </div>
                        <span className="font-medium text-gray-800">{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Map */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="h-[500px] rounded-xl overflow-hidden">
                <MapWithNoSSR
                  center={hotelCoords}
                  zoom={15}
                  markers={[{ position: hotelCoords, title: hotel.name }]}
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => setShowMap(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  aria-label="Open full screen map"
                >
                  <Globe size={20} />
                  Open Full Screen Map
                </button>
                <a
                  href={`https://maps.google.com/?q=${hotelCoords.lat},${hotelCoords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section ref={sectionRefs.policy} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Hotel Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="text-orange-500 shrink-0">
                  {policy.icon}
                </div>
                <p className="text-gray-800 font-medium">{policy.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={sectionRefs.reviews} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Guest Reviews</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={`${
                      i < Math.floor(hotel.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{hotel.rating}</span>
              <span className="text-gray-500">/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                      Verified Stay
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/95 z-100 flex items-center justify-center p-4">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          <button
            onClick={() =>
              setGalleryIndex((prev) => (prev - 1 + hotel.gallery.length + 1) % (hotel.gallery.length + 1))
            }
            className="absolute left-4 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh]">
            <Image
              src={galleryIndex === 0 ? hotel.image : hotel.gallery[galleryIndex - 1]}
              alt={`${hotel.name} gallery ${galleryIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
              priority
            />
          </div>
          
          <button
            onClick={() =>
              setGalleryIndex((prev) => (prev + 1) % (hotel.gallery.length + 1))
            }
            className="absolute right-4 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {galleryIndex + 1} / {hotel.gallery.length + 1}
          </p>
        </div>
      )}

      {/* Full Screen Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/95 z-100 flex flex-col">
          <div className="bg-white p-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">{hotel.name} Location</h3>
            <button onClick={() => setShowMap(false)} aria-label="Close map" className="p-2 hover:bg-gray-100 rounded-lg">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 relative">
            <MapWithNoSSR
              center={hotelCoords}
              zoom={16}
              markers={[{ position: hotelCoords, title: hotel.name }]}
              className="w-full h-full"
            />
          </div>
          <div className="bg-white p-6">
            <div className="max-w-4xl mx-auto">
              <h4 className="font-bold text-gray-900 mb-2">Get Directions</h4>
              <p className="text-gray-600 mb-4">{hotel.address}</p>
              <div className="flex gap-4">
                <a
                  href={`https://maps.google.com/?q=${hotelCoords.lat},${hotelCoords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Google Maps
                </a>
                <a
                  href={`https://maps.apple.com/?q=${hotelCoords.lat},${hotelCoords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Apple Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Facilities Modal */}
      {showMoreFacilities && (
        <div className="fixed inset-0 bg-black/75 z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900">All Hotel Facilities</h3>
              <button onClick={() => setShowMoreFacilities(false)} aria-label="Close facilities" className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={24} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotel.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="text-gray-600">
                    {amenityIcons[amenity] || <Wifi size={24} />}
                  </div>
                  <span className="font-medium text-gray-800">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/75 z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Book {hotel.name}</h3>
                <p className="text-gray-600">Complete the form below to check availability</p>
              </div>
              <button onClick={() => setShowBookingModal(false)} aria-label="Close booking" className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.checkIn}
                    onChange={(e) => setBookingForm({...bookingForm, checkIn: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    min={today}
                    title="Select check-in date"
                    aria-label="Check-in date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.checkOut}
                    onChange={(e) => setBookingForm({...bookingForm, checkOut: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    min={bookingForm.checkIn || tomorrow}
                    title="Select check-out date"
                    aria-label="Check-out date"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adults
                  </label>
                  <select
                    value={bookingForm.adults}
                    onChange={(e) => setBookingForm({...bookingForm, adults: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    title="Select number of adults"
                    aria-label="Number of adults"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Children
                  </label>
                  <select
                    value={bookingForm.children}
                    onChange={(e) => setBookingForm({...bookingForm, children: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    title="Select number of children"
                    aria-label="Number of children"
                  >
                    {[0,1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Room Type
                </label>
                <select
                  value={bookingForm.roomType}
                  onChange={(e) => setBookingForm({...bookingForm, roomType: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  title="Select room type"
                  aria-label="Room type selection"
                >
                  <option value="">Select Room Type</option>
                  {hotel.rooms.map(room => (
                    <option key={room.id} value={room.type}>
                      {room.type} - ${room.price}/night
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Best Rate Guarantee</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Lowest price available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Free cancellation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Complimentary breakfast
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    No booking fees
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Check Availability & Book Now
              </button>

              <p className="text-center text-gray-500 text-sm">
                By booking, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Floating Booking Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          aria-label="Book now floating button"
        >
          <span className="flex items-center gap-2">
            <Bed size={20} />
            BOOK NOW
          </span>
        </button>
      </div>
    </>
  );
}