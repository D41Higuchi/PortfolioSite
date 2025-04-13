"use client";

import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three'; // Mesh 型をインポート

// 回転する3D球体コンポーネント
const AnimatedSphere = () => {
  const sphereRef = useRef<Mesh>(null!); // THREE.Mesh の代わりに Mesh を使用
  useFrame(() => {
    sphereRef.current.rotation.x += 0.001;
    sphereRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={1.8}>
      <MeshDistortMaterial
        color="#8a2be2"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
      />
    </Sphere>
  );
};

const GlassHeroSection = () => {
  const name = "Your Name";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* 3D背景 */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <AnimatedSphere />
            {/* <OrbitControls enableZoom={false} autoRotate /> */}
          </Suspense>
        </Canvas>
      </div>

      {/* 前景コンテンツ (グラスモーフィズム) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-lg max-w-xl mx-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Freelance Engineer
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 150 }}
        >
          <Link href="/glass#projects" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 border border-white/30 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-white/30"
            >
              View My Work
              <FaArrowRight />
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GlassHeroSection;
