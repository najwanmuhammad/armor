"use client";

import dynamic from "next/dynamic";
import { mapCenter, mapZoom, kknLocations, morotaiTarget } from "./data/mapData";
import { morotaiIslandTarget, morotaiDestinations } from "./components/PulauMorotai/data/morotaiData";

const InteractiveMap = dynamic(() => import("./components/map/Map/InteractiveMap"), {
    ssr: false,
    loading: () => (
        <div style={{
            width: "100%",
            height: "100%",
            background: "#1a2e4a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "1rem",
        }}>
            Memuat peta interaktif...
        </div>
    ),
});

export default function Peta() {
    return (
        <main className="page-shell page-shell--map-only">
            <InteractiveMap
                center={mapCenter}
                zoom={mapZoom}
                kknLocations={kknLocations}
                morotaiTarget={morotaiTarget}
                morotaiIslandTarget={morotaiIslandTarget}
                morotaiDestinations={morotaiDestinations}
            />
        </main>
    );
}
