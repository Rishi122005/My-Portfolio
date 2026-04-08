export const ContactUs = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 bg-transparent">
      <div className="w-full max-w-[1200px] px-10 mb-12">
        <h1 className="text-[40px] md:text-[60px] font-display font-medium text-white uppercase tracking-tighter">
          Contact <span className="text-gray-500">Me</span>
        </h1>
        <div className="h-[1px] w-full bg-[#1a1a1a] mt-4"></div>
      </div>

      <div className="w-full max-w-[1200px] px-10 flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2">
          <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
            Let's build something extraordinary together. Whether you have a project in mind, 
            need technical consulting, or just want to connect, feel free to reach out. I'll get back to you as soon as possible.
          </p>
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-medium">Direct Mail</h4>
            <p className="text-gray-200 font-medium tracking-wider">codrishiriengs@gmail.com</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <form action="https://formsubmit.co/codrishiriengs@gmail.com" method="POST" className="flex flex-col gap-8">
            {/* Formsubmit custom config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Inquiry from Portfolio!" />
            
            <div className="flex flex-col gap-3">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Name</label>
              <input type="text" name="name" required className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-white transition-colors w-full" placeholder="John Doe" />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
              <input type="email" name="email" required className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-white transition-colors w-full" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Project Details</label>
              <textarea name="message" required rows={4} className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-white transition-colors resize-none w-full" placeholder="Tell me about your idea or inquiry..."></textarea>
            </div>

            <button type="submit" className="self-start md:self-end mt-4 px-8 py-3 border border-[#333] text-gray-200 hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest font-semibold rounded-full bg-[#050505]">
              Shoot Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
