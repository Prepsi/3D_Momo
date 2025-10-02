import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/momo_bmo-transformed.glb");
  // const momoTexture = useTexture("/MOMO_TEXTURE_Macintosh.png");

  return (
    <group {...props} dispose={null}>
      <mesh
        rotation={[0, 4.7, 0]}
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 0, 0]}
        scale={[1.172, 2.416, 2.183]}
      />
    </group>
  );
}

useGLTF.preload("/momo_bmo-transformed.glb");
