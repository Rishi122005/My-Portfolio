export const Education = () => {
    return (
      <section id="education" className="flex flex-col items-center justify-center py-20 bg-transparent">
        <div className="w-full max-w-[1200px] px-10 mb-12">
          <h1 className="text-[40px] md:text-[60px] font-display font-bold text-white uppercase tracking-tighter">
            Education
          </h1>
          <div className="h-[1px] w-full bg-gray-800 mt-4"></div>
        </div>
        
        <div className="w-full max-w-[1200px] px-10 space-y-12">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-800 pb-10">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">B.Tech in Computer Science</h3>
              <p className="text-gray-500 font-mono text-sm mt-2">Aug 2023 – May 2027</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-white">SRM Institute of Science and Technology</h4>
              <p className="text-gray-400 font-light mt-2">CGPA: 8.54/10</p>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-800 pb-10">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">Class XII</h3>
              <p className="text-gray-500 font-mono text-sm mt-2">Apr 2022 – Mar 2023</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-white">Himalayan Public School</h4>
              <p className="text-gray-400 font-light mt-2">Score: 73.4%</p>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between pb-4">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">Class X</h3>
              <p className="text-gray-500 font-mono text-sm mt-2">Apr 2020 – Mar 2021</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-white">Delhi Public School</h4>
              <p className="text-gray-400 font-light mt-2">Score: 91.1%</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
