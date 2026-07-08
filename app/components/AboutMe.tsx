"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "DSA Problems Solved", color: "#00f0ff" },
  { number: "3", label: "Research Papers", color: "#d946ef" },
  { number: "GSoC '26", label: "Always learning", color: "#fbff38" },
  { number: "∞", label: "Curiosity", color: "#7dff5a" },
];

export default function AboutMe() {
  return (
    <section id="about">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-intro"
      >
        <div className="section-tag">
          <span className="dot" style={{ background: "#00f0ff" }} />
          About
        </div>
        <h2 className="section-heading">
          Who <span className="gradient-text-cyan">am I</span>?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        {/* Bio - takes 3 cols */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <div className="gradient-border-card p-8 sm:p-12 lg:p-16 space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I&apos;m driven by curiosity and a deep appreciation for the beauty in complexity. I love understanding how things work, which has led me to explore diverse fields .. from full-stack development to cybersecurity and AI agents.
            </p>
            <br></br>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I&apos;m a <strong className="text-[#7dff5a]">GSoC 2026 contributor</strong> working on the Liquid Galaxy (Google) project, where I&apos;m building &quot;Local AI with Gemma&quot; an AI agent server enabling natural language control of a multi-screen globe setup.
            </p>
            <br></br>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I love to study system design, collaborate with developers worldwide, and enjoy applying my knowledge to solve real-world problems.
            </p>
            <br></br>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed pb-2">
              I can also jam Wi-Fi signals or crack passwords without connecting to your network 😉 ... ask me about it over on <a href="https://x.com/harsh30121" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">X</a>.
            </p>
            <br></br>
            <div className="pt-4 border-t border-white/[0.06] mt-4">
              <p className="text-base font-semibold text-white">
                Vishwakarma Institute of Technology, Pune
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                B.Tech in Information Technology — CGPA: 8.95
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats - takes 2 cols */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map(({ number, label, color }) => (
            <div
              key={label}
              className="gradient-border-card p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-center gap-3"
            >
              <span className="text-3xl sm:text-4xl font-extrabold" style={{ color }}>
                {number}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
