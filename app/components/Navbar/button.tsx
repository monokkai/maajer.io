"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const Button = ({ text, href, isActive, onClick }: ButtonProps) => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => { router.push(href); onClick?.(); }}
      className={`relative rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer ${isActive ? "bg-darkGray text-white" : "text-lightGray"}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};
