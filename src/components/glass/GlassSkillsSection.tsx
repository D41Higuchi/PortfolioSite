"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
import ProgressBar from '@/components/ui/ProgressBar';

const GlassSkillsSection = () => {
  const { title, categories } = siteContent.skills;
  const GlassIcon = siteContent.skills.categories[2].icon; // DevOpsアイコンを仮に使う

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const categoryCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  };

  return (
    // 背景色を bg-glass-secondary に変更、テキスト色を text-gray-200 に変更 (コントラスト改善)
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-glass-secondary py-20 md:py-32 px-4 text-gray-200">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          // text-white を text-glass-panel に変更
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-glass-panel"
        >
           {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={categoryCardVariants}
              whileHover="hover"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
            >
              {/* h3 のテキスト色を text-glass-panel に変更 */}
              <h3 className="text-xl font-semibold mb-6 text-glass-panel flex items-center gap-2">
                <category.icon className="text-purple-400" /> {/* アイコン色はアクセントのまま */}
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  // ProgressBar のラベルとパーセンテージの色を text-glass-panel-muted に変更
                  <div key={skill.name} className="[&>div>div>span]:text-glass-panel-muted [&>div>div>span+span]:text-glass-panel-muted">
                    <ProgressBar
                      label={skill.name}
                      level={skill.level}
                      color="bg-purple-400"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GlassSkillsSection;
