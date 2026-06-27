"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

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

export default function AntigravityHero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  // Typewriter effect — cycles through words on top-left
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = WORDS[wordIndex];

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          charIndex++;
          setTypedText(currentWord.slice(0, charIndex));
          timeoutId = setTimeout(tick, 60);
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 600);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTypedText(currentWord.slice(0, charIndex));
          timeoutId = setTimeout(tick, 25);
        } else {
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    };

    timeoutId = setTimeout(tick, 600);
    return () => clearTimeout(timeoutId);
  }, [wordIndex]);

  return (
    <section
      id="home"
      className="antigravity-welcome"
      aria-label="Harsh Mehta portfolio hero"
    >
      {/* Three.js Particle Canvas Background */}
      <div className="ag-canvas-wrapper">
        <HeroCanvas />
      </div>

      {/* Word rotation — top left (learner, debugger, etc.) */}
      <div className="hero-word-rotation" aria-live="polite">
        <span className="hero-prompt">{">"}</span>
        {typedText && <span className="hero-typed">{typedText}</span>}
        <span className="hero-cursor-dot">
          <span className="cursor-dot-inner" />
        </span>
      </div>

      {/* Main content — centered */}
      <div className="ag-hero-content">
        <p className="ag-hero-tagline">
          Dont book a cover by its judge 😉
        </p>
        <h1 className="ag-hero-title">
          <span className="ag-hero-name">Harsh Mehta</span>
        </h1>
        <div className="ag-hero-cta">
          <a href="#projects" className="ag-btn-primary">
            <span>View Projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="ag-btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Badges */}
      <div className="hero-badge-row">
        <span className="hero-badge">
          <span className="badge-dot" style={{ background: "#00f0ff" }} />
          full-stack
        </span>
        <span className="hero-badge">
          <span className="badge-dot" style={{ background: "#7dff5a" }} />
          security
        </span>
        <span className="hero-badge">
          <span className="badge-dot" style={{ background: "#d946ef" }} />
          ai/ml
        </span>
        <span className="hero-badge">
          <span className="badge-dot" style={{ background: "#fbff38" }} />
          open source
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="ag-scroll-indicator">
        <span className="ag-scroll-text">scroll</span>
        <div className="ag-scroll-line" />
      </div>
    </section>
  );
}
