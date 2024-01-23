import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer";
const ws = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DigitalVoyage.agency",
  description: "Digital Voyage is a global web design and development agency based in Türkiye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ws.className}>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  );
}
