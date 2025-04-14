"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

const FactoryContactSection = () => {
  // email は siteContent 直下から取得
  const { title } = siteContent.contact; // 不要な変数を削除
  const email = siteContent.email; // email を siteContent から直接取得

  // アニメーション設定
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } },
  };
  // formVariants は不要になったため削除

  return (
    // 背景色を bg-factory-secondary に変更、テキスト色を text-factory-text に変更
    <section id="contact" className="min-h-screen flex items-center justify-center bg-factory-secondary py-20 md:py-32 px-4 text-factory-text">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl w-full mx-auto bg-white p-8 md:p-12 border-4 border-black" // 白背景に黒枠
      >
        {/* h2 タイトルを削除 */}
        {/* Google Form iframe */}
        {/* アスペクト比クラスを削除し、高さを直接指定 */}
        <div className="w-full border-2 border-black"> {/* 枠線は維持 */}
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

export default FactoryContactSection;
