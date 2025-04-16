import React from 'react';
import FactoryHeroSection from '@/components/factory/FactoryHeroSection';
import FactoryAboutSection from '@/components/factory/FactoryAboutSection'; // インポート
import FactorySkillsSection from '@/components/factory/FactorySkillsSection'; // インポート
import FactoryProjectsSection from '@/components/factory/FactoryProjectsSection'; // インポート
import FactoryContactSection from '@/components/factory/FactoryContactSection'; // インポート
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function FactoryPage() {
  return (
    // Remove theme-specific classes (font-serif, bg-factory-secondary, text-factory-text)
    // These are now applied via body class in layout.tsx and globals.css
    <div className="flex-grow">
      <FactoryHeroSection />
      {/* Factory theme might use different dividers or none */}
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
