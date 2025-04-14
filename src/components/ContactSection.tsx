"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content'; // コンテンツデータをインポート

const ContactSection = () => {
  // email は siteContent 直下から取得
  const { title, icons } = siteContent.contact; // 不要な変数を削除
  const email = siteContent.email; // email を siteContent から直接取得
  const ModernIcon = icons.modern;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#4f46e5', boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.2)' },
  };

  return (
    // 背景色を bg-default-secondary に変更
    <section id="contact" className="min-h-screen flex items-center justify-center bg-default-secondary py-20 md:py-32 px-4">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12"
      >
        {/* h2 タイトルを削除 */}
        {/* Google Form iframe */}
        {/* アスペクト比クラスを削除し、高さを直接指定 */}
        <div className="w-full">
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

export default ContactSection;
