import { ChildrenProps } from "../types";

export const BasePage = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto w-[90%] md:w-[60%] pb-24 pt-10 items-center">
      {children}
    </div>
  );
};
