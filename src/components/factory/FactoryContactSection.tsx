"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

const FactoryContactSection = () => {
  // email は siteContent 直下から取得
  const { title, icons, formLabels, placeholders, submitButtonText, alternativeText } = siteContent.contact;
  const email = siteContent.email; // email を siteContent から直接取得
  // Factory用アイコンは未定義なので仮にモダン用
  const FactoryIcon = icons.modern;

  // アニメーション設定
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } },
  };
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
  };

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
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-center text-black">
          {title}
        </h2>
        <motion.form
          variants={formVariants}
          className="space-y-5 font-sans" // フォームはサンセリフ
        >
          <div>
            <label htmlFor="factory-name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">{formLabels.name}</label>
            <input
              type="text"
              id="factory-name"
              name="name"
              className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:border-yellow-500 focus:ring-0" // シンプルスタイル
              placeholder={placeholders.name}
              required
            />
          </div>
          <div>
            <label htmlFor="factory-email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">{formLabels.email}</label>
            <input
              type="email"
              id="factory-email"
              name="email"
              className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:border-yellow-500 focus:ring-0"
              placeholder={placeholders.email}
              required
            />
          </div>
          <div>
            <label htmlFor="factory-message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">{formLabels.message}</label>
            <textarea
              id="factory-message"
              name="message"
              rows={5}
              className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:border-yellow-500 focus:ring-0 resize-none"
              placeholder={placeholders.message}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#111', color: '#fff' }} // ホバーエフェクト
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-black text-white font-sans font-semibold uppercase text-sm tracking-wider py-3 px-6 cursor-pointer transition-colors duration-200"
          >
            {submitButtonText}
          </motion.button>
        </motion.form>
        <div className="mt-8 text-center text-xs text-gray-700 font-sans">
          <p>{alternativeText}</p>
          <a href={`mailto:${email}`} className="text-black hover:underline font-medium">{email}</a> {/* email を直接使用 */}
        </div>
      </motion.div>
    </section>
  );
};

export default FactoryContactSection;
