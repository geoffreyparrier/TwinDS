import { content } from '@twind/content';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import twa from '../../utils/twa';

type Props = {
  required?: boolean;
};

export function Label({ children, required }: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(
        twa`font-semibold`,
        required && twa`after::text-red-500 after::${content('"*"')}`,
      )}
    >
      {children}
    </div>
  );
}
