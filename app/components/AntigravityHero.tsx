"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const WORDS = [
  "curious",
  "builder",
  "explorer",
  "researcher",
  "debugger",
  "creator",
  "engineer",
  "learning",
  "breaking",
  "building",
  "iterating",
  "optimizing",
  "shipping",
  "mentoring",
];

const proofPoints = [
  { value: "SDE Intern", label: "Quantifai", detail: "Joined July 2026" },
  { value: "GSoC 2026", label: "Liquid Galaxy", detail: "Local AI with Gemma" },
  { value: "8.95", label: "CGPA", detail: "VIT Pune, B.Tech IT" },
];

const focusAreas = ["Full-stack", "Cybersecurity", "AI agents", "Open source"];

export default function AntigravityHero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = WORDS[wordIndex];

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          charIndex += 1;
          setTypedText(currentWord.slice(0, charIndex));
          timeoutId = setTimeout(tick, 34);
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 360);
        }
      } else if (charIndex > 0) {
        charIndex -= 1;
        setTypedText(currentWord.slice(0, charIndex));
        timeoutId = setTimeout(tick, 16);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    };

    timeoutId = setTimeout(tick, 260);
    return () => clearTimeout(timeoutId);
  }, [wordIndex]);

  return (
    <section id="home" className="antigravity-welcome" aria-label="Harsh Mehta portfolio hero">
      <div className="ag-canvas-wrapper">
        <HeroCanvas />
      </div>

      <div className="hero-word-rotation" aria-live="polite">
        <span className="hero-prompt">{">"}</span>
        {typedText && <span className="hero-typed">{typedText}</span>}
        <span className="hero-cursor-dot">
          <span className="cursor-dot-inner" />
        </span>
      </div>

      <div className="ag-hero-content portfolio-brief">
        <div className="hero-copy">
          <p className="hero-eyebrow">Software Engineer - Pune, India</p>
          <h1 className="ag-hero-title">
            <span className="ag-hero-name">Harsh Mehta</span>
          </h1>
          <p className="ag-hero-tagline">
            SDE intern at Quantifai, GSoC 2026 contributor with Liquid Galaxy, and final-year B.Tech IT student at VIT Pune.
          </p>

          <div className="hero-focus-row" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>

          <div className="ag-hero-cta">
            <a href="#projects" className="ag-btn-primary">
              <span>See work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/blogs" className="ag-btn-secondary">
              Read blogs
            </a>
          </div>
        </div>

        <aside className="hero-brief-panel" aria-label="Harsh Mehta at a glance">
          <div className="hero-panel-header">
            <span>At a glance</span>
            <span>2026</span>
          </div>
          <div className="hero-proof-grid">
            {proofPoints.map((item) => (
              <div key={item.label} className="hero-proof-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="hero-current-stack">
            <span>Currently</span>
            <p>Shipping at Quantifai and building Local AI with Gemma for Liquid Galaxy.</p>
          </div>
        </aside>
      </div>

      <div className="ag-scroll-indicator">
        <span className="ag-scroll-text">scroll</span>
        <div className="ag-scroll-line" />
      </div>
    </section>
  );
}
