import React, { useEffect, useRef } from 'react';

import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';


const BACKGROUNCOLOR = '#FFFFFF';
const GRIDCOLOR = '#222222';

const Rick: React.FC = () => {
  const character = useFBX('/assets/three_models/ricks/Twerking_Rick.fbx');
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

  return <primitive object={character} scale={0.005} />;
};

const SetCamera: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 3.0; 
    camera.position.y = 1;
    camera.position.x = 0;
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const ThreeDAnimation: React.FC = () => {
  return (
    <Canvas  camera={{ position: [0, 0, 5] }} style={{ backgroundColor: BACKGROUNCOLOR }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 2, 1]} />
      <pointLight position={[0, 2, 1]} />
      <gridHelper args={[10, 10, GRIDCOLOR]} position={[0, -0.8, 0]} />
      <Rick />
      <OrbitControls />
      <SetCamera />
    </Canvas>
  );
};

export default ThreeDAnimation;