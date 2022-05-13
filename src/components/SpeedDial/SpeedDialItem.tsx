import React from "react";
import { PlusIcon } from "../../icons/plus.icon";
import { Button } from "../Button/Button";

type Props = {
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const SpeedDialItem = ({ icon, onClick }: Props) => {
  return <Button icon={icon ?? <PlusIcon />} onClick={onClick} />;
};
