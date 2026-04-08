export const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center py-20 bg-transparent">
      <div className="w-full max-w-[1200px] px-10 mb-12">
        <h1 className="text-[40px] md:text-[60px] font-display font-bold text-white uppercase tracking-tighter">
          Experience
        </h1>
        <div className="h-[1px] w-full bg-gray-800 mt-4"></div>
      </div>
      
      <div className="w-full max-w-[1200px] px-10 flex flex-col">
        {/* DappRush Internship */}
        <div className="flex flex-col md:flex-row justify-between border-b border-[#1a1a1a] pb-10">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-medium text-gray-200 font-sans uppercase tracking-tight">Software Engineering Intern</h3>
            <p className="text-gray-500 font-mono text-sm mt-2">Feb 2025 – Jun 2025</p>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-lg font-bold text-white mb-4">DappRush Studios</h4>
            <ul className="text-gray-400 font-light space-y-3 list-disc list-inside">
              <li>Contributed to the development and deployment of a production-grade web application serving real users.</li>
              <li>Designed and implemented RESTful APIs ensuring efficient data flow between frontend and backend systems.</li>
              <li>Built authentication and role-based access control systems to enhance application security.</li>
              <li>Optimized backend performance, reducing API response time by 35%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
