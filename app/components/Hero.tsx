"use client";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div className="space-y-8 neo-card bg-black/40 backdrop-blur-sm p-8 lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none lg:p-0">
          <div className="inline-block neo-border bg-[#DDFF00] text-black px-4 py-1 text-sm font-black uppercase tracking-widest">
            Hello World
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
            I&apos;m{" "}
            <span className="text-[#DDFF00]">Harsh</span>
            <br />
            Mehta<span className="text-[#00FFFF]">.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
            Developer · Builder · Explorer
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="neo-btn bg-[#DDFF00] text-black px-8 py-3 font-black uppercase text-sm tracking-widest"
            >
              My Work
            </a>
            <a
              href="#contact"
              className="neo-btn bg-transparent text-white px-8 py-3 font-black uppercase text-sm tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right — Terminal card */}
        <div className="hidden md:flex justify-center">
          <div className="neo-card bg-black/60 p-8 w-85 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block"></span>
              <span className="ml-2">terminal</span>
            </div>
            <pre className="text-sm font-mono leading-relaxed">
              <span className="text-[#39FF14]">$</span>{" "}
              <span className="text-gray-400">whoami</span>
              {"\n"}
              <span className="text-white">harsh-mehta</span>
              {"\n\n"}
              <span className="text-[#39FF14]">$</span>{" "}
              <span className="text-gray-400">cat skills.txt</span>
              {"\n"}
              <span className="text-[#00FFFF]">Web Development</span>
              {"\n"}
              <span className="text-[#FF00FF]">Machine Learning</span>
              {"\n"}
              <span className="text-[#DDFF00]">Cybersecurity</span>
              {"\n"}
              <span className="text-[#39FF14]">Embedded Systems</span>
              {"\n\n"}
              <span className="text-[#39FF14]">$</span>{" "}
              <span className="text-gray-400">echo $STATUS</span>
              {"\n"}
              <span className="text-white">Ready to build</span>
              <span className="animate-pulse text-[#DDFF00]">█</span>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 neo-border rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
