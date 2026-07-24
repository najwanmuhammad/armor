import type { Desa } from "@arungimorotai/sanity";

function toWaLink(telepon?: string) {
  if (!telepon) return undefined;
  const digits = telepon.replace(/[^0-9]/g, "").replace(/^0/, "62");
  return `https://wa.me/${digits}`;
}

function SocialCircle({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href ?? "#"}
      aria-label={label}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      style={{ display: "inline-flex", lineHeight: 0 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={label} width={48} height={48} style={{ display: "block" }} />
    </a>
  );
}

export default function Footer({ desa }: { desa: Desa | null }) {
  const nama = desa?.nama ?? "Desa Koloray";
  const kontak = desa?.kontak;
  const koordinat = desa?.koordinat;
  const alamat =
    kontak?.alamat ?? "Kec. Morotai Selatan, Kabupaten Pulau Morotai.";
  const mapsHref =
    koordinat?.lat && koordinat?.lng
      ? `https://www.google.com/maps/search/?api=1&query=${koordinat.lat},${koordinat.lng}`
      : undefined;

  return (
    <footer style={{ backgroundColor: "var(--color-night)", color: "#fff" }}>
      <div
        className="container"
        style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}
      >
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "minmax(0,1fr)",
          }}
          className="footer-grid"
        >
          {/* Kiri: info desa */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                marginBottom: "1rem",
              }}
            >
              {nama}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                opacity: 0.85,
                marginBottom: "0.75rem",
              }}
            >
              {alamat}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "1.125rem",
                lineHeight: 1.5,
                opacity: 0.8,
                maxWidth: "30rem",
                marginBottom: "1.75rem",
              }}
            >
              Portal Informasi Resmi dan Layanan Mandiri Terintegrasi{" "}
              {nama}. Mewujudkan tata kelola desa yang transparan, profesional,
              dan melayani.
            </p>

            {/* Sosial media */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                alignItems: "flex-start",
              }}
            >
              <SocialCircle
                href={kontak?.instagram}
                label="Instagram"
                icon="/icon/ig.svg"
              />
              <SocialCircle
                href={toWaLink(kontak?.telepon)}
                label="WhatsApp"
                icon="/icon/wa.svg"
              />
              <SocialCircle href={undefined} label="TikTok" icon="/icon/tt.svg" />
              <SocialCircle
                href={kontak?.facebook}
                label="Facebook"
                icon="/icon/fb.svg"
              />
            </div>
          </div>

          {/* Kanan: peta */}
          <a
            href={mapsHref ?? "#"}
            target={mapsHref ? "_blank" : undefined}
            rel={mapsHref ? "noopener noreferrer" : undefined}
            aria-label={`Lihat lokasi ${nama} di peta`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 220,
              borderRadius: 12,
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(67,123,191,0.25), transparent 60%), radial-gradient(circle at 70% 70%, rgba(196,64,52,0.2), transparent 55%)",
              color: "#fff",
              textDecoration: "none",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span style={{ fontSize: "0.95rem", opacity: 0.9 }}>
              Lihat Lokasi di Peta
            </span>
          </a>
        </div>

        {/* Divider + copyright */}
        <div
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            © 2026 | Arungi Morotai
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon/armor-white.svg"
            alt="Arungi Morotai"
            width={94}
            height={35}
            style={{ height: 32, width: "auto", opacity: 0.9 }}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr !important;
            align-items: stretch;
          }
        }
      `}</style>
    </footer>
  );
}
