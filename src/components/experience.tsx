import { OrbitControls, Stage } from "@react-three/drei";

import Cube from "./cube";

const Experience = () => {
  return (
    <Stage adjustCamera={false} intensity={0.1}>
      <OrbitControls makeDefault />
      <Cube />
    </Stage>
  );
};

export default Experience;
