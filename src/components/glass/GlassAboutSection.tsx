"use client";

import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import type { Mesh } from 'three'; // Mesh 型をインポート

// 回転する TorusKnot コンポーネント
const AnimatedTorusKnot = () => {
  const meshRef = useRef<Mesh>(null!); // THREE.Mesh の代わりに Mesh を使用
  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
  });
  return (
    <TorusKnot ref={meshRef} args={[0.8, 0.25, 100, 16]} scale={1.5}>
      <meshStandardMaterial color="#a855f7" roughness={0.1} metalness={0.2} />
    </TorusKnot>
  );
};


const GlassAboutSection = () => {
  // text2 を削除し、text4, text5 を追加
  const { title, icons, text1, text3, text4, text5 } = siteContent.about;
  const GlassIcon = icons.glass;

  return (
    // 元のレイアウトに戻す: flex items-center justify-center を追加
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-glass-primary py-20 md:py-32 px-4 text-white">
      {/* 3D背景の div を削除 */}

      {/* 元の2カラムグリッドレイアウトに戻す */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* 左側: テキストコンテンツ (グラスパネル) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          {/* h2 のテキスト色を text-glass-panel に変更 */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white flex items-center gap-3">
            <GlassIcon className="text-purple-400" /> {/* アイコン色はアクセントのまま */}
            {title}
          </h2>
          {/* 本文のテキスト色を text-glass-panel-muted に変更 */}
          <div className="space-y-4 text-lg text-white leading-relaxed">
            {/* text1, text3, text4, text5 を表示 */}
            <p>{text1}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
          </div>
        </motion.div>

        {/* 右側: 3D要素を再追加 */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="h-80 md:h-96 w-full"
        >
           <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
             <Suspense fallback={null}>
               <ambientLight intensity={0.6} />
               <directionalLight position={[5, 5, 5]} intensity={1} />
               <pointLight position={[-5, -5, -5]} intensity={0.5} />
               <AnimatedTorusKnot />
               <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
             </Suspense>
           </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default GlassAboutSection;
