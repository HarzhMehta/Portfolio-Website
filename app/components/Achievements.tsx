"use client";

const ACHIEVEMENTS = [
  {
    title: "4x Hackathon Winner",
    desc: "Won multiple hackathons including the Internal Smart India Hackathon 2025 — top 15 out of 900+ teams.  Also made it to All India Rank 47 at Pentathon 2025.",
    color: "#39FF14",
    icon: "01",
  },
  {
    title: "Project Head — IEEE Student Branch VIT PUNE",
    desc: "Mentoring students in full-stack development, Git, deployment, and best practices. Leading a team of developers to build real-world full-stack web projects.",
    color: "#00FFFF",
    icon: "02",
  },
  {
    title: "AI Agents Workshop Instructor",
    desc: "Conducted hands-on workshops on building autonomous AI agents, teaching prompt engineering and tool-use patterns to peers.",
    color: "#FF00FF",
    icon: "03",
  },
  {
    title: "Hacktoberfest SuperContributor",
    desc: "Successfully completed Hacktoberfest earning the SuperContributor badge. Contributing to OWASP, Google Liquid Galaxy, and more.",
    color: "#DDFF00",
    icon: "04",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block neo-border bg-[#FF6600] text-black px-4 py-1 text-sm font-black uppercase tracking-widest mb-4">
            05
          </div>
          <h2 className="text-4xl md:text-6xl font-black">
            Achievements<span className="text-[#FF6600]">.</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Milestones & recognitions
          </p>
        </div>

        {/* Timeline-style list */}
        <div className="relative space-y-12 mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-0 w-0.75 bg-white/10 hidden md:block"></div>

          {ACHIEVEMENTS.map(({ title, desc, color, icon }, i) => (
            <div key={title} className="relative flex gap-8 md:gap-12 group pt-4">
              {/* Dot on timeline */}
              <div className="hidden md:flex flex-col items-center shrink-0">
                <div
                  className="w-14 h-14 neo-border flex items-center justify-center text-xl font-black bg-black z-10 group-hover:-translate-y-2 transition-transform shadow-lg"
                  style={{ borderColor: color, color: color, boxShadow: `0 0 20px -5px ${color}` }}
                >
                  {icon}
                </div>
              </div>

              {/* Card */}
              <div className="neo-card bg-black/40 backdrop-blur-md p-8 md:p-10 flex-1 relative border border-white/5 hover:border-white/20 transition-all">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block md:hidden" style={{ color }}>
                  {icon}
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tight">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
                <div
                  className="absolute bottom-0 left-0 h-1 w-16 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
