import React from 'react';
import FactoryHeroSection from '@/components/factory/FactoryHeroSection';
import FactoryAboutSection from '@/components/factory/FactoryAboutSection'; // インポート
import FactorySkillsSection from '@/components/factory/FactorySkillsSection'; // インポート
import FactoryProjectsSection from '@/components/factory/FactoryProjectsSection'; // インポート
import FactoryContactSection from '@/components/factory/FactoryContactSection'; // インポート
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function FactoryPage() {
  return (
    // 基本背景を factory-secondary に設定
    <div className="bg-factory-secondary">
      {/* FactoryHeroSection は独自背景を持つことが多いので primary -> primary と仮定 */}
      <FactoryHeroSection />
      <WaveDivider color="fill-factory-primary" direction="down" />
      <FactoryAboutSection />
      {/* About (primary) -> Skills (secondary) */}
      <WaveDivider color="fill-factory-primary" direction="up" />
      <WaveDivider color="fill-factory-secondary" direction="down" />
      <FactorySkillsSection />
      {/* Skills (secondary) -> Projects (primary) */}
      <WaveDivider color="fill-factory-secondary" direction="up" />
      <WaveDivider color="fill-factory-primary" direction="down" />
      <FactoryProjectsSection />
      {/* Projects (primary) -> Contact (secondary) */}
      <WaveDivider color="fill-factory-primary" direction="up" />
      <WaveDivider color="fill-factory-secondary" direction="down" />
      <FactoryContactSection />
    </div>
  );
}
