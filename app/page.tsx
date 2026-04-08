import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Experience } from "@/components/main/experience";
import { Organizations } from "@/components/main/organizations";
import { Education } from "@/components/main/education";
import { ContactUs } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Experience />
        <Organizations />
        <Skills />
        <Projects />
        <Education />
        <ContactUs />
      </div>
    </main>
  );
}
