import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function AutoZoomIntro({ target, onDone }) {
    const map = useMap();
    useEffect(() => {
        if (!target) return;
        const timer = setTimeout(() => {
            map.flyTo([target.lat, target.lng], target.zoom, { animate: true, duration: 3.2, easeLinearity: 0.25 });
            map.once("moveend", () => onDone && onDone());
        }, 1200);
        return () => clearTimeout(timer);
    }, [map, target, onDone]);
    return null;
}
