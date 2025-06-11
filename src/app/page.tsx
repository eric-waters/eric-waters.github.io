import HeroSection from "@/components/custom/hero-section";
import Experience from "./experience/page";
import Education from "./education/page";
import Skills from "./skills/page";
import Navbar from "@/components/custom/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-blue-500">
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-2">
          <Navbar />
        </div>
      </div>
      <div className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-20 md:py-30">
          <HeroSection />
        </div>
      </div>
      <div
        id="experience"
        className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t border-dotted"
      >
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-10 lg:py-20">
          <Experience />
        </div>
      </div>
      <div
        id="education"
        className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t border-dotted"
      >
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-10 lg:py-20">
          <Education />
        </div>
      </div>
      <div
        id="skills"
        className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t border-dotted"
      >
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-10 lg:py-20">
          <Skills />
        </div>
      </div>
    </>
  );
}
