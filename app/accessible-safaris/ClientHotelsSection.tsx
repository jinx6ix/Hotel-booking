// app/accessible-safaris/ClientHotelsSection.tsx
'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Accessibility,
  BedDouble,
  ChevronRight,
  CheckCircle2,
  Star,
  Users,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Search,
  Filter,
} from 'lucide-react';

interface Feature {
  id: string;
  category: 'bathroom' | 'room' | 'entrance' | 'restaurant';
  title: string;
  description: string;
  measurements?: string;
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  description: string;
  accessible: boolean;
  rooms: any[];
  accessibilityFeatures?: Feature[];
  accessibilityImages?: Record<string, string[]>;
}

// Define destination order - Nairobi first
const DESTINATION_ORDER = [
  'Nairobi',
  'Naivasha',
  'Nakuru',
  'Amboseli',
  'Maasai Mara',
  'Nanyuki',
  'Samburu',
  'Mombasa',
  'Kisumu',
  'Tsavo East',
  'Tsavo West',
];

// ──────────────────────────────────────────────────────────────────────────────
// FULL-SCREEN IMAGE VIEWER
// ──────────────────────────────────────────────────────────────────────────────
function ImageViewer({
  images,
  initialIndex,
  hotelName,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  hotelName: string;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition z-10"
          aria-label="Close image viewer"
        >
          <X size={32} />
        </button>

        <Image
          src={images[currentIndex]}
          alt={`Accessibility feature photo ${currentIndex + 1} of ${images.length} – ${hotelName}`}
          title={`Accessibility image ${currentIndex + 1} – ${hotelName}`}
          width={1600}
          height={1200}
          className="max-w-full max-h-[85vh] object-contain"
          priority
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-2 rounded-full text-base font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition"
              aria-label="Next image"
            >
              <ChevronRightIcon size={32} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// ACCESSIBILITY MODAL
// ──────────────────────────────────────────────────────────────────────────────
function AccessibilityModal({ hotel, onClose }: { hotel: Hotel; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'bathroom' | 'room' | 'lobby' | 'restaurant'>('bathroom');
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const tabs = [
    { key: 'bathroom' as const, label: 'Bathroom' },
    { key: 'room' as const, label: 'Room' },
    { key: 'lobby' as const, label: 'Lobby' },
    { key: 'restaurant' as const, label: 'Restaurant' },
  ];

  const getCategory = (tab: typeof tabs[number]['key']) =>
    tab === 'lobby' ? 'entrance' : tab;

  const currentFeatures = hotel.accessibilityFeatures?.filter(
    (f) => f.category === getCategory(activeTab)
  ) || [];

  const currentImages = hotel.accessibilityImages?.[getCategory(activeTab)] || [];

  const openViewer = (index: number) => {
    setViewerInitialIndex(index);
    setShowImageViewer(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white w-full max-w-5xl max-h-[92vh] md:max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 md:px-6 md:py-4 border-b flex items-center justify-between bg-gray-50 shrink-0">
          <div className="flex items-center gap-3">
            <Accessibility className="text-blue-600" size={28} />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">{hotel.name}</h2>
              <p className="text-xs md:text-sm text-gray-600">Physical disability accessibility details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sticky Tabs */}
        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex min-w-max px-4 md:px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-shrink-0 px-5 py-3.5 md:px-6 md:py-4 text-sm md:text-base font-medium border-b-4 transition-all whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 bg-gray-50">
          {/* Photos */}
          {currentImages.length > 0 && (
            <div className="mb-8 md:mb-10">
              <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div
                  className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer relative"
                  onClick={() => openViewer(0)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo 1 of ${currentImages.length}`}
                >
                  <Image
                    src={currentImages[0]}
                    alt={`${activeTab} accessibility photo 1 of ${currentImages.length} – ${hotel.name}`}
                    title={`Accessibility feature – ${activeTab} – ${hotel.name} – photo 1`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>

                {currentImages.length >= 2 && (
                  <div
                    className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer relative"
                    onClick={() => openViewer(1)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo 2 of ${currentImages.length} or more`}
                  >
                    <Image
                      src={currentImages[1]}
                      alt={`${activeTab} accessibility photo 2 of ${currentImages.length} – ${hotel.name}`}
                      title={`Accessibility feature – ${activeTab} – ${hotel.name} – photo 2`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />

                    {currentImages.length > 2 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <div className="bg-white/90 text-gray-900 px-5 py-3 md:px-6 md:py-4 rounded-full text-xl md:text-2xl font-bold shadow-lg">
                          +{currentImages.length - 2}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {currentImages.slice(2).map((img: string, i: number) => (
                  <div key={i + 2} className="hidden">
                    <Image
                      src={img}
                      alt={`${activeTab} accessibility photo ${i + 3} of ${currentImages.length} – ${hotel.name}`}
                      title={`Accessibility feature – ${activeTab} – ${hotel.name} – photo ${i + 3}`}
                      width={800}
                      height={600}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="space-y-5 md:space-y-6">
            {currentFeatures.length > 0 ? (
              currentFeatures.map((feature: Feature, index: number) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      {feature.title.toLowerCase().includes('too high') ||
                      feature.title.toLowerCase().includes('no handrails') ||
                      feature.description?.includes('❌') ? (
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl font-bold">
                          ✕
                        </div>
                      ) : feature.title.toLowerCase().includes('warning') ||
                        feature.title.toLowerCase().includes('alert') ? (
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl font-bold">
                          !
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{feature.description}</p>
                      {feature.measurements && (
                        <p className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-blue-600">{feature.measurements}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 md:py-12 text-gray-500 text-sm md:text-base">
                Detailed information for this section is currently being verified.<br />
                Please contact us for the most up-to-date accessibility details.
              </div>
            )}
          </div>
        </div>

        {/* Footer note */}
        <div className="px-5 py-3 md:px-6 md:py-4 border-t bg-gray-50 text-center text-xs md:text-sm text-gray-500 shrink-0">
          All measurements verified on-site • Last updated March 2026
        </div>
      </div>

      {showImageViewer && currentImages.length > 0 && (
        <ImageViewer
          images={currentImages}
          initialIndex={viewerInitialIndex}
          hotelName={hotel.name}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// HOTEL CARD COMPONENT
// ──────────────────────────────────────────────────────────────────────────────
function HotelCard({ hotel }: { hotel: Hotel }) {
  const [showModal, setShowModal] = useState(false);
  
  const accessibleRooms = hotel.rooms?.filter((r: any) => r.accessible) || [];
  const hasMultipleRooms = accessibleRooms.length > 1;
  
  // Determine correct link based on accessibility status
  const hotelDetailLink = hotel.accessible ? `/accessible/${hotel.id}` : `/hotels/${hotel.id}`;

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
        <div className="relative h-56 overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={hotel.image}
            alt={`${hotel.name} – ${hotel.accessible ? 'wheelchair accessible' : ''} hotel in ${hotel.location}`}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {hotel.accessible && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg z-10">
              <Accessibility size={16} />
              Wheelchair Accessible
            </div>
          )}

          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-800 flex items-center gap-1 shadow-lg z-10">
            <Star className="text-yellow-500 fill-yellow-500" size={16} />
            {hotel.rating}
          </div>

          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1 z-10">
            <MapPin size={14} />
            {hotel.location}, Kenya
          </div>

          {hotel.accessible && accessibleRooms.length > 0 && (
            <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 z-10">
              <BedDouble size={14} />
              {accessibleRooms.length} Accessible Room{hasMultipleRooms ? 's' : ''}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-1">{hotel.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{hotel.description}</p>

          {hotel.accessible && (
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition mb-5 shadow-sm hover:shadow-md"
            >
              <Accessibility size={18} />
              See all features
            </button>
          )}

          <div className="flex gap-3">
            <Link
              href={hotelDetailLink}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
            >
              View Hotel Details
              <ChevronRight size={18} />
            </Link>
            {hotel.accessible && (
              <Link
                href={`${hotelDetailLink}?filter=accessible`}
                className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-bold transition flex items-center justify-center"
                title="View accessible rooms only"
              >
                <Accessibility size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Accessibility Modal */}
      {showModal && (
        <AccessibilityModal
          hotel={hotel}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// MAIN CLIENT HOTELS SECTION COMPONENT
// ──────────────────────────────────────────────────────────────────────────────
export default function ClientHotelsSection({ hotels }: { hotels: Hotel[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Group hotels by destination
  const hotelsByDestination = useMemo(() => {
    // Filter by search term first
    let filteredHotels = hotels;
    
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      filteredHotels = filteredHotels.filter(hotel =>
        hotel.name.toLowerCase().includes(term) ||
        hotel.location.toLowerCase().includes(term) ||
        hotel.description.toLowerCase().includes(term)
      );
    }

    // Filter by selected destination
    if (selectedDestination !== "all") {
      filteredHotels = filteredHotels.filter(hotel => 
        hotel.location.toLowerCase() === selectedDestination.toLowerCase()
      );
    }

    // Group by destination
    const grouped: Record<string, Hotel[]> = {};
    
    filteredHotels.forEach(hotel => {
      const dest = hotel.location;
      if (!grouped[dest]) {
        grouped[dest] = [];
      }
      grouped[dest].push(hotel);
    });

    return grouped;
  }, [hotels, searchTerm, selectedDestination]);

  // Get unique destinations from hotels (preserving order)
  const uniqueDestinations = useMemo(() => {
    const destinations = new Set<string>();
    hotels.forEach(hotel => destinations.add(hotel.location));
    
    // Sort destinations according to DESTINATION_ORDER, then alphabetically for others
    return Array.from(destinations).sort((a, b) => {
      const indexA = DESTINATION_ORDER.indexOf(a);
      const indexB = DESTINATION_ORDER.indexOf(b);
      
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
  }, [hotels]);

  // Get total hotel count
  const totalHotels = useMemo(() => hotels.length, [hotels]);
  const filteredCount = useMemo(() => {
    return Object.values(hotelsByDestination).reduce((acc, arr) => acc + arr.length, 0);
  }, [hotelsByDestination]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDestination("all");
  };

  const hasActiveFilters = searchTerm !== "" || selectedDestination !== "all";

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accessible Safari Lodges & Hotels in Kenya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover wheelchair-friendly accommodations across Kenya's most iconic safari destinations. 
            Each property has been verified for accessibility features.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by hotel name, location, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium"
            >
              <Filter size={18} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            
            {/* Destination Filter - Desktop always visible, Mobile conditional */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-80`}>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white"
              >
                <option value="all">All Destinations ({totalHotels})</option>
                {uniqueDestinations.map(dest => {
                  const count = hotels.filter(h => h.location === dest).length;
                  return (
                    <option key={dest} value={dest}>
                      {dest} ({count})
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          
          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Search: {searchTerm}
                  <button onClick={() => setSearchTerm("")} className="hover:text-blue-900">
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedDestination !== "all" && (
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Destination: {selectedDestination}
                  <button onClick={() => setSelectedDestination("all")} className="hover:text-blue-900">
                    <X size={14} />
                  </button>
                </span>
              )}
              <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold">{filteredCount}</span> accessible hotel{filteredCount !== 1 ? 's' : ''} 
            {hasActiveFilters && " matching your criteria"}
          </p>
        </div>

        {/* Hotels by Destination */}
        {Object.keys(hotelsByDestination).length > 0 ? (
          <div className="space-y-16">
            {uniqueDestinations.map(destination => {
              const destinationHotels = hotelsByDestination[destination];
              if (!destinationHotels || destinationHotels.length === 0) return null;
              
              return (
                <div key={destination}>
                  {/* Destination Header */}
                  <div className="mb-6 pb-3 border-b border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                      <MapPin size={28} className="text-blue-600" />
                      {destination}
                    </h2>
                    <p className="text-gray-500 mt-1">
                      {destinationHotels.length} accessible {destinationHotels.length === 1 ? 'hotel' : 'hotels'} in {destination}
                    </p>
                  </div>
                  
                  {/* Hotels Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinationHotels.map((hotel) => (
                      <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-6">🏨</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No hotels found</h3>
            <p className="text-gray-600 mb-8">
              We couldn't find any accessible hotels matching your search criteria.
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}