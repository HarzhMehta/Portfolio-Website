"use client";

import { useEffect, useRef } from "react";

const NEON_COLORS = [
  "#ff00ff", "#00ffff", "#ff3366", "#39ff14",
  "#ff6600", "#DDFF00", "#bf00ff", "#00ff99",
  "#ff0044", "#00e5ff", "#ffe600", "#ff1493",
  "#7b68ee",
];

interface Dot {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  da: number;
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createDot(w: number, h: number): Dot {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: randomBetween(0.5, 3),
    vx: randomBetween(0.05, 0.4),
    vy: randomBetween(-0.15, 0.15),
    color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
    alpha: randomBetween(0.1, 0.7),
    da: randomBetween(0.002, 0.008),
  };
}

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let dots: Dot[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function init() {
      resize();
      const count = Math.max(40, Math.floor((canvas!.width * canvas!.height) / 18000));
      dots = Array.from({ length: count }, () => createDot(canvas!.width, canvas!.height));
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.alpha += d.da;
        if (d.alpha >= 0.7 || d.alpha <= 0.05) d.da *= -1;

        if (d.x > canvas!.width + 5) {
          d.x = -5;
          d.y = Math.random() * canvas!.height;
        }
        if (d.y < -5 || d.y > canvas!.height + 5) {
          d.y = d.y < -5 ? canvas!.height + 4 : -4;
        }

        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = d.color;
        ctx!.globalAlpha = d.alpha;
        ctx!.shadowColor = d.color;
        ctx!.shadowBlur = 8;
        ctx!.fill();
        ctx!.shadowBlur = 0;
        ctx!.globalAlpha = 1;
      }

      ctx!.globalAlpha = 0.03;
      ctx!.strokeStyle = "#ffffff";
      ctx!.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          if (dx * dx + dy * dy < 22000) {
            ctx!.beginPath();
            ctx!.moveTo(dots[i].x, dots[i].y);
            ctx!.lineTo(dots[j].x, dots[j].y);
            ctx!.stroke();
          }
        }
      }
      ctx!.globalAlpha = 1;

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
