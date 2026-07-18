"use client";

import { useEffect, useState, useCallback } from "react";
import { MapContainer } from "react-leaflet";
import LocationSelector from "../../Effect/LocationSelector";
import MapGuts from "./MapGuts";
import { MorotaiSidePanel } from "../../PulauMorotai";
import PhotoModal from "../../Effect/PhotoModal";

export default function InteractiveMap({ center, zoom, kknLocations, morotaiTarget, morotaiIslandTarget, morotaiDestinations }) {
    const [isClient, setIsClient] = useState(false);
    const [introComplete, setIntroComplete] = useState(false);
    const [activeLocation, setActiveLocation] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const islandTarget = morotaiIslandTarget ? {
        id: "morotai_island",
        name: "Pulau Morotai",
        ...morotaiIslandTarget
    } : null;

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSelectLocation = useCallback((loc) => {
        setActiveLocation(loc);
    }, []);

    const handleResetOverview = useCallback(() => {
        setActiveLocation(null);
    }, []);

    const handleIntroComplete = useCallback(() => {
        setIntroComplete(true);
    }, []);

    if (!isClient) {
        return (
            <div className="map-root map-fallback">
                <div className="map-fallback__card">
                    <strong>Memuat peta interaktif...</strong>
                    <div className="map-meta">
                        <span>Desa Yayasan & Desa Kolorai, Morotai</span>
                        <span>Marker akan tampil setelah halaman aktif di browser.</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="map-root">
            {/* Location Selector */}
            {introComplete && (
                <LocationSelector
                    locations={kknLocations}
                    activeId={activeLocation?.id}
                    onSelect={handleSelectLocation}
                    onReset={handleResetOverview}
                    islandTarget={islandTarget}
                    onSelectIsland={handleSelectLocation}
                />
            )}

            {/* Side Panel */}
            {introComplete && activeLocation?.id === "morotai_island" && (
                <MorotaiSidePanel />
            )}

            <MapContainer center={center} zoom={zoom} className="map-canvas" scrollWheelZoom>
                <MapGuts
                    kknLocations={kknLocations}
                    morotaiTarget={morotaiTarget}
                    morotaiDestinations={morotaiDestinations}
                    activeLocation={activeLocation}
                    introComplete={introComplete}
                    onIntroComplete={handleIntroComplete}
                    onSelectMarker={setSelectedMarker}
                />
            </MapContainer>

            {/* Photo Modal */}
            <PhotoModal location={selectedMarker} onClose={() => setSelectedMarker(null)} />
        </div>
    );
}
