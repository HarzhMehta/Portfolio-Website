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
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ParticlesProvider>
        <ParticlesBackground />
      </ParticlesProvider>
      <AmbientParticles />

      <Navbar />
      <br></br>
      <SocialLinks />

      <main className="relative z-10">
        <Hero />
        <div className="max-w-7xl mx-auto space-y-28 sm:space-y-36 md:space-y-48 pb-20 px-4 sm:px-6 lg:px-8">
          <br></br>
          <AboutMe />
         
          <Experience /><br></br>
          <PortfolioSection />
          <Achievements />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
