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

export default function Peta({ pasirTimbulUrl }: { pasirTimbulUrl?: string }) {
    // If we have a custom URL from Sanity for Pasir Timbul, we update the static data dynamically
    if (pasirTimbulUrl) {
        morotaiDestinations.forEach(dest => {
            if (dest.title.toLowerCase().includes("pasir timbul") || dest.title.toLowerCase().includes("dodola")) {
                if (dest.heroImage === "/images/pasir_timbul.jpg") dest.heroImage = pasirTimbulUrl;
                if (dest.gallery) {
                    dest.gallery = dest.gallery.map(img => img === "/images/pasir_timbul.jpg" ? pasirTimbulUrl : img);
                }
            }
        });
        
        morotaiIslandTarget.destinations.forEach(dest => {
            if (dest.photo === "/images/pasir_timbul.jpg") dest.photo = pasirTimbulUrl;
            if (dest.gallery) {
                dest.gallery = dest.gallery.map(img => img === "/images/pasir_timbul.jpg" ? pasirTimbulUrl : img);
            }
        });
    }

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
