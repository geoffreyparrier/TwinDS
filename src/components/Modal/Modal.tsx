import {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { twa } from '../../utils/twa';
import { useClickAway } from '../../utils/hooks/useClickAway';
import './Modal.css';

export interface ModalContentProps{
    onClose: () => void;
}

export interface ModalProps extends ModalContentProps{
    opened: boolean;
}

export function Modal(props: PropsWithChildren<ModalProps>) {
  const [opened, setOpened] = useState(props.opened);
  useEffect(() => {
    setOpened(props.opened);
  }, [props.opened]);

  if (!opened) return null;

  return <ModalContent onClose={props.onClose}>{props.children}</ModalContent>;
}

function ModalContent(props: PropsWithChildren<ModalContentProps>) {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickAway(modalRef, props.onClose);
  return (
    <div className={twa`modal-container z-10 h-screen w-screen fixed top-0 left-0 flex bg-[#00000080]`}>
      <div ref={modalRef} className={twa`modal relative m-auto bg-gray-200 rounded-md shadow-lg px-4 py-3`}>
        <div onClick={props.onClose} className={twa`absolute -top-[1rem] -right-[1rem] bg-white hover:bg-gray-300 rounded-full shadow-md cursor-pointer p-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        {props.children}
      </div>
    </div>
  );
}
