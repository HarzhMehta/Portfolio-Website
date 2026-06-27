"use client";

import { Canvas } from "@react-three/fiber";
import MedusaeParticles from "./MedusaeParticles";

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <color attach="background" args={["#05080a"]} />
      <MedusaeParticles />
    </Canvas>
  );
}
