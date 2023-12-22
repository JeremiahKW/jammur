import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const center = {
  lat: 40.440624, // default latitude
  lng: -79.995888, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
