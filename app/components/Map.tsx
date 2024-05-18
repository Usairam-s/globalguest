"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountries } from "../lib/getCountries";
import { LatLng, icon, marker } from "leaflet";
const ICON = icon({
  iconUrl:
    "https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-map-location-marker.png",
  iconSize: [50, 50],
});

function Map({ locationValue }: { locationValue: string }) {
  const { getCountryByValue } = useCountries();
  const Latlng = getCountryByValue(locationValue)?.latLang;
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="z-0 relative h-[50vh] rounded-lg"
      center={Latlng ?? [51.505, -0.09]}
      zoom={8}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={Latlng ?? [51.505, -0.09]} icon={ICON} />
    </MapContainer>
  );
}

export default Map;
