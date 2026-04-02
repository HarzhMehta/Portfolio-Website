"use client";

const TECH_CATEGORIES = [
  {
    label: "Languages",
    color: "#DDFF00",
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
    color: "#00FFFF",
    techs: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
    ],
  },
  {
    label: "Backend",
    color: "#FF00FF",
    techs: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
    ],
  },
  {
    label: "Database & Cloud",
    color: "#39FF14",
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
    color: "#FF3366",
    techs: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Kali Linux", icon: "devicon-debian-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
    ],
  },
];

const TIMELINE = [
  {
    role: "Intern",
    company: "Tech Mahindra, Pune",
    dept: "Dep. of Green IT & Sustainability Offerings",
    period: "2025",
    color: "#DDFF00",
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
    color: "#00FFFF",
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
    dept: "Member for 2+ Years",
    period: "2022 — Present",
    color: "#FF00FF",
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
    color: "#39FF14",
    side: "left",
    points: [
      "Contributing to organizations like OWASP, Google Liquid Galaxy, and others globally.",
      "Collaborating with developers worldwide on open-source software.",
      "Earned the Hacktoberfest SuperContributor badge.",
    ],
  },
  {
    role: "B.Tech — Information Technology",
    company: "Vishwakarma Institute of Technology, Pune",
    dept: "CGPA: 8.89",
    period: "2022 — Present",
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
    <section id="skills" className="relative px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-32 md:gap-40">
    
        {/* ── Tech Stack ── */}
        <div>
          <div className="mb-12">
            <div className="inline-block neo-border bg-[#DDFF00] text-black px-4 py-1 text-sm font-black uppercase tracking-widest mb-4">
              02
            </div> <br></br>
            <h2 className="text-4xl md:text-6xl font-black">
              Tech Stack<span className="text-[#DDFF00]">.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {TECH_CATEGORIES.map(({ label, color, techs }) => (
              <div key={label} className="neo-card bg-black/40 backdrop-blur-sm p-6">
                <div
                  className="text-xs font-black uppercase tracking-[0.2em] mb-5 pl-1 border-l-4 pl-3"
                  style={{ color, borderColor: color }}
                >
                  {label}
                </div>
                <div className="flex flex-wrap gap-5">
                  {techs.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-2 group cursor-default"
                    >
                      <div
                        className="w-16 h-16 neo-border bg-black/60 flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
                        style={{ borderColor: color }}
                      >
                        <i className={`${icon} text-4xl`}></i>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience Timeline ── */}
        <div className="pt-16">
          <div className="mb-16">
            <div className="inline-block neo-border bg-[#00FFFF] text-black px-4 py-1 text-sm font-black uppercase tracking-widest mb-4">
              03
            </div>
            <h2 className="text-4xl md:text-6xl font-black">
              Experience<span className="text-[#00FFFF]">.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center vertical line — desktop, left on mobile */}
            <div className="absolute left-5 md:left-1/2 top-4 bottom-12 w-px bg-white/10 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex items-start mb-16 md:justify-between">
                  {/* Left slot (Desktop only) */}
                  <div className="hidden md:flex flex-1 justify-end pr-16 pt-4">
                    {item.side === "left" && <TimelineCard item={item} />}
                  </div>

                  {/* Center dot (Left on Mobile) */}
                  <div className="flex flex-col items-center z-10 relative shrink-0 w-10 md:w-auto">
                    <div
                      className="w-6 h-6 rounded-full border-4 border-black mt-6 shadow-xl transition-transform hover:scale-125"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 20px 2px ${item.color}88` }}
                    />
                    {i < TIMELINE.length - 1 && (
                      <div
                        className="w-px flex-1 min-h-24 md:min-h-24"
                        style={{ background: `linear-gradient(to bottom, ${item.color}55, ${TIMELINE[i + 1].color}22)` }}
                      />
                    )}
                  </div>

                  {/* Right slot (Desktop) & Main slot (Mobile) */}
                  <div className="flex-1 min-w-0 pl-4 md:pl-16 pt-4">
                    <div className="md:hidden">
                      <TimelineCard item={item} />
                    </div>
                    <div className="hidden md:block">
                      {item.side === "right" && <TimelineCard item={item} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineCard({ item }: { item: (typeof TIMELINE)[0] }) {
  return (
    <div
      className="w-full min-w-0 md:max-w-md neo-card bg-black/40 backdrop-blur-md p-8 md:p-10 group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ borderLeftColor: item.color, borderLeftWidth: "6px" }}
    >
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="text-2xl font-black text-white leading-tight">{item.role}</h3>
          {item.period && (
            <span
              className="text-xs font-black uppercase tracking-widest px-3 py-1 neo-border shrink-0"
              style={{ color: item.color, borderColor: item.color }}
            >
              {item.period}
            </span>
          )}
        </div>
        <div className="font-bold text-lg" style={{ color: item.color }}>
          {item.company}
        </div>
        {item.dept && <div className="text-sm text-gray-500 font-mono tracking-wide">{item.dept}</div>}
      </div>
      <ul className="space-y-4">
        {item.points.map((point, j) => (
          <li key={j} className="flex gap-4 text-gray-300 text-[15px] leading-relaxed">
            <span style={{ color: item.color }} className="text-xl mt-0.5 shrink-0">
              &#x25B9;
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div
        className="h-1 w-16 mt-6 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: item.color }}
      />
    </div>
  );
}
