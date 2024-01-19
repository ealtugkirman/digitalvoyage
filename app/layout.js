import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer";

const ws = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
