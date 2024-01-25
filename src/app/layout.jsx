import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Montserrat } from "next/font/google";
import Loader from "@/elements/Loader/Loader";


const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Al Reem Island",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>

      <body className={bodyFont.className}>
        <main className="flex flex-col justify-between min-h-screen">
          <Loader aria-busy="true" aria-label="Page Loading" />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
