import { twa } from "../../utils/twa";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={twa`bg-main-500`}>{props.label}</button>;
};

export default Button;
