"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChildrenProps } from "@/app/types";
import { BasePage } from "../basePage";
import { Header } from "../header";

export const BlogPage = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <BasePage>
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/blog">
              <motion.span
                className="inline-flex items-center gap-1.5 text-sm text-lightGray hover:text-white transition-colors"
                whileHover="hover"
              >
                <motion.span
                  variants={{ hover: { x: -4 } }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  ←
                </motion.span>
                Back
              </motion.span>
            </Link>
          </motion.div>
          <div className="flex flex-col gap-4 max-w-xl">{children}</div>
        </div>
      </BasePage>
    </>
  );
};
