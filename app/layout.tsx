import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "FUTURA | Digitalización y automatización con IA para PYMEs — Guatemala",
  description:
    "FUTURA digitaliza y automatiza los procesos de tu empresa usando IA y herramientas nocode. Desde WhatsApp y Excel hasta un sistema ordenado. Para PYMEs en Guatemala y Centroamérica. Diagnóstico gratuito.",
  keywords: [
    "automatización de procesos Guatemala",
    "digitalización pymes centroamerica",
    "ERP lite Guatemala",
    "automatización nocode Guatemala",
    "n8n Guatemala",
    "sistema de inventarios pymes Guatemala",
    "chatbot WhatsApp empresas Guatemala",
    "digitalización empresas Guatemala",
    "automatización empresas centroamerica",
  ],
  openGraph: {
    title: "FUTURA | Digitalización y automatización con IA para PYMEs",
    description:
      "Digitalizamos y automatizamos tu operación. Sin ERP gigante, sin código. Para PYMEs en Guatemala y Centroamérica. Diagnóstico gratuito.",
    url: "https://futuratt.com",
    siteName: "FUTURA",
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTURA | Digitalización y automatización con IA para PYMEs",
    description:
      "Digitalizamos y automatizamos tu operación. Para PYMEs en Guatemala y Centroamérica.",
  },
  alternates: {
    canonical: "https://futuratt.com",
  },
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
