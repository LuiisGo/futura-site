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
    <footer className="border-t border-slate-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/logo-futura-deeppurple.png"
              alt="FUTURA logo"
              fill
              sizes="32px"
              className="rounded-xl object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#362263]">FUTURA</p>
            <p className="text-xs text-slate-500">
              Digitalización, automatización e IA para que tu empresa trabaje con más claridad y menos fricción.
            </p>
          </div>
        </div>

        {/* Links + Social */}
        <div className="flex flex-col md:items-end gap-3">
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} FUTURA. Todos los derechos reservados.
          </span>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <Link href="/contacto" className="hover:text-[#362263]">
              Contacto
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#362263]"
            >
              WhatsApp
            </a>

            <span className="hidden md:inline-block mx-1">•</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp FUTURA"
                title="WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram FUTURA"
                title="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              >
                <Image
                  src="/logo-ig.png"
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook FUTURA"
                title="Facebook"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              >
                <Image
                  src="/Fb-logo.png"
                  alt="Facebook"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
