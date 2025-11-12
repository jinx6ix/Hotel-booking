// app/hotels/[id]/HotelClient.tsx
'use client';

import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Wifi,
  Utensils,
  Dumbbell,
  Waves,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Hotel = typeof import("@/lib/data").hotels[number];
type Location = typeof import("@/lib/data").locations[number] | undefined;

interface HotelClientProps {
  hotel: Hotel;
  location: Location;
}

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={20} />,
  Restaurant: <Utensils size={20} />,
  "Fitness Center": <Dumbbell size={20} />,
  Pool: <Waves size={20} />,
};

export default function HotelClient({ hotel, location }: HotelClientProps) {
  // ---------- State ----------
  const [activeSection, setActiveSection] = useState("overview");
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showMoreFacilities, setShowMoreFacilities] = useState(false);
  const [currentRoomImageIndex, setCurrentRoomImageIndex] = useState(0);

  // ---------- Refs for smooth scroll ----------
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    rooms: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    policy: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
  };

  // ---------- Smooth scroll ----------
  const scrollToSection = (section: keyof typeof sectionRefs) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ---------- Autoplay room carousel ----------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoomImageIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ---------- Data ----------
  const allImages = [hotel.image, ...(hotel.gallery || [])];
  const roomImages = ["/room-bed.jpg", "/room-bath.jpg", "/room-sitting.jpg"]; // replace with real images if needed

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

  // ---------- Render ----------
  return (
    <>
      {/* ---------- Secondary Navbar ---------- */}
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
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------- Image Gallery (6+ images) ---------- */}
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
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${hotel.name} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <button
              onClick={() => setShowGallery(true)}
              className="col-span-2 md:col-span-1 bg-orange-500 text-white rounded-lg flex items-center justify-center font-medium hover:bg-orange-600 transition"
            >
              See All Images
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Three Cards (Facilities | Area | Reviews) ---------- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Facilities */}
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
              >
                Show More →
              </button>
            </div>

            {/* Middle: Area */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-4">About {hotel.location}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {location?.description ||
                  "A beautiful destination with rich culture and stunning landscapes."}
              </p>
              <button
                onClick={() => setShowMap(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600"
              >
                Show Live Map
              </button>
            </div>

            {/* Right: Reviews (scrollable) */}
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
          <h2 className="text-3xl font-bold mb-8">Rooms</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room list */}
            <div className="lg:col-span-2 space-y-6">
              {hotel.rooms?.slice(0, 5).map((room, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">{room.type}</h3>
                  <p className="text-gray-600 mb-3">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-orange-600">${room.price}/night</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Autoplay carousel (right) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                <img
                  src={roomImages[currentRoomImageIndex] || "/placeholder.svg"}
                  alt="Room view"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-center text-sm text-gray-600">
                    {["Bedroom", "Bathroom", "Sitting Area"][currentRoomImageIndex]}
                  </p>
                  <div className="flex justify-center gap-1 mt-2">
                    {roomImages.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === currentRoomImageIndex ? "bg-orange-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            title="Close"
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          <button
            title="Previous"
            onClick={() => setGalleryIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={allImages[galleryIndex] || "/placeholder.svg"}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
          />
          <button
            title="Next"
            onClick={() => setGalleryIndex((prev) => (prev + 1) % allImages.length)}
            className="absolute right-4 text-white hover:text-gray-300"
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
              <button title="Close" onClick={() => setShowMap(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96">
              {/* Replace with real map embed */}
              <p className="text-center pt-40 text-gray-500">Map Embed Here</p>
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
              <button title="Close" onClick={() => setShowMoreFacilities(false)} className="text-gray-500 hover:text-gray-700">
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