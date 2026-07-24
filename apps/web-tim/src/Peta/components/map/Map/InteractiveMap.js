"use client";

import { useEffect, useState, useCallback } from "react";
import { MapContainer } from "react-leaflet";
import LocationSelector from "../../Effect/LocationSelector";
import MapGuts from "./MapGuts";
import { MorotaiSidePanel } from "../../PulauMorotai";
import PhotoModal from "../../Effect/PhotoModal";
import SaberLoadingScreen from "@/src/Loading/SaberLoadingScreen";

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

    const handleSelectLocation = useCallback((locOrId) => {
        if (typeof locOrId === "string") {
            if (locOrId === "morotai_island") {
                setActiveLocation(islandTarget);
            } else {
                const found = kknLocations.find(l => l.id === locOrId);
                if (found) setActiveLocation(found);
            }
        } else {
            setActiveLocation(locOrId);
        }
    }, [kknLocations, islandTarget]);

    const handleResetOverview = useCallback(() => {
        setActiveLocation(null);
    }, []);

    const handleIntroComplete = useCallback(() => {
        setIntroComplete(true);
    }, []);

    if (!isClient) {
        return <SaberLoadingScreen message="PETA INTERAKTIF MOROTAI" subMessage="Memuat sistem navigasi geospasial & klaster pengabdian..." />;
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
