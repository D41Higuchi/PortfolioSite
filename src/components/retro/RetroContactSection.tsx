"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

const RetroContactSection = () => {
  const { title, icons } = siteContent.contact; // 不要な変数を削除
  const email = siteContent.email;
  const RetroIcon = icons.retro;

  return (
    // 背景色、ボーダー、パディング調整
    <section id="contact" className="py-20 px-4 bg-retro-primary text-retro-text border-y-4 border-retro-text">
      <div className="container mx-auto max-w-2xl"> {/* max-w-2xl に変更 */}
        {/* motion.h2 タイトルを削除 */}

        {/* Google Form iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // 元のフォームコンテナのスタイルを適用
          className="border-4 border-retro-text p-8 bg-retro-secondary shadow-[8px_8px_0px_#3A3A3A] overflow-hidden" // overflow-hidden を追加
        >
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
        {/* 代替連絡先は削除 */}
      </div>
    </section>
  );
};

export default RetroContactSection;
