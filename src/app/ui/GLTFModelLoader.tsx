"use client"
import React, {useEffect, useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {AnimationClip, AnimationMixer, Box3, Group, Vector3} from 'three';
import {GLTF, GLTFLoader} from 'three-stdlib';
import PrimarySelect from "@/app/ui/components/Select/primary-select";

interface GLTFModelLoaderProps {
    url: string;
}

const GLTFModelLoader: React.FC<GLTFModelLoaderProps> = ({url}) => {
    const [model, setModel] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [mixer, setMixer] = useState<AnimationMixer | null>(null);

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            (gltf) => {
                setModel(gltf);
            },
            undefined,
            (error) => {
                console.error(error);
                setError('Failed to load model');
            }
        );

    }, [url]);

    if (error) {
        return <div>{error}</div>; // Display loading error
    }

    if (!model) {
        return <div>Loading...</div>; // Loading state
    }

    const displayedModel: GLTF = model;

    return (
        <div>
            <AnimationControls
                animations={displayedModel.animations}
                mixer={mixer} // Pass the mixer down to the controls
            />

            <div className={"flex justify-center primary-card"}>
            <Canvas className={"canvas "} style={{
                width: '80%',
                height: '70vh',
                display: 'block',

            }}>

                <ambientLight/>
                <directionalLight position={[10, 10, 5]}/>
                <Model
                    scene={displayedModel.scene}
                    animations={displayedModel.animations}
                    onMixerChange={setMixer} // Pass setMixer function
                />
                <OrbitControls/>
            </Canvas>
            </div>
        </div>
    );
};

const Model: React.FC<{
    scene: Group;
    animations: AnimationClip[];
    onMixerChange: (mixer: AnimationMixer) => void;
}> = ({scene, animations, onMixerChange}) => {
    const mixerRef = useRef<AnimationMixer>(new AnimationMixer(scene));

    useEffect(() => {
        if (animations.length > 0) {
            animations.forEach((clip) => {
                mixerRef.current.clipAction(clip).play();
            });
        }

        // Calculate the bounding box to center the model
        const boundingBox = new Box3().setFromObject(scene);
        const center = boundingBox.getCenter(new Vector3());
        // Move the model to the center of the scene
        scene.position.set(-center.x, -center.y, -center.z); // Invert the center to position it correctly at the origin

        // Scale the model
        const scaleFactor = 1; // Change this value to scale larger (e.g., 2 for double the size)
        scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        onMixerChange(mixerRef.current); // Pass mixer to parent component

        return () => {
            mixerRef.current.stopAllAction(); // Stop all animations on unmount
        };
    }, [animations, scene, onMixerChange]);

    useFrame((state, delta) => {
        mixerRef.current.update(delta); // Update the animation mixer
    });

    return <primitive object={scene}/>;
};

// Animation controls component to handle UI buttons for animation
const AnimationControls: React.FC<{ animations: AnimationClip[]; mixer: AnimationMixer | null }> = ({
                                                                                                        animations,
                                                                                                        mixer
                                                                                                    }) => {
    const currentAnimationRef = useRef<AnimationClip | null>(null);

    const handleAnimationChange = (selectedAnimationName: string) => {
        const selectedAnimation = animations.find(animation => animation.name === selectedAnimationName);

        if (currentAnimationRef.current) {
            // Stop the currently playing animation
            mixer?.stopAllAction();
        }

        // Play the new animation if found
        if (selectedAnimation) {
            const action = mixer?.clipAction(selectedAnimation);
            action?.play();

            // Set the current animation reference to the new one
            currentAnimationRef.current = selectedAnimation;
        }
    };

    return (
        <div

        >
            <PrimarySelect
                options={animations.map(animation => animation.name)}
                description="Select Animation"
                onChange={(e) => handleAnimationChange(e.target.value)} // Handle change
            />
        </div>
    );
};

export default GLTFModelLoader;