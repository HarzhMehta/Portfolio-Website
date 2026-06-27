"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05080a]/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity shrink-0"
        >
          <span className="text-[#00f0ff]">{"<"}</span>
          Harsh
          <span className="text-[#d946ef]">{" />"}</span>
        </a>

        {/* Desktop Links - Centered */}
        <ul className="hidden md:flex items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="px-6 py-3 text-[16px] font-semibold tracking-wide text-gray-400 hover:text-white transition-colors rounded-xl border border-white/10 hover:border-[#00f0ff]/40 bg-white/[0.02] hover:bg-white/[0.06]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Spacer for flex balance */}
        <div className="hidden md:block w-[140px] shrink-0" />

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center text-white hover:text-[#00f0ff] transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#05080a]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            style={{ zIndex: 49 }}
            onClick={() => setOpen(false)}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ delay: i * 0.05 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <div className="flex gap-8 mt-10">
              <a href="https://github.com/HarzhMehta" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#00f0ff] transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/harsh-mehta-90933921b/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#d946ef] transition-colors">LinkedIn</a>
              <a href="https://x.com/harsh30121" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#fbff38] transition-colors">X</a>
              <a href="https://www.youtube.com/@HarzhMehta" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#ff6b35] transition-colors">YouTube</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
