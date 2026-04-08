export const Skills = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "C", "C++", "Python", "Java", "SQL", "Node.js"
  ];

  return (
    <section id="skills" className="flex flex-col items-center justify-center py-20 bg-transparent">
      <div className="w-full max-w-[1200px] px-10 mb-12">
        <h1 className="text-[40px] md:text-[60px] font-display font-medium text-white uppercase tracking-tighter">
          Core <span className="text-gray-500">Skills</span>
        </h1>
        <div className="h-[1px] w-full bg-[#1a1a1a] mt-4"></div>
      </div>
      
      <div className="w-full max-w-[1200px] px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-y-12">
          {skills.map((skill, index) => (
             <div key={index} className="flex flex-col border-b border-[#222] pb-3 group cursor-default">
               <span className="text-[#444] font-mono text-xs mb-1 group-hover:text-gray-300 transition-colors">/{index < 9 ? `0${index + 1}` : index + 1}</span>
               <h2 className="text-2xl md:text-4xl text-gray-400 font-display font-bold uppercase tracking-tighter group-hover:text-white transition-colors duration-300">
                 {skill}
               </h2>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
