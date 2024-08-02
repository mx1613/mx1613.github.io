import React, { useEffect, useRef } from "react";

import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

const RubikCube: React.FC = () => {
  const character = useFBX("/assets/three_models/rubik/Rubik_cube.fbx");
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (character.animations.length) {
      mixerRef.current = new AnimationMixer(character);
      const action = mixerRef.current.clipAction(character.animations[0]);
      action.play();
    }

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [character]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });
  const mesh = character.children[3];
  mesh.scale.set(0.1, 0.1, 0.1);

  return <primitive object={character} position={[3, 0, -2]} />;
};

export default RubikCube;
