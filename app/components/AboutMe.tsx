"use client";

export default function AboutMe() {
  return (
    <section id="about" className="relative px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block neo-border bg-[#00FFFF] text-black px-4 py-1 text-sm font-black uppercase tracking-widest mb-4">
            01
          </div>
          <h2 className="text-4xl md:text-6xl font-black">
            About Me<span className="text-[#00FFFF]">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <div className="space-y-6 neo-card bg-black/40 backdrop-blur-sm p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m driven by curiosity and a deep appreciation for the beauty in complexity. </p>
              <br></br>
              <p>I love understanding how things work, which has led me to explore diverse fields and take on challenging projects, including building real-world solutions.
            </p> <br></br>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond just learning, I enjoy applying my knowledge to solve problems and continuously push my boundaries. I contribute to open-source projects regularly, collaborating with developers worldwide.
            </p><br></br>
            <p className="text-lg text-gray-300 leading-relaxed">
              I can also jam Wi-Fi signals or crack passwords without connecting to your network 😉
            </p> <br></br>
            <div className="pt-4 border-t-2 border-white/20">
              <p className="text-md text-white font-bold">
                Vishwakarma Institute of Technology, Pune
              </p>
              <p className="text-sm text-[#00FFFF] font-bold mt-1">
                Bachelor of Technology in Information Technology | CGPA - 8.89
              </p>
            </div>
          </div>

          {/* Quick stats */}<br></br>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "6+", label: "Projects Built", color: "#DDFF00" },
              { number: "3+", label: "Tech Domains", color: "#00FFFF" },
              { number: "IEEE", label: "Web Developer", color: "#FF00FF" },
              { number: "∞", label: "Curiosity", color: "#39FF14" },
            ].map(({ number, label, color }) => (
              <div key={label} className="neo-card bg-black/60 p-6 text-center">
                <div className="text-4xl font-black mb-2" style={{ color }}>
                  {number}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
