import Layout from "../components/Layout";
import AboutHero from "../components/AboutHero";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";

export default function About() {
  return (
    <Layout>
    <main className="flex flex-col">
      <AboutHero />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </main>
    </Layout>
  );
}