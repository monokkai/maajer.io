"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import Image from "next/image";

export const Navbar = () => {
  const currentPath = usePathname();

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <nav className="flex width-full max-w-[800px] justify-between items-center mt-4 mx-auto px-4">
      <Image
        src="/profile-pic.jpg"
        alt="logo"
        width={30}
        height={30}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex gap-1">
        <Button text="Home" href="/" isActive={currentPath === "/"} />
        <Button text="Works" href="/works" isActive={currentPath === "/works"} />
        <Button text="Gear" href="/gear" isActive={currentPath === "/gear"} />
        <Button text="Blog" href="/blog" isActive={currentPath === "/blog"} />
      </div>
      <a></a>
    </nav>
  );
};
