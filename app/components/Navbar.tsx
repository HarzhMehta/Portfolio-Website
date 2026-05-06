"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md border-b-3 border-white neo-shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-black tracking-tight">
          <span className="text-[#DDFF00]">{"<"}</span>
          Harsh
          <span className="text-[#00FFFF]">{" />"}</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="neo-btn block px-5 py-2 text-sm font-bold uppercase tracking-widest bg-transparent text-white hover:bg-[#DDFF00] hover:text-black"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden neo-btn p-2 bg-transparent text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 49 }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="text-3xl sm:text-4xl font-black uppercase tracking-widest text-white hover:text-[#DDFF00] transition-colors"
          >
            {label}
          </a>
        ))}
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/HarzhMehta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] text-lg font-bold uppercase">GitHub</a>
          <a href="https://www.linkedin.com/in/harsh-mehta-90933921b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] text-lg font-bold uppercase">LinkedIn</a>
          <a href="https://www.youtube.com/@HarzhMehta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] text-lg font-bold uppercase">YouTube</a>
        </div>
      </div>
    </nav>
  );
}
