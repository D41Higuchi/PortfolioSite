"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content'; // コンテンツデータをインポート

const GlassContactSection = () => {
  // email は siteContent 直下から取得
  const { title, icons, formLabels, placeholders, submitButtonText, alternativeText } = siteContent.contact;
  const email = siteContent.email; // email を siteContent から直接取得
  const GlassIcon = icons.glass;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.1)' },
  };

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
        {/* h2 のテキスト色を text-glass-panel に変更 */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-glass-panel flex items-center justify-center gap-3">
          <GlassIcon className="text-purple-400" /> {/* アイコン色はアクセントのまま */}
          {title}
        </h2>
        <form className="space-y-6">
          <div>
            {/* label のテキスト色を text-glass-panel-muted に変更 */}
            <label htmlFor="glass-name" className="block text-sm font-medium text-glass-panel-muted mb-1">{formLabels.name}</label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="text"
              id="glass-name"
              name="name"
              // input のテキスト色と placeholder 色を変更
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/15 transition duration-200 text-glass-panel placeholder-glass-panel-muted"
              placeholder={placeholders.name}
              required
            />
          </div>
          <div>
            {/* label のテキスト色を text-glass-panel-muted に変更 */}
            <label htmlFor="glass-email" className="block text-sm font-medium text-glass-panel-muted mb-1">{formLabels.email}</label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="email"
              id="glass-email"
              name="email"
              // input のテキスト色と placeholder 色を変更
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/15 transition duration-200 text-glass-panel placeholder-glass-panel-muted"
              placeholder={placeholders.email}
              required
            />
          </div>
          <div>
            {/* label のテキスト色を text-glass-panel-muted に変更 */}
            <label htmlFor="glass-message" className="block text-sm font-medium text-glass-panel-muted mb-1">{formLabels.message}</label>
            <motion.textarea
              variants={inputVariants}
              whileFocus="focus"
              id="glass-message"
              name="message"
              rows={5}
              // textarea のテキスト色と placeholder 色を変更
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/15 transition duration-200 text-glass-panel placeholder-glass-panel-muted resize-none"
              placeholder={placeholders.message}
              required
            ></motion.textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.25)', boxShadow: '0 5px 15px rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.98, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            type="submit"
            // button のテキスト色を text-glass-panel に変更
            className="w-full bg-white/20 border border-white/30 text-glass-panel py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition duration-300 shadow-md"
          >
            {submitButtonText}
          </motion.button>
        </form>
        {/* 代替連絡先のテキスト色を text-glass-panel-muted に変更 */}
        <div className="mt-10 text-center text-glass-panel-muted text-sm">
          <p>{alternativeText}</p>
          <a href={`mailto:${email}`} className="text-purple-400 hover:underline font-medium">{email}</a> {/* email リンクの色は維持 */}
        </div>
      </motion.div>
    </section>
  );
};

export default GlassContactSection;
