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
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Developed an AI-powered contract auditing tool</strong>{" "}
                that enabled enterprise legal teams to identify risks and
                inefficiencies, resulting in up to{" "}
                <strong>$30M in estimated cost savings</strong>.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>
                  Built a modular web platform for Generative AI tools{" "}
                </strong>{" "}
                using Angular and Sanic, enabling rapid development of
                AI-powered apps with reusable components, unified UI, and robust
                API integrations.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Designed a no-code AI app studio </strong> using React,
                Next.js, and Tailwind, empowering teams to create and deploy AI
                apps without using development resources.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Engineered a scalable ML analytics API </strong> for
                manufacturing data using FastAPI, Docker, and Kubernetes,
                enabling seamless integration of advanced analytics into
                multiple applications.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>
                <Check className="text-blue-500" />
              </div>
              <div>
                <strong>Independently owned an AI search platform</strong> for
                manufacturing data, delivering up to{" "}
                <strong>$5M in estimated ROI</strong> through faster
                problem-solving. Created robust ETL pipelines using Pandas and
                SQL Server to ingest, normalize, and consolidate data across
                business units.{" "}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/intel-ocotillo.png"
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
                <strong>Streamlined the onboarding process</strong> for an
                employee resource group, winning 1st place in the Dell Intern
                Hackathon.
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
