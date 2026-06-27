"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Ship Rust Detection & Analysis",
    desc: "Developing a Rust-based detection and analysis system at Creatum, Hamburg, Germany — analyzing large-scale maritime data for security insights and threat detection in the shipping industry.",
    link: "#",
    color: "#ff6b35",
    tags: ["Rust", "Data Analysis", "Maritime Security"],
  },
  {
    id: 2,
    title: "α SHUP - Retail Management",
    desc: "Retail Operations and Customer Management Solution for a client in Amravati with Inventory, Customer Management, and Referral & Rewards System.",
    link: "#",
    color: "#00f0ff",
    tags: ["Full-Stack", "Web App", "Client Project"],
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Contributing to multiple projects within organizations like OWASP, Google Liquid Galaxy, etc. Successfully completed Hacktoberfest (SuperContributor).",
    link: "#",
    color: "#fbff38",
    tags: ["Open Source", "Hacktoberfest", "OWASP"],
  },
  {
    id: 5,
    title: "RAG based PDF Search Tool",
    desc: "AI-powered document search using Retrieval Augmented Generation for intelligent PDF querying.",
    link: "https://github.com/HarzhMehta/PDF_Search_Tool.git",
    color: "#d946ef",
    tags: ["AI/ML", "RAG", "Python"],
  },
  {
    id: 6,
    title: "Realtime DDoS Detection System",
    desc: "Live network traffic analysis system that detects and alerts on DDoS attacks in real time.",
    link: "https://www.linkedin.com/posts/harsh-mehta-90933921b_thrilled-to-share-our-latest-project-activity-7264323622184370177-ldHz",
    color: "#ff6b35",
    tags: ["Cybersecurity", "Networking", "Python"],
  },
  {
    id: 7,
    title: "Network Intrusion Detection System",
    desc: "ML-based NIDS that classifies network packets and detects malicious intrusion patterns.",
    link: "https://www.linkedin.com/posts/harsh-mehta-90933921b_cybersecurity-nids-networksecurity-activity-7237849222123798531-Bwb_",
    color: "#00e5ff",
    tags: ["ML", "Security", "NIDS"],
  },
  {
    id: 8,
    title: "Skin Cancer Classification",
    desc: "Deep learning web app that classifies skin lesion images for early cancer detection.",
    link: "#",
    color: "#BF00FF",
    tags: ["Deep Learning", "CNN", "Healthcare"],
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 sm:mb-16">
          <div className="section-tag">
            <span className="dot" style={{ background: "#d946ef" }} />
            Projects
          </div>
          <h2 className="section-heading">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Check out some of my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map(({ id, title, desc, link, color, tags }) => (
            <motion.a
              key={id}
              href={link}
              target={link.startsWith("http") ? "_blank" : undefined}
              rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: id * 0.05 }}
              className="gradient-border-card p-0 group block"
            >
              <div className="h-1.5 w-full rounded-t-[15px]" style={{ backgroundColor: color }} />

              <div className="p-12 sm:p-14 space-y-6">
                <span
                  className="text-4xl font-extrabold opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color }}
                >
                  {String(id).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#00f0ff] transition-colors">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/[0.06] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end pt-1">
                  <span
                    className="text-xl font-bold transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    style={{ color }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
