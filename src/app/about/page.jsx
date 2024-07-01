"use client";
import React, { useRef } from "react";
import {motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/Brain";
const AboutPage = () => {
  const containerRef=useRef();
  const {scrollYProgress}=useScroll({container:containerRef});

  const skillRef=useRef();
  const isSkillRefInView = useInView(skillRef,{margin:"-100px"})

  
  const experienceRef=useRef();
  const isExperienceRefInView = useInView(experienceRef,{margin:"-100px"})
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-14 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              <span className="font-bold">Sandip Maharjan</span> <br />
              As a dedicated Full Stack Web Developer and a final-year student
              at Academia International College, I am passionate about learning
              and improving my skills. I have completed an enriching internship
              at AGI Infotech, which honed my expertise in building efficient
              web applications. Beyond my professional life, I enjoy meditation,
              running, exercise, reading, cooking, and singing, all of which
              contribute to my holistic development. I am eager to connect with
              like-minded individuals to learn and grow together in the tech
              community.
            </p>
            <span className="italic">
              “Believe you can and you’re halfway there.” - Theodore Roosevelt
            </span>
            <div className="self-end">
              <Image src="/flower.png" alt="Flower" width={100} height={100} />
            </div>

            <div>
              <svg
                id="alg_mouse_home"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="40"
                viewBox="0 0 20 40"
              >
                <path
                  class="alg_mouse_home_arrow"
                  d="M16.7,32.3c-0.4-0.4-1-0.4-1.4,0L10,37.6l-5.3-5.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c0,0,0,0,0,0l6,6c0.4,0.4,1,0.4,1.4,0l6-6C17.1,33.3,17.1,32.7,16.7,32.3z"
                ></path>
                <path
                  class="alg_mouse_home_body"
                  d="M10,2c4.4,0,8,3.6,8,8v10c0,4.4-3.6,8-8,8s-8-3.6-8-8V10C2,5.6,5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10v10c0,5.5,4.5,10,10,10s10-4.5,10-10V10C20,4.5,15.5,0,10,0z M12,12V8c0-1.1-0.9-2-2-2l0,0C8.9,6,8,6.9,8,8v4c0,1.1,0.9,2,2,2l0,0C11.1,14,12,13.1,12,12z"
                ></path>
              </svg>
            </div>
          </div>
          {/* SKILLS */}

          <div className="flex flex-col gap-14 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0}:{}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0}:{}} className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Redux Toolkit
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Django
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                Figma
              </div>
            </motion.div>
            <div>
              <svg
                id="alg_mouse_home"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="40"
                viewBox="0 0 20 40"
              >
                <path
                  class="alg_mouse_home_arrow"
                  d="M16.7,32.3c-0.4-0.4-1-0.4-1.4,0L10,37.6l-5.3-5.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c0,0,0,0,0,0l6,6c0.4,0.4,1,0.4,1.4,0l6-6C17.1,33.3,17.1,32.7,16.7,32.3z"
                ></path>
                <path
                  class="alg_mouse_home_body"
                  d="M10,2c4.4,0,8,3.6,8,8v10c0,4.4-3.6,8-8,8s-8-3.6-8-8V10C2,5.6,5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10v10c0,5.5,4.5,10,10,10s10-4.5,10-10V10C20,4.5,15.5,0,10,0z M12,12V8c0-1.1-0.9-2-2-2l0,0C8.9,6,8,6.9,8,8v4c0,1.1,0.9,2,2,2l0,0C11.1,14,12,13.1,12,12z"
                ></path>
              </svg>
            </div>
          </div>

          {/* EXPERIENCE */}

          <div className="flex flex-col gap-12  justify-center pb-48" ref={experienceRef}>
            <motion.h1 initial={{x:"-300px"}} animate={isExperienceRefInView ? {x:0}:{}} transition={{delay:0.2}} className="font-bold text-2xl">Experience</motion.h1>
            <motion.div initial={{x:"-300px"}} animate={isExperienceRefInView ? {x:0}:{}}  className="">
              {/* ITEM */}
            <div   className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Junior Full Stack Web Developer Intern</div>
                <div className="text-sm p-3 italic">
                  Developed a comprehensive lead management system for a
                  consultancy firm, streamlining the management of data for
                  students applying to study abroad, which improved data
                  organization and operational efficiency.
                </div>
                <div className="text-sm font-semibold text-red-400 p-3">March 2024 - June 2024</div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">AGI INFOTECH</div>
              </div>
              {/* CENTER */}
              <div className="w-1/6">
              {/* LINE */}
                <div className="w-1 h-full bg-gray-600  rounded relative">
                  {/* CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>

            {/* ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
               
              </div>
              {/* CENTER */}
              <div className="w-1/6">
              {/* LINE */}
                <div className="w-1 h-full bg-gray-600  rounded relative">
                  {/* CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-1/3">
              <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Junior Full Stack Web Developer Intern</div>
                <div className="text-sm p-3 italic">
                  Developed a comprehensive lead management system for a
                  consultancy firm, streamlining the management of data for
                  students applying to study abroad, which improved data
                  organization and operational efficiency.
                </div>
                <div className="text-sm font-semibold text-red-400 p-3">March 2024 - June 2024</div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">AGI INFOTECH</div></div>
            </div>
            </motion.div>
           
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky z-30 top-0">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
        
      </div>
    </motion.div>
  );
};

export default AboutPage;
