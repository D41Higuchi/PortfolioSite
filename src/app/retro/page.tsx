import React from 'react';
import RetroHeroSection from '@/components/retro/RetroHeroSection';
import RetroAboutSection from '@/components/retro/RetroAboutSection'; // インポート
import RetroSkillsSection from '@/components/retro/RetroSkillsSection'; // インポート
import RetroProjectsSection from '@/components/retro/RetroProjectsSection';
import RetroContactSection from '@/components/retro/RetroContactSection'; // インポート
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function RetroPage() {
  return (
    // font-pixel は layout.tsx で適用される可能性があるので一旦削除、基本背景を retro-secondary に
    <div className="bg-retro-secondary">
      {/* RetroHeroSection は独自背景を持つことが多いので primary -> primary と仮定 */}
      <RetroHeroSection />
      <WaveDivider color="fill-retro-primary" direction="down" />
      <RetroAboutSection />
      {/* About (primary) -> Skills (secondary) */}
      <WaveDivider color="fill-retro-primary" direction="up" />
      <WaveDivider color="fill-retro-secondary" direction="down" />
      <RetroSkillsSection />
      {/* Skills (secondary) -> Projects (primary) */}
      <WaveDivider color="fill-retro-secondary" direction="up" />
      <WaveDivider color="fill-retro-primary" direction="down" />
      <RetroProjectsSection />
      {/* Projects (primary) -> Contact (secondary) */}
      <WaveDivider color="fill-retro-primary" direction="up" />
      <WaveDivider color="fill-retro-secondary" direction="down" />
      <RetroContactSection />
    </div>
  );
}
