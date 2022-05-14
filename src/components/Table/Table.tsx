import { Children, isValidElement, useEffect, useState } from "react";
import { Tbody, Thead } from ".";
import { twa } from "../../utils/twa";

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["table"];

export const Table = ({ children }: Props) => {
  const [tbody,setTbody] = useState<React.ReactNode>(null);
  const [thead,setThead] = useState<React.ReactNode>(null);
  useEffect(()=>{
    Children.map(children, (child) => {
      if (isValidElement(child)) {
        if (child.type === Thead) {
          setThead(child);
        }
        if (child.type === Tbody) {
          setTbody(child);
        }
      }
    });
  },[children]);

  return (
    <table className={twa`border-solid border-[0.5px] border-black`}>
        {thead}
        {tbody}
    </table>
  );
};
