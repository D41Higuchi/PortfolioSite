"use client";

import React, { useRef, forwardRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { siteContent } from '@/data/content';

const nameContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const nameLetterVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

// forwardRef でラップされたコンポーネントを作成
const ForwardedAnchor = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>((props, ref) => <a ref={ref} {...props} />);
// コンポーネントに displayName を設定
ForwardedAnchor.displayName = 'ForwardedAnchor';
// motion でラップ
const MotionAnchor = motion(ForwardedAnchor);

// アニメーションする円の定義 (HeroSectionの外に移動)
const AnimatedCircle = ({ size, color, initialX, initialY, delay }: { size: number, color: string, initialX: string, initialY: string, delay: number }) => {
  const variants = {
    animate: {
      // 初期位置からの相対的な移動ではなく、絶対位置を基準に動かすように調整
      x: [`${initialX}`, `calc(${initialX} + ${Math.random() * 40 - 20}px)`],
      y: [`${initialY}`, `calc(${initialY} + ${Math.random() * 40 - 20}px)`],
      scale: [1, 1.05, 1], // 少し拡大縮小
      transition: {
        duration: Math.random() * 10 + 10, // 10-20秒のランダムな時間
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={`absolute rounded-full filter blur-2xl opacity-40`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        // styleに直接初期位置を設定
        top: initialY,
        left: initialX,
      }}
      variants={variants}
      animate="animate"
    />
  );
};


const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const name = siteContent.name;
  const jobTitle = siteContent.jobTitle;

  // 円の定義
  const circles = [
    { size: 200, color: 'rgba(236, 72, 153, 0.6)', initialX: '10%', initialY: '20%', delay: 0 }, // Pinkish
    { size: 300, color: 'rgba(167, 139, 250, 0.6)', initialX: '70%', initialY: '15%', delay: 2 }, // Purplish
    { size: 150, color: 'rgba(99, 102, 241, 0.6)', initialX: '30%', initialY: '60%', delay: 4 },  // Indigoish
    { size: 250, color: 'rgba(219, 39, 119, 0.5)', initialX: '80%', initialY: '70%', delay: 1 }, // Deeper Pink
    { size: 180, color: 'rgba(129, 140, 248, 0.5)', initialX: '5%', initialY: '80%', delay: 3 },  // Lighter Indigo
  ];

  return (
    <section ref={targetRef} id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* 背景アニメーション要素 */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: backgroundY }}>
        {circles.map((circle, index) => (
          <AnimatedCircle key={index} {...circle} />
        ))}
      </motion.div>

      {/* テキストとボタン要素 */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="text-center z-10 flex flex-col items-center"
      >
        {/* 名前 */}
        <motion.h1
          variants={nameContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight flex overflow-hidden py-2"
        >
          {name.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={nameLetterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* 肩書き */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-indigo-100 mb-8"
        >
          {jobTitle}
        </motion.p>

        {/* コールトゥアクションボタン */}
        <Link href="#projects" passHref legacyBehavior>
          <MotionAnchor
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 150 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer"
          >
            View My Work
            <FaArrowRight />
          </MotionAnchor>
        </Link>
      </motion.div>

      {/* スクロールダウンアイコン */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <FaChevronDown className="text-3xl text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// HeroSection コンポーネント自体にも displayName を設定 (念のため)
HeroSection.displayName = 'HeroSection';

export default HeroSection;
