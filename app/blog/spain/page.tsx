"use client";

import { motion } from "framer-motion";
import { BlogPage } from "@/app/components/Blog/blogPage";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Spain() {
  return (
    <BlogPage>
      <motion.div className="flex flex-col gap-6" {...fade(0)}>
        <div className="flex flex-col gap-2">
          <motion.p className="text-lightGray text-sm" {...fade(0.05)}>
            September 2026
          </motion.p>
          <motion.h1 className="text-2xl font-semibold" {...fade(0.1)}>
            Moving to Spain
          </motion.h1>
          <motion.p className="text-lightGray text-sm" {...fade(0.15)}>
            From Kaunas, Lithuania to Alicante, Spain — the whole journey.
          </motion.p>
        </div>

        <motion.p className="text-sm leading-relaxed" {...fade(0.2)}>
          I&apos;ve wanted to live in Spain since I was a kid. Something about
          the sun, the language, the pace of life - it always felt like where I
          was supposed to be. For most of my life I spent here, in Spain.
          I&apos; currenly studing spainsh for about 4 years now. Then, in 2026,
          it happened, we moved.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.25)}>
          The move wasn&apos;t simple. We packed up everything from Kaunas —
          years of life into boxes — and made the drive south. Lithuania to
          Spain is not a short trip. Long highways, border crossings, rest stops
          in the middle of nowhere. But every kilometer felt intentional.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.3)}>
          Arriving in Alicante for the first time as a resident, not a tourist,
          hit differently. The Mediterranean light is something else. The city
          is warm, loud in the right ways, and has this energy that makes you
          want to be outside and doing something.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.35)}>
          Settling in took a few weeks. Finding a rhythm, learning where things
          are, getting used to Spanish hours - dinner at 9pm, everything closed
          between 2 and 5. It&apos;s a completely different world from what I
          knew in Lithuania or back in Russia where I was born.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.4)}>
          Now that the dust has settled, I can say this was the right call. I
          turned 18 here. I&apos;m building my career here. Whatever comes next
          - the first job, the first real project in production, all of it -
          it&apos;s going to happen from Spain.
        </motion.p>

        <motion.p
          className="text-sm leading-relaxed text-lightGray"
          {...fade(0.45)}
        >
          If you&apos;re ever thinking about a big move — just do it. The worst
          case is you come back. The best case is you find where you belong.
          ¡Buena suerte!
        </motion.p>
      </motion.div>
    </BlogPage>
  );
}
