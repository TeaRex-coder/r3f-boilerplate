import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";

import Cube from "./Cube";

const Experience = () => {
  return (
    <Stage>
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

      <Suspense fallback={null}>
        <Cube />
      </Suspense>
    </Stage>
  );
};

export default Experience;
