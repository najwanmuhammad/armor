import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function CoordinateHelper({ onFindCoord }) {
    const map = useMap();
    useEffect(() => {
        const handleContextMenu = (e) => {
            const lat = e.latlng.lat.toFixed(5);
            const lng = e.latlng.lng.toFixed(5);
            onFindCoord(`[${lat}, ${lng}]`);
        };
        map.on("contextmenu", handleContextMenu);
        return () => {
            map.off("contextmenu", handleContextMenu);
        };
    }, [map, onFindCoord]);
    return null;
}
