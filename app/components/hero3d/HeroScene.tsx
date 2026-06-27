"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import { Color, Fog } from "three";
import CameraRig from "./CameraRig";
import Cursor from "./Cursor";
import ParticleSystem from "./ParticleSystem";
import TechnicalObjects from "./TechnicalObjects";
import TimelineController from "./TimelineController";
import WordAnimator from "./WordAnimator";
import { HERO_WORDS, type HeroRuntime, type ParticleApi } from "./types";

type HeroSceneProps = {
  words?: readonly string[];
};

export default function HeroScene({ words = HERO_WORDS }: HeroSceneProps) {
  const particleApi = useRef<ParticleApi | null>(null);
  const [typedText, setTypedText] = useState("");
  const [activeWord, setActiveWord] = useState("");
  const runtime = useRef<HeroRuntime>({
    phase: "cursor",
    shape: "field",
    intensity: 0.92,
    collapse: 0,
    orbit: 0,
    signature: 1,
    cameraPush: 0,
    typedText: "",
    activeWord: "",
  });

  const dpr = useMemo<[number, number]>(() => [1, 1.7], []);

  return (
    <section id="home" className="hero-scene" aria-label="Harsh Mehta portfolio hero">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 7], fov: 48, near: 0.1, far: 80 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        onCreated={({ scene }) => {
          scene.background = new Color("#020305");
          scene.fog = new Fog("#020305", 5.8, 13.5);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.18} />
          <pointLight position={[0, 1.5, 3]} intensity={0.9} color="#9dfcff" />
          <ParticleSystem ref={particleApi} runtime={runtime} />
          <TechnicalObjects runtime={runtime} />
          <CameraRig runtime={runtime} />
        </Suspense>
      </Canvas>

      <div className="hero-vignette" />
      <div className="hero-crt" />
      <div className="hero-interface">
        <Cursor visible typedText={typedText} />
        <WordAnimator visible={Boolean(typedText)} word={activeWord} typedText={typedText} />
      </div>

      <div className="hero-signature">
        <div>
          <h1>Harsh Mehta</h1>
          <p>Always Learning...</p>
        </div>
      </div>

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

      <TimelineController
        runtime={runtime}
        particleApi={particleApi}
        words={words}
        onTypedText={setTypedText}
        onActiveWord={setActiveWord}
      />
    </section>
  );
}
