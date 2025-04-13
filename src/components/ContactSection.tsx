"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content'; // コンテンツデータをインポート

const ContactSection = () => {
  // email は siteContent 直下から取得
  const { title, icons, formLabels, placeholders, submitButtonText, alternativeText } = siteContent.contact;
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
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800 flex items-center justify-center gap-3">
          <ModernIcon className="text-indigo-600" />
          {title}
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="modern-name" className="block text-sm font-medium text-gray-700 mb-1">{formLabels.name}</label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="text"
              id="modern-name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50"
              placeholder={placeholders.name}
              required
            />
          </div>
          <div>
            <label htmlFor="modern-email" className="block text-sm font-medium text-gray-700 mb-1">{formLabels.email}</label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="email"
              id="modern-email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50"
              placeholder={placeholders.email}
              required
            />
          </div>
          <div>
            <label htmlFor="modern-message" className="block text-sm font-medium text-gray-700 mb-1">{formLabels.message}</label>
            <motion.textarea
              variants={inputVariants}
              whileFocus="focus"
              id="modern-message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50 resize-none"
              placeholder={placeholders.message}
              required
            ></motion.textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: '#4338ca', boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)' }}
            whileTap={{ scale: 0.98, backgroundColor: '#3730a3', filter: 'brightness(0.95)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md"
          >
            {submitButtonText}
          </motion.button>
        </form>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>{alternativeText}</p>
          <a href={`mailto:${email}`} className="text-indigo-600 hover:underline font-medium">{email}</a> {/* email を直接使用 */}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
