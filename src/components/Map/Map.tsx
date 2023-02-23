import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../utils/fix-map-icon';
import './Map.css';

// 54.35166163141359, 18.659263810949092;
export const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[54.35, 18.65]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[54.35, 18.65]}>
          <Popup>Popup</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
