// components/hotel-accessibility-features.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accessibility,
  DoorOpen,
  Bed,
  ShowerHead,
  Bath,
  Users,
  Coffee,
  Wifi,
  Ruler,
  ChevronRight,
  ChevronLeft,
  X,
  Maximize2,
  Minimize2,
  Camera
} from "lucide-react";
import type { Hotel } from "@/lib/accessible";

interface HotelAccessibilityFeaturesProps {
  hotel: Hotel;
}

export function HotelAccessibilityFeatures({ hotel }: HotelAccessibilityFeaturesProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>("bathroom");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageGallery, setImageGallery] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState("");

  if (!hotel.accessible || !hotel.accessibilityFeatures) {
    return null;
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const openImageGallery = (images: string[] | undefined, title: string) => {
    if (images && images.length > 0) {
      setImageGallery(images);
      setGalleryTitle(title);
      setSelectedImage(images[0]);
    }
  };

  const closeImageGallery = () => {
    setSelectedImage(null);
    setImageGallery([]);
    setGalleryTitle("");
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!selectedImage || imageGallery.length === 0) return;
    const currentIndex = imageGallery.indexOf(selectedImage);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % imageGallery.length;
    } else {
      newIndex = (currentIndex - 1 + imageGallery.length) % imageGallery.length;
    }
    setSelectedImage(imageGallery[newIndex]);
  };

  // Group features by category
  const bathroomFeatures = hotel.accessibilityFeatures.filter(f => f.category === 'bathroom') || [];
  const roomFeatures = hotel.accessibilityFeatures.filter(f => f.category === 'room') || [];
  const entranceFeatures = hotel.accessibilityFeatures.filter(f => f.category === 'entrance') || [];
  const restaurantFeatures = hotel.accessibilityFeatures.filter(f => f.category === 'restaurant') || [];

  // Group room features by subcategory
  const roomEntranceFeatures = roomFeatures.filter(f => f.title.includes('Room entrance'));
  const bedFeatures = roomFeatures.filter(f => f.title.includes('Bed'));
  const closetFeatures = roomFeatures.filter(f => f.title.includes('Room amenities') || f.title.includes('closet'));
  const mirrorFeatures = roomFeatures.filter(f => f.title.includes('mirror'));
  const deskFeatures = roomFeatures.filter(f => f.title.includes('desk'));
  const generalRoomFeatures = roomFeatures.filter(f => 
    !f.title.includes('Room entrance') && 
    !f.title.includes('Bed') && 
    !f.title.includes('Room amenities') && 
    !f.title.includes('closet') && 
    !f.title.includes('mirror') && 
    !f.title.includes('desk')
  );

  // Get images
  const bathroomImages = hotel.accessibilityImages?.bathroom || [];
  const roomImages = hotel.accessibilityImages?.room || [];
  const entranceImages = hotel.accessibilityImages?.entrance || [];
  const restaurantImages = hotel.accessibilityImages?.restaurant || [];
  const showerImages = hotel.accessibilityImages?.shower || [];
  const sinkImages = hotel.accessibilityImages?.sink || [];

  return (
    <>
      {/* Features Button */}
      <button
        onClick={() => setShowAllFeatures(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg"
      >
        <Accessibility size={20} />
        See all accessibility features
        <ChevronRight size={18} />
      </button>

      {/* Detailed Features Modal */}
      {showAllFeatures && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl mx-auto relative">
              {/* Close Button */}
              <button
                title="Close"
                onClick={() => setShowAllFeatures(false)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
                <h2 className="text-2xl font-bold">Bathroom accessibility information</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg">{hotel.name}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Physical disability</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Bathroom Images Gallery - +8 photos */}
                {bathroomImages.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Camera size={18} className="text-blue-600" />
                        Bathroom Photos
                      </h3>
                      <span className="text-sm text-gray-500">+{bathroomImages.length} photos</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {bathroomImages.slice(0, 4).map((img, idx) => (
                        <div 
                          key={idx} 
                          className="relative h-20 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                          onClick={() => openImageGallery(bathroomImages, "Bathroom Photos")}
                        >
                          <Image
                            src={img}
                            alt={`Bathroom ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section Navigation */}
                <div className="flex gap-4 mb-6 border-b pb-4 overflow-x-auto">
                  <button 
                    onClick={() => toggleSection('bathroom')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                      expandedSection === 'bathroom' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Bath size={18} />
                    Bathroom
                    {expandedSection === 'bathroom' ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                  <button 
                    onClick={() => toggleSection('room')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                      expandedSection === 'room' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Bed size={18} />
                    Room
                    {expandedSection === 'room' ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                  <button 
                    onClick={() => toggleSection('entrance')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                      expandedSection === 'entrance' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
                    }`}
                  >
                    <DoorOpen size={18} />
                    Entrance
                    {expandedSection === 'entrance' ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                  <button 
                    onClick={() => toggleSection('restaurant')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                      expandedSection === 'restaurant' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Users size={18} />
                    Restaurant
                    {expandedSection === 'restaurant' ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                </div>

                {/* Bathroom Section */}
                {expandedSection === 'bathroom' && (
                  <div className="space-y-6">
                    {/* Shower Section with Image */}
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <ShowerHead size={18} className="text-blue-600" />
                          Shower
                        </h4>
                      </div>
                      <div className="p-4">
                        {/* Shower Images */}
                        {showerImages.length > 0 && (
                          <div className="mb-4">
                            <div className="grid grid-cols-4 gap-2">
                              {showerImages.slice(0, 4).map((img, idx) => (
                                <div 
                                  key={idx} 
                                  className="relative h-16 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                                  onClick={() => openImageGallery(showerImages, "Shower Photos")}
                                >
                                  <Image
                                    src={img}
                                    alt={`Shower ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Shower Features */}
                        {bathroomFeatures.filter(f => f.title.includes('Shower')).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800">{feature.description}</p>
                              {feature.measurements && (
                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                  <Ruler size={12} />
                                  {feature.measurements}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sink Section with Image */}
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Coffee size={18} className="text-blue-600" />
                          Sink
                        </h4>
                      </div>
                      <div className="p-4">
                        {/* Sink Images */}
                        {sinkImages.length > 0 && (
                          <div className="mb-4">
                            <div className="grid grid-cols-4 gap-2">
                              {sinkImages.slice(0, 4).map((img, idx) => (
                                <div 
                                  key={idx} 
                                  className="relative h-16 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                                  onClick={() => openImageGallery(sinkImages, "Sink Photos")}
                                >
                                  <Image
                                    src={img}
                                    alt={`Sink ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Sink Features */}
                        {bathroomFeatures.filter(f => f.title.includes('Sink')).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800">{feature.description}</p>
                              {feature.measurements && (
                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                  <Ruler size={12} />
                                  {feature.measurements}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bathroom Entrance */}
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <DoorOpen size={18} className="text-blue-600" />
                          Bathroom entrance
                        </h4>
                      </div>
                      <div className="p-4">
                        {bathroomFeatures.filter(f => f.title.includes('Entrance')).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800">{feature.description}</p>
                              {feature.measurements && (
                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                  <Ruler size={12} />
                                  {feature.measurements}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bathroom Interior */}
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Bath size={18} className="text-blue-600" />
                          Bathroom interior
                        </h4>
                      </div>
                      <div className="p-4">
                        {bathroomFeatures.filter(f => f.title.includes('Interior')).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800">{feature.description}</p>
                              {feature.measurements && (
                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                  <Ruler size={12} />
                                  {feature.measurements}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Room Section */}
                {expandedSection === 'room' && (
                  <div className="space-y-6">
                    {/* Room Images */}
                    {roomImages.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Camera size={16} className="text-blue-600" />
                          Room Photos
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                          {roomImages.slice(0, 4).map((img, idx) => (
                            <div 
                              key={idx} 
                              className="relative h-20 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                              onClick={() => openImageGallery(roomImages, "Room Photos")}
                            >
                              <Image
                                src={img}
                                alt={`Room ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Room Entrance */}
                    {roomEntranceFeatures.length > 0 && (
                      <div className="border rounded-xl overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <DoorOpen size={18} className="text-blue-600" />
                            Room entrance
                          </h4>
                        </div>
                        <div className="p-4 space-y-3">
                          {roomEntranceFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                              <div className="mt-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800">{feature.description}</p>
                                {feature.measurements && (
                                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <Ruler size={12} />
                                    {feature.measurements}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bed */}
                    {bedFeatures.length > 0 && (
                      <div className="border rounded-xl overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <Bed size={18} className="text-blue-600" />
                            Bed
                          </h4>
                        </div>
                        <div className="p-4 space-y-3">
                          {bedFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                              <div className="mt-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800">{feature.description}</p>
                                {feature.measurements && (
                                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <Ruler size={12} />
                                    {feature.measurements}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Room amenities */}
                    {closetFeatures.length > 0 && (
                      <div className="border rounded-xl overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <Coffee size={18} className="text-blue-600" />
                            Room amenities
                          </h4>
                        </div>
                        <div className="p-4 space-y-3">
                          {closetFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                              <div className="mt-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800">{feature.description}</p>
                                {feature.measurements && (
                                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <Ruler size={12} />
                                    {feature.measurements}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Room features */}
                    {(mirrorFeatures.length > 0 || deskFeatures.length > 0 || generalRoomFeatures.length > 0) && (
                      <div className="border rounded-xl overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <Wifi size={18} className="text-blue-600" />
                            Room features
                          </h4>
                        </div>
                        <div className="p-4 space-y-3">
                          {mirrorFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                              <div className="mt-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800">{feature.description}</p>
                                {feature.measurements && (
                                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <Ruler size={12} />
                                    {feature.measurements}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                          {deskFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                              <div className="mt-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800">{feature.description}</p>
                                {feature.measurements && (
                                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <Ruler size={12} />
                                    {feature.measurements}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                          {generalRoomFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                              <div className="mt-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-800">{feature.description}</p>
                                {feature.measurements && (
                                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                    <Ruler size={12} />
                                    {feature.measurements}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Entrance Section */}
                {expandedSection === 'entrance' && (
                  <div className="space-y-4">
                    {entranceImages.length > 0 && (
                      <div className="mb-4">
                        <div className="grid grid-cols-4 gap-2">
                          {entranceImages.slice(0, 4).map((img, idx) => (
                            <div 
                              key={idx} 
                              className="relative h-20 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                              onClick={() => openImageGallery(entranceImages, "Entrance Photos")}
                            >
                              <Image
                                src={img}
                                alt={`Entrance ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <DoorOpen size={18} className="text-blue-600" />
                          Entrance
                        </h4>
                      </div>
                      <div className="p-4 space-y-3">
                        {entranceFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800 font-medium">{feature.title}</p>
                              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                              {feature.measurements && (
                                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                                  <Ruler size={12} />
                                  {feature.measurements}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Restaurant Section */}
                {expandedSection === 'restaurant' && (
                  <div className="space-y-4">
                    {restaurantImages.length > 0 && (
                      <div className="mb-4">
                        <div className="grid grid-cols-4 gap-2">
                          {restaurantImages.slice(0, 4).map((img, idx) => (
                            <div 
                              key={idx} 
                              className="relative h-20 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                              onClick={() => openImageGallery(restaurantImages, "Restaurant Photos")}
                            >
                              <Image
                                src={img}
                                alt={`Restaurant ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Users size={18} className="text-blue-600" />
                          Restaurant
                        </h4>
                      </div>
                      <div className="p-4 space-y-3">
                        {restaurantFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 pb-2 border-b last:border-0">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800 font-medium">{feature.title}</p>
                              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                              {feature.measurements && (
                                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                                  <Ruler size={12} />
                                  {feature.measurements}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Some policies note */}
                <p className="text-sm text-gray-500 italic mt-6 pt-4 border-t">
                  Some policies may have breakfast or meal plans included. Please contact hotel for details.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setShowAllFeatures(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-bold transition"
                  >
                    Close
                  </button>
                  <a
                    href={`/hotels/${hotel.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-bold transition"
                  >
                    View Hotel Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
          <button
            title="Close"
            onClick={closeImageGallery}
            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full z-10"
          >
            <X size={32} />
          </button>
          
          {imageGallery.length > 1 && (
            <>
              <button
                title="Previous"
                onClick={() => navigateGallery('prev')}
                className="absolute left-4 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                title="Next"
                onClick={() => navigateGallery('next')}
                className="absolute right-4 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt={galleryTitle}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
            {galleryTitle} - {imageGallery.indexOf(selectedImage) + 1} / {imageGallery.length}
          </div>
        </div>
      )}
    </>
  );
}