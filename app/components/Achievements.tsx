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
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.75 bg-white/10 hidden md:block"></div>

          {ACHIEVEMENTS.map(({ title, desc, color, icon }, i) => (
            <div key={title} className="relative flex gap-6 group">
              {/* Dot on timeline */}
              <div className="hidden md:flex flex-col items-center">
                <div
                  className="w-12 h-12 neo-border flex items-center justify-center text-lg font-black bg-black z-10 group-hover:scale-110 transition-transform"
                  style={{ borderColor: color, color: color }}
                >
                  {icon}
                </div>
                {i < ACHIEVEMENTS.length - 1 && (
                  <div className="flex-1 w-0.75" style={{ backgroundColor: color, opacity: 0.2 }}></div>
                )}
              </div>

              {/* Card */}
              <div className="neo-card bg-black/40 backdrop-blur-sm p-6 mb-6 flex-1 md:ml-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block md:hidden" style={{ color }}>
                  {icon}
                </span>
                <h3 className="text-xl font-black mb-2 text-white">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>
                <div
                  className="h-1 w-16 mt-4 group-hover:w-full transition-all duration-500"
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
