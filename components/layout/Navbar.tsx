"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/50233813895?text=Hola%20FUTURA%21%20Quiero%20agendar%20un%20diagnostico%20gratuito%20%2830-45%20min%29.%20Cual%20es%20el%20siguiente%20paso%3F";

const INSTAGRAM_URL =
  "https://www.instagram.com/futura.tt?igsh=MTU4eGc2azhuZzBtbA==";

const FACEBOOK_URL =
  "https://www.facebook.com/share/1Ej8WkoULm/?mibextid=wwXIfr";

const primaryLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sectores", label: "Sectores" },
  { href: "/termometro", label: "Termómetro" },
  { href: "/wallet", label: "Wallet" },
];

const moreLinks = [
  { href: "/casos", label: "Casos de éxito" },
  { href: "/sobre-futura", label: "Sobre FUTURA" },
  { href: "/seguridad", label: "Seguridad" },
];

const allMobileLinks = [
  ...primaryLinks,
  ...moreLinks,
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0714]/80 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-9 h-9">
            <Image
              src="/Futurawhite.png"
              alt="FUTURA logo"
              fill
              sizes="36px"
              className="rounded-xl object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-white">
              FUTURA
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/35">
              WORK LESS, LIVE MORE
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Más dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              Más
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 rounded-xl liquid-glass-strong min-w-[180px] overflow-hidden"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block py-2.5 px-4 text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-1.5">
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

          <Link
            href="/contacto"
            className="apple-btn text-sm font-semibold px-5 py-2 rounded-full bg-white text-[#0c0714]"
          >
            Agendar diagnóstico
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-white/[0.08] text-white/70 hover:text-white transition-colors"
          aria-label="Abrir menú"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#0c0714]/95 backdrop-blur-2xl"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              {allMobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-white/60 hover:text-white py-2.5 px-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="apple-btn-white block text-sm font-semibold mt-3 px-4 py-2.5 rounded-full text-center bg-white text-[#0c0714]"
              >
                Agendar diagnóstico
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
