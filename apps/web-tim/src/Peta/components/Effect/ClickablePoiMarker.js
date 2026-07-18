import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const buildPoiIcon = (poi) => {
    return L.divIcon({
        className: "poi-marker-wrap",
        html: `<div class="poi-marker-dot"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
    });
};

export default function ClickablePoiMarker({ poi, onSelect }) {
    const map = useMap();
    useEffect(() => {
        const marker = L.marker([poi.lat, poi.lng], { icon: buildPoiIcon(poi) });
        marker.on("click", () => onSelect(poi));
        marker.addTo(map);
        return () => {
            map.removeLayer(marker);
        };
    }, [poi, map, onSelect]);
    return null;
}
