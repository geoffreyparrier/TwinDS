import { PropsWithChildren, useMemo } from 'react';
import { twa } from '../../utils/twa';

type Props = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export function Container({
  sm = 1,
  md = 3,
  lg = 4,
  xl = 5,
  xxl = 6,
  children,
}: PropsWithChildren<Props>) {
  const classBuilder = useMemo(() => `sm:grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} xl:grid-cols-${xl} 2xl:grid-cols-${xxl}`, [sm, md, lg, xl, xxl]);

  return <div className={twa`grid ${classBuilder}`}>{children}</div>;
}
