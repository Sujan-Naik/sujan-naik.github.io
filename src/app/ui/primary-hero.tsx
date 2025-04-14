// components/PrimaryHero.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const PrimaryHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    if (containerRef.current) {
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); // White light at half intensity
scene.add(ambientLight);

    scene.add(cube);

    const loader = new GLTFLoader();


    loader.load( 'character.glb', function ( gltf ) {

      scene.add( gltf.scene );

    }, undefined, function ( error ) {

      console.error( error );

    } );


    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (containerRef.current) {
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      <h2 style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem' }}>
        I'm a Video Game and Web Developer with a variety of skills
      </h2>
    </div>
  );
};

export default PrimaryHero;