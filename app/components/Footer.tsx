"use client";

import { motion } from "framer-motion";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/HarzhMehta",
    color: "#00f0ff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-mehta-90933921b",
    color: "#d946ef",
  },
  {
    label: "X",
    href: "https://x.com/harsh30121",
    color: "#fbff38",
  },
  {
    label: "Email",
    href: "mailto:harsh30121@gmail.com",
    color: "#7dff5a",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@HarzhMehta",
    color: "#ff2200",
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 sm:pt-24 pb-10">
      <div className="border-t border-white/[0.04] pt-10 sm:pt-14">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo / Name */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-lg font-bold gradient-text-cyan"
            >
              Harsh Mehta
            </motion.span>
            <p className="text-gray-600 text-sm mt-2 font-mono">
              Builder & Explorer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {SOCIALS.map(({ label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center gap-1"
              >
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors duration-200"
                >
                  {label}
                </span>
                <span
                  className="w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: color }}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.02] flex flex-col items-center text-center gap-2 text-gray-600 text-xs font-mono">
          <p>© {year} Harsh Mehta. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-[#00f0ff] font-semibold">Next.js</span> +{" "}
            <span className="text-[#7dff5a] font-semibold">Three.js</span> +{" "}
            <span className="text-[#d946ef] font-semibold">tsParticles</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
