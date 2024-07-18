'use client'
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import {Can} from "./Can"
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
export default function Home() {
  const target = useRef(null)
  return (
    <main className="flex h-screen items-center justify-between" ref={target}>
      <Canvas eventPrefix="client" eventSource={target.current}>
        <OrbitControls />  
        <ambientLight intensity={10}/>
        <Can/>
      </Canvas>
    </main>
  );
}
