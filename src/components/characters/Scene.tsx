import React from 'react';

import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera} from '@react-three/drei';

import Walle from './walle';

const BACKGROUNCOLOR_LIGHT = '#f0f0f0';
const BACKGROUNCOLOR_DARK = '#0f172a';
interface ThreeDSceneProps {
  className?: string;
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas >
      <OrthographicCamera makeDefault position={[0, -2, 15]} zoom={50} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 2, 1]} />
      <pointLight position={[0, 2, 1]} />
      <Walle />
        <OrbitControls enableDamping={true} zoomToCursor={true}/>
      </Canvas>
    </div>
  );
};

export default ThreeDScene;