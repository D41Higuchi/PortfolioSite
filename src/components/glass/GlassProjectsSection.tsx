"use client";

import React, { useState, useMemo } from 'react'; // useMemo をインポート
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
import { FaProjectDiagram } from 'react-icons/fa';
import Modal from '@/components/ui/Modal';

type Project = typeof siteContent.projects.projectList[0];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: { scale: 1.03, transition: { duration: 0.2 } }
};

const INITIAL_DISPLAY_COUNT = 6; // 初期表示件数

const GlassProjectsSection = () => {
  const { title, icons, projectList } = siteContent.projects;
  const GlassIcon = icons.glass;

  // 表示件数管理
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const showLoadMoreButton = useMemo(() => projectList.length > displayCount, [projectList.length, displayCount]);

  // 表示するプロジェクトリスト
  const displayedProjects = useMemo(() => projectList.slice(0, displayCount), [projectList, displayCount]);

  // モーダル管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleLoadMore = () => {
    setDisplayCount(projectList.length); // 全件表示
  };

  return (
    <> {/* フラグメントで囲む */}
      {/* 背景色を bg-glass-primary に変更、テキスト色を text-gray-200 に変更 (コントラスト改善) */}
      <section id="projects" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-glass-primary py-20 md:py-32 px-4 text-gray-200">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            // text-white を text-glass-panel に変更
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-glass-panel flex items-center justify-center gap-3"
          >
            <GlassIcon className="text-purple-400" /> {/* アイコン色はアクセントのまま */}
            {title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12"> {/* ボタンとの間隔調整 */}
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout // アニメーションのため layout プロパティを追加
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
                onClick={() => openModal(project)} // クリックイベント追加
              >
                {/* 画像コンテナに group クラスを追加 */}
                <div className="aspect-video overflow-hidden group">
                  {/* motion.img から img に変更し、Tailwind クラスでホバーエフェクトを定義 */}
                  <img
                    src={project.imageUrl} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow">
                  {/* h3 のテキスト色を text-glass-panel に変更 */}
                  <h3 className="text-xl font-semibold mb-2 text-glass-panel">{project.title}</h3>
                  {/* p のテキスト色を text-glass-panel-muted に変更 */}
                  <p className="text-glass-panel-muted text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* もっと見るボタン */}
          {showLoadMoreButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 shadow-lg"
              >
                さらに表示
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* モーダル (グラステーマ用にスタイル調整が必要かも) */}
      {/* モーダルタイトルからプロジェクトタイトルを削除 (モーダル内で表示するため) */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          // モーダル内容のスタイルは共通UIのものを流用
          <div className="space-y-4 font-sans">
            {/* モーダル内にタイトルとアイコンを表示 */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              {selectedProject.icon && <selectedProject.icon className="text-xl text-indigo-600" />} {/* アイコン表示 */}
              {selectedProject.title}
            </h3>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto rounded-lg mb-4 max-h-60 object-cover" />
            <p className="text-gray-700">{selectedProject.description}</p>
            {/* techStackString を表示 */}
            <p className="text-sm text-gray-500">
              <span className="font-semibold">使用技術:</span> {selectedProject.techStackString}
            </p>
            {/* 担当箇所のプレースホルダーは削除 */}
          </div>
        )}
      </Modal>
    </>
  );
};

export default GlassProjectsSection;
