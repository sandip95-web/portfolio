"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PortFolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Next.js Lit-Haven",
      desc: "Lit Haven is a web application project aimed at providing a platform for book enthusiasts to discover and share literary works. It includes features for user profile, cart, payment.",
      img: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://github.com/sandip95-web/Lit-Haven",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Django Movie Recommendation System",
      desc: "MRS_DJANGO is a Django-based movie recommendation system allowing users to rate movies and receive personalized recommendations based on their preferences. It features a user-friendly interface for seamless movie exploration and rating.",
      img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWUlMjBzaGlvfGVufDB8fDB8fHww",
      link: "https://github.com/sandip95-web/Flutter-Movieinfo",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Flutter Movie App",
      desc: "Flutter-Movieinfo is a mobile app developed using Flutter for accessing movie information. It provides features such as browsing movie details, trailers, and reviews, enhancing the user experience for movie enthusiasts on mobile platforms.",
      img: "https://plus.unsplash.com/premium_photo-1710324884987-7c67e9986713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBhcHB8ZW58MHx8MHx8fDA%3D",
      link: "https://github.com/sandip95-web/homeInfo",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "JavaScript Hangman Game",
      desc: "The 'Game' repository features a hangman game implemented in JavaScript. It allows users to play without any login requirements, focusing solely on interactive gameplay.",
      img: "https://images.unsplash.com/10/wii.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      link: "https://github.com/sandip95-web/Game",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen items-center gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white items-center text-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-5xl xl:text-6xl max-w-screen-lg">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[300px] xl:w-[500px] xl:h-[350px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[400px] xl:w-[500px] lg:text-lg">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[400px] md:h-[400px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                FullStack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-24 md:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortFolioPage;
