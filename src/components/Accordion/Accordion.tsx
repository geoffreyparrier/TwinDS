import { PropsWithChildren } from "react";
import { twa } from "../../utils/twa";

export const Accordion = ({ children }: PropsWithChildren<{}>) => {
  return <div className={twa``}>{children}</div>;
};
