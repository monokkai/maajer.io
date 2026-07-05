"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";

export const Navbar = () => {
  const currentPath = usePathname();

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <nav className="flex w-[60%] justify-between items-center mt-4 mx-auto">
      <Link href="/" className="flex items-center gap-2" target="_blank">
        ME
      </Link>
      <div className="flex gap-1 flex-nowrap">
        <Button text="Home" href="/" isActive={currentPath === "/"} />
        <Button
          text="Works"
          href="/works"
          isActive={currentPath === "/works"}
        />
        <Button text="Gear" href="/gear" isActive={currentPath === "/gear"} />
        <Button text="Blog" href="/blog" isActive={currentPath === "/blog"} />
      </div>
      <a></a>
    </nav>
  );
};
