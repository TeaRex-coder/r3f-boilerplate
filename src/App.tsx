import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";

const App = () => {
  return (
    <div className="App">
      <Canvas camera={{ position: [5, 2, 3], fov: 60 }}>
        <color attach="background" args={["#ffffff"]} />
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
