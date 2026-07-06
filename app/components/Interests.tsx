const interests = [
  "Music",
  "Basketball",
  "Thai Boxing",
  "Learning foreign languages.",
];

export const Interests = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg">I ♥</h2>
      <p className="text-sm text-lightGray">{interests.join(", ")}</p>
    </div>
  );
};
