"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

const FactoryAboutSection = () => {
  // text2 を削除し、text4, text5 を追加
  const { title, text1, text3, text4, text5 } = siteContent.about;
  // Factoryテーマ用のアイコンは使用しない

  // テキストブロックのアニメーション
  const textBlockVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  // 装飾要素のアニメーション
  const decorationVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.8, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] } },
  };


  return (
    // 背景色を bg-factory-primary に変更、テキスト色を text-factory-text に変更
    <section id="about" className="min-h-screen flex items-center bg-factory-primary py-20 md:py-32 px-4 relative overflow-hidden text-factory-text">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* 左側: テキスト (7列分) */}
        <motion.div
          variants={textBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-7 z-10"
        >
          {/* 見出し (セリフ体) - text-black を text-factory-text に変更 */}
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-factory-text leading-tight">
            {title}
          </h2>
          {/* テキスト (サンセリフ体) - text-gray-700 を text-factory-muted に変更 */}
          <div className="space-y-4 text-base md:text-lg text-factory-muted font-sans leading-relaxed">
            {/* text1, text3, text4, text5 を表示 */}
            <p>{text1}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
          </div>
        </motion.div>

        {/* 右側: 装飾要素 (5列分) */}
        <div className="hidden md:block md:col-span-5 relative h-full min-h-[300px]">
           {/* 縦線 */}
           <motion.div
             variants={decorationVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="absolute top-0 left-1/2 w-px h-full bg-gray-300 origin-top"
           />
           {/* 横線 */}
            <motion.div
             variants={decorationVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="absolute top-1/4 left-0 w-full h-px bg-gray-300 origin-left"
             style={{ transitionDelay: '0.5s' }} // 遅延
           />
            <motion.div
             variants={decorationVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="absolute top-3/4 left-0 w-full h-px bg-gray-300 origin-left"
             style={{ transitionDelay: '0.7s' }} // 遅延
           />
           {/* アクセントカラーの四角 */}
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
             className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-400"
            />
        </div>
      </div>
    </section>
  );
};

export default FactoryAboutSection;
