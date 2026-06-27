"use client";

import { motion } from "framer-motion";

const TECH_CATEGORIES = [
  {
    label: "Languages",
    color: "#fbff38",
    techs: [
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    label: "Frontend",
    color: "#00f0ff",
    techs: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
    ],
  },
  {
    label: "Backend",
    color: "#d946ef",
    techs: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
    ],
  },
  {
    label: "Database & Cloud",
    color: "#7dff5a",
    techs: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Azure", icon: "devicon-azure-plain colored" },
    ],
  },
  {
    label: "Tools & OS",
    color: "#ff6b35",
    techs: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Kali Linux", icon: "devicon-debian-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
    ],
  },
];

type TimelineItem = {
  role: string;
  company: string;
  dept?: string;
  period?: string;
  color: string;
  side: "left" | "right";
  points: string[];
  logo?: string;
  logoAlt?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    role: "Contributor",
    company: "Google Summer of Code 2026",
    dept: "Liquid Galaxy Project (Google) • Remote • Mentors: Andreu Ibáñez, Moisés Martínez",
    period: "May 2026 — Aug 2026",
    color: "#7dff5a",
    side: "left",
    logo: "/assets/GSoC_logo.svg.png",
    logoAlt: "Google Summer of Code logo",
    points: [
      "Selected to build \"Local AI with Gemma\" — an AI agent server on a single-board computer enabling natural language control of Liquid Galaxy via chat, voice, and Telegram/Discord.",
      "Designing a modular pipeline using RAG, local and cloud LLMs, speech-to-text/TTS, and agentic protocols to automate KML generation, geospatial visualization, real-time data feeds, and guided storytelling on the globe.",
    ],
  },
  {
    role: "Intern",
    company: "Tech Mahindra, Pune",
    dept: "Dep. of Green IT & Sustainability Offerings",
    period: "2025",
    color: "#fbff38",
    side: "right",
    points: [
      "Developed a smart DNS solution — a proof of concept for sustainable DNS infrastructure.",
      "Engineered a predictive system to forecast domain queries and proactively cache popular domains.",
      "Optimized DNS operations by analyzing traffic, scaling nodes, and adapting to usage trends.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "ITARIUM Technologies India Pvt. Ltd, Pune",
    dept: "",
    period: "2025",
    color: "#00f0ff",
    side: "left",
    points: [
      "Conducted VAPT on production applications to identify and document security vulnerabilities.",
      "Built real-time application features as a Full-Stack Developer, enhancing responsiveness.",
      "Collaborated with the dev team to implement new features and resolve bugs.",
    ],
  },
  {
    role: "Project Head",
    company: "IEEE Student Branch, VIT Pune",
    dept: "Member for 2 Years",
    period: "2024 — 2026",
    color: "#d946ef",
    side: "right",
    points: [
      "Mentoring and upskilling students in full-stack development, Git, deployment, and best practices.",
      "Leading a team of developers to build real-world full-stack web projects.",
      "Previously served as Web Developer; promoted to Project Head.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "OWASP, Google Liquid Galaxy & More",
    dept: "Hacktoberfest SuperContributor",
    period: "Ongoing",
    color: "#7dff5a",
    side: "left",
    points: [
      "Contributed to organizations like OWASP, Google Liquid Galaxy, and others.",
      "Collaborating with developers worldwide on open-source software.",
      "Earned the Hacktoberfest SuperContributor badge.",
    ],
  },
  {
    role: "B.Tech — Information Technology",
    company: "Vishwakarma Institute of Technology, Pune",
    dept: "CGPA: 8.95",
    period: "2023 — 2027",
    color: "#BF00FF",
    side: "right",
    points: [
      "Core subjects: DSA, OS, Computer Networks, DBMS, Cybersecurity.",
      "Actively involved in cybersecurity research, full-stack projects, and society work.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="skills">
      <div className="space-y-28 md:space-y-40">

        {/* ── Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 sm:mb-16">
            <div className="section-tag">
              <span className="dot" style={{ background: "#fbff38" }} />
              Tech Stack
            </div>
            <h2 className="section-heading">
              Tools I <span className="gradient-text-cyan">work with</span>
            </h2>
          </div>

          <div className="space-y-4">
            {TECH_CATEGORIES.map(({ label, color, techs }) => (
              <div key={label} className="gradient-border-card p-10 sm:p-12">
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5 pl-3 border-l-2"
                  style={{ color, borderColor: color }}
                >
                  {label}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {techs.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-1.5 group cursor-default"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-lg">
                        <i className={`${icon} text-3xl`}></i>
                      </div>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Experience Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 sm:mb-16">
            <div className="section-tag">
              <span className="dot" style={{ background: "#00f0ff" }} />
              Experience
            </div>
            <h2 className="section-heading">
              Where I&apos;ve <span className="gradient-text">been</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 top-4 bottom-12 w-px bg-white/[0.04] md:-translate-x-1/2" />

            <div className="space-y-10 sm:space-y-12 md:space-y-20">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex items-start md:justify-between">
                  <div className="hidden md:flex flex-1 justify-end pr-16 pt-4">
                    {item.side === "left" && <TimelineCard item={item} index={i} />}
                  </div>

                  <div className="flex flex-col items-center z-10 relative shrink-0 w-10 md:w-auto">
                    <div
                      className="w-5 h-5 rounded-full mt-6 shadow-lg transition-transform hover:scale-125"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 20px 2px ${item.color}44` }}
                    />
                    {i < TIMELINE.length - 1 && (
                      <div
                        className="w-px flex-1 min-h-20"
                        style={{ background: `linear-gradient(to bottom, ${item.color}33, ${TIMELINE[i + 1].color}11)` }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 pl-4 md:pl-16 pt-4">
                    <div className="md:hidden">
                      <TimelineCard item={item} index={i} />
                    </div>
                    <div className="hidden md:block">
                      {item.side === "right" && <TimelineCard item={item} index={i} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full min-w-0 md:max-w-lg gradient-border-card p-12 sm:p-16 group"
    >
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{item.role}</h3>
          {item.period && (
            <span
              className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border shrink-0"
              style={{ color: item.color, borderColor: `${item.color}44` }}
            >
              {item.period}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {item.logo && (
            <img
              src={item.logo}
              alt={item.logoAlt || `${item.company} logo`}
              className="w-9 h-9 rounded-lg bg-white/[0.03] p-1 object-contain border border-white/[0.06]"
              loading="lazy"
            />
          )}
          <div className="font-semibold text-base" style={{ color: item.color }}>
            {item.company}
          </div>
        </div>
        {item.dept && <div className="text-sm text-gray-600 font-mono">{item.dept}</div>}
      </div>
      <ul className="space-y-4">
        {item.points.map((point, j) => (
          <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
 
