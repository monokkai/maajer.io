import { BasePage } from "../components/basePage";
import { Header } from "../components/header";
import { SectionBody } from "../components/sectionBody";
import { WorkItem } from "../components/WorkItem";
import { works } from "./works";

const oldWorks = [
  {
    name: "C# Console File Manager",
    description: "Command-line file management application.",
    href: "https://github.com/monokkai/file-manager",
    tags: ["C#"],
  },
];

export default function WorksPage() {
  return (
    <>
      <Header />
      <BasePage>
        <SectionBody>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Works</h1>
            <p className="text-lightGray text-sm">
              Projects I&apos;ve built or am building.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-darkGray">
            {works.map((work) => (
              <WorkItem key={work.name} {...work} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-sm text-lightGray">Old Works</h2>
            <div className="flex flex-col divide-y divide-darkGray">
              {oldWorks.map((work) => (
                <WorkItem key={work.name} {...work} />
              ))}
            </div>
          </div>
        </SectionBody>
      </BasePage>
    </>
  );
}
