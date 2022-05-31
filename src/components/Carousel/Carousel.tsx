import React, {
  Children, isValidElement, useEffect, useState,
} from 'react';
import twa from '../../utils/twa';

type Props = {
    children: Required<React.ReactNode>;
}

const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export function Carousel({ children }: Props) {
  const [items, setItems] = React.useState([]);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [bigLength, setBigLength] = React.useState(0);

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      // setItems((prev) => {
      //     return prev.map((_, i) => prev[(i + jump) % bigLength]);
      // });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      // setItems((prev) => {
      //     return prev.map(
      //         (_, i) => prev[(i - jump + bigLength) % bigLength],
      //     );
      // });
    }
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length); // prettier-ignore
  }, [items]);

  useEffect(() => {
    // setItems(children);
    // Children.map(children, (child) => {
    //     if (isValidElement(child)) {
    //         setItems(child);
    //     }
    //   });
    setBigLength(Children.count(children));
  }, [children]);

  return (
    <div className={twa`top-[10%] items-center flex flex-[1] justify-center relative w-4/5 left-2/4 -translate-x-2/4`}>
      <div className={twa`h-[40rem] relative w-[calc(90rem)]`}>
        <button className={twa`items-center cursor-pointer flex justify-center absolute top-1/2 -translate-y-2/4`} onClick={() => prevClick()}>
          <i className={twa`border-black border-solid h-[6rem] p-[3px] w-[6rem] z-10 border-b-[0.4rem] border-r-[0.4rem] rotate-[135deg]`} />
        </button>
        <div className={twa`h-full overflow-hidden relative w-full`}>
          <ul className={twa`h-full left-1/2 list-none m-0 p-0 absolute w-[calc(330rem)] -translate-x-2/4`}>
            {children}
          </ul>
        </div>
        <button className={twa`items-center cursor-pointer flex justify-center absolute top-1/2 right-[-10rem] -translate-y-2/4`} onClick={() => nextClick()}>
          <i className={twa`border-black border-solid h-[6rem] p-[3px] w-[6rem] z-10 border-b-[0.4rem] border-r-[0.4rem] rotate-[-45deg]`} />
        </button>
      </div>
    </div>
  );
}
