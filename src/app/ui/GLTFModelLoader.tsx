"use client";
import React, { useEffect, useState } from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import {GLTFLoader} from "three-stdlib";

// Type for GLTFModelLoader props
interface GLTFModelLoaderProps {
  url: string;
}

// Main component for loading and rendering the GLTF model
const GLTFModelLoader: React.FC<GLTFModelLoaderProps> = ({ url }) => {
  const [model, setModel] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        setModel(gltf); // Set the loaded GLTF model
      },
      undefined,
      (error) => {
        console.error(error);
        setError('Failed to load model');
      }
    );

    // Cleanup if necessary
    return () => {
      // Handle any cleanup if required
    };
  }, [url]);

  if (error) {
    return <div>{error}</div>; // Display loading error
  }

  if (!model) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 5]} />
        <Model scene={model.scene} animations={model.animations} />
        <OrbitControls />
      </Canvas>
      <AnimationControls scene={model.scene} animations={model.animations} />
    </div>
  );
};

// Model component to handle rendering the 3D model with animations
const Model: React.FC<{ scene: any; animations: any[] }> = ({ scene, animations }) => {
  const mixerRef = React.useRef<AnimationMixer | null>(new AnimationMixer(scene));

  useEffect(() => {
    if (animations.length > 0) {
      animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip).play();
      });
    }

    return () => {
      // Clean up the mixer when the component unmounts
      mixerRef.current = null;
    };
  }, [animations]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta); // Update the animation mixer
  });

  return <primitive object={scene} />;
};

// Animation controls component to handle UI buttons for animation
const AnimationControls: React.FC<{ animations: any[]; scene: any }> = ({ animations }) => {
  const handleAnimation = (animation: any) => {
    if (animation && animations) {
      console.log(animation.type)
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 10,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      {animations.map((animation: any, index: number) => {
        return (
          <button
            key={index}
            onClick={() => handleAnimation(animation)}>
            {animation.name}
          </button>
        );
      })}
    </div>
  );
};

export default GLTFModelLoader;