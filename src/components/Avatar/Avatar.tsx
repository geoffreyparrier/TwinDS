import clsx from "clsx";
import { twa } from "../../utils/twa";

type Props = {
  src: string;
  size?: "small" | "medium" | "large";
  shadow?: boolean;
  outline?: boolean;
};

export const Avatar = ({
  src,
  size = "medium",
  shadow = false,
  outline,
}: Props) => {
  return (
    <img
      src={src}
      className={clsx(
        twa`rounded-full h-12 w-12 object-cover`,
        size === "large" && twa`h-16 w-16`,
        size === "small" && twa`h-8 w-8`,
        size === "medium" && twa`h-12 w-12`,
        shadow && twa`shadow`,
        outline && twa`border-2 border-white`
      )}
    />
  );
};
