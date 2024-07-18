'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

export function Can(props) {
  const { nodes, materials } = useGLTF('/Model/can-transformed.glb')
  const CanRef = useRef()
  const router = useRouter();
  const handleClick = () => {
    console.log("click")
    gsap.to(CanRef.current.position , {
      z: 2,
      duration: 5,
      delay: 0.5, 
      onComplete : ()=>{
        router.push("/xyz")
      }
    })   
    
  }

  return (
    <group {...props} dispose={null}>
      <group ref={CanRef}>
        <mesh geometry={nodes.coco_cola_Material001_0.geometry} material={materials['Material.001']} position={[0.084, 2.025, 0.211]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.743, 0.743, 1.15]} />
        <mesh geometry={nodes.coco_cola_Stainless_Steel_0.geometry} position={[0.084, 2.025, 0.211]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.743, 0.743, 1.15]} material-color={"red"}
          onClick={handleClick}
        />
        <mesh geometry={nodes.coco_cola_Steel_Procedural_0.geometry} material={materials.Steel_Procedural} position={[0.084, 2.025, 0.211]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.743, 0.743, 1.15]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Model/can-transformed.glb')
