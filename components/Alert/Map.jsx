'use client'; // If using Next.js App Router

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // You're missing this import

function Map() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Fix icon issues - this should be inside useEffect, not used as the icon prop
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  if (!isMounted) return null;
  
  return (
    <MapContainer 
      center={[5.362536, -0.793218]} 
      zoom={13} 
      style={{ height: "370px", width: "100%", zIndex: 1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      
      />
      <Marker position={[5.362536, -0.793218]}>
        <Popup>
       Edenway Foundation
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;