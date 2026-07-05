import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dmserif = DM_Serif_Display({ variable: "--font-dmserif", subsets: ["latin"], weight: "400" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"CafeOrCoffeeShop","name":"Cissy Coffee","description":"Premium coffee experience","url":"https://cissycoffee.pintuweb.com","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://cissycoffee.pintuweb.com"),
  title: "Cissy Coffee — Premium Coffee Experience",
  description: "Cissy Coffee: biji kopi pilihan, racikan barista berpengalaman, dan suasana cozy yang instagrammable.",
  applicationName: "Cissy Coffee",
  keywords: ["coffee shop", "kopi premium", "kafe", "barista", "cafe cozy"],
  authors: [{ name: "Cissy Coffee" }],
  creator: "Cissy Coffee",
  publisher: "Cissy Coffee",
  alternates: { canonical: "https://cissycoffee.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cissycoffee.pintuweb.com",
    siteName: "Cissy Coffee",
    title: "Cissy Coffee — Premium Coffee Experience",
    description: "Cissy Coffee: biji kopi pilihan, racikan barista berpengalaman, dan suasana cozy yang instagrammable.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Cissy Coffee — Premium Coffee Experience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cissy Coffee — Premium Coffee Experience",
    description: "Cissy Coffee: biji kopi pilihan, racikan barista berpengalaman, dan suasana cozy yang instagrammable.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${dmserif.variable} ${jakarta.variable} antialiased`}>
        <Navbar />
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
