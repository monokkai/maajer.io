import { BasePage } from "../components/basePage";
import { Header } from "../components/header";
import { SectionBody } from "../components/sectionBody";
import { ToolItem } from "../components/ToolItem";
import { tools } from "./tools";

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
