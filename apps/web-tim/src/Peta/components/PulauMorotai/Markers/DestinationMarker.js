import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const buildDestinationIcon = (dest) => {
    return L.divIcon({
        className: "dest-marker-wrap",
        html: `
            <div class="dest-marker">
                <div class="dest-marker__icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                </div>
                <span class="dest-marker__label">${dest.name}</span>
            </div>
        `,
        iconSize: [140, 40],
        iconAnchor: [20, 40]
    });
};

export default function DestinationMarker({ destination, onSelect }) {
    const map = useMap();
    useEffect(() => {
        const marker = L.marker([destination.lat, destination.lng], { icon: buildDestinationIcon(destination) });
        marker.on("click", () => {
            map.flyTo([destination.lat, destination.lng], destination.zoom || 16, {
                animate: true,
                duration: 2.2,
                easeLinearity: 0.25
            });
            onSelect(destination);
        });
        marker.addTo(map);
        return () => {
            map.removeLayer(marker);
        };
    }, [destination, map, onSelect]);
    return null;
}
