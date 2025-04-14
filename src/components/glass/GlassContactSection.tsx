"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content'; // コンテンツデータをインポート

const GlassContactSection = () => {
  // email は siteContent 直下から取得
  const { title, icons } = siteContent.contact; // 不要な変数を削除
  const email = siteContent.email; // email を siteContent から直接取得
  const GlassIcon = icons.glass;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // inputVariants は不要になったため削除

  return (
    // 背景色を bg-glass-secondary に変更、テキスト色を text-gray-200 に変更 (コントラスト改善)
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-glass-secondary py-20 md:py-32 px-4 text-gray-200">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl w-full mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 md:p-12"
      >
        {/* h2 タイトルを削除 */}
        {/* Google Form iframe */}
        {/* アスペクト比クラスを削除し、高さを直接指定 */}
        {/* Glassテーマに合わせてiframeコンテナにスタイルを追加 */}
        <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfYZhrrlsr_18LlBVJUajGbgyTfk5vM_XkbBR1gEg7iRPwS6Q/viewform?embedded=true"
            width="100%" // 幅を100%に
            height="800" // 高さを調整
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full" // h-full を削除
          >
            読み込んでいます…
          </iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default GlassContactSection;
