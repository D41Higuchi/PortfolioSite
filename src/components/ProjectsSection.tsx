"use client";

import Modal from '@/components/ui/Modal';
import { siteContent } from '@/data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef, useState } from 'react'; // useMemo をインポート

// プロジェクトデータの型を定義 (content.ts から推論されるが、明示的に定義も可)
type Project = typeof siteContent.projects.projectList[0];

// ProjectCard コンポーネント (クリックイベントハンドラを受け取るように変更)
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]); // スケールアニメーションを削除
  // const y = useTransform(scrollYProgress, [0, 0.5, 1], ["30px", "0px", "-30px"]); // Y軸の移動は stagger で制御するため削除

  // カード自体の表示アニメーション variants
  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    // div を motion.div に戻し、variants を再適用
    <motion.div
      ref={cardRef}
      // style={{ y }} // stagger で制御するため削除
      variants={cardItemVariants} // variants を適用
      initial="hidden" // initial を追加
      whileInView="visible" // whileInView を追加
      viewport={{ once: true, amount: 0.2 }} // viewport を追加 (amount は調整可)
      // 背景色を default-primary に、基本の影を shadow-card に、ホバーエフェクトを追加
      className="bg-default-primary rounded-xl overflow-hidden shadow-card cursor-pointer flex flex-col transition-all duration-300 ease-out-expo hover:shadow-hover hover:-translate-y-2 hover:rotate-1"
      onClick={onClick} // クリックイベントを追加
    >
      <div className="aspect-video overflow-hidden group"> {/* group クラスを追加 */}
        {/* motion.img から img に変更し、Tailwind クラスでホバーエフェクトを定義 */}
        <img
          src={project.imageUrl} alt={project.title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </motion.div> // div を motion.div に戻す
  );
};

const INITIAL_DISPLAY_COUNT = 6; // 初期表示件数

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { title, icons, projectList } = siteContent.projects;
  const ModernIcon = icons.modern;

  // 表示件数管理
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const showLoadMoreButton = useMemo(() => projectList.length > displayCount, [projectList.length, displayCount]);

  // 表示するプロジェクトリスト
  const displayedProjects = useMemo(() => projectList.slice(0, displayCount), [projectList, displayCount]);

  // モーダル管理用の state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // モーダルを開く関数
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setIsModalOpen(false);
    // selectedProjectをnullにするのはモーダル側で管理されている場合があるため、ここでは不要かも
    // setSelectedProject(null);
  };

  const handleLoadMore = () => {
    setDisplayCount(projectList.length); // 全件表示
  };

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <> {/* フラグメントで囲む */}
      {/* 背景色を bg-default-primary に変更 */}
      {/* section から flex items-center justify-center を削除 */}
      <section ref={sectionRef} id="projects" className="min-h-screen bg-default-primary py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 flex items-center justify-center gap-3"
          >
            <ModernIcon className="text-indigo-600" />
            {title}
          </motion.h2>
          {/* グリッドコンテナからアニメーション関連 props を削除 */}
          <motion.div
            // variants, initial, whileInView, viewport を削除
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12"
          >
            {displayedProjects.map((project) => (
              // ProjectCard にアニメーションを適用
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)} // クリック時に openModal を呼び出す
              />
            ))}
          </motion.div>

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
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md"
              >
                もっと見る
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* モーダルコンポーネント */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProject?.title}>
        {selectedProject && (
          <div className="space-y-4">
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto rounded-lg mb-4 max-h-60 object-cover" />
            <p className="text-gray-700">{selectedProject.description}</p>
            {/* techStackString を表示 */}
            <p className="text-sm text-gray-500">
              <span className="font-semibold">使用技術:</span> {selectedProject.techStackString}
            </p>
            {/* 担当箇所のプレースホルダーは削除 */}
            {/* TODO: 関連リンクなどを追加 */}
            {/* <a href="#" className="text-indigo-600 hover:underline">プロジェクトを見る</a> */}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectsSection;
