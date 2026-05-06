"use client";

const PROJECTS = [
  {
    id: 1,
    title: "α SHUP - Retail Management",
    desc: "Retail Operations and Customer Management Solution for a client in Amravati with Inventory, Customer Management, and Referral & Rewards System.",
    link: "#",
    color: "#00FFFF",
    tags: ["Full-Stack", "Web App", "Client Project"],
  },
  {
    id: 2,
    title: "Open Source Contributor",
    desc: "Contributing to multiple projects within organizations like OWASP, Google Liquid Galaxy, etc. Successfully completed Hacktoberfest (SuperContributor).",
    link: "#",
    color: "#DDFF00",
    tags: ["Open Source", "Hacktoberfest", "OWASP"],
  },
  {
    id: 3,
    title: "RAG based PDF Search Tool",
    desc: "AI-powered document search using Retrieval Augmented Generation for intelligent PDF querying.",
    link: "https://github.com/HarzhMehta/PDF_Search_Tool.git",
    color: "#FF00FF",
    tags: ["AI/ML", "RAG", "Python"],
  },
  {
    id: 4,
    title: "Realtime DDoS Detection System",
    desc: "Live network traffic analysis system that detects and alerts on DDoS attacks in real time.",
    link: "https://www.linkedin.com/posts/harsh-mehta-90933921b_thrilled-to-share-our-latest-project-activity-7264323622184370177-ldHz",
    color: "#FF3366",
    tags: ["Cybersecurity", "Networking", "Python"],
  },
  {
    id: 5,
    title: "Network Intrusion Detection System",
    desc: "ML-based NIDS that classifies network packets and detects malicious intrusion patterns.",
    link: "https://www.linkedin.com/posts/harsh-mehta-90933921b_cybersecurity-nids-networksecurity-activity-7237849222123798531-Bwb_",
    color: "#00E5FF",
    tags: ["ML", "Security", "NIDS"],
  },
  {
    id: 6,
    title: "Skin Cancer Classification",
    desc: "Deep learning web app that classifies skin lesion images for early cancer detection.",
    link: "#",
    color: "#BF00FF",
    tags: ["Deep Learning", "CNN", "Healthcare"],
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block neo-border bg-[#FF00FF] text-black px-4 py-1 text-sm font-black uppercase tracking-widest mb-4">
            04
          </div>
          <h2 className="text-4xl md:text-6xl font-black">
            Projects<span className="text-[#FF00FF]">.</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-lg">
            Check out some of my work
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map(({ id, title, desc, link, color, tags }) => (
            <a
              key={id}
              href={link}
              target={link.startsWith("http") ? "_blank" : undefined}
              rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="neo-card bg-black/40 backdrop-blur-sm p-0 group block"
            >
              {/* Color bar top */}
              <div className="h-2 w-full" style={{ backgroundColor: color }}></div>

              <div className="p-5 sm:p-6 space-y-4">
                {/* Project number */}
                <span
                  className="text-5xl font-black opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ color }}
                >
                  {String(id).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-black leading-tight text-white">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-gray-600 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex justify-end pt-2">
                  <span
                    className="text-2xl font-black transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
