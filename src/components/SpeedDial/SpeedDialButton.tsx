import { PlusIcon } from "../../icons/plus.icon";
import { twa } from "../../utils/twa";
import { Button } from "../Button/Button";

type Props = {
  children: Required<React.ReactNode>;
};
export const SpeedDialButton = ({ children }: Props) => {
  return (
    <Button
      icon={<PlusIcon />}
      className={`fixed  bottom-5 right-5 transition-all hover:rotate-45 rotate-0`}
    >
      <div className={twa`relative`}></div>
      {children}
    </Button>
  );
};
