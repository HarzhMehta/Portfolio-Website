import ParticlesBackground from "./components/ParticlesBackground";
import AmbientParticles from "./components/AmbientParticles";
import { ParticlesProvider } from "./components/ParticlesProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import PortfolioSection from "./components/PortfolioSection";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* Fixed particle backgrounds */}
      <ParticlesProvider>
        <ParticlesBackground />
      </ParticlesProvider>
      <AmbientParticles />

      {/* Fixed UI elements */}
      <Navbar />
      <SocialLinks />

      {/* Scrollable content */}
      <main className="relative z-10 flex flex-col gap-32 md:gap-40 pb-32 overflow-x-clip">
        <Hero />
        <AboutMe />
        <Experience />
        <PortfolioSection />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
