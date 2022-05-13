import { PropsWithChildren } from "react";
import { twa } from "../../utils/twa";

export const Accordion = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      className={twa`bg-white border rounded-md border-main-400 divide-y divide-main-500`}
    >
      {children}
    </div>
  );
};
