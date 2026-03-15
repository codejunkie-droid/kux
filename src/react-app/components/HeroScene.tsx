import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Sparkles } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function Sculpture() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const targetX = state.mouse.y * 0.4 + Math.sin(t * 0.3) * 0.1;
    const targetY = state.mouse.x * 0.6 + Math.cos(t * 0.25) * 0.1;

    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.06);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.06);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t * 0.2) * 0.08, 0.04);
    group.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.15, 0.38, 260, 32]} />
        <meshPhysicalMaterial
          color="#d7b26d"
          metalness={0.9}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.12}
        />
      </mesh>

      <mesh position={[2.1, 0.8, -1.4]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#1cc8b7"
          emissive="#1cc8b7"
          emissiveIntensity={0.35}
          metalness={0.35}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[-2.0, -0.6, 0.8]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#ff7a59"
          emissive="#ff7a59"
          emissiveIntensity={0.2}
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.5], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} />
        <pointLight position={[-6, -2, 4]} intensity={0.6} />

        <Float speed={1.1} rotationIntensity={0.8} floatIntensity={1.2}>
          <Sculpture />
        </Float>

        <Sparkles count={90} size={1.8} speed={0.4} opacity={0.6} scale={[10, 6, 6]} />

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.35}
          scale={9}
          blur={2.6}
          far={4}
        />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
