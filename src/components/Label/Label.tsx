import { PropsWithChildren } from "react";
import { apply, tw } from "twind";

export const Label = ({ children }: PropsWithChildren<{}>) => {
  return <div className={tw(apply(`bg-[#f97316]`))}>{children}</div>;
};
