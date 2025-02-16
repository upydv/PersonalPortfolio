import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
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