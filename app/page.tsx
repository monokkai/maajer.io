"use client";
import { BasePage } from "./components/basePage";
import { Header } from "./components/header";
import { SectionBody } from "./components/sectionBody";
import { SocialMediaButton } from "./components/socialMediaButton";
import { Skills } from "./components/Skills";
import { Bio } from "./components/Bio";
import { Interests } from "./components/Interests";

export default function Home() {
  return (
    <>
      <Header />
      <BasePage>
        <SectionBody>
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-2xl">¡Hi folks, I&apos;m Egør!</h1>
            <p className="text-lightGray text-sm">
              A Full-Stack Mobile Engineer by day and a content creator by night.
            </p>
            <p className="text-lightGray text-sm">
              Full-stack Mobile Engineer focused on native iOS (UIKit / SwiftUI) and Android
              (Kotlin), with backend expertise in Go, Rust, and AWS. I build reliable,
              production-ready apps and services - from native mobile experiences to scalable APIs
              and cloud infrastructure. Clean code, performance, and maintainability across the full
              stack.
            </p>
          </div>
          <div className="flex flex-wrap text-sm gap-3">
            <SocialMediaButton
              href="https://www.youtube.com/@lydd2"
              text="YouTube"
              icon="/yt.png"
            />
            <SocialMediaButton
              href="https://www.instagram.com/dimaajer0"
              text="Instagram"
              icon="/ig.png"
            />
            <SocialMediaButton href="https://discord.gg/" text="Discord" icon="/ds.webp" />
            <SocialMediaButton href="https://github.com/monokkai" text="GitHub" icon="/gh-2.png" />
            {/* <SocialMediaButton
              href="https://www.linkedin.com/in/igor-mayer-688614374/"
              text="LinkedIn"
              icon="/in.webp"
            /> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skills />
            <div className="flex flex-col gap-8">
              <Bio />
              <Interests />
            </div>
          </div>
        </SectionBody>
      </BasePage>
    </>
  );
}
