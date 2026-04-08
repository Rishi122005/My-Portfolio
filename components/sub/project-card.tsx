import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  index: number;
};

export const ProjectCard = ({
  title,
  description,
  link,
  index,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center border-t border-[#1a1a1a] last:border-b py-12 px-0 hover:bg-[#050505] transition-all"
    >
      <div className="w-[100px] text-gray-600 font-mono text-sm tracking-widest hidden md:block">
        /0{index + 1}
      </div>

      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-gray-200 uppercase tracking-tighter group-hover:text-white transition-colors">{title}</h1>
        <p className="mt-4 text-gray-400 font-light leading-relaxed max-w-[600px] text-sm md:text-base">{description}</p>
      </div>
      
      <div className="mt-8 md:mt-0 flex items-center justify-end md:w-[150px]">
        <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#222] bg-transparent group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
          <svg className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19L19 5M19 5v10M19 5H9"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};
