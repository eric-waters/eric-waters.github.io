export default function SectionHeading({
  heading,
  icon,
  subheading,
}: {
  heading: string;
  icon: React.ReactNode;
  subheading: string;
}) {
  const words = heading.split(" ");
  const titlePrefix =
    words.slice(0, -1).join(" ") + (words.length > 1 ? "\u00A0" : "");
  const lastWord = words[words.length - 1] || "";

  return (
    <>
      <h2 className="text-4xl md:text-6xl font-bold flex items-center flex-wrap">
        <span>{titlePrefix}</span>
        <span className="inline-flex items-center whitespace-nowrap">
          {lastWord}
          {icon}
        </span>
      </h2>
      <div className="text-lg text-neutral-800 dark:text-neutral-300 mt-3 lg:mt-4">
        {subheading}
      </div>
    </>
  );
}
