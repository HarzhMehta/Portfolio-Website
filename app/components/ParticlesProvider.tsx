"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

const ParticlesContext = createContext(false);

export function useParticlesInit() {
  return useContext(ParticlesContext);
}

export function ParticlesProvider({ children }: { children: ReactNode }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <ParticlesContext.Provider value={init}>
      {children}
    </ParticlesContext.Provider>
  );
}
