import clsx from "clsx";
import React from "react";
import { twa } from "../../utils/twa";

type Props = {
  children: Required<React.ReactNode>;
  positionX?: "left" | "right";
  positionY?: "top" | "bottom";
  size?: "small" | "medium" | "large";
  content?: string | number;
};

export const Badge = ({
  children,
  positionX = "right",
  positionY = "top",
  size = "medium",
  content = "",
}: Props) => {
  return (
    <div className={twa`relative inline-flex p-2`}>
      <>{children}</>
      <div
        className={clsx(
          twa`absolute rounded-full bg-main-500 text-white text-xs p-1 font-semibold flex justify-center items-center`,
          twa`${positionX === "left" ? "left-1" : "right-1"}`,
          twa`${positionY === "top" ? "top-1" : "bottom-1"}`,
          twa` ${size === "small" && `h-3 min-w-[0.75rem]`}`,
          twa` ${size === "medium" && `h-5 min-w-[1.25rem]`}`,
          twa`${size === "large" && `h-8 min-w-[2rem]`}`
        )}
      >
        {content}
      </div>
    </div>
  );
};
