// app/hotels/search/page.tsx
import { Suspense } from 'react';
import { SearchResults } from '@/components/search-results';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Search Safari Hotels | Jaetravel Expeditions',
  description: 'Find and book the best safari hotels in Kenya. Search by destination, dates, and guests.',
};

type SearchParams = {
    destination?: string;
    checkIn?: string;
    checkOut?: string;
  };
  
  type Props = {
    searchParams: SearchParams;
  };
  
  export default function SearchPage({ searchParams }: Props) {
    const { destination, checkIn, checkOut } = searchParams;
  
    const formattedCheckIn =
      checkIn && !isNaN(Date.parse(checkIn))
        ? new Date(checkIn).toLocaleDateString()
        : null;
  
    const formattedCheckOut =
      checkOut && !isNaN(Date.parse(checkOut))
        ? new Date(checkOut).toLocaleDateString()
        : null;
  
    return (
      <>
        <Header />
  
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Search Results
            </h1>
  
            <p className="text-gray-600 mb-8">
              {destination ? `Hotels in ${destination}` : "All Safari Destinations"}
              {formattedCheckIn && ` • ${formattedCheckIn}`}
              {formattedCheckOut && ` - ${formattedCheckOut}`}
            </p>
  
            <Suspense fallback={<SearchResultsSkeleton />}>
              <SearchResults searchParams={searchParams} />
            </Suspense>
  
          </div>
        </main>
  
        <Footer />
      </>
    );
  }

function SearchResultsSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-4 animate-pulse">
          <div className="h-48 bg-gray-200 rounded-lg mb-4" />
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      ))}
    </div>
  );
}