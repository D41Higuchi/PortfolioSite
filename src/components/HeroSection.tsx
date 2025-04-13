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

  return (
    <section ref={targetRef} id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* 背景要素 */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <motion.div
          className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-400 rounded-full filter blur-3xl opacity-50 animate-blob"
          style={{ animationDelay: '0s' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-50 animate-blob"
          style={{ animationDelay: '2s' }}
        ></motion.div>
         <motion.div
          className="absolute bottom-[100px] left-[100px] w-48 h-48 bg-indigo-400 rounded-full filter blur-3xl opacity-50 animate-blob"
          style={{ animationDelay: '4s' }}
        ></motion.div>
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
