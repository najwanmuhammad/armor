import { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import GoogleSatelliteLayer from "./GoogleSatelliteLayer";

import AutoZoomIntro from "../../Effect/AutoZoomIntro";
import GlowingPolygon from "../../Effect/GlowingPolygon";
import ClickableMarker from "../../Effect/ClickableMarker";
import ClickablePoiMarker from "../../Effect/ClickablePoiMarker";
import { DestinationMarker } from "../../PulauMorotai";

export default function MapGuts({
    kknLocations,
    morotaiTarget,
    morotaiDestinations,
    activeLocation,
    introComplete,
    onIntroComplete,
    onSelectMarker
}) {
    const map = useMap();
    const [currentZoom, setCurrentZoom] = useState(map.getZoom());

    useEffect(() => {
        const handleZoom = () => {
            setCurrentZoom(map.getZoom());
        };
        const handleMoveStart = () => {
            const container = map.getContainer();
            if (container) container.classList.add("leaflet-moving");
        };
        const handleMoveEnd = () => {
            const container = map.getContainer();
            if (container) container.classList.remove("leaflet-moving");
        };

        map.on("zoomend", handleZoom);
        map.on("movestart zoomstart", handleMoveStart);
        map.on("moveend zoomend", handleMoveEnd);

        return () => {
            map.off("zoomend", handleZoom);
            map.off("movestart zoomstart", handleMoveStart);
            map.off("moveend zoomend", handleMoveEnd);
        };
    }, [map]);

    // Fly to activeLocation when selected, or return to morotaiTarget overview when activeLocation is null
    useEffect(() => {
        if (!introComplete) return;
        if (activeLocation) {
            map.flyTo([activeLocation.centerLat || activeLocation.lat, activeLocation.centerLng || activeLocation.lng], activeLocation.zoom, { animate: true, duration: 2.3, easeLinearity: 0.25 });
        } else if (morotaiTarget) {
            map.flyTo([morotaiTarget.lat, morotaiTarget.lng], morotaiTarget.zoom, { animate: true, duration: 2.3, easeLinearity: 0.25 });
        }
    }, [map, activeLocation, introComplete, morotaiTarget]);

    const showPolygons = activeLocation?.id !== "morotai_island" && (currentZoom >= 13 || activeLocation !== null);

    return (
        <>
            <GoogleSatelliteLayer />

            {!introComplete && (
                <AutoZoomIntro target={morotaiTarget} onDone={onIntroComplete} />
            )}
            {showPolygons && kknLocations.map((loc) => (
                <GlowingPolygon
                    key={loc.id}
                    positions={loc.polygon}
                    color={loc.color}
                    glowColor={loc.glowColor}
                />
            ))}
            {activeLocation?.id !== "morotai_island" && kknLocations.map((loc) => (
                <ClickableMarker
                    key={loc.id}
                    location={loc}
                    onSelect={onSelectMarker}
                />
            ))}
            {activeLocation?.id !== "morotai_island" && kknLocations.map((loc) => {
                const showPois = activeLocation?.id === loc.id || currentZoom >= 16;
                if (!showPois || !loc.pois) return null;
                return loc.pois.map((poi) => (
                    <ClickablePoiMarker
                        key={poi.id}
                        poi={poi}
                        onSelect={onSelectMarker}
                    />
                ));
            })}
            {activeLocation?.id === "morotai_island" && morotaiDestinations?.map((dest) => (
                <DestinationMarker
                    key={dest.id}
                    destination={dest}
                    onSelect={onSelectMarker}
                />
            ))}
        </>
    );
}
