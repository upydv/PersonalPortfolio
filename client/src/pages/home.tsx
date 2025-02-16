import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-gradient-to-b from-background to-primary/5">
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}