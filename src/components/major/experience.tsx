"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Experience() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <div className="text-3xl">Intel Corporation - Chandler, AZ</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Software Application Development Engineer
          </div>
          <div className="my-8">
            <div className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Batch Data Processing Platform
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Designed and built a standardized batch processing framework
                that <strong>unifies disparate manufacturing ETL implementations</strong>{" "}
                using Airflow, Docker, Kubernetes, GitHub Actions, and ELK.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Created <strong>reusable platform tooling</strong> for ETL
                development, logging, CI/CD, and DAG creation, enabling teams
                to rapidly build and deploy pipelines with
                consistent infrastructure, performance, and quality.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Generative AI Web Platform
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Developed a <strong>suite of 5 enterprise GenAI applications</strong>{" "}
                using Angular and Python (Sanic), including a legal contract
                auditing tool estimated to save $30M annually and recognized
                with a Divisional Recognition Award.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Designed and developed <strong>a no-code AI application studio</strong>{" "}
                using React, Next.js, and Tailwind CSS, enabling non-technical
                teams to create custom AI workflows through an intuitive
                drag-and-drop interface.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Transformed the platform UI/UX into a <strong>modern, visually
                polished experience</strong>{" "}and built <strong>reusable frontend
                components</strong>{" "}that improved consistency and accelerated
                feature delivery across applications.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Autonomous Excursion Response API
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Led consolidation of two large-scale FastAPI services into a
                  unified API
                </strong>
                , standardizing authentication, CI/CD workflows, Kubernetes
                deployments, and logging, reducing long-term complexity and
                maintenance overhead.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Factory ML Analysis API
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Engineered an asynchronous <strong>FastAPI service for internal
                ML algorithms</strong>, enabling external applications to
                execute long-running analytics jobs and retrieve ranked
                correlation results from factory-scale datasets.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Designed a blue-green deployment architecture on Windows VMs
                and automated CI/CD with GitHub Actions, enabling <strong>seamless
                failover and zero-downtime deployments</strong>.
              </div>
            </div>

            <div className="mt-6 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              AI Enterprise Search Engine
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Administered an AI-powered enterprise search platform,
                developing Python ETL pipelines and managing 4 VMware servers
                to <strong>index millions of manufacturing documents</strong>{" "}
                and unify fragmented knowledge sources.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/intel.jpg"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              priority
            />
            <Image
              src="/ai-summit.png"
              alt="Eric Waters at Intel"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="text-3xl">Dell Technologies - Round Rock, TX</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Graduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Implemented <strong>OAuth 2.0 SSO</strong> and <strong>fine-grained
                authorization controls</strong>{" "}across multiple enterprise web
                applications and REST APIs using Spring Boot and Angular,
                centralizing authentication, strengthening security and
                compliance, and streamlining user access.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/eric-dell.jpg"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/dell-group-photo-1.jpg"
              alt="Eric Waters at Intel"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="text-3xl">Dell Technologies - Round Rock, TX</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Undergraduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                Built a <strong>custom Kanban board application</strong>{" "}using
                Spring, improving agile workflow visibility and collaboration
                across engineering teams.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dell-campus.jpg"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/dell-group-photo-2.jpg"
              alt="Eric Waters at Intel"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
