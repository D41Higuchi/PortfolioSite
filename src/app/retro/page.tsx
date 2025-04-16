import React from 'react';
import RetroHeroSection from '@/components/retro/RetroHeroSection';
import RetroAboutSection from '@/components/retro/RetroAboutSection'; // インポート
import RetroSkillsSection from '@/components/retro/RetroSkillsSection'; // インポート
import RetroProjectsSection from '@/components/retro/RetroProjectsSection';
import RetroContactSection from '@/components/retro/RetroContactSection'; // インポート
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function RetroPage() {
  return (
    // Remove theme-specific classes (font-pixel, bg-retro-primary, text-retro-text)
    // These are now applied via body class in layout.tsx and globals.css
    <div className="flex-grow">
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
