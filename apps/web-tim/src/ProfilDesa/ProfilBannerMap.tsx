"use client";

import React, { useEffect } from "react";
import { MapContainer, Marker } from "react-leaflet";
import { useMap } from "react-leaflet";
import L from "leaflet";

// Google Satellite Layer
function SatelliteLayer() {
  const map = useMap();
  useEffect(() => {
    const layer = L.tileLayer(
      "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>',
        maxZoom: 21,
        updateWhenZooming: false,
        updateWhenIdle: true,
      }
    );
    layer.addTo(map);
    return () => {
      map.removeLayer(layer);
    };
  }, [map]);
  return null;
}

// Custom Marker Builder using Teak Wood Plaque Style (Tanpa Warna Warni)
const buildBannerIcon = (name: string) => {
  return L.divIcon({
    className: "banner-custom-marker",
    html: `
      <div style="display: inline-flex; align-items: center; gap: 8px; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.15) 2px, rgba(0, 0, 0, 0.15) 4px), linear-gradient(135deg, #3d2612 0%, #24160a 60%, #150d06 100%); border: 1px solid rgba(230, 184, 106, 0.65); padding: 6px 15px; border-radius: 9999px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.75), inset 0 1px 3px rgba(255, 230, 160, 0.4), inset 0 -2px 5px rgba(0, 0, 0, 0.9); color: #fdf6e9; font-size: 12px; font-weight: 800; white-space: nowrap; letter-spacing: 0.03em;">
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #ffd700; box-shadow: 0 0 8px rgba(255, 215, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.6);"></span>
        <span>${name}</span>
      </div>
    `,
    iconSize: [145, 32],
    iconAnchor: [72, 16],
  });
};

export default function ProfilBannerMap() {
  // Geser center jauh ke barat (lng 128.0380) dan utara (lat 2.1620) agar Pulau Morotai berserta ketiga markernya tergeser jauh ke KANAN dan BAWAH pas di area yang terang abis!
  const center: [number, number] = [2.1620, 128.0380];
  const zoom = 10;

  const locations = [
    { name: "Desa Kolorai", coords: [2.0555, 128.2080] as [number, number], color: "#38bdf8" },
    { name: "Desa Yayasan", coords: [2.0507, 128.2927] as [number, number], color: "#fbbf24" },
    { name: "Pulau Morotai", coords: [2.1500, 128.3000] as [number, number], color: "#a855f7" },
  ];

  return (
    <div 
      className="profil-banner-map-wrapper" 
      style={{ 
        width: "100%", 
        height: "100%", 
        position: "absolute", 
        inset: 0, 
        pointerEvents: "none",
        filter: "brightness(1.28) contrast(1.18) saturate(1.24)" 
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%", background: "#07284b", pointerEvents: "none" }}
      >
        <SatelliteLayer />
        {locations.map((loc, idx) => {
          const markerIcon = buildBannerIcon(loc.name);
          return (
            <Marker key={idx} position={loc.coords} icon={markerIcon} />
          );
        })}
      </MapContainer>
    </div>
  );
}
