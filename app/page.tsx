"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/Components/ui/aurora-background";
import About from "./sections/About";

export default function Home() {
  return (
    <main className="dark bg-zinc-900  h-max w-full">
      <AuroraBackground >
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
          <div className="font-extralight text-base md:text-4xl dark:text-[#9faac0] py-4">
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
      </AuroraBackground>
      <About/>
    </main>
  );
}