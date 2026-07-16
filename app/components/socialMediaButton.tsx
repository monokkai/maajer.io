import Image from "next/image";

interface SocialMediaButtonProps {
  href: string;
  text: string;
  icon: string;
}

export const SocialMediaButton = ({
  href,
  text,
  icon,
}: SocialMediaButtonProps) => {
  return (
    <div className="flex gap-1 items-center text-primary relative rounded-lg px-3 py-2 text-sm transition-colors bg-darkGray hover:bg-darkGray/80">
      <a href={href}>{text}</a>
      <Image className="w-3 h-3" alt="icon" src={icon} width={30} height={30} />
    </div>
  );
};
