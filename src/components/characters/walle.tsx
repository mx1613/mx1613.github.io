import React, { useEffect, useRef } from 'react';

import {useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const Walle: React.FC = () => {
    const character = useFBX('/assets/three_models/wall_e/wall_e.fbx');
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
  
  return <primitive object={character} scale={0.01} position={[0,-3,0]} />;
  };
  

export default Walle;