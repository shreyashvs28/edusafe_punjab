import React, { useEffect, useRef } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';

// --- Punjab State Boundary Data (GeoJSON) ---
// This data defines the shape of Punjab for the map.
const punjabGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [74.5, 32.5], [75.0, 32.5], [75.5, 32.2], [76.0, 32.0], [76.5, 31.5],
            [77.0, 31.0], [76.8, 30.5], [76.5, 30.0], [76.0, 29.8], [75.5, 29.6],
            [75.0, 29.5], [74.5, 29.5], [74.0, 29.8], [73.8, 30.5], [73.9, 31.0],
            [74.0, 31.5], [74.2, 32.0], [74.5, 32.5]
          ]
        ]
      },
      "properties": { "name": "Punjab" }
    }
  ]
};
// Note: This is a simplified polygon for demonstration. A more detailed one would have more points.

// This helper component will automatically zoom the map to fit Punjab's borders.
const FitBounds = ({ geoJsonData }) => {
    const map = useMap();
    useEffect(() => {
        if (geoJsonData) {
            const L = window.L; // Access Leaflet global
            const layer = L.geoJSON(geoJsonData);
            map.fitBounds(layer.getBounds());
        }
    }, [geoJsonData, map]);
    return null;
};

const Map = ({ category, data }) => {
  // Set a default position (Ludhiana) in case the initial data hasn't loaded yet.
  const markerPosition = data?.coordinates ? [data.coordinates.lat, data.coordinates.lon] : [30.90, 75.85]; 

  const geoJsonStyle = {
      fillColor: "#0ea5e9", // Light blue fill
      fillOpacity: 0.1,
      color: "#0284c7", // Darker blue border
      weight: 2,
  };

  return (
    <LeafletMap 
      scrollWheelZoom={true} 
      style={{ height: "100%", width: "100%" }}
      zoomControl={false} // We are controlling zoom programmatically
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* This component draws the Punjab state outline on the map. */}
      <GeoJSON data={punjabGeoJSON} style={geoJsonStyle} />
      
      {/* This component automatically fits the map view to the Punjab outline. */}
      <FitBounds geoJsonData={punjabGeoJSON} />

      {/* The Marker's position is dynamic based on the selected city's data. */}
      <Marker position={markerPosition}>
        <Popup>
          {data?.city || "Punjab"}: {category} Risk is {data?.severity || "Loading..."}.
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;

