import 'leaflet/dist/leaflet.css';
import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { SimpleAdEntity } from 'types';
import { SearchContext } from '../../contexts/search.context';
import '../../utils/fix-map-icon';
import './Map.css';
import { SingleAd } from './SingleAd';

// 54.35166163141359, 18.659263810949092;
export const Map = () => {
  const { search } = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAdEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/ad/search/${search}`);
      const data = await res.json();

      setAds(data);
    })();
  }, [search]);

  return (
    <div className="map">
      <MapContainer center={[54.35, 18.65]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {ads.map(ad => (
          <Marker key={ad.id} position={[ad.lat, ad.lng]}>
            <Popup>
              <SingleAd id={ad.id} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
