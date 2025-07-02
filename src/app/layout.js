import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";

// ✅ Metadata for multiple favicon formats
export const metadata = {
  title: "Compare Bazaar",
  description: "Compare bazaar for your business help",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <WideDiv />
        <Footer />
      </body>
    </html>
  );
}
