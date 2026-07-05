import { BasePage } from "../components/basePage";
import { Header } from "../components/header";
import { SectionBody } from "../components/sectionBody";
import { WorkItem } from "../components/WorkItem";

const works = [
  {
    name: "Mockmate",
    description: "Universal library for generating test data with filtering and customization. Supports JS, TS, and React.",
    href: "https://github.com/monokkai/mockmate",
    tags: ["TypeScript", "React", "Library"],
  },
  {
    name: "E2E Tickets Sell App",
    description: "Full-stack ticketing platform for concerts and sports events.",
    href: "https://github.com/monokkai/e2e-tickets",
    status: "In Progress",
    tags: ["Kafka", "RabbitMQ", "gRPC", "Redis", "Auth"],
  },
  {
    name: "DevOps CLI Tool",
    description: "CLI for managing Kubernetes clusters, Docker containers, Git ops, and cloud services.",
    href: "https://github.com/monokkai/devops-cli",
    tags: ["GoLang", "Kubernetes", "Docker"],
  },
  {
    name: "NestJS Microservices",
    description: "Distributed system with separate services for chat, orders, products, reviews, and auth.",
    href: "https://github.com/monokkai/nestjs-microservices",
    tags: ["NestJS", "Docker", "NGINX"],
  },
  {
    name: "Fitness Site",
    description: "Full-stack fitness platform with auth, workout tracking, and nutrition endpoints.",
    href: "https://github.com/monokkai/fitness-site",
    tags: ["Next.js", "TypeScript"],
  },
];

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
