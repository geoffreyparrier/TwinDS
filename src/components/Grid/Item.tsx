import { PropsWithChildren, useMemo } from "react";
import { twa } from "../../utils/twa";

type Props = {
  span?: Variant;
};

type Variant = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export const Item = ({ children, span }: PropsWithChildren<Props>) => {
  const { lg, md, sm, xl, xxl } = useMemo<Required<Variant>>(() => {
    if (span)
      return {
        sm: span.sm ?? 1,
        md: span.md ?? 1,
        lg: span.lg ?? 1,
        xl: span.xl ?? 1,
        xxl: span.xxl ?? 1,
      };
    return { lg: 1, md: 1, sm: 1, xl: 1, xxl: 1 };
  }, [span]);
  return (
    <div
      className={twa`sm:col-span-${sm} md:col-span-${md} lg:col-span-${lg} xl:col-span-${xl} 2xl:col-span-${xxl}`}
    >
      {children}
    </div>
  );
};
