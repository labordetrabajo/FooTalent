

import NavBar from "../components/Navbar";
import { Bebas_Neue } from "next/font/google";
import Whatsapp from "../components/Whatsapp";
import "./../styles/globals.css";
import Footer from '../components/Footer';
export const metadata = {
  title: "Pulso365",
  description: "Consultora de negocios",
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
