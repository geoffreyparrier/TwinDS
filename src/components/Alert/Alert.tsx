import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import twa from '../../utils/twa';
import { Progress } from '../Progress/Progress';
import { Button } from '../Button/Button';

export interface AlertProps {
  type: string;
  classes?: string;
  onClose?: () => void;
}

export function Alert(props: PropsWithChildren<AlertProps>) {
  const handleClose = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <div
      className={twa`flex gap-2 justify-between px-4 py-2 text-${
        props.type
      }-text bg-${props.type}-background rounded ${props.classes ?? ''}`}
    >
      <div className={twa`flex gap-2`}>
        <AlertIcon type={props.type} />
        <div className={twa`my-auto`}>{props.children}</div>
      </div>
      {!!props.onClose && (
        <Button
          onClick={handleClose}
          className="p-0 border-none"
          icon={(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        />
      )}
    </div>
  );
}

function AlertIcon(props: AlertProps) {
  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  switch (props.type) {
    case 'warning':
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
      break;
    case 'error':
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
      break;
    case 'success':
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
      break;
  }
  return <div className={twa`my-auto text-${props.type}-icon`}>{icon}</div>;
}

interface AlertProviderValue {
  fire: (newType?: string, content?: string) => void;
  close: () => void;
}

const AlertContext = createContext<AlertProviderValue>({
  fire: () => {},
  close: () => {},
});

export const useAlert = () => useContext(AlertContext);

export function AlertProvider(props: PropsWithChildren<{}>) {
  const [alert, setAlert] = useState<PropsWithChildren<AlertProps> | null>(
    null,
  );
  const [progressValue, setProgressValue] = useState(0);

  const fire = (newType: string = 'info', content: string = '') => {
    setAlert({ type: newType, children: content });
    setProgressValue(0);
  };

  const close = () => {
    setAlert(null);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(null);
    }, 4000);
    const interval = setInterval(() => {
      setProgressValue((prev) => prev + 1);
    }, 4000 / 100);

    if (!alert) {
      setProgressValue(0);
      clearInterval(interval);
      clearTimeout(timeout);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <AlertContext.Provider value={{ fire, close }}>
      {props.children}
      {alert && (
        <div
          className={twa`fixed top-2 shadow-md left-1/2 min-w-[15rem] origin-center -translate-x-1/2`}
        >
          <Alert type={alert.type} classes="w-full">
            {alert.children}
          </Alert>
          <Progress value={progressValue} height="0.3rem" />
        </div>
      )}
    </AlertContext.Provider>
  );
}
