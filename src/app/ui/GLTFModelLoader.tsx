"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationClip, AnimationMixer, Group, Object3DEventMap } from 'three';
import { GLTF, GLTFLoader } from 'three-stdlib';

// Type for GLTFModelLoader props
interface GLTFModelLoaderProps {
  url: string;
}

// Main component for loading and rendering the GLTF model
const GLTFModelLoader: React.FC<GLTFModelLoaderProps> = ({ url }) => {
  const [model, setModel] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [mixer, setMixer] = useState<AnimationMixer | null>(null); // State for mixer

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

  const displayedModel: GLTF = model;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 5]} />
        <Model
          scene={displayedModel.scene}
          animations={displayedModel.animations}
          onMixerChange={setMixer} // Pass setMixer function
        />
        <OrbitControls />
      </Canvas>
      <AnimationControls
        animations={displayedModel.animations}
        mixer={mixer} // Pass the mixer down to the controls
      />
    </div>
  );
};

// Model component to handle rendering the 3D model with animations
const Model: React.FC<{ scene: Group<Object3DEventMap>; animations: AnimationClip[]; onMixerChange: (mixer: AnimationMixer) => void }> = ({ scene, animations, onMixerChange }) => {
  const mixerRef = useRef<AnimationMixer>(new AnimationMixer(scene));

  useEffect(() => {
    if (animations.length > 0) {
      animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play();
      });
    }

    onMixerChange(mixerRef.current); // Pass mixer to parent component

    return () => {
      mixerRef.current.stopAllAction(); // Stop all animations on unmount
    };
  }, [animations, scene, onMixerChange]);

  useFrame((state, delta) => {
    mixerRef.current.update(delta); // Update the animation mixer
  });

  return <primitive object={scene} />;
};

// Animation controls component to handle UI buttons for animation
const AnimationControls: React.FC<{ animations: AnimationClip[]; mixer: AnimationMixer | null }> = ({ animations, mixer }) => {
  const currentAnimationRef = useRef<AnimationClip | null>(null);

  const handleAnimation = (animation: AnimationClip) => {
    if (currentAnimationRef.current) {
      // Stop the currently playing animation
      mixer?.stopAllAction();
    }

    // Play the new animation
    const action = mixer?.clipAction(animation);
    action?.play();

    // Set the current animation reference to the new one
    currentAnimationRef.current = animation;
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
      {animations.map((animation: AnimationClip, index: number) => (
        <button
          key={index}
          onClick={() => handleAnimation(animation)}>
          {animation.name}
        </button>
      ))}
    </div>
  );
};

export default GLTFModelLoader;