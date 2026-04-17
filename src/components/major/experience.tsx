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
          <div className="text-3xl">Intel Corporation</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Software Application Development Engineer
          </div>
          <div className="my-8">
            <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Offline Data Analytics Platform
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Lead Developer for a centralized ETL platform</strong>,
                aggregating Airflow, Kubernetes, and Docker to standardize data
                ingestion across the organization.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Reduced ETL onboarding time from several weeks to 2 days
                </strong>{" "}
                by creating reusable GitHub Actions CI/CD workflows and a
                custom Python library for rapid Airflow DAG development.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Integrated ELK Stack for unified monitoring</strong> and
                logging, providing a single dashboard to manage health and
                performance for dozens of tenant applications.
              </div>
            </div>

            <div className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Generative AI Web Platform
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Developed a suite of 5 GenAI applications </strong>
                using Angular and Python (Sanic), including a legal contract
                audit tool estimated to save $30M annually (recipient of a
                Divisional Recognition Award).
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Architected a no-code drag-and-drop AI app studio
                </strong>{" "}
                using React, Next.js, Tailwind CSS, enabling non-technical
                teams to build custom AI workflows in record time.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Redesigned the platform&apos;s UI/UX</strong>, implementing
                reusable frontend components to standardize design language and
                accelerate development cycles across 6+ developers.
              </div>
            </div>

            <div className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Factory Excursion Management API
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Spearheaded the architectural merger of two massive FastAPI
                  instances
                </strong>
                , unifying authentication (OAuth 2.0/OpenID), logging, and
                CI/CD pipelines to reduce long-term maintenance overhead.
              </div>
            </div>

            <div className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Factory ML Analysis API
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Engineered a high-availability FastAPI service
                </strong>{" "}
                to expose legacy .NET ML algorithms to external applications,
                handling hundreds of thousands of requests.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Implemented a Blue-Green deployment strategy</strong> on
                Windows VMs using reverse proxies and GitHub Actions, ensuring
                zero-downtime updates for factory analysis.
              </div>
            </div>

            <div className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              AI Cognitive Search Engine
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Sole Administrator for a cross-company cognitive search
                  engine
                </strong>
                ; developed ETL pipelines using Python, Pandas, and SQL Server
                to index millions of documents from SharePoint, Wikis, and work
                orders.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Optimized factory engineering workflows</strong>,
                resulting in an estimated $15M/year in time savings by enabling
                rapid discovery of crucial technical documentation.
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
          <div className="text-3xl">Dell Technologies</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Graduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Implemented OAuth 2.0 SSO </strong>
                across several enterprise apps, unifying authentication and
                enhancing user experience.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Integrated fine-grained authorization controls </strong>
                for several web apps and REST APIs using Spring Boot and
                Angular, strengthening security and compliance.
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
          <div className="text-3xl">Dell Technologies</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Undergraduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Built a custom Kanban board app</strong> with Spring and
                MySQL, improving agile collaboration and task tracking for
                engineering teams.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Designed an interactive Adobe XD prototype</strong> to
                streamline the onboarding experience for an employee resource
                group, earning 1st place in the Dell Intern Hackathon.
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
