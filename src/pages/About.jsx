import AboutHero from "../components/AboutHero";
import { SkillsSection } from "../components/SkillsSection";

export default function About() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <SkillsSection />
      {/* Contents for ExperienceSection, EducationSection */}
    </main>
  );
}