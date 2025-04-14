"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { siteContent } from '@/data/content';

// カーソル追従エフェクト用カスタムフック (簡易版)
const useFollowPointer = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return { x: springX, y: springY };
};

// タイプライターアニメーション用カスタムフック (簡易版)
const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    setDisplayText(''); // テキストが変わったらリセット
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);
  return displayText;
};


const FactoryHeroSection = () => {
  const name = siteContent.name;
  const jobTitle = siteContent.jobTitle;
  const { x, y } = useFollowPointer();
  const typedJobTitle = useTypewriter(jobTitle, 80); // タイプライター速度調整

  // windowのサイズをstateで管理
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // クライアントサイドでのみ実行
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []); // マウント時に一度だけ実行

  // カーソル位置に基づいて要素を動かす
  // stateのサイズ情報を使用し、初期値0の場合のフォールバックを追加
  const rotateX = useTransform(y, [0, windowSize.height || 1], [10, -10]);
  const rotateY = useTransform(x, [0, windowSize.width || 1], [-10, 10]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-black relative overflow-hidden px-4">
      {/* カーソル追従エフェクト要素 (例: 黄色い円) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-yellow-400 rounded-full pointer-events-none z-[998]" // 最前面近くに
        style={{ x, y, translateX: '-50%', translateY: '-50%' }} // カーソル中心に配置
      />

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 左側: テキスト */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="z-10"
        >
          {/* 名前 (セリフ体) */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-2 leading-none">
            {name}
          </h1>
          {/* 肩書き (タイプライター風、サンセリフ体) */}
          <p className="text-xl md:text-2xl text-gray-600 font-sans h-8 mb-8"> {/* 高さを固定してガタつき防止 */}
            {typedJobTitle}
            <span className="animate-ping">_</span> {/* カーソル点滅 */}
          </p>
          {/* ボタン */}
          <Link href="/factory#projects" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, letterSpacing: "0.05em" }} // ホバーエフェクト
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-sans font-semibold uppercase text-sm tracking-wider cursor-pointer"
            >
              View Projects <FaArrowRight />
            </motion.a>
          </Link>
        </motion.div>

        {/* 右側: 装飾要素 (例: グリッド線と回転するテキスト) */}
        <motion.div
          className="hidden md:flex justify-center items-center relative h-64"
          style={{ rotateX, rotateY, perspective: 1000 }} // 3D的な動き
        >
           {/* グリッド線 */}
           <div className="absolute inset-0 opacity-30" style={{
             backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}></div>
           {/* 回転するテキスト */}
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute text-8xl font-serif font-bold text-yellow-400 opacity-80"
           >
             {name.split(" ")[0]} {/* 名前の最初の単語 */}
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactoryHeroSection;
