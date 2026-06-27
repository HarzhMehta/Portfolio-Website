"use client";

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    title: "4x Hackathon Winner",
    desc: "Won multiple hackathons including the Internal Smart India Hackathon 2025 — top 15 out of 900+ teams. Also made it to All India Rank 47 at Pentathon 2025.",
    color: "#7dff5a",
    icon: "01",
  },
  {
    title: "Project Head — IEEE Student Branch VIT PUNE",
    desc: "Mentoring students in full-stack development, Git, deployment, and best practices. Leading a team of developers to build real-world full-stack web projects.",
    color: "#00f0ff",
    icon: "02",
  },
  {
    title: "AI Agents Workshop Instructor",
    desc: "Conducted hands-on workshops on building autonomous AI agents, teaching prompt engineering and tool-use patterns to peers.",
    color: "#d946ef",
    icon: "03",
  },
  {
    title: "Hacktoberfest SuperContributor",
    desc: "Successfully completed Hacktoberfest earning the SuperContributor badge. Contributing to OWASP, Google Liquid Galaxy, and more.",
    color: "#fbff38",
    icon: "04",
  },
  {
    title: "GSoC 2026 — Liquid Galaxy",
    desc: "Selected for Google Summer of Code 2026. Building \"Local AI with Gemma\" — an AI agent server for natural language control of the Liquid Galaxy globe system.",
    color: "#ff6b35",
    icon: "05",
  },
  {
    title: "Pentathon 2025 — AIR 47",
    desc: "Secured All India Rank 47 in the national-level Pentathon 2025 cybersecurity competition, competing against hundreds of teams from across India.",
    color: "#BF00FF",
    icon: "06",
  },
  {
    title: "3 Research Papers Published",
    desc: "Published three research papers in peer-reviewed journals/conferences covering cybersecurity, AI/ML, and applied computing — contributing novel findings and methodologies to the academic community.",
    color: "#00f0ff",
    icon: "07",
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 sm:mb-16">
          <div className="section-tag">
            <span className="dot" style={{ background: "#ff6b35" }} />
            Achievements
          </div>
          <h2 className="section-heading">
            Milestones & <span className="gradient-text-cyan">recognition</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Things I&apos;m proud of
          </p>
        </div>

        <div className="relative space-y-6 sm:space-y-8 mt-10">
          <div className="absolute left-6 top-8 bottom-0 w-px bg-white/[0.04] hidden md:block" />

          {ACHIEVEMENTS.map(({ title, desc, color, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative flex gap-6 sm:gap-8 group pt-2"
            >
              <div className="hidden md:flex flex-col items-center shrink-0">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold bg-white/[0.03] border border-white/[0.06] z-10 group-hover:-translate-y-1 transition-transform"
                  style={{ color }}
                >
                  {icon}
                </div>
              </div>

              <div className="gradient-border-card p-12 sm:p-14 md:p-16 flex-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-3 block md:hidden" style={{ color }}>
                  {icon}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white tracking-tight">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{desc}</p>
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
