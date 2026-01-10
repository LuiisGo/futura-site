"use client";

import Link from "next/link";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

type Variant = "navbar" | "footer" | "contact";

const WHATSAPP_URL =
  "https://wa.me/50233813895?text=Hola%20FUTURA%21%20Quiero%20agendar%20un%20diagnostico%20gratuito%20%2830-45%20min%29.%20Cual%20es%20el%20siguiente%20paso%3F";

const INSTAGRAM_URL =
  "https://www.instagram.com/futura.tt?igsh=MTU4eGc2azhuZzBtbA==";

const FACEBOOK_URL =
  "https://www.facebook.com/share/1Ej8WkoULm/?mibextid=wwXIfr";

const socials = [
  { label: "WhatsApp", href: WHATSAPP_URL, icon: <SiWhatsapp size={18} /> },
  { label: "Instagram", href: INSTAGRAM_URL, icon: <FiInstagram size={18} /> },
  { label: "Facebook", href: FACEBOOK_URL, icon: <FiFacebook size={18} /> },
];

export default function SocialLinks({ variant = "footer" }: { variant?: Variant }) {
  const iconSize =
    variant === "navbar" ? "w-9 h-9" : "w-10 h-10";

  const base =
    "inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors";

  const accent =
    "text-[#362263]";

  return (
    <div className="flex items-center gap-2">
      {socials.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          className={`${base} ${iconSize}`}
        >
          <span className={accent}>{s.icon}</span>
        </Link>
      ))}
    </div>
  );
}
