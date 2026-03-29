import Link from "next/link";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/50233813895?text=Hola%20FUTURA%21%20Quiero%20agendar%20un%20diagnostico%20gratuito%20%2830-45%20min%29.%20Cual%20es%20el%20siguiente%20paso%3F";

const INSTAGRAM_URL =
  "https://www.instagram.com/futura.tt?igsh=MTU4eGc2azhuZzBtbA==";

const FACEBOOK_URL =
  "https://www.facebook.com/share/1Ej8WkoULm/?mibextid=wwXIfr";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/Futurawhite.png"
              alt="FUTURA logo"
              fill
              sizes="32px"
              className="rounded-xl object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">FUTURA</p>
            <p className="text-xs text-white/30">
              Digitalización, automatización e IA para PYMEs.
            </p>
          </div>
        </div>

        {/* Links + Social */}
        <div className="flex flex-col md:items-end gap-3">
          <span className="text-xs text-white/25">
            © {new Date().getFullYear()} FUTURA. Todos los derechos reservados.
          </span>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/35">
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>

            <span className="hidden md:inline-block mx-1 text-white/15">·</span>

            <div className="flex items-center gap-1.5">
              {[
                { href: WHATSAPP_URL, src: "/whatsapp.png", alt: "WhatsApp" },
                { href: INSTAGRAM_URL, src: "/logo-ig.png", alt: "Instagram" },
                { href: FACEBOOK_URL, src: "/Fb-logo.png", alt: "Facebook" },
              ].map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.alt} FUTURA`}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.08] transition-all"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
