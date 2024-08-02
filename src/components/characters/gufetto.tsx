import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

const Gufetto: React.FC = () => {
  const { scene, animations } = useGLTF(
    "/assets/three_models/gufetto/scene.gltf",
  );
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (animations.length) {
      mixerRef.current = new AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [scene, animations]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return <primitive object={scene} position={[0.05, 2, 2]} />;
};

export default Gufetto;
