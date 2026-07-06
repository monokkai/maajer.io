"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/app/types";
import Image from "next/image";

export const BlogCard = ({ title, description, href, image }: Product) => {
  const router = useRouter();

  const hasImage = image && image !== "/";

  return (
    <a
      className="block overflow-hidden rounded-lg cursor-pointer group"
      onClick={() => router.push(href)}
    >
      {hasImage && (
        <div className="relative h-[220px] w-full overflow-hidden">
          <Image
            width={800}
            height={400}
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="bg-darkGray px-4 py-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-sm text-lightGray mt-0.5">{description}</p>
      </div>
    </a>
  );
};
