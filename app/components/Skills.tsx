"use client";

const skills = [
  { name: "TypeScript", level: "Experienced" },
  { name: "Nest.js (Node.js)", level: "Experienced" },
  { name: "Python", level: "Intermediate" },
  { name: "AWS", level: "Basic" },
  { name: "Kubernetes", level: "Basic" },
  { name: "GoLang", level: "Basic" },
  { name: "Rust", level: "Basic" },
];

const levelDot: Record<string, string> = {
  Experienced: "bg-white",
  Intermediate: "bg-lightGray",
  Basic: "bg-lightGray/40",
};

export const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg">Skills</h2>
      <div className="flex flex-col divide-y divide-darkGray">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between py-2.5"
          >
            <span className="text-sm">{skill.name}</span>
            <div className="flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${levelDot[skill.level]}`}
              />
              <span className="text-xs text-lightGray/60">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
