import clsx from "clsx";
import { PropsWithChildren, useRef, useState } from "react";
import { ChevronDown } from "../../icons/chevron.down";
import { twa } from "../../utils/twa";

type Props = {
  title: string;
};

export const Pannel = ({ children, title }: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)}>
      <div className={twa`text-main-500 flex justify-between px-4 py-2`}>
        <span className={twa`text-xl`}>{title}</span>
        <ChevronDown
          className={clsx(
            `${!isOpen ? "rotate-180" : "rotate-0"}`,
            twa`transition-all duration-300`
          )}
        />
      </div>

      <div
        ref={bodyRef}
        style={{
          height: isOpen ? bodyRef.current?.scrollHeight : 0,
        }}
        className={twa`transition-all duration-300 overflow-hidden`}
      >
        <div className={twa`p-4`}>{children}</div>
      </div>
    </div>
  );
};
