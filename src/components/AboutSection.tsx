"use client";

import { siteContent } from '@/data/content';
import { motion } from 'framer-motion';

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AboutSection = () => {
  const { title, icons, text1, text2, text3 } = siteContent.about;
  const ModernIcon = icons.modern;

  return (
    // 背景色を bg-default-primary に変更、背景パターンクラス bg-grid-pattern は維持
    <section id="about" className="min-h-screen flex items-center bg-default-primary py-20 md:py-32 px-4 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center z-10"> {/* z-10 でパターンより前面に */}
        {/* 左側: イラスト/アイコン - slideInLeft を追加 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }} // x: -50 を追加
          whileInView={{ opacity: 1, scale: 1, x: 0 }} // x: 0 を追加
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          {/* TODO: プレースホルダー画像を content.ts から読み込む */}
          <svg className="w-64 h-64 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </motion.div>

        {/* 右側: テキストコンテンツ - slideInUp を追加 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // initial を直接指定
          whileInView={{ opacity: 1, y: 0 }} // whileInView を直接指定
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }} // 全体のトランジション
        >
          {/* h2 の initial/animate/transition は削除 */}
          <motion.h2
            // initial, animate, transition を削除
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 flex items-center gap-3"
          >
            <ModernIcon className="text-indigo-600" />
            {title}
          </motion.h2>

          {/* 文字アニメーションを適用、行間を調整 (leading-relaxed は layout で適用済みなので削除 or 微調整) */}
          <motion.p
            variants={sentenceVariants}
            className="text-lg text-gray-600 mb-4" // leading-relaxed を削除 (layoutで適用) or leading-loose などでさらに広げる
          >
            {text1.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            variants={sentenceVariants}
            className="text-lg text-gray-600 mb-4"
          >
            {text2.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
           <motion.p
            variants={sentenceVariants}
            className="text-lg text-gray-600" // mb-4 を削除
          >
            {text3.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
