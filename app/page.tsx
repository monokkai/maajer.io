import { BasePage } from "./components/basePage";
import { BlogCard } from "./components/Blog/card";
import { Header } from "./components/header";
import { SectionBody } from "./components/sectionBody";
import { SocialMediaButton } from "./components/socialMediaButton";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <BasePage>
        <SectionBody>
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-2xl">What&apos;s Up, Im Egør!</h1>
            <p className="text-lightGray text-sm">
              A Software Engineer by day and a content creator by night.
            </p>
            <p className="text-lightGray text-sm">
              With programming I mostly focus on the backend / infra side of
              things. Also, i do YouTube and make videos about my life as a
              future Software Engineer here, in Spain.
            </p>
          </div>
          <div className="flex text-sm gap-3">
            <SocialMediaButton
              href="https://www.youtube.com/@lydd2"
              text="YouTube"
              icon="/youtube-icon.png"
            />
            <SocialMediaButton
              href="https://www.instagram.com/"
              text="Instagram"
              icon="/instagram-icon.png"
            />
            <SocialMediaButton
              href="https://discord.gg/"
              text="Discord"
              icon="/discord-icon.png"
            />
          </div>
          <Skills />
        </SectionBody>
      </BasePage>
    </>
  );
}
