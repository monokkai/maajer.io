"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import Link from "next/link";

const links = [
  { text: "Home", href: "/" },
  { text: "Works", href: "/works" },
  { text: "Gear", href: "/gear" },
  { text: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex w-[90%] md:w-[60%] justify-between items-center mt-4 mx-auto">
        <Link href="/" className="text-sm font-medium">
          ME
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1 flex-nowrap">
          {links.map((l) => (
            <Button
              key={l.href}
              text={l.text}
              href={l.href}
              isActive={currentPath === l.href}
            />
          ))}
        </div>

        {/* Burger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col items-center gap-1 py-4 border-b border-darkGray"
          >
            {links.map((l) => (
              <Button
                key={l.href}
                text={l.text}
                href={l.href}
                isActive={currentPath === l.href}
                onClick={() => setOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
