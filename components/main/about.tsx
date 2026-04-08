'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HighlightText = ({ text, className }: { text: string, className?: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.3"]
  });

  const words = text.split(" ");
  return (
    <p ref={container} className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]} word={word} />;
      })}
    </p>
  );
};

const Word = ({ progress, range, word }: any) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block text-white">
      {word}
    </motion.span>
  );
};

export const About = () => {
    return (
        <section id="about-me" className="flex flex-col items-center justify-center py-32 bg-transparent text-white px-10">
            <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3">
                    <h2 className="text-[40px] md:text-[60px] font-display font-medium uppercase tracking-tighter leading-none mt-2">
                        About <br/><span className="text-gray-500">Me</span>
                    </h2>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-8 text-gray-300 font-light text-lg md:text-2xl leading-relaxed tracking-wide">
                    <HighlightText 
                      text="Hi, I'm Rishi Raj, a pragmatic software engineer deeply fascinated by the intersection of strategy, technical architecture, and aesthetic design. I specialize in weaving together disparate technologies into cohesive, high-performance digital products." 
                    />
                    <HighlightText 
                      className="text-base md:text-xl"
                      text="My expertise spans from building robust, scalable backend services using Node.js and PostgreSQL to crafting intricate, user-centered frontend interfaces perfectly tuned with Next.js."
                    />
                    <HighlightText 
                      className="text-base md:text-xl"
                      text="The goal is always to create functional beauty—platforms that don't just work flawlessly behind the scenes, but feel intuitive, sophisticated, and impactful to the end-user. Let's build something extraordinary."
                    />
                </div>
            </div>
        </section>
    );
};
