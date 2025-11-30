import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "FUTURA | WORK LESS, LIVE MORE",
  description:
    "FUTURA: consultora de digitalización, automatización e inteligencia artificial aplicada para PYMES. Convertimos papel, WhatsApp y sistemas dispersos en flujos digitales inteligentes, medibles y listos para crecer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
