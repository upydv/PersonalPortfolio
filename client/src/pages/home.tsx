import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}