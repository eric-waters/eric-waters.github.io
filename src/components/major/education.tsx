"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { IconBrandYoutubeFilled, IconDownload } from "@tabler/icons-react";
import { GraduationCap } from "lucide-react";
import SectionHeading from "../minor/section-heading";
import { Badge } from "../ui/badge";

export default function Education() {
  const mastersCarouselData = [
    {
      title:
        "Automated Detection of Phishing Attacks using Machine Learning Techniques",
      src: "/papers/screenshots/machine-learning-phishing-detection.jpg",
      link: "papers/pdfs/machine-learning-phishing-detection.pdf",
    },
    {
      title:
        "A Data Processing Pipeline with Kafka, Neo4j, and Kubernetes for Distributed Graph Algorithm Processing",
      src: "/papers/screenshots/data-processing-pipeline.jpg",
      link: "papers/pdfs/data-processing-pipeline.pdf",
    },
    {
      title:
        "Statistical Machine Learning Approaches in Medicine and Biomedical Sciences",
      src: "/papers/screenshots/statistical-machine-learning-medicine.jpg",
      link: "papers/pdfs/statistical-machine-learning-medicine.pdf",
    },
    {
      title: "Fiscal Clarity: Turning Data into Insights for Engagement, Ohio",
      src: "/papers/screenshots/data-visualization-fiscal-clarity.jpg",
      link: "papers/pdfs/data-visualization-fiscal-clarity.pdf",
    },
    {
      title: "Stance Detection of Tweets",
      src: "/papers/screenshots/web-mining-stance-detection.jpg",
      link: "papers/pdfs/web-mining-stance-detection.pdf",
    },
    {
      title:
        "Solving the Automated Warehouse Scenario using Answer Set Programming",
      src: "/papers/screenshots/knowledge-representation-automated-warehouse.jpg",
      link: "papers/pdfs/knowledge-representation-automated-warehouse.pdf",
    },
  ];

  const mastersContent = {
    textData: (
      <>
        <div className="text-3xl font-bold">Computer Science, M.S.</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge className="bg-blue-500 text-neutral-100">
            Big Data Systems Concentration
          </Badge>
          <Badge className="bg-blue-500 text-neutral-100">
            Arizona State University
          </Badge>
          <Badge className="bg-blue-500 text-neutral-100">2022 - 2023</Badge>
          <Badge className="bg-blue-500 text-neutral-100">4.0 GPA</Badge>
        </div>

        <div className="mt-7 text-xl font-bold dark:text-neutral-200">
          Overview
        </div>
        <div className="mt-1 text-neutral-800 dark:text-neutral-300">
          Focused on designing and deploying scalable systems for processing and
          analyzing large-scale, complex datasets. Gained hands-on experience
          with distributed computing, real-time data processing, data mining,
          machine learning, and visualization through project-based
          learning—equipping me to develop efficient, data-driven solutions
          across various domains.
        </div>
        <div className="mt-5 text-xl font-bold dark:text-neutral-200">
          Key Coursework
        </div>
        <div className="mt-1 text-neutral-800 dark:text-neutral-300">
          <ul className="list-inside list-disc">
            <li>Data Processing at Scale</li>
            <li>Data Mining</li>
            <li>Semantic Web Mining</li>
            <li>Statistical Machine Learning</li>
            <li>Data Visualization</li>
            <li>Knowledge Representation</li>
            <li>Mobile Computing</li>
            <li>Database Management System Implementation</li>
          </ul>
        </div>
      </>
    ),
    carousel: (
      <Carousel className="mx-auto w-full rounded-xl border-3 border-neutral-600 dark:border-0">
        <CarouselContent>
          {mastersCarouselData.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                src={item.src}
                alt={item.title}
                width={1700}
                height={2200}
                className="relative rounded-xl opacity-50"
              ></Image>
              <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-5 px-10 font-bold sm:text-2xl dark:text-white">
                <div className="text-center">{item.title}</div>
                <a className="cursor-pointer" href={item.link} download>
                  <Button className="cursor-pointer bg-blue-500 text-neutral-50 hover:bg-blue-500/90">
                    <IconDownload />
                    Download
                  </Button>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  };

  const bachelorsContent = {
    textData: (
      <>
        <div className="text-3xl font-bold">Computer Science, B.S.</div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge className="bg-blue-500 text-neutral-100">
            Arizona State University
          </Badge>
          <Badge className="bg-blue-500 text-neutral-100">2019 - 2022</Badge>
          <Badge className="bg-blue-500 text-neutral-100">4.0 GPA</Badge>
        </div>

        <div className="mt-7 text-xl font-bold dark:text-neutral-200">
          Overview
        </div>
        <div className="mt-1 text-neutral-800 dark:text-neutral-300">
          Studied the design, development, and analysis of software systems,
          building a strong foundation in programming, data structures,
          algorithms, and computer systems. Gained hands-on experience in
          machine learning, cybersecurity, and software engineering, developing
          the skills to solve complex technical problems and build robust,
          scalable applications.
        </div>
        <div className="mt-5 text-xl font-bold dark:text-neutral-200">
          Key Coursework
        </div>
        <div className="mt-1 text-neutral-800 dark:text-neutral-300">
          <ul className="list-inside list-disc">
            <li>Programming Languages</li>
            <li>Object-Oriented Programming & Data Structures</li>
            <li>Data Structures & Algorithms</li>
            <li>Database Management</li>
            <li>Machine Learning</li>
            <li>Software Engineering</li>
            <li>Operating Systems</li>
            <li>Information Assurance</li>
            <li>Software QA & Testing</li>
            <li>Probability & Statistics Engineering Problem Solving</li>
            <li>Theoretical Computer Science</li>
          </ul>
        </div>
      </>
    ),
    carousel: (
      <Carousel className="mx-auto w-full rounded-xl border-3 border-neutral-600 dark:border-0">
        <CarouselContent>
          <CarouselItem className="relative">
            <Image
              src="/papers/screenshots/undergrad-thesis-party-on-wall-street.jpg"
              alt="Undergraduate thesis"
              width={1700}
              height={2200}
              className="relative rounded-xl opacity-50"
            ></Image>
            <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-5 px-10 text-lg font-bold md:text-2xl dark:text-white">
              <div className="text-center">
                Undergraduate Thesis:
                <br /> Party on Wall Street
              </div>
              <a
                className="cursor-pointer"
                href="papers/pdfs/undergrad-thesis-party-on-wall-street.pdf"
                download
              >
                <Button className="cursor-pointer bg-blue-500 text-neutral-50 hover:bg-blue-500/90">
                  <IconDownload />
                  Download
                </Button>
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src="/papers/screenshots/undergrad-capstone-netpoint-llc.png"
              alt="Undergraduate Capstone: Developing a Contractor Management System"
              width={1700}
              height={2210}
              className="relative rounded-xl opacity-50"
            ></Image>
            <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-5 px-10 text-lg font-bold md:text-2xl dark:text-white">
              <div className="text-center">
                Undergraduate Capstone:
                <br /> Developing a Contractor Management System
              </div>
              <a
                className="cursor-pointer"
                href="https://youtu.be/gXEd-HVifVI?si=C152_wEGmC8HLu_B"
                target="_blank"
              >
                <Button className="cursor-pointer bg-blue-500 text-neutral-50 hover:bg-blue-500/90">
                  <IconBrandYoutubeFilled />
                  Watch Demo
                </Button>
              </a>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  };

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
      >
        <SectionHeading
          heading="Academic Excellence"
          icon={
            <GraduationCap
              style={{ width: "1em", height: "1em" }}
              className="ml-3 text-blue-500 md:ml-5"
            />
          }
          subheading="Rigorous study in computer science and engineering principles."
        />
      </motion.div>

      {[mastersContent, bachelorsContent].map((content, index) => (
        <div
          className="grid gap-5 overflow-x-hidden lg:my-16 lg:grid-cols-2 lg:gap-20"
          key={index}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="my-6 lg:col-span-1 lg:my-0"
          >
            {content.textData}
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="mb-16 lg:col-span-1 lg:mx-12 lg:mb-0"
          >
            {content.carousel}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
