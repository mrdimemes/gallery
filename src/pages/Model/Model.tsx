import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model as Model1 } from "components/models/1";


const Model = () => {
  const { modelId } = useParams();

  return (
    <Canvas
      style={{
        height: "100vh"
      }}
      camera={{
        fov: 90,
        position: [0, 0, 4]
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <OrbitControls />
      <Model1 />
    </Canvas>
  );
}


export default Model;
