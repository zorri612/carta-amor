"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
        },
      }}
    />
  );
}