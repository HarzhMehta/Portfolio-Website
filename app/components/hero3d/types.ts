import type { Group } from "three";

export const HERO_WORDS = [
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
] as const;

export type HeroPhase =
  | "cursor"
  | "typing"
  | "structures"
  | "orbit"
  | "collapse"
  | "signature"
  | "disperse";

export type ParticleShape =
  | "field"
  | "commit"
  | "ssh"
  | "packet"
  | "cpu"
  | "pcb"
  | "neural"
  | "hex"
  | "compiler"
  | "memory"
  | "globe"
  | "assembly"
  | "linux"
  | "code";

export type HeroRuntime = {
  phase: HeroPhase;
  shape: ParticleShape;
  intensity: number;
  collapse: number;
  orbit: number;
  signature: number;
  cameraPush: number;
  typedText: string;
  activeWord: string;
};

export type ParticleApi = {
  addWord: (word: string) => void;
  disperse: () => void;
  setShape: (shape: ParticleShape) => void;
};

export type TechnicalGroupRef = Group;
