"use client";

import { useState } from "react";

type Level = "Basic" | "Intermediate" | "Experienced";

interface Skill {
  name: string;
  level: Level;
}

const skillData: Record<string, Skill[]> = {
  SWE: [
    { name: "Docker", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Kubernetes", level: "Basic" },
    { name: "GoLang", level: "Basic" },
    { name: "C++", level: "Basic" },
    { name: "Java", level: "Basic" },
    { name: "Cloud Services", level: "Basic" },
  ],
  WEB: [
    { name: "Next.js", level: "Experienced" },
    { name: "TypeScript", level: "Experienced" },
    { name: "C#", level: "Experienced" },
    { name: "Node.js / Nest.js", level: "Experienced" },
  ],
  VIDEO: [
    { name: "Adobe Premiere Pro", level: "Experienced" },
    { name: "DaVinci Resolve", level: "Intermediate" },
    { name: "Final Cut Pro X", level: "Intermediate" },
    { name: "Adobe After Effects", level: "Intermediate" },
  ],
};

const levelColor: Record<Level, string> = {
  Experienced: "text-teal-400 border-teal-400/40",
  Intermediate: "text-teal-300/70 border-teal-300/30",
  Basic: "text-lightGray border-lightGray/30",
};

const tabs = ["SWE", "WEB", "VIDEO"] as const;

export const Skills = () => {
  const [active, setActive] = useState<"SWE" | "WEB" | "VIDEO">("SWE");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg">Skills</h2>

      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              active === tab
                ? "bg-teal-400/20 text-teal-300"
                : "text-lightGray hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-darkGray overflow-hidden">
        <div className="grid grid-cols-2 px-4 py-2 border-b border-darkGray">
          <span className="text-xs text-lightGray tracking-widest uppercase">Skill</span>
          <span className="text-xs text-lightGray tracking-widest uppercase">Level</span>
        </div>
        {skillData[active].map((skill, i) => (
          <div
            key={skill.name}
            className={`grid grid-cols-2 items-center px-4 py-3 ${
              i < skillData[active].length - 1 ? "border-b border-darkGray" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-teal-400 text-base">✓</span>
              <span className="text-sm">{skill.name}</span>
            </div>
            <span
              className={`text-xs font-semibold tracking-widest uppercase border rounded-full px-3 py-1 w-fit ${levelColor[skill.level]}`}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
