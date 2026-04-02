"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useParticlesInit } from "./ParticlesProvider";

function getScale(): number {
  if (typeof window === "undefined") return 0.5;
  const w = window.innerWidth;
  if (w < 480) return 0.25;
  if (w < 768) return 0.35;
  if (w < 1024) return 0.45;
  return 0.6;
}

function buildOptions(scale: number): ISourceOptions {
  return {
    autoPlay: true,
    background: {
      color: { value: "transparent" },
    },
    fullScreen: { enable: true, zIndex: 0 },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
        resize: { enable: true },
      },
      modes: {
        bubble: { distance: 40, duration: 2, opacity: 8, size: 6 },
      },
    },
    particles: {
      color: { value: "#00fcd2" },
      links: {
        color: { value: "#aeff00" },
        distance: 40,
        enable: true,
        opacity: 0.8,
        width: 1.5,
      },
      move: {
        enable: true,
        outModes: { default: "bounce" },
        speed: 1.5,
      },
      number: { value: Math.floor(scale * 250) },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: { enable: true, speed: 2, sync: false },
      },
      shape: { type: "circle" },
      size: { value: 1 },
    },
    pauseOnBlur: true,
    polygon: {
      draw: {
        enable: true,
        stroke: { color: { value: "#ffffff" }, width: 1.5, opacity: 0.6 },
      },
      enable: true,
      inline: { arrangement: "equidistant" },
      move: { radius: 10, type: "path" },
      scale: scale,
      type: "inline",
      url: "/assets/idea-svgrepo-com.svg", // Ensure this SVG exists in public/assets
      position: { x: 48, y: 50 },
    },
  };
}

export default function ParticlesBackground() {
  const init = useParticlesInit();
  const [options, setOptions] = useState<ISourceOptions>(() => buildOptions(getScale()));

  useEffect(() => {
    function handleResize() {
      setOptions(buildOptions(getScale()));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 w-full h-full z-0"
    />
  );
}
