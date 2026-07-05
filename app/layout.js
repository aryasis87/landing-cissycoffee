import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dmserif = DM_Serif_Display({ variable: "--font-dmserif", subsets: ["latin"], weight: "400" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata = {
  title: "Cissy Coffee — Premium Coffee Experience",
  description: "Cissy Coffee: biji kopi pilihan, racikan barista berpengalaman, dan suasana cozy yang instagrammable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${dmserif.variable} ${jakarta.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
