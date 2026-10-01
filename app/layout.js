import { Caveat, DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const dmserif = DM_Serif_Display({ variable: "--font-dmserif", subsets: ["latin"], weight: "400" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["500", "700"] });

const SITE = "https://landing-cissycoffee.vercel.app";
const JUDUL = "Cissy Coffee — Kedai Kopi dengan Papan Menu Kapur";
const DESKRIPSI = "Cissy Coffee, kedai kopi di Malang sejak 2019: biji Indonesia yang disangrai sendiri, papan menu yang ditulis ulang setiap pagi, dan kopi untuk acara.";

const __jsonld = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Cissy Coffee",
  description: DESKRIPSI,
  url: SITE,
  servesCuisine: "Kopi",
  priceRange: "Rp18.000–Rp32.000",
  address: { "@type": "PostalAddress", streetAddress: "Jl. Kenari Raya No. 27", addressLocality: "Malang", addressCountry: "ID" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "08:00", closes: "23:00" },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: JUDUL, template: "%s — Cissy Coffee" },
  description: DESKRIPSI,
  applicationName: "Cissy Coffee",
  keywords: ["kedai kopi Malang", "kopi Indonesia", "seduh manual", "kopi untuk acara", "kelas seduh"],
  authors: [{ name: "Cissy Coffee" }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE,
    siteName: "Cissy Coffee",
    title: JUDUL,
    description: DESKRIPSI,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: JUDUL }],
  },
  twitter: { card: "summary_large_image", title: JUDUL, description: DESKRIPSI, images: ["/og.jpg"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${dmserif.variable} ${jakarta.variable} ${caveat.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-roast focus:px-4 focus:py-2 focus:text-crema">Lompat ke konten</a>
        <Navbar />
        <div id="konten">{children}</div>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
      </body>
    </html>
  );
}
