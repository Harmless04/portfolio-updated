import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate Student in CSE",
    location: "Model Engineering College,Kochi",
    description:
      "Harnessing Theoretical Knowledge on computer science subjects in one of the top institutions in Kerala ",
    icon: React.createElement(LuGraduationCap),
    date: "2022-26",
  },
  {
    title: "Experience",
    location: "Kochi,India",
    description:
      "Seeking to launch my career through an exciting  work oppurtunity ",
    icon: React.createElement(CgWorkAlt),
    date: "2024-",
  },
  {
    title: "Full-Stack Developer",
    location: "Kochi,Kerala",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind,Express & MongoDB. I'm open to internship oppurtunities.",
    icon: React.createElement(FaReact),
    date: "2024-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Iphone Website",
    description:
      "A clone of the apple website but with an amazing integration of the 3D model of the latest Iphone ",
    tags: ["React", "Three.js", "Next.js", "Tailwind", "css"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AIDukationDAO",
    description:
      "A dapp created by our team in a national level hackathon which mints artwork of Underprivilaged students to NFT and sell on our apps marketplace",
    tags: ["Javascript", "Motoko", "ckBTC", "Tailwind", "Figma"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AI summarizer",
    description:
      "A project which deep dives into the possibilities of AI , uses open AI api keys to summarise large amount of texts locally fast and efficiently",
    tags: ["Open AI", "Python", "API keys", "AI"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "Django",
  "MongoDB",
  "GitHub",
  "CTF",
  "Express",
  "SQL",
  "Python",

  "Framer Motion",
] as const;
