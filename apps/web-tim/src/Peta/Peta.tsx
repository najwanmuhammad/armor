"use client";

import dynamic from "next/dynamic";
import { mapCenter, mapZoom, kknLocations, morotaiTarget } from "./data/mapData";
import { morotaiIslandTarget, morotaiDestinations } from "./components/PulauMorotai/data/morotaiData";
import SaberLoadingScreen from "@/src/Loading/SaberLoadingScreen";

const InteractiveMap = dynamic(() => import("./components/map/Map/InteractiveMap"), {
    ssr: false,
    loading: () => (
        <SaberLoadingScreen message="PETA INTERAKTIF MOROTAI" subMessage="Memuat sistem navigasi geospasial & klaster pengabdian..." />
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
