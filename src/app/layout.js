import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main>{children}</main>

        <WideDiv />
        <Footer />
      </body>
    </html>
  );
}
