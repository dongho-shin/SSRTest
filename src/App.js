import { useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  Preload
} from "@react-three/drei";
import { Effects } from "../src/Effect.js";

export default function App() {
  return (
    <Canvas
      gl={{ antialias: false, stencil: false, logarithmicDepthBuffer: true }}
      camera={{ position: [500, 300, 0], fov: 45 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Darth />
      <Environment
        files={
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/poly_haven_studio_1k.hdr"
        }
        background
        intensity={0.5}
      />
      <Effects />
      <OrbitControls makeDefault />
      <Preload all />
    </Canvas>
  );
}

function Darth({ ...props }) {
  const { scene } = useGLTF("/coffee_machine_table.glb");
  useLayoutEffect(() => {
    scene.position.set(0, 0, 0);
  }, [scene]);
  return <primitive object={scene} {...props} />;
}
