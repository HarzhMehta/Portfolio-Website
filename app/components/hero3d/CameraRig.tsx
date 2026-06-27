"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector2, Vector3 } from "three";
import type { HeroRuntime } from "./types";

type CameraRigProps = {
  runtime: React.MutableRefObject<HeroRuntime>;
};

export default function CameraRig({ runtime }: CameraRigProps) {
  const { camera, gl } = useThree();
  const mouse = useRef(new Vector2());
  const target = useRef(new Vector3(0, 0, 7));

  useEffect(() => {
    const element = gl.domElement;
    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    element.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => element.removeEventListener("pointermove", onPointerMove);
  }, [gl]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const push = runtime.current.cameraPush;
    target.current.set(
      Math.sin(t * 0.08) * 0.48 + mouse.current.x * 0.34,
      Math.cos(t * 0.07) * 0.28 - mouse.current.y * 0.22,
      7 - push * 3.2,
    );

    camera.position.lerp(target.current, Math.min(1, delta * 1.7));
    camera.lookAt(mouse.current.x * 0.42, -mouse.current.y * 0.26, -2.6);
  });

  return null;
}
