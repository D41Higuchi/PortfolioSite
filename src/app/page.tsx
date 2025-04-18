import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function Home() {
  return (
    // Remove theme-specific classes (font-sans, bg-default-secondary, text-default-text)
    // These are now applied via body class in layout.tsx and globals.css
    <div className="flex-grow">
      <HeroSection />
      {/* HeroSection (primary) -> AboutSection (primary) */}
      {/* Note: Heroは通常背景が異なることが多いので、一旦 primary -> primary とする */}
      <WaveDivider color="fill-default-primary" direction="down" />
      <AboutSection />
      {/* AboutSection (primary) -> SkillsSection (secondary) */}
      <WaveDivider color="fill-default-primary" direction="up" />
      <WaveDivider color="fill-default-secondary" direction="down" />
      <SkillsSection />
       {/* SkillsSection (secondary) -> ProjectsSection (primary) */}
      <WaveDivider color="fill-default-secondary" direction="up" />
      <WaveDivider color="fill-default-primary" direction="down" />
      <ProjectsSection />
       {/* ProjectsSection (primary) -> ContactSection (secondary) */}
      <WaveDivider color="fill-default-primary" direction="up" />
      <WaveDivider color="fill-default-secondary" direction="down" />
      <ContactSection />
    </div>
  );
}
