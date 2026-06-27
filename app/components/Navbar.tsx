"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

const MOBILE_SOCIALS = [
  { label: "GitHub", href: "https://github.com/HarzhMehta", color: "#00f0ff" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-mehta-90933921b/", color: "#d946ef" },
  { label: "X", href: "https://x.com/harsh30121", color: "#fbff38" },
  { label: "YouTube", href: "https://www.youtube.com/@HarzhMehta", color: "#ff6b35" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 z-[100] bg-[#05080a]/97 backdrop-blur-2xl flex flex-col items-center justify-center px-6 overflow-y-auto"
          onClick={closeMenu}
        >
          <nav
            className="flex flex-col items-center gap-6 sm:gap-8 py-24"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-300 hover:text-white transition-colors text-center"
              >
                {label}
              </motion.a>
            ))}

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 pt-8 border-t border-white/[0.06] w-full max-w-xs">
              {MOBILE_SOCIALS.map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-widest transition-colors hover:opacity-80"
                  style={{ color }}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 ${
          scrolled || open
            ? "bg-[#05080a]/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl md:text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity shrink-0"
          >
            <span className="text-[#00f0ff]">{"<"}</span>
            Harsh
            <span className="text-[#d946ef]">{" />"}</span>
          </a>

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

          <div className="hidden md:block w-[140px] shrink-0" />

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[120] w-10 h-10 flex items-center justify-center text-white hover:text-[#00f0ff] transition-colors rounded-lg border border-white/10 bg-white/[0.04]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      </nav>

      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
