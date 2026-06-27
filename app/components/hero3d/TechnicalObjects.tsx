"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
} from "three";
import type { HeroRuntime } from "./types";

type TechnicalObjectsProps = {
  runtime: React.MutableRefObject<HeroRuntime>;
};

function lineGeometry(points: number[]) {
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(points, 3));
  return geometry;
}

export default function TechnicalObjects({ runtime }: TechnicalObjectsProps) {
  const group = useRef<Group>(null);

  const material = useMemo(
    () =>
      new LineBasicMaterial({
        color: "#73f7ff",
        transparent: true,
        opacity: 0.28,
        blending: AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  const graphs = useMemo(() => {
    const commit: number[] = [];
    for (let i = 0; i < 42; i += 1) {
      const x = (i / 41 - 0.5) * 7.2;
      commit.push(x, Math.sin(i * 0.7) * 0.35 + 1.1, -2.7, x + 0.14, Math.sin((i + 1) * 0.7) * 0.35 + 1.1, -2.7);
      if (i % 7 === 0) {
        commit.push(x, 1.1, -2.7, x + 0.72, 0.35, -2.2);
      }
    }

    const pcb: number[] = [];
    for (let i = 0; i < 64; i += 1) {
      const x = ((i % 8) - 3.5) * 0.62;
      const y = (Math.floor(i / 8) - 3.5) * 0.34 - 0.8;
      pcb.push(x, y, -2.9, x + (i % 2 ? 0.46 : -0.46), y + 0.18, -2.9);
    }

    const globe: number[] = [];
    for (let ring = 0; ring < 7; ring += 1) {
      const r = 0.6 + ring * 0.22;
      for (let i = 0; i < 80; i += 1) {
        const a = (i / 80) * Math.PI * 2;
        const b = ((i + 1) / 80) * Math.PI * 2;
        globe.push(Math.cos(a) * r, Math.sin(a) * r, -3.1, Math.cos(b) * r, Math.sin(b) * r, -3.1);
      }
    }

    return [lineGeometry(commit), lineGeometry(pcb), lineGeometry(globe)];
  }, []);

  useFrame((state, delta) => {
    const ref = group.current;
    if (!ref) {
      return;
    }

    ref.rotation.y += delta * 0.035;
    ref.rotation.x = Math.sin(state.clock.elapsedTime * 0.19) * 0.05;
    ref.visible = runtime.current.phase !== "cursor" && runtime.current.phase !== "typing";
    material.opacity += ((runtime.current.phase === "signature" ? 0 : 0.26) - material.opacity) * 0.04;
  });

  return (
    <group ref={group}>
      {graphs.map((geometry, index) => (
        <lineSegments key={index} geometry={geometry} material={material} position={[0, 0, index * -0.28]} />
      ))}
    </group>
  );
}
