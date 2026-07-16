import Header from "@/src/Header/Header";
import Hero from "@/src/Hero/Hero";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <Hero />
      </main>
    </div>
  );
}
