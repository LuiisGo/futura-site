import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";
import PageTransition from "../components/layout/PageTransition";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://futuratt.com"),
  title: {
    default:
      "FUTURA | Digitalización y Automatización para PYMEs en Guatemala",
    template: "%s | FUTURA Guatemala",
  },
  description:
    "Digitalizamos y automatizamos la operación de tu PYME: inventarios, ventas, WhatsApp bots, dashboards y ERP-lite. Sin ERP caro. Diagnóstico gratis 30 min. Guatemala y Centroamérica.",
  keywords: [
    "digitalización empresas Guatemala",
    "automatización PYME Guatemala",
    "ERP Guatemala PYME",
    "chatbot WhatsApp empresas",
    "n8n Guatemala",
    "digitalización agroindustria",
    "automatización nocode",
    "sistema digital PYME",
    "digitalización Centroamérica",
    "consultoría digitalización Guatemala",
  ],
  authors: [
    { name: "Roberto Marroquín", url: "https://futuratt.com/sobre-futura" },
  ],
  creator: "FUTURA",
  publisher: "FUTURA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: "https://futuratt.com",
    siteName: "FUTURA",
    title: "FUTURA | Digitalización y Automatización para PYMEs en Guatemala",
    description:
      "Digitalizamos y automatizamos la operación de tu PYME. ERP-lite, WhatsApp bots, dashboards y automatizaciones con n8n. Guatemala y Centroamérica.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FUTURA — Digitalización y Automatización para PYMEs en Guatemala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTURA | Digitalización y Automatización para PYMEs en Guatemala",
    description:
      "Digitalizamos y automatizamos la operación de tu PYME. Diagnóstico gratis.",
    images: ["/og-image.png"],
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
      <body className="min-h-screen bg-[#0c0714] text-white antialiased noise-overlay">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <Navbar />
        <main className="pt-16 md:pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ChatWidget />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RQ8K6MV86"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RQ8K6MV86');
          `}
        </Script>
      </body>
    </html>
  );
}
