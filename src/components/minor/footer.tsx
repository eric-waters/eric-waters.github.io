import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto max-w-[90rem] px-5 py-10 md:px-10 lg:px-20 lg:py-14">
        <div className="flex justify-between">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Eric Waters. All rights reserved.
          </p>
          <a
            href="https://github.com/eric-waters/eric-waters.github.io"
            target="_blank"
          >
            <Image
              src="github-white.svg"
              alt="Github"
              width={24}
              height={24}
              className="hidden cursor-pointer text-neutral-50 dark:block"
            ></Image>
            <Image
              src="github-black.svg"
              alt="Github"
              width={24}
              height={24}
              className="cursor-pointer text-neutral-50 dark:hidden"
            ></Image>
          </a>
        </div>
      </div>
    </footer>
  );
}
