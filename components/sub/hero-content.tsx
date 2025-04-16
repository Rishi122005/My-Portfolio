"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <a href="/resume.pdf" download>
  <motion.div
    variants={slideInFromTop}
    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] cursor-pointer"
  >
    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
    <h1 className="Welcome-text text-[13px]">
      My Resume
    </h1>
  </motion.div>
</a>


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            HI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I&apos;m
            </span>{" "}
            Rishi
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Education
          
        </motion.a>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
         1. B.Tech in Computer Science Engineering
            SRM Institute of Science and Technology, Kattankulathur

          Pursuing since 2023

          Current GPA: 8.3

          Actively gaining technical and soft skills through coursework, projects, and hands-on experience

          Focused on continuous improvement and aiming to increase overall GPA
          </motion.p>

          <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
        2. Senior Secondary (Class 12)
Himalayan Public School, Patna

Passed in 2023 with an aggregate of 73.4%

Developed strong analytical and logical reasoning skills

Gained interest in STEM subjects, particularly in engineering and technology
          </motion.p>

          <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
         3. Secondary (Class 10)
Delhi Public School, Patna

Passed in 2021 with 91.4%

Built a solid academic foundation with consistent performance

Participated in school-level competitions and extracurricular activities


          </motion.p>
         
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
