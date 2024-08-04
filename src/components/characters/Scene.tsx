import React from "react";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Walle from "./walle";

interface ThreeDSceneProps {
  className?: string;
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas>
        <OrthographicCamera makeDefault position={[5, 5, 22]} zoom={50} />
        <ambientLight intensity={1} />
        <directionalLight position={[0, 2, 1]} />
        <pointLight position={[0, 2, 1]} />
        <Walle />
        <OrbitControls enableDamping={true} zoomToCursor={true} />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
