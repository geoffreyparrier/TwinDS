import React, { useState } from 'react';
import PlusIcon from '../../icons/plus.icon';
import twa from '../../utils/twa';
import { Button } from '../Button/Button';

type Props = {
  children: Required<React.ReactNode>;
};
export function SpeedDialButton({ children }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="fixed bottom-5 right-5">
      <Button
        onClick={() => setOpened(!opened)}
        icon={<PlusIcon />}
        className="relative transition-all hover:rotate-45 rotate-0"
      />
      <div
        className={twa`${
          opened ? 'flex' : 'hidden'
        } absolute mt-4 bottom-16 right-0 flex-col space-y-2`}
      >
        {children}
      </div>
    </div>
  );
}
