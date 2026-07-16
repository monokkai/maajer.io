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
            <h1 className="text-2xl">¡Hola, I&apos;m Egør!</h1>
            <p className="text-lightGray text-sm">
              A Software Engineer by day and a content creator by night.
            </p>
            <p className="text-lightGray text-sm">
              Building scalable, cloud-native applications and distributed
              systems. I focus on developing reliable backend services, APIs,
              and system architectures using modern technologies. My work
              emphasizes clean code, performance, reliability, and
              maintainability, with solid React and TypeScript skills for
              full-stack development.
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
            <SocialMediaButton
              href="https://discord.gg/"
              text="Discord"
              icon="/ds.webp"
            />
            <SocialMediaButton
              href="https://github.com/monokkai"
              text="GitHub"
              icon="/gh.svg"
            />
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
