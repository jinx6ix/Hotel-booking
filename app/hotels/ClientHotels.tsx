// app/hotels/ClientHotels.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HotelCard } from "@/components/hotel-card";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  ShoppingBag,
  Tag,
  Percent,
  Star,
  CreditCard,
  Shield,
  Clock,
  Gift,
} from "lucide-react";

interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  description: string;
  price?: number;
  accessible?: boolean;
}

interface ClientHotelsProps {
  hotels: Hotel[];
}

export default function ClientHotels({ hotels }: ClientHotelsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [accessibilityFilter, setAccessibilityFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"default" | "price-low" | "price-high">("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const HOTELS_PER_PAGE = 12;
  const locations = Array.from(new Set(hotels.map(h => h.location))).sort();

  // Calculate price range for display
  const prices = hotels.filter(h => h.price).map(h => h.price as number);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(h =>
        h.name.toLowerCase().includes(term) ||
        h.location.toLowerCase().includes(term) ||
        h.description.toLowerCase().includes(term)
      );
    }

    if (locationFilter !== "all") {
      result = result.filter(h => h.location === locationFilter);
    }

    if (accessibilityFilter === "accessible") {
      result = result.filter(h => h.accessible === true);
    } else if (accessibilityFilter === "non-accessible") {
      result = result.filter(h => h.accessible !== true);
    }

    if (sortOrder === "price-low") {
      result = result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOrder === "price-high") {
      result = result.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return result;
  }, [hotels, searchTerm, locationFilter, accessibilityFilter, sortOrder]);

  const totalPages = Math.ceil(filteredHotels.length / HOTELS_PER_PAGE);
  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * HOTELS_PER_PAGE,
    currentPage * HOTELS_PER_PAGE
  );

  const goToPage = (page: number, event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setLocationFilter("all");
    setAccessibilityFilter("all");
    setSortOrder("default");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== "" || locationFilter !== "all" || accessibilityFilter !== "all" || sortOrder !== "default";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* H2 - Hotels Grid Title with Shopping Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              All Hotels in Kenya
            </h2>
            <p className="text-gray-500 mt-1">{hotels.length} properties available</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
            <Tag className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-gray-700">Price range: ${minPrice} - ${maxPrice}</span>
            <span className="text-xs text-gray-500">| Avg: ${avgPrice}</span>
          </div>
        </div>

        <h3 className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Browse our complete collection of 120+ handpicked hotels, safari lodges, and resorts across Kenya
        </h3>

        {/* Shopping Promo Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-4 mb-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6" />
              <div>
                <p className="font-bold">Special Offer: Book 7+ nights and get 1 night FREE!</p>
                <p className="text-sm opacity-90">Plus complimentary room upgrade & safari activity</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Percent className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}
            aria-label="Grid view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}
            aria-label="List view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-medium"
          >
            <Filter size={20} />
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters Section */}
        <div className={`mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search hotels in Kenya by name, location..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
              />
            </div>

            <select
              title='Select Location'
              value={locationFilter}
              onChange={(e) => { setLocationFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
            >
              <option value="all">All Locations in Kenya ({hotels.length})</option>
              {locations.map((loc) => {
                const count = hotels.filter(h => h.location === loc).length;
                return <option key={loc} value={loc}>Hotels in {loc} ({count})</option>;
              })}
            </select>

            <select
              title='Select Accessibility'
              value={accessibilityFilter}
              onChange={(e) => { setAccessibilityFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
            >
              <option value="all">All Hotels</option>
              <option value="accessible">♿ Accessible Hotels Only</option>
              <option value="non-accessible">Non-Accessible Hotels</option>
            </select>

            <select
              title='Select Sort Order'
              value={sortOrder}
              onChange={(e) => { setSortOrder(e.target.value as any); setCurrentPage(1); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
            >
              <option value="default">Sort: Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Search: {searchTerm}
                  <button title='Clear Search' onClick={() => setSearchTerm("")}><X size={14} /></button>
                </span>
              )}
              {locationFilter !== "all" && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Location: {locationFilter}
                  <button title='Clear Location' onClick={() => setLocationFilter("all")}><X size={14} /></button>
                </span>
              )}
              {accessibilityFilter !== "all" && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  {accessibilityFilter === "accessible" ? "♿ Accessible Only" : "Non-Accessible"}
                  <button title='Clear Accessibility' onClick={() => setAccessibilityFilter("all")}><X size={14} /></button>
                </span>
              )}
              <button onClick={clearAllFilters} className="text-sm text-orange-600 hover:text-orange-700 font-medium">Clear all</button>
            </div>
          )}
        </div>

        {/* Results count with shopping info */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold">{filteredHotels.length}</span> hotel{filteredHotels.length !== 1 ? "s" : ""} in Kenya
            {hasActiveFilters && " matching your criteria"}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CreditCard className="w-4 h-4" />
            <span>Secure booking • Best rate guarantee</span>
          </div>
        </div>

        {/* Hotel Grid/List */}
        {paginatedHotels.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-9">
              {paginatedHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {paginatedHotels.map((hotel) => (
                <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg">{hotel.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><MapPinIcon className="w-3 h-3" /> {hotel.location}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{hotel.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        {hotel.accessible && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">♿ Accessible</span>}
                      </div>
                      <div className="text-right">
                        {hotel.price && <p className="font-bold text-orange-600">${hotel.price}<span className="text-xs text-gray-500">/night</span></p>}
                        <p className="text-xs text-gray-400">Best rate guaranteed</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl text-gray-300 mb-6">🏨</div>
            <h4 className="text-2xl font-bold text-gray-700 mb-4">No hotels found</h4>
            <p className="text-gray-600 mb-8">We couldn't find any hotels in Kenya matching your current filters.</p>
            <button onClick={clearAllFilters} className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition">
              View All Hotels in Kenya
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-4 mt-16">
            <button onClick={(e) => goToPage(currentPage - 1, e)} disabled={currentPage === 1} className="px-6 py-3 bg-white border border-gray-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center gap-2">
              <ChevronLeft size={18} /> Previous
            </button>
            <span className="font-medium text-gray-700 px-4">Page <span className="font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span></span>
            <button onClick={(e) => goToPage(currentPage + 1, e)} disabled={currentPage === totalPages} className="px-6 py-3 bg-white border border-gray-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center gap-2">
              Next <ChevronRight size={18} />
            </button>
          </nav>
        )}

        {/* Help CTA with Shopping Bag */}
        <div className="text-center mt-16">
          <Link href="/contact" className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg">
            <ShoppingBag className="w-6 h-6" />
            Need Help Finding the Perfect Hotel in Kenya?
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Secure Booking</span>
          <span className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> No Hidden Fees</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Customer Support</span>
          <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> Best Price Guarantee</span>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon(props: any) {
  return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}