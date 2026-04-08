export const Organizations = () => {
  return (
    <section id="organizations" className="flex flex-col items-center justify-center py-20 bg-transparent">
      <div className="w-full max-w-[1200px] px-10 mb-12">
        <h1 className="text-[40px] md:text-[60px] font-display font-medium text-white uppercase tracking-tighter">
          Technical <span className="text-gray-500">Communities</span>
        </h1>
        <div className="h-[1px] w-full bg-[#1a1a1a] mt-4"></div>
      </div>
      
      <div className="w-full max-w-[1200px] px-10 flex flex-col">
        {/* CODENEX CLUB */}
        <div className="flex flex-col md:flex-row justify-between border-b border-[#1a1a1a] pb-10 mb-10">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-medium text-gray-200 font-sans uppercase tracking-tight">Technical Team Member</h3>
            <p className="text-gray-500 font-mono text-sm mt-2">Nov 2024 – Feb 2026</p>
            <p className="text-gray-600 font-mono text-xs mt-1 tracking-tight">Associate (Sep '25 – Feb '26)</p>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-lg font-bold text-white mb-4">CODENEX CLUB SRMIST</h4>
            <ul className="text-gray-400 font-light space-y-3 list-disc list-inside">
              <li>Contributed heavily to various web development initiatives, particularly during fast-paced hackathons.</li>
              <li>Troubleshooted complex technical issues, directly ensuring seamless and robust website functionality.</li>
              <li>Fostered deep collaboration with fellow members to systematically solve problems and deploy functional UI/UX.</li>
              <li>Consistently enhanced personal web technologies stack, ultimately improving the overall user experience of all club projects.</li>
            </ul>
          </div>
        </div>

        {/* IoT Alliance */}
        <div className="flex flex-col md:flex-row justify-between border-b border-[#1a1a1a] pb-10">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-medium text-gray-200 font-sans uppercase tracking-tight">Technical Team Member</h3>
            <p className="text-gray-500 font-mono text-sm mt-2">Nov 2024 – Feb 2026</p>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-lg font-bold text-white mb-4">IoT Alliance</h4>
            <ul className="text-gray-400 font-light space-y-3 list-disc list-inside">
              <li>Developed a unified platform designed to bridge communication, centralize control, and enable real-time monitoring across interconnected IoT devices.</li>
              <li>Empowered users to manage multiple smart devices through a single intuitive interface catering to smart homes, healthcare, and industrial automation.</li>
              <li>Integrated secure device onboarding, live sensor data visualizations, and automated alert pipelines.</li>
              <li>Architected cloud-integrated backends for remote access, alongside frictionless frontends that promoted intuitive user navigation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
