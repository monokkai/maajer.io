import { ChildrenProps } from "../types";

export const BasePage = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto w-[60%] pb-24 pt-10 items-center">
      {children}
    </div>
  );
};
