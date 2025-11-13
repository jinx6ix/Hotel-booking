// components/quick-booking.tsx
export function QuickBookings({ accessible = false }: { accessible?: boolean }) {
    return (
      <form className={`space-y-3 ${accessible ? 'text-white' : 'text-gray-900'}`}>
        {/* Reuse same fields, just change styling */}
        <input
          type="text"
          placeholder={accessible ? "Name (Accessibility Needs)" : "Your Name"}
          className={`w-full p-3 rounded ${accessible ? 'bg-white/20 placeholder-white/70 border-white/30' : 'bg-gray-50 border-gray-300'}`}
        />
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-3 rounded ${accessible ? 'bg-white/20 placeholder-white/70 border-white/30' : 'bg-gray-50 border-gray-300'}`}
        />
        {accessible && (
          <select className="w-full p-3 rounded bg-white/20 text-white border-white/30" title="Accessibility Needs">
            <option>Accessibility Requirement</option>
            <option>Wheelchair User</option>
            <option>Mobility Aid</option>
            <option>Hearing Impaired</option>
            <option>Visual Impaired</option>
          </select>
        )}
        <button
          className={`w-full font-bold py-3 rounded transition ${
            accessible
              ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {accessible ? "Request Accessible Quote" : "Get Quote"}
        </button>
      </form>
    )
  }