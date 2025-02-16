import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
    </main>
  );
}
