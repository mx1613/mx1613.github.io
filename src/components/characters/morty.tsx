

import React, { useEffect, useRef } from 'react';

import {useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';

const Rick: React.FC = () => {
    const character = useFBX('/assets/three_models/mortys/Falling_Morty.fbx');
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
  
    return <primitive object={character} position={[-80, -70, -45]} scale={0.7} />;
  };
  

export default Rick;