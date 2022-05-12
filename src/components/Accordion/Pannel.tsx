import { PropsWithChildren, useState } from "react";
import { twa } from "../../utils/twa";

type Props = {
  title: string;
};

export const Pannel = ({ children, title }: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
    // onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={twa``}>{title}</div>

      <div
        // ref={bodyRef}
        style={
          {
            //   height: true ? bodyRef.current?.scrollHeight : 0,
          }
        }
        className={twa`transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
};
