import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function GoogleSatelliteLayer() {
    const map = useMap();
    useEffect(() => {
        const layer = L.tileLayer(
            "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
            {
                attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>',
                maxZoom: 21,
                updateWhenZooming: false,
                updateWhenIdle: true,
                keepBuffer: 4
            }
        );
        layer.addTo(map);
        return () => {
            map.removeLayer(layer);
        };
    }, [map]);
    return null;
}
