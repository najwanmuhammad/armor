import localFont from "next/font/local";

/**
 * MADE TOMMY (Personal Use) — font display & body untuk website desa.
 * File .otf disimpan di public/fonts/madeTommy/.
 * Varian yang dipakai design: Light (300), Regular (400), Medium (500).
 */
export const madeTommy = localFont({
  src: [
    {
      path: "../public/fonts/madeTommy/MADE TOMMY Light_PERSONAL USE.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/madeTommy/MADE TOMMY Regular_PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/madeTommy/MADE TOMMY Medium_PERSONAL USE.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/madeTommy/MADE TOMMY Bold_PERSONAL USE.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-made-tommy",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});
