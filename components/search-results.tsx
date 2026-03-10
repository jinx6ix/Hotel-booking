// components/search-results.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { hotels } from '@/lib/data';
import { locations } from '@/lib/data';
import { Star, MapPin, Users, Filter } from 'lucide-react';

interface SearchResultsProps {
  searchParams: {
    destination?: string;
    checkIn?: string;
    checkOut?: string;
    adults?: string;
    children?: string;
  };
}

export function SearchResults({ searchParams }: SearchResultsProps) {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('rating');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  // Get destination info
  const destination = useMemo(() => {
    if (!searchParams.destination) return null;
    return locations.find(loc => loc.slug === searchParams.destination);
  }, [searchParams.destination]);

  // Parse guest counts
  const adults = parseInt(searchParams.adults || '2');
  const children = parseInt(searchParams.children || '0');
  const totalGuests = adults + children;

  // Filter hotels based on search criteria
  useEffect(() => {
    let results = [...hotels];

    // Filter by destination
    if (searchParams.destination) {
      const destLocation = locations.find(l => l.slug === searchParams.destination);
      if (destLocation) {
        results = results.filter(hotel => 
          hotel.location.toLowerCase().includes(destLocation.name.toLowerCase())
        );
      }
    }

    // Filter by guest capacity
    if (totalGuests > 0) {
      results = results.filter(hotel => 
        hotel.rooms.some(room => room.maxOccupancy >= totalGuests)
      );
    }

    // Filter by price range
    results = results.filter(hotel => 
      hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case 'price':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredHotels(results);
  }, [searchParams.destination, totalGuests, sortBy, priceRange]);

  // Calculate available rooms for the selected dates
  const getAvailableRooms = (hotel: typeof hotels[0]) => {
    // In a real app, you'd check actual availability from your booking system
    // This is a simplified version
    const availableRooms = hotel.rooms.filter(room => 
      room.available > 0 && room.maxOccupancy >= totalGuests
    );
    return availableRooms.length;
  };

  return (
    <div>
      {/* Results header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <p className="text-gray-600">
            Found <span className="font-bold text-amber-600">{filteredHotels.length}</span> hotels
            {destination && ` in ${destination.name}`}
          </p>
        </div>
        
        <div className="flex gap-3">
          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter size={18} />
            Filters
          </button>
          
          {/* Sort dropdown */}
          <select
            title="Sort by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          >
            <option value="rating">Sort by: Rating</option>
            <option value="price">Sort by: Price (Low to High)</option>
            <option value="name">Sort by: Name</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        {showFilters && (
          <div className="md:w-64 bg-white p-4 rounded-xl shadow-sm h-fit">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            
            {/* Price range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (per night)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Min"
                />
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Room type filter could go here */}
            
            <button
              onClick={() => setPriceRange([0, 2000])}
              className="text-sm text-amber-600 hover:text-amber-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Results grid */}
        <div className={`flex-1 ${showFilters ? '' : 'w-full'}`}>
          {filteredHotels.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">No hotels found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or searching for different dates.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel) => {
                const availableRooms = getAvailableRooms(hotel);
                
                return (
                  <Link
                    key={hotel.id}
                    href={`/hotel/${hotel.id}?checkIn=${searchParams.checkIn || ''}&checkOut=${searchParams.checkOut || ''}&adults=${adults}&children=${children}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={hotel.image}
                          alt={hotel.name}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                        {availableRooms === 0 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                              Sold Out
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900">{hotel.name}</h3>
                          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
                            <Star className="text-amber-400 fill-current" size={14} />
                            <span className="text-sm font-bold">{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                          <MapPin size={14} className="text-gray-400" />
                          {hotel.location}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Users size={14} />
                          <span>Up to {Math.max(...hotel.rooms.map(r => r.maxOccupancy))} guests</span>
                        </div>
                        
                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                          <div>
                            <span className="text-xl font-bold text-amber-600">${hotel.price}</span>
                            <span className="text-gray-500 text-sm">/night</span>
                          </div>
                          {availableRooms > 0 && (
                            <span className="text-xs text-green-600">
                              {availableRooms} room{availableRooms > 1 ? 's' : ''} left
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}