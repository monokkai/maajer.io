import Image from "next/image";

interface ToolItemProps {
  name: string;
  description: string;
  icon: string;
  href?: string;
}

export const ToolItem = ({ name, description, icon, href }: ToolItemProps) => {
  return (
    <div className="flex items-center gap-4 py-3">
      <Image
        src={icon}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-lightGray">{description}</p>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg bg-darkGray text-lightGray hover:text-white transition-colors"
        >
          Link
        </a>
      )}
    </div>
  );
};
