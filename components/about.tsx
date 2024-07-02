"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi everyone i'm an undergraduate student in Model Engineering College,Kochi pursuing{" "}
        <span className="font-medium">Computer Science Engineering</span>, I decided to pursue my
        passion for programming after doing Bio-mathematics in my pre-degree and delved into web development and other techs taking inspiration from my peers and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Three.js
        </span>
        . I am also familiar with TypeScript and keen interest in Cryptography. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">role as an Intern</span> in a software
        developing firm to upskill myself and use my knowledge to work
        
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football and watching the same , i also watch anime and loves to create memes . I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">the history behind metal bands</span>. I'm also
        a part of an online bookclub on discord.
      </p>
    </motion.section>
  );
}
