import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Customize as needed
  variable: '--font-quicksand',
  display: 'swap',
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
