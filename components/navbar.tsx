"use client";

import { useEffect, useState } from "react";
import { UserIcon } from "./icons";

const LINKS = [
  { href: "#beranda", label: "Home" },
  { href: "#arsitektur", label: "Properties" },
  { href: "#arsitektur", label: "Architecture" },
  { href: "#kenyamanan", label: "Facilities" },
  { href: "#material", label: "About" },
  { href: "#kontak", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-cream"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#beranda" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-xs text-cream">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[11px] font-semibold tracking-[0.25em] text-ink">
              SANCTUM
            </span>
            <span className="block text-[8px] tracking-[0.28em] text-bronze">
              ESTATES &amp; ARCHITECTURE
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[10px] font-medium tracking-[0.14em] text-ink/70 transition hover:text-bronze"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#kontak"
            className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[10px] font-medium tracking-[0.14em] text-cream transition hover:bg-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            KONSULTASI
            <span aria-hidden>→</span>
          </a>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink/70">
            <UserIcon className="h-3.5 w-3.5" />
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <ul className="space-y-1 px-6 py-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm tracking-[0.14em] text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
