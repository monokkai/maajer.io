"use client";

import { motion } from "framer-motion";
import { BlogPage } from "@/app/components/Blog/blogPage";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function MyStory() {
  return (
    <BlogPage>
      <motion.div className="flex flex-col gap-6" {...fade(0)}>
        <div className="flex flex-col gap-2">
          <motion.p className="text-lightGray text-sm" {...fade(0.05)}>
            2026
          </motion.p>
          <motion.h1 className="text-2xl font-semibold" {...fade(0.1)}>
            My Story
          </motion.h1>
          <motion.p className="text-lightGray text-sm" {...fade(0.15)}>
            How I went from a gaming addict to a programmer and a YouTuber.
          </motion.p>
        </div>

        <motion.p className="text-sm leading-relaxed" {...fade(0.2)}>
          Hey there! I&apos;m Egør, also known as Diegø. Born in Russia, raised
          partially in Lithuania, and now living in Alicante, Spain. I&apos;m 18
          years old, and I&apos;ve been obsessed with how things work under the
          hood for as long as I can remember.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.25)}>
          My whole life I was poking around with tech — even when my parents got
          me my first phone, I was deep in the settings, pulling things apart
          just to understand what was going on inside. That curiosity never went
          away.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.3)}>
          Then 2020 happened. The pandemic hit, I took a break from programming,
          and fell into gaming. Hard. What started as a distraction turned into
          two years of being stuck in that loop — grinding games, going nowhere.
          Honestly, the worst decision I&apos;ve made so far.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.35)}>
          In 2023 I finally broke out of it and started taking my career
          seriously. I enrolled in an IT Academy and spent the next two years
          grinding projects, presenting to companies, learning what real
          software engineering looks like. It was hard, but it was the right
          kind of hard.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.4)}>
          By 2025 I graduated and started building in public — side projects,
          GitHub, this portfolio. The goal was simple: prove I could ship real
          things. Backend, infra, cloud — that&apos;s where my focus is. But
          I&apos;m comfortable across the stack.
        </motion.p>

        <motion.p className="text-sm leading-relaxed" {...fade(0.45)}>
          Now in 2026 I&apos;m in Spain, making YouTube videos about life as an
          18-year-old trying to become a proper Software Engineer. The journey
          is just getting started — and I&apos;m taking you along for all of it.
        </motion.p>

        <motion.p
          className="text-sm leading-relaxed text-lightGray"
          {...fade(0.5)}
        >
          If you&apos;re also early in your journey — we&apos;re in the same
          boat. Let&apos;s figure it out. ¿Cya!
        </motion.p>
      </motion.div>
    </BlogPage>
  );
}
