"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/Components/ui/aurora-background";
import About from "./sections/About";
import Project from "./sections/Project";

export default function Home() {
  return (
    <AuroraBackground className="h-max w-full overflow-x-hidden overflow-y-auto" >
      <main className="dark bg-zinc-900 flex justify-center items-center h-screen w-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-2 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            I&apos;m Ashish Kumar
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-blueDash py-4">
            Full Stack Developer
          </div>
          <div className="flex gap-4">
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Resume
            </button>
            <a href="#about">

            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              View More
            </button>
            </a>
          </div>
        </motion.div>
      </main>
      <About/>
      <Project/>
    </AuroraBackground>
  );
}