import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelBuilder from './ModelBuilder.jsx';

const RedHorse = () => {
  return (
    <div className="loc-modal-red">
      <Canvas
        camera={{ position: [0, 0, 5], up: [0, 1, 0], near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[1, 1, 1]} />
        
        {/* ModelBuilder component with rotation */}
        <ModelBuilder path="/RedHorse.glb" position={[0, 0, 0]} animationSpeed={1.2}/>
        
        <OrbitControls
          enableZoom={true}
          minDistance={30}
          maxDistance={40}
          enablePan={true}
          target={[0, 1, 0]}  // Focus on the center of the model
          maxPolarAngle={Math.PI / 2}  // Limit vertical rotation to top-down view
        />
      </Canvas>
    </div>
  );
};

export default RedHorse;
