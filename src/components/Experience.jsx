"use client";

const { OrbitControls, Cube } = require("@react-three/drei");
const { Canvas } = require("@react-three/fiber");

const Experience = () => {
  return (
    <Canvas className="canvas1">
      <OrbitControls
        enableZoom={true}
        enableRotate={true}
        zoomSpeed={1}
        rotateSpeed={1}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.9} //how long can you go
        enableDamping={true}
        dampingFactor={0.025} //speed of move up and down
        autoRotate={false}
        minDistance={1} //max zoom in
        maxDistance={15} //max zoom out
      />
      <ambientLight intensity={2} />
      <Cube />
    </Canvas>
  );
};

export default Experience;
