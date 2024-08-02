import React, { useEffect, useRef } from "react";

import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

const Rick: React.FC = () => {
  const character = useFBX("/assets/three_models/ricks/Twerking_Rick.fbx");
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (character.animations.length) {
      mixerRef.current = new AnimationMixer(character);
      const action = mixerRef.current.clipAction(character.animations[1]);
      action.play();
    }

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [character]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return <primitive object={character} position={[30, 0, -20]} />;
};

export default Rick;
