import { apply, tw } from "twind";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={tw(apply`bg-pink-500`)}>{props.label}</button>;
};

export default Button;
