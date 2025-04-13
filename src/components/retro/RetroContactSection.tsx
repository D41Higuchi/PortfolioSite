"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

const RetroContactSection = () => {
  const { title, icons, formLabels, placeholders, submitButtonTextRetro, alternativeText } = siteContent.contact;
  const email = siteContent.email;
  const RetroIcon = icons.retro;

  return (
    // 背景色、ボーダー、パディング調整
    <section id="contact" className="py-20 px-4 bg-retro-primary text-retro-text border-y-4 border-retro-text">
      <div className="container mx-auto max-w-2xl"> {/* max-w-2xl に変更 */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl text-center mb-12 uppercase text-retro-accent flex items-center justify-center gap-3" // サイズ、色、マージン、大文字化、中央揃え
        >
          {RetroIcon && <RetroIcon />} {/* アイコン表示 */}
          {title} {/* 大文字化削除 */}
        </motion.h2>

        {/* フォームコンテナにスタイル適用 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-4 border-retro-text p-8 bg-retro-secondary shadow-[8px_8px_0px_#3A3A3A]"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="retro-name" className="block text-sm mb-1 uppercase">{formLabels.name}:</label> {/* 色削除、大文字化 */}
              <input
                type="text"
                id="retro-name"
                name="name"
                required
                placeholder={placeholders.name}
                // フォーム入力欄スタイル
                className="w-full px-3 py-2 bg-retro-primary border-2 border-retro-text text-retro-text placeholder-retro-text-muted focus:outline-none focus:border-retro-accent focus:ring-1 focus:ring-retro-accent caret-retro-accent"
              />
            </div>
            <div>
              <label htmlFor="retro-email" className="block text-sm mb-1 uppercase">{formLabels.email}:</label> {/* 色削除、大文字化 */}
              <input
                type="email"
                id="retro-email"
                name="email"
                required
                placeholder={placeholders.email}
                // フォーム入力欄スタイル
                className="w-full px-3 py-2 bg-retro-primary border-2 border-retro-text text-retro-text placeholder-retro-text-muted focus:outline-none focus:border-retro-accent focus:ring-1 focus:ring-retro-accent caret-retro-accent"
              />
            </div>
            <div>
              <label htmlFor="retro-message" className="block text-sm mb-1 uppercase">{formLabels.message}:</label> {/* 色削除、大文字化 */}
              <textarea
                id="retro-message"
                name="message"
                rows={5}
                required
                placeholder={placeholders.message}
                // フォーム入力欄スタイル
                className="w-full px-3 py-2 bg-retro-primary border-2 border-retro-text text-retro-text placeholder-retro-text-muted focus:outline-none focus:border-retro-accent focus:ring-1 focus:ring-retro-accent caret-retro-accent resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }} // ホバーエフェクト調整
              whileTap={{ scale: 0.95 }} // タップエフェクト調整
              // 送信ボタンスタイル
              className="w-full px-6 py-3 bg-retro-accent text-retro-primary border-2 border-retro-text text-lg uppercase cursor-pointer shadow-[4px_4px_0px_#3A3A3A] hover:shadow-[2px_2px_0px_#3A3A3A] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all duration-100"
            >
              {submitButtonTextRetro}
            </motion.button>
          </form>
        </motion.div>

        {/* 代替連絡先 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-retro-text-muted"
        >
           <p>{alternativeText}</p>
           <a href={`mailto:${email}`} className="text-retro-accent hover:underline">{email}</a>
         </motion.div>
      </div>
    </section>
  );
};

export default RetroContactSection;
