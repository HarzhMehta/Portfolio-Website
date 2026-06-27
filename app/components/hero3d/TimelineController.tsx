"use client";

import gsap from "gsap";
import { useEffect } from "react";
import type { HeroRuntime, ParticleApi, ParticleShape } from "./types";

type TimelineControllerProps = {
  runtime: React.MutableRefObject<HeroRuntime>;
  particleApi: React.MutableRefObject<ParticleApi | null>;
  words: readonly string[];
  onTypedText: (value: string) => void;
  onActiveWord: (value: string) => void;
};

const shapes: ParticleShape[] = [
  "commit",
  "ssh",
  "packet",
  "cpu",
  "pcb",
  "neural",
  "hex",
  "compiler",
  "memory",
  "globe",
  "assembly",
  "linux",
  "code",
];

const speed = 0.46;
const seconds = (duration: number) => duration * speed;

export default function TimelineController({
  runtime,
  particleApi,
  words,
  onTypedText,
  onActiveWord,
}: TimelineControllerProps) {
  useEffect(() => {
    let killed = false;
    const timeline = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
    const textState = { progress: 0 };

    const typeWord = (word: string) => {
      timeline.call(() => {
        if (killed) return;
        runtime.current.phase = "typing";
        runtime.current.activeWord = word;
        runtime.current.typedText = "";
        onActiveWord(word);
        onTypedText("");
        textState.progress = 0;
      });

      timeline.to(textState, {
        progress: word.length,
        duration: seconds(0.44 + word.length * 0.032),
        ease: `steps(${word.length})`,
        onUpdate: () => {
          const typed = word.slice(0, Math.round(textState.progress));
          runtime.current.typedText = typed;
          onTypedText(typed);
        },
      });

      timeline.to({}, { duration: seconds(0.2 + Math.min(word.length * 0.014, 0.12)) });
      timeline.call(() => {
        particleApi.current?.addWord(word);
        runtime.current.typedText = "";
        onTypedText("");
      });
      timeline.to(runtime.current, { intensity: 0.9, duration: seconds(0.14), yoyo: true, repeat: 1 });
    };

    timeline.call(() => {
      runtime.current.phase = "cursor";
      runtime.current.shape = "field";
      runtime.current.collapse = 0;
      runtime.current.orbit = 0;
      runtime.current.cameraPush = 0;
      runtime.current.signature = 1;
      onTypedText("");
      particleApi.current?.disperse();
    });

    timeline.to({}, { duration: seconds(0.9) });
    words.forEach(typeWord);

    timeline.call(() => {
      runtime.current.phase = "structures";
    });

    shapes.forEach((shape) => {
      timeline.call(() => {
        runtime.current.shape = shape;
        particleApi.current?.setShape(shape);
      });
      timeline.to(runtime.current, { intensity: 0.8, duration: seconds(0.72) });
    });

    timeline.call(() => {
      runtime.current.phase = "orbit";
    });
    timeline.to(runtime.current, { orbit: 1, cameraPush: 0.65, intensity: 0.98, duration: seconds(3.2), ease: "sine.inOut" });

    timeline.call(() => {
      runtime.current.phase = "collapse";
    });
    timeline.to(runtime.current, { collapse: 1, orbit: 2.1, cameraPush: 1, intensity: 1.22, duration: seconds(1.35), ease: "power3.in" });

    timeline.call(() => {
      runtime.current.phase = "signature";
    });
    timeline.to(runtime.current, { signature: 1, intensity: 0.82, duration: seconds(0.25), ease: "power2.out" });
    timeline.to({}, { duration: seconds(1.25) });
    timeline.call(() => {
      runtime.current.phase = "disperse";
      particleApi.current?.disperse();
    });
    timeline.to(runtime.current, { collapse: 0, orbit: 0, cameraPush: 0, intensity: 0.88, signature: 1, duration: seconds(1.55), ease: "sine.inOut" });

    return () => {
      killed = true;
      timeline.kill();
    };
  }, [onActiveWord, onTypedText, particleApi, runtime, words]);

  return null;
}
