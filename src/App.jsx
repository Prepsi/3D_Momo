// You'll need a few things such as:
// react-three/fiber [https://r3f.docs.pmnd.rs/getting-started/introduction]
// react-three/drei [https://github.com/pmndrs/drei]
// pmndrs/gltfjsx [https://github.com/pmndrs/gltfjsx]

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./components/Momo_bmo_Transformed";

import "./App.css";
import { Suspense } from "react";
import { AmbientLight } from "three";

function App() {
  return (
    <div className="mainContents">
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          {/* If you want to see the full model */}
          {/* <AmbientLight/> */}
          <pointLight
            position={[0, 0, 2]}
            intensity={2}
            rotateOnWorldAxis={[2, 3, 1]}
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
