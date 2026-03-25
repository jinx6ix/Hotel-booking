// app/accessible/[slug]/AccessibleHotelClient.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star, MapPin, Phone, Mail, CheckCircle, AlertCircle,
  Bath, DoorOpen, Users, 
  Wifi, Coffee, Car, Utensils, ParkingCircle, Building2, Accessibility,
  Bed, Waves, Camera, Video, Clock, Shield, Heart,
  Award, ThumbsUp, Sparkles, Compass, Send, Share2,
  ChevronDown, ChevronUp,
  X, ArrowRight, 
  Eye, Sun, Ruler, Info, Sofa, Play,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { AccessibilityModal } from "@/app/accessible/AccessibilityModal";
import type { Hotel } from "@/lib/accessible";

interface AccessibleHotelClientProps {
  hotel: Hotel;
  accessibleRoomCount: number;
}

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=0&rel=0&modestbranding=1`;
    }
  }
  
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  return null;
};

// Video Component
interface HotelVideoProps {
  videoUrl?: string;
  videoEmbedUrl?: string;
  hotelName: string;
  hotelImage: string;
}

function HotelVideo({ videoUrl, videoEmbedUrl, hotelName, hotelImage }: HotelVideoProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  if (!videoUrl && !videoEmbedUrl) return null;

  const renderVideo = () => {
    if (videoEmbedUrl && !videoError) {
      return (
        <iframe
          src={videoEmbedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`${hotelName} Video Tour`}
          onError={() => setVideoError(true)}
        />
      );
    }

    if (videoUrl && !videoError) {
      const embedUrl = getYouTubeEmbedUrl(videoUrl);
      if (embedUrl) {
        return (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${hotelName} Video Tour`}
            onError={() => setVideoError(true)}
          />
        );
      }
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-white">
        <AlertCircle className="w-12 h-12 mb-4" />
        <p>Unable to load video</p>
        {videoUrl && (
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 text-blue-400 hover:text-blue-300 underline"
          >
            Watch on YouTube
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="mb-8">
      {!showVideo ? (
        <div 
          className="relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-900 aspect-video"
          onClick={() => setShowVideo(true)}
        >
          <Image
            src={hotelImage}
            alt={`${hotelName} Video Preview`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 hover:bg-white rounded-full p-4 transition-all group-hover:scale-110">
              <Play className="w-12 h-12 text-orange-500 fill-orange-500" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <p className="text-lg font-semibold">Watch Accessibility Video Tour</p>
            <p className="text-sm opacity-90">Experience accessible features in action</p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
          {renderVideo()}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition backdrop-blur-sm z-10"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

// Gallery Modal Component
interface GalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  hotelName: string;
}

function GalleryModal({ images, initialIndex, onClose, hotelName }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full transition-colors z-10"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>
      
      <button 
        onClick={prevImage} 
        className="absolute left-4 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      
      <div className="relative max-w-7xl max-h-[90vh]">
        <Image
          src={images[currentIndex]}
          alt={`${hotelName} gallery image ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="max-w-full max-h-[80vh] object-contain"
          priority
        />
      </div>
      
      <button 
        onClick={nextImage} 
        className="absolute right-4 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
      
      <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}

// Amenities icons mapping
const amenityIcons: Record<string, React.ReactNode> = {
  "WiFi": <Wifi className="w-4 h-4" />,
  "Pool": <Waves className="w-4 h-4" />,
  "Restaurant": <Utensils className="w-4 h-4" />,
  "Bar": <Coffee className="w-4 h-4" />,
  "Parking": <ParkingCircle className="w-4 h-4" />,
  "Spa": <Heart className="w-4 h-4" />,
  "Fitness Center": <Sparkles className="w-4 h-4" />,
  "Room Service": <Coffee className="w-4 h-4" />,
  "Airport Shuttle": <Car className="w-4 h-4" />,
  "Conference Facilities": <Building2 className="w-4 h-4" />,
  "Swimming Pool": <Waves className="w-4 h-4" />,
  "Tennis Courts": <Sparkles className="w-4 h-4" />,
  "Boat Rides": <Waves className="w-4 h-4" />,
  "Bird Watching": <Eye className="w-4 h-4" />,
  "Game Drives": <Compass className="w-4 h-4" />,
};

// Category icons for accessibility features
const categoryIcons: Record<string, React.ReactNode> = {
  bathroom: <Bath className="w-5 h-5" />,
  room: <Bed className="w-5 h-5" />,
  entrance: <DoorOpen className="w-5 h-5" />,
  restaurant: <Utensils className="w-5 h-5" />,
  parking: <ParkingCircle className="w-5 h-5" />,
  elevator: <Building2 className="w-5 h-5" />,
  pool: <Waves className="w-5 h-5" />,
  furniture: <Sofa className="w-5 h-5" />,
};

// Selling points data
const sellingPoints = [
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Verified Accessibility",
    description: "All accessibility features have been verified by our team to ensure accuracy."
  },
  {
    icon: <Heart className="w-8 h-8 text-green-600" />,
    title: "Comfort & Independence",
    description: "Thoughtfully designed spaces that promote independence and comfort."
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    title: "Trained Staff",
    description: "Our staff is trained to assist guests with disabilities with care and respect."
  },
  {
    icon: <Compass className="w-8 h-8 text-green-600" />,
    title: "Accessible Adventures",
    description: "Enjoy accessible safari vehicles, boat rides, and guided tours."
  }
];

// FAQ Data
const faqs = [
  {
    question: "What is the door width for accessible rooms?",
    answer: "All accessible rooms have doorways that are at least 34 inches (86cm) wide to accommodate standard wheelchairs and mobility scooters."
  },
  {
    question: "Do you have roll-in showers?",
    answer: "Yes, all accessible rooms feature roll-in showers with zero threshold entry. Grab bars and a shower seat are also included."
  },
  {
    question: "Is the swimming pool accessible?",
    answer: "Yes, our swimming pool has a gradual entry ramp. A pool lift is also available upon request with 24-hour notice."
  },
  {
    question: "Do you have accessible parking?",
    answer: "Yes, we have designated accessible parking spaces located near the main entrance with a 5ft access aisle."
  },
  {
    question: "Are service animals allowed?",
    answer: "Yes, service animals are always welcome. Please inform us in advance so we can make appropriate arrangements."
  },
  {
    question: "Do you offer accessible transportation?",
    answer: "We have accessible vehicles available for airport transfers and tours. Please request at least 24-48 hours in advance."
  }
];

// Room Image Carousel Component
interface RoomImageCarouselProps {
  images: string[];
  roomType: string;
  className?: string;
  onImageClick?: (index: number) => void;
}

function RoomImageCarousel({ images, roomType, className = "", onImageClick }: RoomImageCarouselProps) {
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

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentImageIndex);
    }
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-video relative cursor-pointer" onClick={handleImageClick}>
        <Image
          src={displayImages[currentImageIndex]}
          alt={`${roomType} room - ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={currentImageIndex === 0}
        />
        
        {displayImages.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition backdrop-blur-sm"
              aria-label="Previous room image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
              onClick={(e) => { e.stopPropagation(); goToImage(index); }}
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

export function AccessibleHotelClient({ hotel, accessibleRoomCount }: AccessibleHotelClientProps) {
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    roomType: "",
  });

  // Gallery images array - NOW USING hotel.gallery from the updated accessible.ts
  const galleryImages = hotel.gallery || [hotel.image];

  // Calculate accessibility score
  const totalFeatures = hotel.accessibilityFeatures?.length || 0;
  const score = totalFeatures > 0 ? Math.min(Math.round((totalFeatures / (totalFeatures + 5)) * 100), 95) : 85;

  // Group features by category for quick stats
  const hasRollInShower = hotel.accessibilityFeatures?.some(f => 
    f.title.toLowerCase().includes("roll-in") || 
    f.title.toLowerCase().includes("shower") ||
    f.description.toLowerCase().includes("roll-in")
  ) || false;
  
  const hasGrabBars = hotel.accessibilityFeatures?.some(f => 
    f.title.toLowerCase().includes("grab bar") || 
    f.description.toLowerCase().includes("grab bar")
  ) || false;
  
  const hasWideDoorways = hotel.accessibilityFeatures?.some(f => 
    f.title.toLowerCase().includes("doorway") || 
    f.measurements?.toLowerCase().includes("door width") ||
    f.description.toLowerCase().includes("door width")
  ) || false;
  
  const hasAccessibleParking = hotel.accessibilityFeatures?.some(f => f.category === "parking") || false;
  const hasPoolLift = hotel.accessibilityFeatures?.some(f => f.category === "pool") || false;

  // Separate accessible and standard rooms
  const accessibleRooms = hotel.rooms.filter(r => r.accessible === true);
  const standardRooms = hotel.rooms.filter(r => !r.accessible);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking request sent for ${hotel.name}`);
    setShowBookingModal(false);
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[550px] bg-gray-900">
          <Image
            src={hotel.image}
            alt={`${hotel.name} - Wheelchair accessible hotel in ${hotel.location}, Kenya`}
            fill
            className="object-cover opacity-75"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Wheelchair Accessible
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {accessibleRoomCount} Accessible Room{accessibleRoomCount !== 1 ? 's' : ''}
                </span>
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  {hotel.rating} ★ Rating
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                {hotel.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{hotel.location}, Kenya</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  <span>Verified Accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Support Available</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold">${hotel.price}</span>
                  <span className="text-sm">/night avg</span>
                </div>
                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Check Availability
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call to Book
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/accessible" className="hover:text-blue-600">Accessible Hotels</Link>
            <span className="mx-2">/</span>
            <Link href={`/accessible/${hotel.location.toLowerCase()}`} className="hover:text-blue-600 capitalize">{hotel.location}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900" aria-current="page">{hotel.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Accessibility CTA Button */}
              <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-600 p-3 rounded-full">
                      <Accessibility className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Accessibility Features Available</h2>
                      <p className="text-gray-600 text-sm">This hotel is fully equipped for guests with mobility needs</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAccessibilityModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition shadow-md hover:shadow-lg"
                  >
                    <Accessibility size={22} />
                    See All Accessible Features
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Video Section */}
              {(hotel.videoUrl || hotel.videoEmbedUrl) && (
                <section className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Video className="w-6 h-6 text-blue-600" />
                    Accessibility Video Tour
                  </h2>
                  <HotelVideo 
                    videoUrl={hotel.videoUrl}
                    videoEmbedUrl={hotel.videoEmbedUrl}
                    hotelName={hotel.name}
                    hotelImage={hotel.image}
                  />
                </section>
              )}

              {/* Gallery Section - NOW USING hotel.gallery */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Camera className="w-6 h-6 text-blue-600" />
                    Photo Gallery
                  </h2>
                  <button 
                    onClick={() => { setGalleryIndex(0); setShowGallery(true); }}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View All {galleryImages.length} Photos
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {galleryImages.slice(0, 7).map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer ${idx === 0 ? "col-span-2 row-span-2" : ""}`}
                      onClick={() => { setGalleryIndex(idx); setShowGallery(true); }}
                    >
                      <Image
                        src={img}
                        alt={`${hotel.name} gallery image ${idx + 1} - Accessible hotel in ${hotel.location}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                  {galleryImages.length > 7 && (
                    <button 
                      onClick={() => { setGalleryIndex(0); setShowGallery(true); }}
                      className="bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl flex flex-col items-center justify-center font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 p-6 min-h-[200px]"
                    >
                      <span className="text-2xl mb-2">+{galleryImages.length - 7}</span>
                      <span>View All Photos</span>
                    </button>
                  )}
                </div>
              </section>

              {/* Accessibility Score */}
              <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-sm text-gray-600 mb-1">Accessibility Score</div>
                    <div className={`text-5xl font-bold ${score >= 90 ? "text-green-600" : "text-blue-600"}`}>{score}%</div>
                    <div className="text-lg font-semibold text-gray-800 mt-1">
                      {score >= 90 ? "Excellent Accessibility" : "Good Accessibility"}
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${score >= 90 ? "bg-green-500" : "bg-blue-500"}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div className="bg-white/60 rounded-lg p-2">
                        <span className="text-green-600 font-bold block text-xl">{accessibleRoomCount}</span>
                        <span className="text-gray-500">Accessible Rooms</span>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2">
                        <span className={`font-bold block text-xl ${hasRollInShower ? "text-blue-600" : "text-gray-400"}`}>
                          {hasRollInShower ? "✓" : "—"}
                        </span>
                        <span className="text-gray-500">Roll-in Showers</span>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2">
                        <span className={`font-bold block text-xl ${hasGrabBars ? "text-blue-600" : "text-gray-400"}`}>
                          {hasGrabBars ? "✓" : "—"}
                        </span>
                        <span className="text-gray-500">Grab Bars</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility Features Quick View */}
              {hotel.accessibilityFeatures && hotel.accessibilityFeatures.length > 0 && (
                <section className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Accessibility className="w-6 h-6 text-green-600" />
                    Key Accessibility Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hotel.accessibilityFeatures.slice(0, 6).map((feature) => (
                      <div key={feature.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="text-green-600 shrink-0 mt-1">
                          {categoryIcons[feature.category] || <CheckCircle className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                          {feature.measurements && (
                            <div className="flex items-center gap-1 mt-1 text-xs text-blue-600">
                              <Ruler className="w-3 h-3" />
                              <span>{feature.measurements}</span>
                            </div>
                          )}
                          {feature.yesNo === 'Yes' && (
                            <div className="flex items-center gap-1 mt-1 text-xs text-green-600">
                              <CheckCircle className="w-3 h-3" />
                              <span>Yes</span>
                            </div>
                          )}
                          {feature.note && (
                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                              <Info className="w-3 h-3" />
                              <span>{feature.note}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {hotel.accessibilityFeatures.length > 6 && (
                    <button 
                      onClick={() => setShowAccessibilityModal(true)}
                      className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                    >
                      View all {hotel.accessibilityFeatures.length} features
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </section>
              )}

              {/* Hotel Description */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">About This Accessible Hotel</h2>
                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">✓ Verified Accessible</span>
                  <span className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">✓ {accessibleRoomCount} Accessible Rooms</span>
                  <span className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full">✓ Trained Staff</span>
                  {hasAccessibleParking && (
                    <span className="bg-yellow-50 text-yellow-700 text-sm px-3 py-1 rounded-full">✓ Accessible Parking</span>
                  )}
                  {hasPoolLift && (
                    <span className="bg-cyan-50 text-cyan-700 text-sm px-3 py-1 rounded-full">✓ Pool Lift Available</span>
                  )}
                </div>
              </section>

              {/* Selling Points */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose This Accessible Hotel?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sellingPoints.map((point, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="shrink-0">{point.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                        <p className="text-sm text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ACCESSIBLE ROOMS SECTION */}
              {accessibleRooms.length > 0 && (
                <section className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Accessible Room Options
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our accessible rooms are designed with your comfort and independence in mind. 
                    Each room includes thoughtful features to accommodate various mobility needs.
                  </p>
                  
                  <div className="space-y-8">
                    {accessibleRooms.map((room) => (
                      <div key={room.id} className="border border-green-200 rounded-xl overflow-hidden bg-green-50/30 hover:shadow-md transition-shadow">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                          <div className="lg:col-span-1">
                            <RoomImageCarousel 
                              images={room.images} 
                              roomType={room.type}
                              onImageClick={(index) => {
                                if (room.images && room.images.length > 0) {
                                  const galleryStartIndex = galleryImages.findIndex(img => img === room.images[index]);
                                  setGalleryIndex(galleryStartIndex >= 0 ? galleryStartIndex : 0);
                                  setShowGallery(true);
                                }
                              }}
                            />
                          </div>
                          <div className="lg:col-span-2">
                            <div className="flex flex-wrap justify-between items-start gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                  <h3 className="text-xl font-semibold text-gray-900">{room.type}</h3>
                                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    Accessible
                                  </span>
                                  {room.available > 0 && (
                                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                                      {room.available} Available
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                                
                                {/* Room Amenities */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {room.amenities.slice(0, 6).map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                                      <CheckCircle className="w-3 h-3 text-green-500" />
                                      <span>{amenity}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Detailed Accessibility Features */}
                                {room.detailedAccessibility && Object.keys(room.detailedAccessibility).length > 0 && (
                                  <div className="mt-3 pt-3 border-t border-green-200">
                                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                      <Ruler className="w-4 h-4 text-green-600" />
                                      Detailed Measurements:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                      {room.detailedAccessibility.bedHeight && (
                                        <div className="flex items-center gap-1">
                                          <Bed className="w-3 h-3 text-gray-500" />
                                          <span>Bed height: <strong>{room.detailedAccessibility.bedHeight}</strong></span>
                                        </div>
                                      )}
                                      {room.detailedAccessibility.freeSpaceUnderBed && (
                                        <div className="flex items-center gap-1 text-green-600">
                                          <CheckCircle className="w-3 h-3" />
                                          <span>Free space under bed</span>
                                        </div>
                                      )}
                                      {room.detailedAccessibility.mattressFirm && (
                                        <div className="flex items-center gap-1 text-green-600">
                                          <CheckCircle className="w-3 h-3" />
                                          <span>Firm mattress</span>
                                        </div>
                                      )}
                                      {room.detailedAccessibility.deskHeight && (
                                        <div className="flex items-center gap-1">
                                          <Sofa className="w-3 h-3 text-gray-500" />
                                          <span>Desk height: <strong>{room.detailedAccessibility.deskHeight}</strong></span>
                                        </div>
                                      )}
                                      {room.detailedAccessibility.freeSpaceUnderDesk && (
                                        <div className="flex items-center gap-1 text-green-600">
                                          <CheckCircle className="w-3 h-3" />
                                          <span>Knee clearance under desk</span>
                                        </div>
                                      )}
                                      {room.detailedAccessibility.mirrorHeightFromFloor && (
                                        <div className="flex items-center gap-1">
                                          <Eye className="w-3 h-3 text-gray-500" />
                                          <span>Mirror: <strong>{room.detailedAccessibility.mirrorHeightFromFloor}</strong></span>
                                        </div>
                                      )}
                                      {room.detailedAccessibility.chairHasArmrestBackrestCushion && (
                                        <div className="flex items-center gap-1 text-green-600">
                                          <CheckCircle className="w-3 h-3" />
                                          <span>Chair with armrest, backrest & cushion</span>
                                        </div>
                                      )}
                                    </div>
                                    {room.detailedAccessibility.otherNotes && (
                                      <div className="mt-2 text-xs text-gray-500 bg-white p-2 rounded">
                                        <Info className="w-3 h-3 inline mr-1" />
                                        {room.detailedAccessibility.otherNotes}
                                      </div>
                                    )}
                                  </div>
                                )}
                                
                                {/* Accessibility Features List */}
                                {room.accessibilityFeatures && room.accessibilityFeatures.length > 0 && (
                                  <div className="mt-3 pt-3 border-t border-green-200">
                                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                      <CheckCircle className="w-4 h-4 text-green-600" />
                                      Accessibility Features:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                      {room.accessibilityFeatures.slice(0, 8).map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                                          <CheckCircle className="w-3 h-3 text-green-500" />
                                          <span>{feature}</span>
                                        </div>
                                      ))}
                                      {room.accessibilityFeatures.length > 8 && (
                                        <span className="text-xs text-blue-600">+{room.accessibilityFeatures.length - 8} more features</span>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="text-right shrink-0">
                                <div className="text-2xl font-bold text-blue-600">${room.price}</div>
                                <div className="text-sm text-gray-500">per night</div>
                                <button 
                                  onClick={() => { setBookingForm({...bookingForm, roomType: room.type}); setShowBookingModal(true); }}
                                  className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* STANDARD ROOMS SECTION */}
              {standardRooms.length > 0 && (
                <section className="bg-white rounded-xl shadow-sm p-6">
                  <details className="border border-gray-200 rounded-lg">
                    <summary className="cursor-pointer p-4 bg-gray-50 rounded-lg font-medium flex items-center justify-between hover:bg-gray-100 transition">
                      <span className="flex items-center gap-2">
                        <Bed className="w-5 h-5 text-gray-500" />
                        Standard Rooms ({standardRooms.length}) - Not Accessible
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </summary>
                    <div className="p-4 space-y-4">
                      <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg mb-3">
                        <AlertCircle className="w-4 h-4 inline mr-2" />
                        Note: Standard rooms may not have accessibility features. Please select from Accessible Rooms above for mobility needs.
                      </p>
                      {standardRooms.map((room) => (
                        <div key={room.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                          <div className="flex flex-wrap justify-between items-start gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900">{room.type}</h4>
                              <p className="text-sm text-gray-500 mt-1">{room.description}</p>
                              <div className="flex gap-3 mt-2 text-xs text-gray-400">
                                <span>Max {room.maxOccupancy} guests</span>
                                {room.available > 0 && <span className="text-green-600">{room.available} available</span>}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-700">${room.price}</div>
                              <button className="mt-2 text-blue-600 text-sm hover:underline">View Details</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                </section>
              )}

              {/* Amenities */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Hotel Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
                      {amenityIcons[amenity] || <CheckCircle className="w-4 h-4 text-green-500" />}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        {expandedFAQs.includes(idx) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {expandedFAQs.includes(idx) && (
                        <div className="p-4 pt-0 text-gray-600 text-sm border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Book Your Accessible Stay</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">${hotel.price}</span>
                  <span className="text-gray-600"> / night avg</span>
                  <p className="text-xs text-gray-400 mt-1">Based on accessible room rates</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Accessible Rooms
                    </span>
                    <span className="font-semibold text-green-600">{accessibleRoomCount} rooms</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Bath className="w-4 h-4" />
                      Roll-in Showers
                    </span>
                    <span className="font-semibold text-green-600">{hasRollInShower ? "✓ Available" : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <DoorOpen className="w-4 h-4" />
                      Wide Doorways
                    </span>
                    <span className="font-semibold text-green-600">{hasWideDoorways ? "✓ 34\"+" : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <ParkingCircle className="w-4 h-4" />
                      Accessible Parking
                    </span>
                    <span className="font-semibold text-green-600">{hasAccessibleParking ? "✓ Available" : "—"}</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  <input 
                    type="date" 
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Check-in"
                    min={today}
                  />
                  <input 
                    type="date" 
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Check-out"
                    min={checkInDate || tomorrow}
                  />
                </div>

                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Check Availability
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Free cancellation • Best price guaranteed • 24/7 support
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  Contact Hotel Directly
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <a href={`tel:${hotel.phone}`} className="hover:text-blue-600">{hotel.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <a href={`mailto:${hotel.email}`} className="hover:text-blue-600">{hotel.email}</a>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <span>{hotel.location}, Kenya</span>
                  </div>
                </div>
                <button className="mt-4 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </div>

              {/* Accessibility Badge */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900">Verified Accessibility</h3>
                    <p className="text-xs text-green-700">Jaetravel Verified</p>
                  </div>
                </div>
                <p className="text-sm text-green-800 mb-3">
                  This hotel has been verified for its accessibility features by Jaetravel Kenya&apos;s accessibility team.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-700">
                  <CheckCircle className="w-3 h-3" />
                  <span>Features verified on-site</span>
                </div>
              </div>

              {/* Best Time to Visit */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  Best Time to Visit
                </h3>
                <p className="text-sm text-gray-600">
                  {hotel.location === "Nairobi" && "June to October and January to February"}
                  {hotel.location === "Naivasha" && "Year-round, best June to October"}
                  {hotel.location === "Nakuru" && "September to March"}
                  {hotel.location === "Amboseli" && "June to October and January to March"}
                  {hotel.location === "Nanyuki" && "January to February and August to September"}
                  {hotel.location === "Maasai Mara" && "July to October (Migration) • December to March"}
                  {hotel.location === "Mombasa" && "December to March and July to October"}
                  {hotel.location === "Kisumu" && "June to October and January to March"}
                  {hotel.location === "Samburu" && "June to October and January to February"}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                  <Clock className="w-3 h-3" />
                  <span>Best wildlife viewing during dry season</span>
                </div>
              </div>

              {/* Share & Save */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold mb-3">Share This Hotel</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Modal */}
        {showAccessibilityModal && (
          <AccessibilityModal
            hotel={hotel}
            onClose={() => setShowAccessibilityModal(false)}
          />
        )}

        {/* Gallery Modal */}
        {showGallery && galleryImages.length > 0 && (
          <GalleryModal
            images={galleryImages}
            initialIndex={galleryIndex}
            onClose={() => setShowGallery(false)}
            hotelName={hotel.name}
          />
        )}

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/75 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Book {hotel.name}</h3>
                  <p className="text-gray-600">Complete the form below to check availability</p>
                </div>
                <button onClick={() => setShowBookingModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <input 
                      title="Check-in Date"
                      type="date" 
                      value={bookingForm.checkIn} 
                      onChange={(e) => setBookingForm({...bookingForm, checkIn: e.target.value})} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                      required 
                      min={today}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <input 
                      title="Check-out Date"
                      type="date" 
                      value={bookingForm.checkOut} 
                      onChange={(e) => setBookingForm({...bookingForm, checkOut: e.target.value})} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                      required 
                      min={bookingForm.checkIn || tomorrow}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                    <select 
                      title="Adults"
                      value={bookingForm.adults} 
                      onChange={(e) => setBookingForm({...bookingForm, adults: parseInt(e.target.value)})} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[1,2,3,4].map(num => (<option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                    <select 
                      title="Children"
                      value={bookingForm.children} 
                      onChange={(e) => setBookingForm({...bookingForm, children: parseInt(e.target.value)})} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[0,1,2,3,4].map(num => (<option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                  <select 
                    title="Room Type"
                    value={bookingForm.roomType} 
                    onChange={(e) => setBookingForm({...bookingForm, roomType: e.target.value})} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                    required
                  >
                    <option value="">Select Room Type</option>
                    {hotel.rooms.map(room => (
                      <option key={room.id} value={room.type}>
                        {room.type} - ${room.price}/night {room.accessible ? '(Accessible)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Best Rate Guarantee</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Lowest price available</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Free cancellation</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Complimentary breakfast</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> No booking fees</li>
                  </ul>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-colors">
                  Check Availability & Book Now
                </button>
                <p className="text-center text-gray-500 text-sm">By booking, you agree to our Terms & Conditions and Privacy Policy</p>
              </form>
            </div>
          </div>
        )}

        {/* Floating Booking Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={() => setShowBookingModal(true)} 
            className="bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2"><Bed size={20} /> BOOK NOW</span>
          </button>
        </div>
      </div>
    </>
  );
}