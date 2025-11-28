import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "FUTURA | WORK LESS, LIVE MORE",
  description:
    "FUTURA: consultora de automatización y ERP-lite para PYMES. Conectamos tus Excel, WhatsApp y sistemas dispersos en flujos simples, medibles y listos para crecer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
