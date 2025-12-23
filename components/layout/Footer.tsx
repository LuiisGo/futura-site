import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
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
              Automatización, ERP e IA para PYMES en Guatemala y LATAM.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} FUTURA. Todos los derechos reservados.
          </span>
          <span className="hidden md:inline-block mx-2">•</span>
          <div className="flex gap-3">
            <Link href="/contacto" className="hover:text-[#362263]">
              Contacto
            </Link>
            <a
              href="https://wa.me/50233813895"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#362263]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
