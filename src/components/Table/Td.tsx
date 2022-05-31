import { PropsWithChildren } from 'react';
import { twa } from '../../utils/twa';

export function Td(props: PropsWithChildren<{}>) {
  return <td className={twa`text-center text-main-500  p-2.5`}>{props.children}</td>;
}
