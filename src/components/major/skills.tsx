"use client";

import { Card } from "@/components/ui/card";
import { Drill } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import SectionHeading from "../minor/section-heading";

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      content: [
        {
          name: "Typescript",
          image: "/skills/typescript.png",
          description:
            "A superset of JavaScript that adds static typing. I use it in all my web projects, as it helps catch errors early and improves code quality.",
        },
        {
          name: "Python",
          image: "/skills/python.webp",
          description:
            "A versatile language that I use extensively for data analysis, web APIs, machine learning, and one-off automation scripts.",
        },
        {
          name: "Java",
          image: "/skills/java.png",
          description:
            "A high-level OOP language that was my first. I used it throughout high school, college, and in my internships to build everything from command line tools to web applications.",
        },
        {
          name: "C/C++",
          image: "/skills/c-plus-plus.png",
          description:
            "A low-level language that I used in multiple college courses for learning principles of programming languages, data structures, and algorithms.",
        },
        {
          name: "C#",
          image: "/skills/c-sharp.png",
          description:
            "Microsoft's object-oriented language. I've used it for Unity game development and an Intel desktop application.",
        },
        {
          name: "SQL",
          image: "/skills/sql.png",
          description:
            "A language for managing and querying databases. I studied it formally in several database courses and use it very frequently in my work as an owner of several relational databases.",
        },
      ],
    },
    {
      title: "Web Development",
      content: [
        {
          name: "React",
          image: "/skills/react.png",
          description:
            "A JavaScript library for building user interfaces. I've built multiple applications using React, including this website. It's my go-to library for web development.",
        },
        {
          name: "Angular",
          image: "/skills/angular.png",
          description:
            "A comprehensive framework for building web applications. I've used it extensively at both Intel and Dell. I appreciate its batteries-included approach and dependency injection system.",
        },
        {
          name: "Tailwind CSS",
          image: "/skills/tailwind.png",
          description:
            "A utility-first CSS framework for rapidly building custom user interfaces. I use it in most of my web projects, including this website. It drastically improves my productivity and design consistency.",
        },
        {
          name: "Next.js",
          image: "/skills/nextjs.webp",
          description:
            "A React framework for building full-stack web applications. I've used it for multiple projects, including this website. I love its performance, file-based routing, and server actions.",
        },
        {
          name: "Spring",
          image: "/skills/spring.png",
          description:
            "A Java-based framework for building enterprise applications. I used it in both my Dell internships to build web applications and REST APIs.",
        },
        {
          name: "Laravel",
          image: "/skills/laravel.png",
          description:
            "A PHP framework for building web applications. I used it for a year-long capstone project where I built a full-stack contractor management system.",
        },
        {
          name: "FastAPI",
          image: "/skills/fastapi.svg",
          description:
            "A modern web framework for building APIs with Python. I used it at Intel to build a high-performance API for running machine learning analysis jobs.",
        },
        {
          name: "Sanic",
          image: "/skills/sanic.png",
          description:
            "A Python web framework optimized for speed and asynchronous APIs. At Intel, I used Sanic to build scalable, low-latency endpoints for serving generative AI models in production.",
        },
        {
          name: "OAuth 2.0",
          image: "/skills/oauth.png",
          description:
            "An open standard for access delegation. I've used it in multiple projects to implement secure authentication and authorization flows.",
        },
        {
          name: "D3.js",
          image: "/skills/d3.png",
          description:
            "A JavaScript library for producing dynamic, interactive data visualizations in web browsers. I learned it formally in a graduate data visualization course and built many highly interactive custom visualizations.",
        },
      ],
    },
    {
      title: "Data Technologies",
      content: [
        {
          name: "Pandas",
          image: "/skills/pandas.png",
          description:
            "A powerful Python library for data manipulation and analysis. I used it extensively in graduate school and at Intel for data cleaning, transformation, and analysis tasks.",
        },
        {
          name: "NumPy",
          image: "/skills/numpy.svg",
          description:
            "A fundamental package for scientific computing with Python. I used it in graduate school for numerical computations and data manipulation, especially in conjunction with Pandas.",
        },

        {
          name: "Matplotlib",
          image: "/skills/matplotlib.png",
          description:
            "A plotting library for Python. I used it in graduate school for data visualization tasks, creating static, animated, and interactive visualizations in Python.",
        },
        {
          name: "Kafka",
          image: "/skills/kafka.png",
          description:
            "A distributed event streaming platform. I used it in a graduate school project as the foundation of a data pipeline to stream taxi trip data into Neo4j.",
        },
        {
          name: "Spark",
          image: "/skills/spark.png",
          description:
            "A distributed data processing engine. I used it in a graduate school project to build a data pipeline for batch processing of large-scale datasets stored in Hadoop.",
        },
        {
          name: "Hadoop",
          image: "/skills/hadoop.svg",
          description:
            "A framework for distributed storage and processing. I used it in a graduate school project to implement MapReduce algorithms for processing large distributed datasets.",
        },
        {
          name: "Neo4j",
          image: "/skills/neo4j.png",
          description:
            "A graph database management system. I used it in a graduate school project to model taxi trip data and apply the PageRank algorithm to identify high-traffic routes.",
        },
        {
          name: "SQL Server",
          image: "/skills/sql-server.png",
          description:
            "Microsoft's enterprise relational database. At Intel, I managed and analyzed millions of records, using its security, high availability, and Microsoft integration features.",
        },
        {
          name: "PostgreSQL",
          image: "/skills/postgresql.png",
          description:
            "A leading open-source relational database. I used it in academic and professional projects for structured data, leveraging its lightweight setup and JSON support.",
        },
        {
          name: "MySQL",
          image: "/skills/mysql.webp",
          description:
            "A lightweight and simple relational database. I've used it in many personal projects and at Dell for building web applications, appreciating its ease of setup and efficient performance.",
        },
      ],
    },
    {
      title: "ML/AI Tools",
      content: [
        {
          name: "TensorFlow",
          image: "/skills/tensorflow.png",
          description:
            "A platform for building and deploying ML models. I used it extensively in graduate school for various ML tasks and leveraged TensorFlow Lite to deploy models on mobile devices.",
        },
        {
          name: "LangChain",
          image: "/skills/langchain.png",
          description:
            "A framework for building applications with LLMs. I used it at Intel to develop APIs to serve generative AI models for creating chatbots and other AI applications.",
        },
        {
          name: "Scikit-learn",
          image: "/skills/scikit.png",
          description:
            "A Python library for machine learning. I used it in graduate school for various ML tasks, including classification, regression, and clustering.",
        },
        {
          name: "Keras",
          image: "/skills/keras.png",
          description:
            "A high-level neural networks API. I used it in graduate school for building and training deep learning models, especially for image classification tasks.",
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      content: [
        {
          name: "Docker",
          image: "/skills/docker.webp",
          description:
            "A platform for developing, shipping, and running applications in containers. I've studied it academically and used it professionally to ensure consistent environments across development, testing, and production.",
        },
        {
          name: "Kubernetes",
          image: "/skills/kubernetes.png",
          description:
            "An open-source system for automating deployment, scaling, and management of containerized applications. I've studied it in graudate school and used it at Intel to orchestrate containerized applications in production environments.",
        },
        {
          name: "GitHub Actions",
          image: "/skills/github-actions.png",
          description:
            "A CI/CD tool that allows you to automate your software workflows. At Intel, I built my own workflows from scratch to automate testing, deployment, and other tasks in several projects.",
        },
        {
          name: "Rancher",
          image: "/skills/rancher.webp",
          description:
            "An open-source platform for managing Kubernetes clusters. I've used it at Intel to deploy and manage containerized applications across multiple clusters.",
        },
        {
          name: "Harbor",
          image: "/skills/harbor.png",
          description:
            "An open-source cloud-native registry that stores, signs, and scans content. I've used it at Intel to manage and secure container images in my projects.",
        },
      ],
    },
  ];

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
      >
        <SectionHeading
          heading="A Powerful Toolbox"
          icon={
            <Drill
              style={{ width: "1em", height: "1em" }}
              className="ml-4 text-blue-500 md:ml-6"
            />
          }
          subheading="Robust, relevant, and always evolving."
        />
      </motion.div>

      {skills.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="mt-14 text-2xl font-semibold md:text-3xl">
              {section.title}
            </div>
          </motion.div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {section.content.map((skill, cardIndex) => (
              <motion.div
                key={cardIndex}
                className="flex h-full"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
              >
                <Card className="gap-3 border-neutral-300 bg-neutral-50/30 p-5 dark:border-neutral-800 dark:bg-neutral-950/30">
                  <div className="flex">
                    <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px]">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={70}
                        height={70}
                        className="h-[40px] max-h-full w-[40px] object-contain md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center pl-3">
                      <div className="text-2xl font-semibold md:text-3xl">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm md:text-base dark:text-neutral-300">
                    {skill.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
