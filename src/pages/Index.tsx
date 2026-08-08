import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/HeroSection";
import WhatICanDoSection from "@/components/WhatICanDoSection";
import HowIBuildSection from "@/components/HowIBuildSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BuilderSection from "@/components/BuilderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-x-hidden">
      <FloatingShapes />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <WhatICanDoSection />
        <HowIBuildSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BuilderSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
