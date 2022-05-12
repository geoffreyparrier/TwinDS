import { Label } from "../Label/Label";
import { twa } from "../../utils/twa";
import { CommonFormInputProps } from "../Form/Form";
import { InputGroup } from "../Form/InputGroup";

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["select"] &
  CommonFormInputProps;

export const Select = ({ children, label, ...selectProps }: Props) => {
  return (
    <InputGroup>
      <Label required={selectProps.required}>{label}</Label>
      <select
        {...selectProps}
        className={twa`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-500 focus:border-main-500 block w-full p-2.5`}
      >
        {children}
      </select>
    </InputGroup>
  );
};
