// components/search-bar.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { locations } from '@/lib/data';

export function SearchBar() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0
  });
  
  const [dateError, setDateError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get today's date in YYYY-MM-DD format for min date attributes
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate max date (1 year from today)
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  const maxDate = nextYear.toISOString().split('T')[0];

  // Validate dates whenever they change
  useEffect(() => {
    if (searchParams.checkIn && searchParams.checkOut) {
      if (searchParams.checkOut < searchParams.checkIn) {
        setDateError('Check-out date must be after check-in date');
      } else {
        setDateError('');
      }
    } else {
      setDateError('');
    }
  }, [searchParams.checkIn, searchParams.checkOut]);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => ({ ...prev, destination: e.target.value }));
  };

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prev => ({ ...prev, checkIn: e.target.value }));
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prev => ({ ...prev, checkOut: e.target.value }));
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const match = value.match(/(\d+)\s*Adults?,\s*(\d+)\s*Children?/);
    if (match) {
      setSearchParams(prev => ({
        ...prev,
        adults: parseInt(match[1]),
        children: parseInt(match[2])
      }));
    }
  };

  const handleSearch = async () => {
    // Validate
    if (searchParams.checkIn && searchParams.checkOut && searchParams.checkOut < searchParams.checkIn) {
      setDateError('Check-out date must be after check-in date');
      return;
    }

    setIsLoading(true);

    // Build query string
    const params = new URLSearchParams();
    if (searchParams.destination) params.append('destination', searchParams.destination);
    if (searchParams.checkIn) params.append('checkIn', searchParams.checkIn);
    if (searchParams.checkOut) params.append('checkOut', searchParams.checkOut);
    if (searchParams.adults) params.append('adults', searchParams.adults.toString());
    if (searchParams.children) params.append('children', searchParams.children.toString());

    // Navigate to search results
    router.push(`/hotels/search?${params.toString()}`);
  };

  // Generate guest options dynamically
  const guestOptions = [];
  for (let adults = 1; adults <= 6; adults++) {
    for (let children = 0; children <= 4; children++) {
      if (adults === 1 && children === 0) {
        guestOptions.push({
          value: `1 Adult, 0 Children`,
          label: `1 Adult`
        });
      } else {
        guestOptions.push({
          value: `${adults} Adults, ${children} Children`,
          label: `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`
        });
      }
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
      <div className="grid md:grid-cols-4 gap-4">
        {/* Destination */}
        <div className="relative">
          <label htmlFor="destination" className="block text-sm font-semibold text-gray-800 mb-2">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <select
              id="destination"
              value={searchParams.destination}
              onChange={handleDestinationChange}
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none bg-white text-gray-800 font-medium"
            >
              <option value="">All Safari Destinations</option>
              {locations.map(location => (
                <option key={location.id} value={location.slug}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Check-in */}
        <div className="relative">
          <label htmlFor="check-in" className="block text-sm font-semibold text-gray-800 mb-2">
            Check-in
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              id="check-in"
              type="date"
              min={today}
              max={maxDate}
              value={searchParams.checkIn}
              onChange={handleCheckInChange}
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-800 font-medium"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="relative">
          <label htmlFor="check-out" className="block text-sm font-semibold text-gray-800 mb-2">
            Check-out
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              id="check-out"
              type="date"
              min={searchParams.checkIn || today}
              max={maxDate}
              value={searchParams.checkOut}
              onChange={handleCheckOutChange}
              className={`w-full pl-10 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-800 font-medium ${
                dateError ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
            />
          </div>
          {dateError && (
            <p className="text-red-500 text-xs mt-1 absolute">{dateError}</p>
          )}
        </div>

        {/* Guests */}
        <div className="relative">
          <label htmlFor="guests" className="block text-sm font-semibold text-gray-800 mb-2">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <select
              id="guests"
              value={`${searchParams.adults} Adults, ${searchParams.children} Children`}
              onChange={handleGuestsChange}
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none bg-white text-gray-800 font-medium"
            >
              {guestOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Error summary */}
      {dateError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm flex items-center gap-2">
            <span className="font-bold">⚠</span>
            {dateError}
          </p>
        </div>
      )}

      {/* Search button */}
      <div className="mt-6 flex justify-center md:justify-end">
        <button
          onClick={handleSearch}
          disabled={isLoading || !!dateError}
          className={`
            w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg transition 
            flex items-center justify-center gap-3 shadow-lg hover:shadow-xl
            ${isLoading || dateError
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-amber-600 hover:bg-amber-700 text-white'
            }
          `}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search size={22} />
              Search Hotels & Lodges
            </>
          )}
        </button>
      </div>
    </div>
  );
}