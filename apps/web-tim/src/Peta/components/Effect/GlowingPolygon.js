import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function GlowingPolygon({ positions, color, glowColor }) {
    const map = useMap();
    useEffect(() => {
        if (!positions?.length) return;

        const group = L.layerGroup();

        // Layer 1: outer glow
        L.polygon(positions, {
            color: glowColor, weight: 18, opacity: 0.42,
            fill: false, className: "glow-outer"
        }).addTo(group);

        // Layer 2: inner glow
        L.polygon(positions, {
            color: color, weight: 8, opacity: 0.88,
            fill: false, className: "glow-inner"
        }).addTo(group);

        // Layer 3: crisp core line (white)
        L.polygon(positions, {
            color: "#ffffff", weight: 2.5, opacity: 1,
            fill: false, className: "glow-core"
        }).addTo(group);

        group.addTo(map);
        return () => {
            map.removeLayer(group);
        };
    }, [map, positions, color, glowColor]);

    return null;
}
