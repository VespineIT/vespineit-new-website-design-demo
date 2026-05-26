"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";
import { HORNET_SVG } from "@/components/three/hornetPath";

type Props = {
  quality?: "high" | "low";
  reducedMotion?: boolean;
};

export default function HornetModel({
  quality = "high",
  reducedMotion = false,
}: Props) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const geometry = useMemo(() => {
    const loader = new SVGLoader();
    const { paths } = loader.parse(HORNET_SVG);

    const shapes: THREE.Shape[] = [];
    for (const p of paths) {
      // isCCW=false keeps potrace's even-odd holes correct
      const s = SVGLoader.createShapes(p);
      shapes.push(...s);
    }

    const curve = quality === "high" ? 10 : 5;
    const bevelSeg = quality === "high" ? 2 : 1;

    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 26,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 4,
      bevelOffset: 0,
      bevelSegments: bevelSeg,
      curveSegments: curve,
    });

    // SVG space is y-down → flip to y-up, then center on origin.
    geo.scale(1, -1, 1);
    geo.computeBoundingBox();
    const bb = geo.boundingBox!;
    const cx = (bb.max.x + bb.min.x) / 2;
    const cy = (bb.max.y + bb.min.y) / 2;
    const cz = (bb.max.z + bb.min.z) / 2;
    geo.translate(-cx, -cy, -cz);

    // Normalize to a consistent on-screen size.
    const size = new THREE.Vector3();
    bb.getSize(size);
    const target = 6.2;
    const scale = target / Math.max(size.x, size.y);
    geo.scale(scale, scale, scale);
    geo.computeVertexNormals();

    return geo;
  }, [quality]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const g = group.current;
    if (reducedMotion) {
      // gentle fixed 3/4 pose, no spin
      g.rotation.y = -0.5;
      g.rotation.x = -0.12;
      return;
    }
    // continuous slow spin
    g.rotation.y += delta * 0.35;
    // subtle parallax toward pointer
    const tx = pointer.y * 0.18;
    const tz = pointer.x * 0.1;
    g.rotation.x += (tx - g.rotation.x) * 0.05;
    g.rotation.z += (-tz - g.rotation.z) * 0.05;
    // breathing float
    g.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={group} dispose={null}>
      <mesh geometry={geometry} castShadow>
        <meshStandardMaterial
          color="#ea5b29"
          metalness={0.92}
          roughness={0.34}
          emissive="#c7491d"
          emissiveIntensity={0.12}
          envMapIntensity={1.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
