import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 bg-transparent"
    >
      <div className="w-full max-w-[1200px] px-10 mb-12">
        <h1 className="text-[40px] md:text-[60px] font-display font-bold text-white uppercase tracking-tighter">
          Projects
        </h1>
        <div className="h-[1px] w-full bg-[#1a1a1a] mt-4"></div>
      </div>
      
      <div className="w-full max-w-[1200px] px-10 flex flex-col gap-0">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
