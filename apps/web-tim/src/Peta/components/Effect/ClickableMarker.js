import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const buildIcon = (location) => {
    return L.divIcon({
        className: "custom-marker-wrap",
        html: `
            <div class="map-label-only">
                <span class="map-callout__text">${location.name}</span>
            </div>
        `,
        iconSize: [120, 30],
        iconAnchor: [60, 15]
    });
};

export default function ClickableMarker({ location, onSelect }) {
    const map = useMap();
    useEffect(() => {
        const marker = L.marker([location.lat, location.lng], { icon: buildIcon(location) });
        marker.on("click", () => onSelect(location));
        marker.addTo(map);
        return () => {
            map.removeLayer(marker);
        };
    }, [location, map, onSelect]);
    return null;
}
