import { BasePage } from "../components/basePage";
import { Header } from "../components/header";
import { SectionBody } from "../components/sectionBody";
import { ToolItem } from "../components/ToolItem";

const tools = [
  {
    name: "MacBook Pro M1 Pro 16\"",
    description: "Main machine for development, design, and video editing.",
    icon: "/tools/macbook.png",
  },
  {
    name: "Warp",
    description: "Modern terminal with AI features and autocomplete.",
    icon: "/tools/warp.png",
    href: "https://www.warp.dev",
  },
  {
    name: "NeoVim",
    description: "Highly customizable editor for fast development workflows.",
    icon: "/tools/neovim.png",
    href: "https://neovim.io",
  },
  {
    name: "Final Cut Pro X",
    description: "Professional video editing for YouTube and creative projects.",
    icon: "/tools/finalcut.png",
  },
];

export default function GearPage() {
  return (
    <>
      <Header />
      <BasePage>
        <SectionBody>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Gear</h1>
            <p className="text-lightGray text-sm">
              Software and hardware I use daily.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-darkGray">
            {tools.map((tool) => (
              <ToolItem key={tool.name} {...tool} />
            ))}
          </div>
        </SectionBody>
      </BasePage>
    </>
  );
}
