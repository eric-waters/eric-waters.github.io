"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const testimonials = [
  {
    name: "Intel Corporation",
    icon: Briefcase,
    image: "intel-logo.png",
    imageSize: 100,
    position: "Software Application Development Engineer",
    date: "August 2023 - Present",
    description:
      "Created an AI contract auditing tool saving $30M, a modular Generative AI web platform, a no-code AI app studio, a scalable ML analytics API, and administered an AI search platform.",
  },
  {
    name: "Arizona State University",
    icon: GraduationCap,
    image: "asu-logo.png",
    imageSize: 200,
    position: "Computer Science (Big Data Systems), M.S.",
    date: "August 2022 - May 2023",
    description:
      "Studied Data Mining, Data Processing at Scale, Statistical Machine Learning, Data Visualization, Database Management System Implementation, and Mobile Computing.",
  },
  {
    name: "Dell Technologies",
    icon: Briefcase,
    image: "dell-logo.png",
    imageSize: 300,
    position: "Graduate Software Engineering Intern",
    date: "June 2022 - August 2022",
    description:
      "Implemented OAuth 2.0 SSO and fine-grained authorization across enterprise apps and APIs, unifying authentication and enhancing security and compliance.",
  },
  {
    name: "Arizona State University",
    icon: GraduationCap,
    image: "asu-logo.png",
    imageSize: 200,
    position: "Computer Science, B.S.",
    date: "August 2019 - May 2022",
    description:
      "Studied Data Structures and Algorithms, Programming Languages, Operating Systems, Software Engineering, Database Management Systems, QA & Testing, and various mathematics.",
  },
  {
    name: "Dell Technologies",
    icon: Briefcase,
    image: "dell-logo.png",
    imageSize: 300,
    position: "Undergraduate Software Engineering Intern",
    date: "May 2021 - August 2021",
    description:
      "Developed a Kanban board app with Spring/MySQL to enhance team agility, and won 1st place in Dell's Intern Hackathon with an Adobe XD onboarding prototype.",
  },
];

export default function Hero() {
  return (
    <>
      <div className="relative flex w-full flex-col items-start justify-start">
        <div className="w-full">
          <div className="flex justify-start lg:justify-between">
            <div className="my-auto">
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
              >
                <h1 className="flex flex-wrap items-center text-5xl font-bold md:text-6xl xl:text-7xl">
                  <span>Hi, I&apos;m{"\u00A0"}</span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Eric
                    <Code
                      style={{ width: "1em", height: "1em" }}
                      className="ml-4 text-blue-500 lg:ml-5"
                    />
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
                className="z-10 max-w-2xl py-4 text-start text-lg font-normal text-neutral-900 md:px-0 lg:pr-4 lg:text-left lg:text-xl dark:text-neutral-200"
              >
                I build powerful backend systems and intuitive interfaces —
                always with clean, optimized code and a focus on impact.
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="mt-2 flex justify-start gap-4 lg:justify-start">
                  <a href="/Eric-Waters-Resume.pdf" download>
                    <button className="flex w-36 transform cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500/90 sm:w-40">
                      <IconDownload />
                      Resume
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eric-waters2019/"
                    target="_blank"
                  >
                    <button className="flex w-36 transform cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:w-40 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                      <IconBrandLinkedin />
                      LinkedIn
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
            >
              <div className="hidden lg:flex">
                <Image
                  src="/eric-profile-lg.jpg"
                  alt="Eric Waters"
                  width={1125}
                  height={1125}
                  className="aspect-square max-w-80 rounded-full border border-neutral-400/50 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-950/40"
                  priority
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="dark:bg-grid-white/[0.05] flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
