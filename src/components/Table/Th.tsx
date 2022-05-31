import { PropsWithChildren } from 'react';
import twa from '../../utils/twa';

export function Th(props: PropsWithChildren<{}>) {
  return <th className={twa`text-main-700  p-2.5`}>{props.children}</th>;
}
