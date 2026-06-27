import { Color, Vector3 } from "three";
import type { ParticleShape } from "./types";

export type ParticleData = {
  base: Vector3;
  target: Vector3;
  velocity: Vector3;
  color: Color;
  scale: number;
  seed: number;
  alive: boolean;
};

const palette = ["#d8f7ff", "#7be7ff", "#34ffc8", "#b6fffb", "#d6ffe8"];

export function random(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export function randomSphere(seed: number, radius: number, minRadius = 0): Vector3 {
  const u = random(seed) * 2 - 1;
  const theta = random(seed + 1) * Math.PI * 2;
  const r = minRadius + random(seed + 2) * (radius - minRadius);
  const s = Math.sqrt(1 - u * u);
  return new Vector3(Math.cos(theta) * s * r, u * r, Math.sin(theta) * s * r);
}

export function createParticle(seed: number): ParticleData {
  return {
    base: randomSphere(seed, 7, 2.2),
    target: new Vector3(),
    velocity: randomSphere(seed + 13, 0.012, 0.002),
    color: new Color(palette[Math.floor(random(seed + 91) * palette.length)]),
    scale: 0.018 + random(seed + 42) * 0.035,
    seed,
    alive: false,
  };
}

export function wordTargets(word: string, count: number, offset: number): Vector3[] {
  const targets: Vector3[] = [];
  const width = Math.max(1.8, word.length * 0.34);

  for (let i = 0; i < count; i += 1) {
    const letterIndex = i % word.length;
    const local = i / Math.max(1, count - 1);
    const x = (letterIndex / Math.max(1, word.length - 1) - 0.5) * width;
    const y = (random(offset + i) - 0.5) * 0.82 + Math.sin(local * Math.PI * 10) * 0.05;
    const z = -1.8 + (random(offset + i + 77) - 0.5) * 0.28;
    targets.push(new Vector3(x, y, z));
  }

  return targets;
}

export function shapeTarget(shape: ParticleShape, index: number, total: number): Vector3 {
  const t = index / Math.max(1, total - 1);
  const a = t * Math.PI * 2;
  const band = Math.floor(index / Math.max(1, total / 12));
  const lane = band - 6;

  switch (shape) {
    case "commit":
      return new Vector3((t - 0.5) * 8, Math.sin(t * 24) * 0.7 + lane * 0.08, -2 + Math.cos(t * 18) * 0.4);
    case "ssh":
      return new Vector3((index % 48) * 0.12 - 2.8, 1.6 - Math.floor(index / 48) * 0.11, -2.2);
    case "packet":
      return new Vector3((t - 0.5) * 8, Math.sin(t * 70) * 0.18, Math.cos(t * 70) * 1.2 - 2.6);
    case "cpu":
      return new Vector3(Math.round(Math.cos(a) * 18) * 0.16, Math.round(Math.sin(a) * 18) * 0.16, -2.4 + lane * 0.08);
    case "pcb":
      return new Vector3((Math.round(random(index) * 20) - 10) * 0.34, (Math.round(random(index + 8) * 12) - 6) * 0.26, -2.8);
    case "neural":
      return new Vector3(Math.sin(a * 3) * 2.9, Math.cos(a * 5) * 1.8, Math.sin(a * 7) * 2.4 - 2.5);
    case "hex":
      return new Vector3((index % 32) * 0.2 - 3.2, 1.6 - Math.floor(index / 32) * 0.16, -2.3 + Math.sin(index) * 0.12);
    case "compiler":
      return new Vector3((t - 0.5) * 6.8, 1.5 - (index % 26) * 0.12, -2.1 - Math.floor(index / 26) * 0.04);
    case "memory":
      return new Vector3((index % 40) * 0.16 - 3.2, Math.sin(index * 0.7) * 0.9, -3.2 + Math.floor(index / 40) * 0.1);
    case "globe": {
      const y = 1 - 2 * t;
      const radius = Math.sqrt(1 - y * y);
      const phi = index * 2.39996323;
      return new Vector3(Math.cos(phi) * radius * 2.5, y * 2.5, Math.sin(phi) * radius * 2.5 - 2.4);
    }
    case "assembly":
      return new Vector3((index % 36) * 0.18 - 3.2, Math.floor(index / 36) * -0.14 + 1.6, -2.5);
    case "linux":
      return new Vector3((index % 44) * 0.14 - 3.1, 1.3 - Math.floor(index / 44) * 0.15, -2.6);
    case "code":
      return new Vector3((index % 54) * 0.12 - 3.4, Math.sin(index * 0.23) * 1.4, -2.8 + Math.cos(index * 0.14));
    case "field":
    default:
      return randomSphere(index + 300, 5.6, 1.4);
  }
}
