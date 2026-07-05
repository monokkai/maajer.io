interface WorkItemProps {
  name: string;
  description: string;
  href?: string;
  status?: string;
  tags?: string[];
}

export const WorkItem = ({ name, description, href, status, tags }: WorkItemProps) => {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-medium">{name}</p>
          {status && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-darkGray text-lightGray">
              {status}
            </span>
          )}
        </div>
        <p className="text-sm text-lightGray mt-0.5">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mt-1.5">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-lightGray/60">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg bg-darkGray text-lightGray hover:text-white transition-colors mt-0.5"
        >
          GitHub
        </a>
      )}
    </div>
  );
};
