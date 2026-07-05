import { BasePage } from "../components/basePage";
import { Header } from "../components/header";
import { SectionBody } from "../components/sectionBody";
import { ToolItem } from "../components/ToolItem";

const tools = [
  {
    name: "Sony ZV-E10",
    description: "Main camera for recoding video and taking photos.",
    icon: "/camera.png",
    href: "https://www.amazon.es/-/en/Sony-Mirrorless-Interchangeable-Real-Time-Autofocus/dp/B098LWQPRT",
    label: "Buy",
  },
  {
    name: "Sigma 18-50mm f/2.8 DC DN",
    description:
      "Main lense for ZV-E10 camera. Great price, quality and reviews",
    icon: "/lense.png",
    href: "https://www.amazon.de/18-50-F2-8-Contemporary-Sony-Objektivbajonett/dp/B09JVBB36L",
    label: "Buy",
  },
  {
    name: "K&F Concept 67",
    description: "Tripod for ZV-E10 and other video-related devices.",
    icon: "/tripod.png",
    href: "https://www.amazon.com/Horizontal-Aluminum-T255A4-BH-28L-TM2515T1/dp/B07GKNYFSP",
    label: "Buy",
  },
  {
    name: "iPhone 17 Pro Max",
    description: "Second machine for recording any moments. My EDC.",
    icon: "/i3.webp",
    href: "https://www.apple.com/es/iphone-17-pro/",
    label: "Buy",
  },
  {
    name: 'MacBook Pro M1 Pro 16"',
    description: "Main machine for development, design, and video editing.",
    icon: "/mac.png",
    href: "https://www.amazon.es/macbook-pro-16-m1/s?k=macbook+pro+16+m1",
    label: "Buy",
  },
  {
    name: "DaVinci Resolve",
    description:
      "Video editing and post-production software for editing videos.",
    icon: "/davi.png",
    href: "https://www.blackmagicdesign.com/products/davinciresolve",
    label: "Link",
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
          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool) => (
              <ToolItem key={tool.name} {...tool} />
            ))}
          </div>
        </SectionBody>
      </BasePage>
    </>
  );
}
