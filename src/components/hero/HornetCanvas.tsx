"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, AdaptiveDpr } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import HornetModel from "@/components/hero/HornetModel";

export default function HornetCanvas() {
  const [quality, setQuality] = useState<"high" | "low">("high");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const small = window.matchMedia("(max-width: 768px)");
    const cores = navigator.hardwareConcurrency ?? 8;
    setQuality(small.matches || cores <= 4 ? "low" : "high");
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 38 }}
      dpr={[1, quality === "high" ? 1.8 : 1.4]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ touchAction: "pan-y" }}
      frameloop={reduced ? "demand" : "always"}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 6, 8]} intensity={2.2} color="#fff2e9" />
        <directionalLight position={[-6, -2, -4]} intensity={0.8} color="#ff7a47" />
        <pointLight position={[0, 0, 6]} intensity={1.1} color="#ea5b29" />

        <HornetModel quality={quality} reducedMotion={reduced} />

        {/* Procedural environment for metallic reflections — no external HDR fetch */}
        <Environment resolution={quality === "high" ? 256 : 128}>
          <Lightformer
            form="rect"
            intensity={2}
            position={[0, 3, 4]}
            scale={[8, 3, 1]}
            color="#fff0e6"
          />
          <Lightformer
            form="rect"
            intensity={1.4}
            position={[-4, -2, 2]}
            scale={[5, 5, 1]}
            color="#ff7a47"
          />
          <Lightformer
            form="circle"
            intensity={1.6}
            position={[4, 1, -3]}
            scale={[4, 4, 1]}
            color="#ea5b29"
          />
        </Environment>

        <AdaptiveDpr pixelated />
      </Suspense>
    </Canvas>
  );
}
