"use client";

import React, { useState, useMemo } from 'react'; // useMemo をインポート
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
import Modal from '@/components/ui/Modal';
// Factory用アイコンは未定義なので仮にモダン用
import { FaLaptopCode } from 'react-icons/fa';


type Project = typeof siteContent.projects.projectList[0];

const cardVariants = {
  hidden: { opacity: 0, filter: 'grayscale(100%)', y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'grayscale(0%)',
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: { scale: 1.03, boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }
};

const INITIAL_DISPLAY_COUNT = 6; // 初期表示件数

const FactoryProjectsSection = () => {
  const { title, icons, projectList } = siteContent.projects;
  const FactoryIcon = icons.modern; // 仮

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
      {/* 背景色を bg-factory-primary に変更、テキスト色を text-factory-text に変更 */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-factory-primary py-20 md:py-32 px-4 text-factory-text">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            // text-black を text-factory-text に変更
            className="text-5xl md:text-7xl font-serif font-bold mb-16 text-center text-factory-text"
          >
            {title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {/* ボタンとの間隔調整 */}
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
                className="border-2 border-black cursor-pointer bg-white"
                onClick={() => openModal(project)} // クリックイベント追加
              >
                {/* 画像コンテナに group クラスを追加 */}
                <div className="aspect-video overflow-hidden border-b-2 border-black group">
                  {/* motion.img から img に変更し、Tailwind クラスでホバーエフェクトを定義 */}
                  <img
                    src={project.imageUrl} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1 font-sans">{project.title}</h3>
                  <p className="text-sm text-gray-600 font-sans">{project.description}</p>
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
                className="px-8 py-3 bg-black text-white font-semibold rounded-none hover:bg-gray-800 transition-colors duration-300 border-2 border-black font-sans"
              >
                もっと見る
              </button>
            </motion.div>
          )}
        </div> {/* </> を </div> に修正 */}
      </section>

      {/* モーダル */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProject?.title}>
        {selectedProject && (
          <div className="space-y-4 font-sans">
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto rounded-lg mb-4 max-h-60 object-cover" />
            <p className="text-gray-700">{selectedProject.description}</p>
            <p className="text-sm text-gray-500">使用技術: React, Node.js, ... (仮)</p>
            <p className="text-sm text-gray-500">担当箇所: フロントエンド、バックエンド (仮)</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default FactoryProjectsSection;
