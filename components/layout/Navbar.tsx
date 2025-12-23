"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sectores", label: "Sectores" },
  { href: "/sobre-futura", label: "Sobre FUTURA" },
  { href: "/seguridad", label: "Seguridad" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-9 h-9">
            <Image
              src="/logo-futura-gradient.png"
              alt="FUTURA logo"
              fill
              sizes="36px"
              className="rounded-xl object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-[#362263]">
              FUTURA
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
              WORK LESS, LIVE MORE
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#362263] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contacto"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-[#362263] text-white hover:bg-[#2c1a50] transition-colors shadow-sm"
          >
            Agendar diagnóstico
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
          aria-label="Abrir menú"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-700 py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold mt-2 px-4 py-2 rounded-full text-center bg-[#362263] text-white"
            >
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
