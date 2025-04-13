"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content'; // コンテンツデータをインポート

const RetroAboutSection = () => {
  const { title, icons, text1, text2, text3 } = siteContent.about; // データから取得
  const RetroIcon = icons.retro; // レトロテーマ用アイコン

  return (
    // 背景色、ボーダー、パディング調整
    <section id="about" className="py-20 px-4 bg-retro-secondary text-retro-text border-y-4 border-retro-text">
      {/* コンテナにボーダー、シャドウ、背景色を追加 */}
      <div className="container mx-auto max-w-4xl border-4 border-retro-text p-8 bg-retro-primary shadow-[8px_8px_0px_#3A3A3A]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          className="text-center mb-12" // text-center と margin-bottom を追加
        >
          <RetroIcon className="text-6xl text-retro-accent mx-auto" /> {/* アイコン色変更 */}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl mb-4 uppercase text-retro-accent text-center" // サイズ、色、マージン、大文字化、中央揃え
        >
          {title} {/* 大文字化削除 */}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6 text-lg leading-relaxed text-retro-text" // テキスト色、サイズ、行間調整
        >
          {/* 大文字化削除 */}
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </motion.div>
        {/* 区切り線削除 */}
      </div>
    </section>
  );
};

export default RetroAboutSection;
