import "leaflet/dist/leaflet.css";
import "@/src/Peta/peta.css";
import Peta from "@/src/Peta/Peta";
import Header from "@/src/Header/Header";

export default function PetaPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "70px" }}>
        <Peta />
      </div>
    </>
  );
}
