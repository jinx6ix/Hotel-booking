// components/accessible/AccessibilityModal.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bath, Bed, DoorOpen, Utensils, Car, Home, Accessibility,
  CheckCircle2, AlertCircle, XCircle, Ruler, Camera,
  ChevronLeft, ChevronRight, X, ArrowRight, Phone,
} from "lucide-react";
import type { Hotel } from "@/lib/accessible";

interface AccessibilityModalProps {
  hotel: Hotel;
  onClose: () => void;
}

// Status icon helper
const getStatusIcon = (status: 'available' | 'partial' | 'unavailable') => {
  switch (status) {
    case 'available':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'partial':
      return <AlertCircle className="w-5 h-5 text-amber-600" />;
    case 'unavailable':
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return null;
  }
};

// Full-screen image viewer
function ImageViewer({ 
  images, 
  initialIndex, 
  hotelName, 
  onClose 
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
          title="Close"
        >
          <X size={32} />
        </button>
        <Image
          src={images[currentIndex]}
          alt={`${hotelName} accessibility photo ${currentIndex + 1}`}
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
              title="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition"
              aria-label="Next image"
              title="Next"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// Helper to get status display
const getStatusDisplay = (status?: 'available' | 'partial' | 'unavailable') => {
  switch (status) {
    case 'available':
      return { bg: 'bg-green-100', text: 'text-green-700', icon: '✓', label: 'Available' };
    case 'partial':
      return { bg: 'bg-amber-100', text: 'text-amber-700', icon: '!', label: 'Partial' };
    case 'unavailable':
      return { bg: 'bg-red-100', text: 'text-red-700', icon: '✕', label: 'Not Available' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-700', icon: '•', label: 'Info' };
  }
};

// Helper to check if hotel has accessibility images for a category
const hasImagesForCategory = (
  images: Hotel['accessibilityImages'], 
  category: string
): boolean => {
  if (!images) return false;
  switch (category) {
    case 'bathroom': return !!(images.bathroom?.length);
    case 'room': return !!(images.room?.length);
    case 'entrance': return !!(images.entrance?.length);
    case 'restaurant': return !!(images.restaurant?.length);
    case 'parking': return !!(images.parking?.length);
    case 'common-areas': return !!(images['common-areas']?.length);
    default: return false;
  }
};

// Helper to get images for category
const getImagesForCategory = (
  images: Hotel['accessibilityImages'], 
  category: string
): string[] => {
  if (!images) return [];
  switch (category) {
    case 'bathroom': return images.bathroom || [];
    case 'room': return images.room || [];
    case 'entrance': return images.entrance || [];
    case 'restaurant': return images.restaurant || [];
    case 'parking': return images.parking || [];
    case 'common-areas': return images['common-areas'] || [];
    default: return [];
  }
};

// Helper to get accessible room count
const getAccessibleRoomCount = (hotel: Hotel): number => {
  return hotel.rooms?.filter(r => r.accessible === true).length || 0;
};

export function AccessibilityModal({ hotel, onClose }: AccessibilityModalProps) {
  const [activeTab, setActiveTab] = useState<'bathroom' | 'room' | 'entrance' | 'restaurant' | 'parking' | 'common-areas'>('bathroom');
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Reset scroll position when tab changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const tabs = [
    { key: 'bathroom' as const, label: 'Bathroom', icon: Bath },
    { key: 'room' as const, label: 'Room', icon: Bed },
    { key: 'entrance' as const, label: 'Entrance', icon: DoorOpen },
    { key: 'restaurant' as const, label: 'Restaurant', icon: Utensils },
    { key: 'parking' as const, label: 'Parking', icon: Car },
    { key: 'common-areas' as const, label: 'Common Areas', icon: Home },
  ];

  const currentFeatures = hotel.accessibilityFeatures?.filter(
    (f) => f.category === activeTab
  ) || [];

  const currentImages = getImagesForCategory(hotel.accessibilityImages, activeTab);
  const accessibleRoomCount = getAccessibleRoomCount(hotel);
  const accessibleRooms = hotel.rooms?.filter(r => r.accessible === true) || [];

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
        className="bg-white w-full max-w-6xl max-h-[92vh] md:max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed at top */}
        <div className="flex-shrink-0 px-5 py-4 md:px-6 md:py-5 border-b flex items-center justify-between bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Accessibility className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">{hotel.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs md:text-sm text-gray-600">Physical Disability Accessibility Details</p>
                {accessibleRoomCount > 0 && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {accessibleRoomCount} Accessible Room{accessibleRoomCount !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Close modal"
            title="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Tabs - Fixed below header */}
        <div 
          ref={tabsRef}
          className="flex-shrink-0 bg-white border-b shadow-sm overflow-x-auto sticky top-0 z-10"
        >
          <div className="flex min-w-max px-4 md:px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const hasContent = (
                hotel.accessibilityFeatures?.some(f => f.category === tab.key) || 
                hasImagesForCategory(hotel.accessibilityImages, tab.key)
              );
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-3.5 md:px-6 md:py-4 text-sm md:text-base font-medium border-b-4 transition-all whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                  }`}
                  aria-label={`View ${tab.label} accessibility features`}
                >
                  <Icon size={18} /> {tab.label}
                  {hasContent && activeTab !== tab.key && (
                    <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content - With independent scroll */}
        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto p-5 md:p-6 bg-gray-50"
        >
          {/* Accessible Rooms Summary */}
          {activeTab === 'room' && accessibleRooms.length > 0 && (
            <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Bed size={18} /> Accessible Room Types Available
              </h3>
              <p className="text-blue-700 text-sm mb-2">
                This hotel offers {accessibleRooms.length} accessible room type{accessibleRooms.length !== 1 ? 's' : ''}:
              </p>
              <div className="flex flex-wrap gap-2">
                {accessibleRooms.map((room, idx) => (
                  <span key={idx} className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                    {room.type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Photos Section */}
          {currentImages.length > 0 && (
            <div className="mb-8 md:mb-10">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Camera size={20} /> Accessibility Photos - {tabs.find(t => t.key === activeTab)?.label}
              </h3>
              <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div 
                  className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer relative group"
                  onClick={() => openViewer(0)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo 1 of ${currentImages.length}`}
                  title="Click to enlarge"
                >
                  <Image
                    src={currentImages[0]}
                    alt={`${activeTab} accessibility photo 1 at ${hotel.name}`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm">Click to enlarge</span>
                  </div>
                </div>
                {currentImages.length >= 2 && (
                  <div 
                    className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer relative group"
                    onClick={() => openViewer(1)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo 2 of ${currentImages.length}`}
                    title="Click to enlarge"
                  >
                    <Image
                      src={currentImages[1]}
                      alt={`${activeTab} accessibility photo 2 at ${hotel.name}`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition"
                    />
                    {currentImages.length > 2 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/70 transition">
                        <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                          +{currentImages.length - 2} more
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" /> Detailed Accessibility Features
            </h3>
            {currentFeatures.length > 0 ? (
              currentFeatures.map((feature, index) => {
                const statusDisplay = getStatusDisplay(feature.status);
                // Check if feature has details with items
                const hasDetails = feature.details && feature.details.items && feature.details.items.length > 0;
                return (
                  <div
                    key={feature.id || index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <div className="p-5 md:p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 mt-1 w-10 h-10 rounded-full ${statusDisplay.bg} flex items-center justify-center text-xl font-bold ${statusDisplay.text}`}>
                          {statusDisplay.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h4 className="font-bold text-base md:text-lg text-gray-900">{feature.title}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusDisplay.bg} ${statusDisplay.text}`}>
                              {statusDisplay.label}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base">{feature.description}</p>
                          {feature.measurements && (
                            <div className="mt-3 flex items-center gap-2 text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-flex">
                              <Ruler size={14} /> {feature.measurements}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {hasDetails && (
                      <div className="p-5 md:p-6 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {feature.details!.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="shrink-0 mt-0.5">
                                {getStatusIcon(item.status as 'available' | 'partial' | 'unavailable')}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-800 text-sm">{item.label}</p>
                                <p className="text-gray-600 text-xs mt-0.5">{item.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <Accessibility className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 text-sm md:text-base">
                  No detailed accessibility information available for {tabs.find(t => t.key === activeTab)?.label.toLowerCase()}.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Please check other categories or contact us for more details.
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-5 bg-white rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Phone size={18} className="text-blue-600" /> Need More Information?
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Our team can provide additional details about accessibility features at this property.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contact?hotel=${encodeURIComponent(hotel.name)}&subject=Accessibility%20Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Contact Accessibility Team
                <ArrowRight size={14} />
              </Link>
              <Link
                href={`/hotels/${hotel.id}`}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                View Hotel Details
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="flex-shrink-0 px-5 py-3 md:px-6 md:py-4 border-t bg-gray-50 text-center text-xs md:text-sm text-gray-500 flex items-center justify-between">
          <span>All measurements verified on-site</span>
          <span>Last updated: March 2026</span>
        </div>
      </div>

      {/* Image viewer overlay */}
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