// components/Map.tsx
'use client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultCenter = {
  lat: -1.2921,
  lng: 36.8219
};

interface MapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title: string;
  }>;
  className?: string;
}

const Map: React.FC<MapProps> = ({ 
  center = defaultCenter, 
  zoom = 10, 
  markers = [], 
  className = '' 
}) => {
  const mapStyles = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#7c93a3" }]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 2 }]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f2f2f2" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#d1d1d1" }, { visibility: "on" }]
    }
  ];

  // Create a ref to access google when available
  const mapRef = React.useRef<google.maps.Map | null>(null);

  // Function to get scaled size safely
  const getScaledSize = () => {
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
      return new window.google.maps.Size(40, 40);
    }
    return undefined;
  };

  return (
    <LoadScript 
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      loadingElement={<div className="w-full h-full bg-gray-200 animate-pulse" />}
      onLoad={() => console.log('Google Maps API loaded successfully')}
      onError={() => console.error('Failed to load Google Maps API')}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{
          styles: mapStyles,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
          gestureHandling: 'greedy'
        }}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
            icon={{
              url: '/map-marker.png',
              scaledSize: getScaledSize()
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;