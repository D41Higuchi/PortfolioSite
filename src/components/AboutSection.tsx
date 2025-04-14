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
  // text2 を削除し、text4, text5, imagePlaceholder を追加
  const { title, icons, text1, text3, text4, text5, imagePlaceholder } = siteContent.about;
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
          className="flex justify-center items-center" // items-center を追加
        >
          {/* content.ts から画像パスを読み込む */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imagePlaceholder.modern}
            alt="About Me Illustration"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full" // サイズを大きく変更
          />
        </motion.div>

        {/* 右側: テキストコンテンツ */}
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
          {/* text2 を text3 に変更 */}
          <motion.p
            variants={sentenceVariants}
            className="text-lg text-gray-600 mb-4"
          >
            {text3.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          {/* text4 を追加 */}
           <motion.p
            variants={sentenceVariants}
            className="text-lg text-gray-600 mb-4"
          >
            {text4.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          {/* text5 を追加 */}
           <motion.p
            variants={sentenceVariants}
            className="text-lg text-gray-600" // 最後の p タグは mb-4 なし
          >
            {text5.split("").map((char, index) => (
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
