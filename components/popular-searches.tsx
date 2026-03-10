// components/popular-searches-enhanced.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  TrendingUp, 
  Clock, 
  Star, 
  Hotel, 
  MapPin, 
  Users, 
  DollarSign,
  Flame,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { hotels, locations } from '@/lib/data';

interface TrendingTerm {
  term: string;
  icon: React.ReactNode;
  category: string;
  count: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
  lastHour: number;
}

export function PopularSearchesEnhanced() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [trendingTerms, setTrendingTerms] = useState<TrendingTerm[]>([]);
  const [timeframe, setTimeframe] = useState('day');

  useEffect(() => {
    // Generate trending data based on hotel metrics
    const terms: TrendingTerm[] = [];

    // Calculate trending destinations based on ratings and availability
    locations.forEach(loc => {
      const locationHotels = hotels.filter(h => 
        h.location.toLowerCase().includes(loc.name.toLowerCase())
      );
      
      if (locationHotels.length > 0) {
        const avgRating = locationHotels.reduce((sum, h) => sum + h.rating, 0) / locationHotels.length;
        
        // Simulate trend based on rating and availability
        let trend: 'up' | 'down' | 'stable' = 'stable';
        let trendValue = 0;
        
        if (avgRating > 4.7) {
          trend = 'up';
          trendValue = Math.floor(Math.random() * 30) + 20;
        } else if (avgRating < 4.3) {
          trend = 'down';
          trendValue = Math.floor(Math.random() * 20) + 10;
        } else {
          trendValue = Math.floor(Math.random() * 10) + 5;
        }

        terms.push({
          term: `${loc.name} safari`,
          icon: <MapPin size={14} />,
          category: 'destinations',
          count: locationHotels.length,
          trend,
          trendValue,
          lastHour: Math.floor(Math.random() * 50) + 10
        });
      }
    });

    // Luxury searches
    const luxuryHotels = hotels.filter(h => h.price > 400);
    terms.push({
      term: 'luxury safari lodges',
      icon: <Star size={14} />,
      category: 'experiences',
      count: luxuryHotels.length,
      trend: 'up',
      trendValue: 45,
      lastHour: 32
    });

    // Budget searches
    const budgetHotels = hotels.filter(h => h.price < 200);
    terms.push({
      term: 'budget safari accommodation',
      icon: <DollarSign size={14} />,
      category: 'price',
      count: budgetHotels.length,
      trend: 'up',
      trendValue: 28,
      lastHour: 24
    });

    // Accessible searches
    const accessibleHotels = hotels.filter(h => 
      h.rooms.some(r => r.accessible)
    );
    terms.push({
      term: 'wheelchair accessible safari',
      icon: <Users size={14} />,
      category: 'accessibility',
      count: accessibleHotels.length,
      trend: 'up',
      trendValue: 67,
      lastHour: 18
    });

    // Family searches
    const familyHotels = hotels.filter(h => 
      h.rooms.some(r => r.maxOccupancy >= 4)
    );
    terms.push({
      term: 'family safari hotels',
      icon: <Users size={14} />,
      category: 'experiences',
      count: familyHotels.length,
      trend: 'up',
      trendValue: 52,
      lastHour: 41
    });

    // Honeymoon searches
    terms.push({
      term: 'honeymoon safari packages',
      icon: <Star size={14} />,
      category: 'experiences',
      count: 28,
      trend: 'up',
      trendValue: 73,
      lastHour: 27
    });

    // Amenity-based searches
    const poolHotels = hotels.filter(h => h.amenities.includes('Pool'));
    terms.push({
      term: 'hotels with swimming pool',
      icon: <Hotel size={14} />,
      category: 'amenities',
      count: poolHotels.length,
      trend: 'stable',
      trendValue: 12,
      lastHour: 33
    });

    const spaHotels = hotels.filter(h => h.amenities.includes('Spa'));
    terms.push({
      term: 'safari lodges with spa',
      icon: <Hotel size={14} />,
      category: 'amenities',
      count: spaHotels.length,
      trend: 'up',
      trendValue: 34,
      lastHour: 19
    });

    // Sort by trending value
    terms.sort((a, b) => b.trendValue - a.trendValue);
    setTrendingTerms(terms);
  }, []);

  const categories = [
    { id: 'all', name: 'All Trends', icon: <TrendingUp size={16} /> },
    { id: 'destinations', name: 'Destinations', icon: <MapPin size={16} /> },
    { id: 'experiences', name: 'Experiences', icon: <Star size={16} /> },
    { id: 'amenities', name: 'Amenities', icon: <Hotel size={16} /> },
    { id: 'price', name: 'Price Range', icon: <DollarSign size={16} /> },
    { id: 'accessibility', name: 'Accessible', icon: <Users size={16} /> }
  ];

  const filteredTerms = activeCategory === 'all'
    ? trendingTerms
    : trendingTerms.filter(term => term.category === activeCategory);

  const getTrendIcon = (trend: string, _trendValue: number) => {
    if (trend === 'up') return <ArrowUp size={14} className="text-green-500" />;
    if (trend === 'down') return <ArrowDown size={14} className="text-red-500" />;
    return <Minus size={14} className="text-gray-400" />;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="text-amber-500" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Trending Searches</h2>
          </div>
          <p className="text-lg text-gray-600">Most popular safari hotel searches right now</p>
        </div>

        {/* Timeframe selector */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {['hour', 'day', 'week'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium capitalize transition
                  ${timeframe === tf 
                    ? 'bg-white shadow-sm text-amber-600' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {tf === 'hour' ? 'Past Hour' : tf === 'day' ? 'Past 24 Hours' : 'This Week'}
              </button>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }
              `}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Trending grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((term, i) => (
            <button
              key={i}
              onClick={() => router.push(`/hotels/search?q=${encodeURIComponent(term.term)}`)}
              className="group bg-white hover:bg-amber-50 p-4 rounded-xl border border-gray-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-md text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-amber-100 rounded-lg text-amber-700 group-hover:bg-amber-200 transition">
                    {term.icon}
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-amber-700 transition">
                      {term.term}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {term.count} properties available
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                  {getTrendIcon(term.trend, term.trendValue)}
                  <span className={`
                    text-xs font-medium
                    ${term.trend === 'up' ? 'text-green-600' : 
                      term.trend === 'down' ? 'text-red-600' : 'text-gray-600'}
                  `}>
                    {term.trendValue}%
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {term.lastHour} searches in last hour
                </span>
                <span className="text-amber-600 group-hover:text-amber-700 font-medium">
                  Search Now →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Real-time stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 p-4 bg-amber-50 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">1,247+</div>
            <div className="text-sm text-gray-600">Verified Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">200+</div>
            <div className="text-sm text-gray-600">Properties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">4.8★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}