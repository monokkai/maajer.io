import Image from "next/image";

interface ToolItemProps {
  name: string;
  description: string;
  icon: string;
  href?: string;
  label?: string;
}

export const ToolItem = ({
  name,
  description,
  icon,
  href,
  label = "Link",
}: ToolItemProps) => {
  return (
    <div className="flex items-center gap-3 p-4">
      <Image
        src={icon}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm truncate max-w-[80%]">{name}</p>
        <p className="text-sm text-lightGray leading-snug mt-0.5 max-w-[95%]">
          {description}
        </p>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-xs px-3 py-1 rounded-md bg-darkGray text-lightGray hover:text-white transition-colors font-medium"
        >
          {label}
        </a>
      )}
    </div>
  );
};
