"use client";

import { useFrame } from "@react-three/fiber";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  DynamicDrawUsage,
  InstancedMesh,
  Material,
  Matrix4,
  Object3D,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
} from "three";
import { createParticle, shapeTarget, wordTargets } from "./particles";
import type { HeroRuntime, ParticleApi, ParticleShape } from "./types";

type ParticleSystemProps = {
  runtime: React.MutableRefObject<HeroRuntime>;
  count?: number;
};

const vertexShader = `
  attribute vec3 instanceColor;
  attribute float instanceSeed;
  varying vec3 vColor;
  varying float vSeed;

  void main() {
    vColor = instanceColor;
    vSeed = instanceSeed;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform float uIntensity;
  varying vec3 vColor;
  varying float vSeed;

  void main() {
    float pulse = 0.85 + sin(uTime * 2.1 + vSeed * 14.17) * 0.15;
    float alpha = clamp(pulse * uIntensity, 0.25, 0.95);
    gl_FragColor = vec4(vColor, alpha);
  }
`;

function makeMaterial() {
  return new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: 0.88 },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
}

const ParticleSystem = forwardRef<ParticleApi, ParticleSystemProps>(
  ({ runtime, count = 2800 }, ref) => {
    const mesh = useRef<InstancedMesh<BufferGeometry, Material | Material[]>>(null);
    const cursor = useRef(0);
    const dummy = useMemo(() => new Object3D(), []);
    const matrix = useMemo(() => new Matrix4(), []);
    const center = useMemo(() => new Vector3(0, 0, -2.2), []);
    const particles = useMemo(
      () => Array.from({ length: count }, (_, index) => createParticle(index + 1)),
      [count],
    );

    const geometry = useMemo(() => new SphereGeometry(1, 8, 8), []);
    const material = useMemo(makeMaterial, []);

    useImperativeHandle(
      ref,
      () => ({
        addWord(word: string) {
          const amount = Math.min(170, Math.max(72, word.length * 18));
          const targets = wordTargets(word, amount, cursor.current + 100);

          for (let i = 0; i < amount; i += 1) {
            const slot = cursor.current % count;
            const particle = particles[slot];
            particle.alive = true;
            particle.base.copy(targets[i]).add(new Vector3(0, 0, 0.22));
            particle.target.copy(targets[i]);
            particle.velocity.copy(shapeTarget("field", slot, count)).multiplyScalar(0.002);
            cursor.current += 1;
          }
        },
        disperse() {
          runtime.current.shape = "field";
          runtime.current.collapse = 0;
          particles.forEach((particle, index) => {
            particle.target.copy(shapeTarget("field", index, count));
            particle.velocity.copy(shapeTarget("field", index + 11, count)).normalize().multiplyScalar(0.01);
          });
        },
        setShape(shape: ParticleShape) {
          runtime.current.shape = shape;
        },
      }),
      [count, particles, runtime],
    );

    useFrame((state, delta) => {
      const meshRef = mesh.current;
      if (!meshRef) {
        return;
      }

      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uIntensity.value = runtime.current.intensity;

      const time = state.clock.elapsedTime;
      const collapse = runtime.current.collapse;
      const orbit = runtime.current.orbit;
      const liveCount = Math.min(cursor.current, count);

      for (let i = 0; i < liveCount; i += 1) {
        const particle = particles[i];
        if (!particle.alive) {
          matrix.makeScale(0, 0, 0);
          meshRef.setMatrixAt(i, matrix);
          continue;
        }

        const shape = shapeTarget(runtime.current.shape, i, count);
        particle.target.lerp(shape, Math.min(1, delta * 0.7));
        particle.base.lerp(particle.target, Math.min(1, delta * (1.4 + runtime.current.intensity)));

        if (orbit > 0.01) {
          const angle = time * (0.08 + particle.seed * 0.00004) + particle.seed;
          particle.base.x += Math.cos(angle) * 0.004 * orbit;
          particle.base.z += Math.sin(angle) * 0.006 * orbit;
        }

        const position = particle.base.clone().lerp(center, collapse);
        const breathe = 1 + Math.sin(time * 1.6 + particle.seed) * 0.18;
        const scale = particle.scale * breathe * (1 + collapse * 2.2);

        dummy.position.copy(position);
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        meshRef.setMatrixAt(i, dummy.matrix);
      }

      meshRef.count = Math.max(1, liveCount);
      meshRef.instanceMatrix.needsUpdate = true;
    });

    return (
      <instancedMesh
        ref={(node) => {
          mesh.current = node;
          if (node) {
            node.instanceMatrix.setUsage(DynamicDrawUsage);
          }
        }}
        args={[geometry, material, count]}
        frustumCulled={false}
      />
    );
  },
);

ParticleSystem.displayName = "ParticleSystem";

export default ParticleSystem;
