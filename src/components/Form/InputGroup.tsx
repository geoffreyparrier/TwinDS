import { PropsWithChildren } from 'react';
import { twa } from '../../utils/twa';

export function InputGroup({ children }: PropsWithChildren<{}>) {
  return <div className={twa`mb-6`}>{children}</div>;
}
