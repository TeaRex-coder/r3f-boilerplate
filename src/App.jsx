import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#ffffff"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
