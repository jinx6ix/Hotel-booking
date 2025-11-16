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
} from "lucide-react";
import Image from "next/image";

import { hotels as allHotels } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Types – derived from the real data files                           */
/* ------------------------------------------------------------------ */
type Hotel = typeof allHotels[number];
type Room = Hotel["rooms"][number];

interface HotelClientProps {
  hotel: Hotel;
  location: typeof import("@/lib/data").locations[number] | undefined;
}

/* ------------------------------------------------------------------ */
/*  Amenity icons                                                     */
/* ------------------------------------------------------------------ */
const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={20} />,
  Restaurant: <Utensils size={20} />,
  "Fitness Center": <Dumbbell size={20} />,
  Pool: <Waves size={20} />,
};

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

  // If no images, use fallback
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
      {/* Main Image */}
      <div className="aspect-video relative">
        <Image
          src={displayImages[currentImageIndex]}
          alt={`${roomType} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg?height=300&width=400";
          }}
        />
        
        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Image Indicators */}
      {displayImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {displayImages.length > 1 && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
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

  /* --------------------------- Refs --------------------------- */
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    rooms: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    policy: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
  };

  /* ----------------------- Smooth scroll ---------------------- */
  const scrollToSection = (section: keyof typeof sectionRefs) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* --------------------------- Data --------------------------- */
  const allImages = [hotel.image, ...(hotel.gallery || [])];

  const reviews = [
    { name: "John D.", rating: 5, text: "Amazing stay! Beautiful views and excellent service." },
    { name: "Sarah M.", rating: 4, text: "Great location, clean rooms, friendly staff." },
    { name: "Mike L.", rating: 5, text: "Best hotel in the area. Will come back!" },
    { name: "Emma K.", rating: 4, text: "Comfortable beds and good breakfast." },
  ];

  const policies = [
    "Check-in: 2:00 PM",
    "Check-out: 11:00 AM",
    "Pets not allowed",
    "Free cancellation up to 48 hours before arrival",
    "Children welcome",
  ];

  /* --------------------- Room filtering --------------------- */
  const getFilteredRooms = (): Room[] => {
    if (roomFilter === "accessible") {
      // Return only rooms that have `accessible: true`
      return hotel.rooms.filter(
        (room): room is Room & { accessible: true; accessibilityFeatures: string[] } =>
          !!room.accessible && Array.isArray(room.accessibilityFeatures)
      );
    }
    // Return only normal rooms (not accessible)
    return hotel.rooms.filter(room => !room.accessible);
  };

  const filteredRooms = getFilteredRooms();

  /* -------------------------- Render -------------------------- */
  return (
    <>
      {/* ---------- Primary Navbar: Normal / Accessible ---------- */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
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
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              aria-label="View normal rooms"
            >
              Normal Rooms
            </button>

            <button
              onClick={() => {
                setRoomFilter("accessible");
                scrollToSection("rooms");
              }}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                roomFilter === "accessible"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              aria-label="View accessible rooms"
            >
              <Accessibility size={18} aria-hidden="true" />
              Accessible Rooms
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Secondary Navbar: Sections ---------- */}
      <nav className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "rooms", "location", "policy", "reviews"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize whitespace-nowrap transition-colors ${
                  activeSection === section
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                aria-label={`Scroll to ${section} section`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------- Image Gallery ---------- */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allImages.slice(0, 7).map((img, idx) => (
              <div
                key={idx}
                className={`bg-gray-200 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                  idx === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => {
                  setGalleryIndex(idx);
                  setShowGallery(true);
                }}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${hotel.name} gallery ${idx + 1}`}
                  width={idx === 0 ? 800 : 400}
                  height={idx === 0 ? 800 : 400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <button
              onClick={() => setShowGallery(true)}
              className="col-span-2 md:col-span-1 bg-orange-500 text-white rounded-lg flex items-center justify-center font-medium hover:bg-orange-600 transition"
              aria-label="View all images"
            >
              See All Images
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Three Cards ---------- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Facilities */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Main Facilities</h3>
              <div className="space-y-3">
                {hotel.amenities.slice(0, 4).map((a, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {amenityIcons[a] || <Wifi size={18} />}
                    <span className="text-gray-700">{a}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowMoreFacilities(true)}
                className="mt-4 text-orange-600 font-medium hover:underline"
                aria-label="Show more facilities"
              >
                Show More
              </button>
            </div>

            {/* Area */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-4">About {hotel.location}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {location?.description ||
                  "A beautiful destination with rich culture and stunning landscapes."}
              </p>
              <button
                onClick={() => setShowMap(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600"
                aria-label="Show live map"
              >
                Show Live Map
              </button>
            </div>

            {/* Reviews */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Guest Reviews</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                {reviews.map((r, i) => (
                  <div key={i} className="border-b pb-3 last:border-0">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          size={14}
                          className={s < r.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-gray-600 italic">&quot;{r.text}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section ref={sectionRefs.overview} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{hotel.description}</p>
        </div>
      </section>

      {/* ---------- Rooms ---------- */}
      <section ref={sectionRefs.rooms} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            {roomFilter === "accessible" ? "Accessible Rooms" : "Rooms"}
          </h2>

          <div className="space-y-8">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <div key={room.id} className="bg-white rounded-lg border shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                    {/* Room Images */}
                    <div className="lg:col-span-1">
                      <RoomImageCarousel 
                        images={room.images}
                        roomType={room.type}
                        className="h-64 lg:h-full"
                      />
                    </div>

                    {/* Room Details */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            {room.type}
                            {room.accessible && (
                              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <Accessibility size={14} aria-hidden="true" />
                                Accessible
                              </span>
                            )}
                          </h3>
                          
                          <p className="text-gray-600 mb-4">{room.description}</p>

                          {/* Room Amenities */}
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Room Amenities:</p>
                            <div className="flex flex-wrap gap-2">
                              {room.amenities.slice(0, 4).map((amenity, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                >
                                  {amenity}
                                </span>
                              ))}
                              {room.amenities.length > 4 && (
                                <span className="text-gray-500 text-xs">
                                  +{room.amenities.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Accessibility features – only for accessible rooms */}
                          {room.accessible && room.accessibilityFeatures && (
                            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm font-semibold text-blue-800 mb-2">
                                Accessibility Features:
                              </p>
                              <ul className="text-xs text-blue-700 space-y-1">
                                {room.accessibilityFeatures.slice(0, 4).map((feat: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-1">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                                {room.accessibilityFeatures.length > 4 && (
                                  <li className="text-blue-600 italic text-xs">
                                    +{room.accessibilityFeatures.length - 4} more
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}

                          {/* Room Details */}
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                            <div>
                              <span className="font-semibold">Max Occupancy:</span> {room.maxOccupancy}
                            </div>
                            <div>
                              <span className="font-semibold">Available:</span> {room.available}
                            </div>
                          </div>
                        </div>

                        {/* Price and Book Button */}
                        <div className="flex justify-between items-center pt-4 border-t">
                          <div>
                            <p className="text-2xl font-bold text-orange-600">${room.price}/night</p>
                            <p className="text-sm text-gray-500">Includes taxes and fees</p>
                          </div>
                          <button
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium"
                            aria-label={`Book ${room.type}`}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 italic text-lg">
                  No {roomFilter === "accessible" ? "accessible" : "normal"} rooms available.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Location ---------- */}
      <section ref={sectionRefs.location} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Location</h2>
          <div className="bg-white p-6 rounded-lg border">
            <p className="text-lg mb-4">{hotel.address}</p>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Policy ---------- */}
      <section ref={sectionRefs.policy} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Hotel Policy</h2>
          <ul className="space-y-3 text-gray-700">
            {policies.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section ref={sectionRefs.reviews} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">All Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={18}
                        className={s < r.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{r.rating}.0</span>
                </div>
                <p className="font-semibold mb-1">{r.name}</p>
                <p className="text-gray-600 italic">&quot;{r.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Full Gallery Modal ---------- */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          <button
            onClick={() =>
              setGalleryIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
            }
            className="absolute left-4 text-white hover:text-gray-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <Image
            src={allImages[galleryIndex]}
            alt={`Gallery image ${galleryIndex + 1}`}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={() => setGalleryIndex((prev) => (prev + 1) % allImages.length)}
            className="absolute right-4 text-white hover:text-gray-300"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          <p className="absolute bottom-4 text-white text-sm">
            {galleryIndex + 1} / {allImages.length}
          </p>
        </div>
      )}

      {/* ---------- Map Modal ---------- */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Live Location</h3>
              <button onClick={() => setShowMap(false)} aria-label="Close map">
                <X size={24} />
              </button>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <p className="text-gray-500">Map Embed Here</p>
            </div>
          </div>
        </div>
      )}

      {/* ---------- More Facilities Modal ---------- */}
      {showMoreFacilities && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">All Facilities</h3>
              <button onClick={() => setShowMoreFacilities(false)} aria-label="Close facilities">
                <X size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {hotel.amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                  {amenityIcons[a] || <Wifi size={20} />}
                  <span className="font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}