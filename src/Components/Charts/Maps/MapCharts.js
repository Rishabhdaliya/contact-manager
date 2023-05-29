import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapCharts = ({ data }) => {
  console.log(data);

  const mapRef = useRef();
  const initialCenter = [38, -97];

  useEffect(() => {
    if (mapRef.current && data && data.length > 0) {
      const bounds = data.map((country) => [
        country.countryInfo.lat,
        country.countryInfo.long,
      ]);
      mapRef.current.fitBounds(bounds);
    }
  }, [data]);
  console.log(data);

  return (
    <MapContainer
      center={initialCenter}
      zoom={10}
      ref={mapRef}
      style={{ width: "100%", height: "40vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=e0xGSTelBzUKkkC2wgAM"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {data &&
        data.length > 0 &&
        data.map((item) => {
          const { countryInfo, country, active, recovered, deaths } = item;
          const { lat, long, flag } = countryInfo;

          return (
            <Marker position={[lat, long]} key={country}>
              <Popup>
                <div>
                  <h3>{country}</h3>
                  <img src={flag} alt={country} style={{ width: "100px" }} />

                  <p>Active: {active}</p>
                  <p>Recovered: {recovered}</p>
                  <p>Deaths: {deaths}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};
