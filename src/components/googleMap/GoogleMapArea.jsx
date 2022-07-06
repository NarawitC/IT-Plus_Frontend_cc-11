import { useState } from 'react';
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import { useGoogleMapContext } from '../../contexts/googleMap/googleMap';
import { GOOGLE_MAP_API_KEY } from '../../config/constants';

const containerStyle = {
  width: '500px',
  height: '500px',
  // cursor: 'copy',
};

const center = {
  lat: 13.746617,
  lng: 100.5183732,
};

function GoogleMapArea() {
  const { setGoogleMapAddress } = useGoogleMapContext();
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const handleGoogleMapClick = (e) => {
    const destination = { lat: e.latLng.lat(), lng: e.latLng.lng() };

    const geocoder = new window.google.maps.Geocoder({
      language: 'th',
    });
    const latLng = new window.google.maps.LatLng(
      destination.lat,
      destination.lng
    );
    geocoder.geocode({ latLng: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          const address = results[0].formatted_address;
          setGoogleMapAddress(address);
          console.log(address);
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={(map) => setMap(map)}
      onClick={handleGoogleMapClick}
    ></GoogleMap>
  );
}

export default GoogleMapArea;
