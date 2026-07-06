const timeline = [
  { year: "2008", text: "Born in Russia" },
  {
    year: "2021-2024",
    text: "Studing Frontend / Backend developer, worked in Freelance (UpWork, Fiverr).",
  },
  {
    year: "2021-2025",
    text: "Finished 2 academies of IT-Technologies.",
  },
  {
    year: "2026",
    text: "Moved to Alicante, Spain to start my profeccional career as a Sofware Engineer. ",
  },
];

export const Bio = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg">Bio</h2>
      <div className="flex flex-col gap-3">
        {timeline.map((item) => (
          <div key={item.year} className="flex gap-4 items-center">
            <span className="text-xs text-lightGray/60 w-10 flex-shrink-0">
              {item.year}
            </span>
            <span className="text-sm text-lightGray">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
