"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
import ProgressBar from '@/components/ui/ProgressBar'; // 共通コンポーネントを使用

const FactorySkillsSection = () => {
  const { title, categories } = siteContent.skills;

  // セクション全体のアニメーション
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
  };

  // カテゴリのアニメーション
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    // 背景色を bg-factory-secondary に変更、テキスト色を text-factory-text に変更
    <section id="skills" className="min-h-screen flex items-center justify-center bg-factory-secondary py-20 md:py-32 px-4 text-factory-text">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          // text-white を text-factory-text に変更
          className="text-5xl md:text-7xl font-serif font-bold mb-16 text-center text-factory-text" // セリフ体に変更
        >
           {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* gap調整 */}
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="border border-gray-700 p-6" // シンプルな枠線
            >
              {/* text-yellow-400 を text-factory-accent に変更 */}
              <h3 className="text-2xl font-semibold mb-6 text-factory-accent flex items-center gap-3 font-sans"> {/* サンセリフ体、アクセントカラー */}
                <category.icon />
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  // 共通の ProgressBar コンポーネントを使用
                  <div key={skill.name} className="font-sans [&>div>div>span]:text-factory-muted [&>div>div>span+span]:text-factory-muted [&>div>div>div>svg]:text-factory-muted"> {/* ラベル、パーセント、アイコンの色を調整 */}
                    <ProgressBar
                      label={skill.name}
                      level={skill.level}
                      icon={skill.icon} // アイコンを渡す
                      color="bg-factory-accent" // Factoryテーマのアクセントカラーを指定
                      // ProgressBar内の背景色も調整が必要な場合がある
                      // 例: className="[&>div+div]:bg-gray-700" のように親要素から指定
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

export default FactorySkillsSection;
