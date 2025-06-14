import Hero from "@/components/major/hero";
import Experience from "../components/major/experience";
import Education from "../components/major/education";
import Skills from "../components/major/skills";
import Navbar from "@/components/major/navbar";
import Footer from "@/components/minor/footer";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-blue-500">
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-2">
          <Navbar />
        </div>
      </div>
      <div className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)]">
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto pt-30 pb-8">
          <Hero />
        </div>
      </div>
      <div
        id="experience"
        className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t"
      >
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-10 lg:py-20">
          <Experience />
        </div>
      </div>
      <div
        id="education"
        className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t"
      >
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-10 lg:py-20">
          <Education />
        </div>
      </div>
      <div
        id="skills"
        className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t"
      >
        <div className="container max-w-[90rem] px-5 md:px-10 lg:px-20 mx-auto py-10 lg:py-20">
          <Skills />
        </div>
      </div>
      <div className="bg-[oklch(100%_0_0)] dark:bg-[oklch(17%_0_0)] border-t">
        <Footer />
      </div>
    </>
  );
}
