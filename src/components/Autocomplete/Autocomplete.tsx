import { Label } from "../Label/Label";
import { twa } from "../../utils/twa";
import { CommonFormInputProps } from "../Form/Form";
import { InputGroup } from "../Form/InputGroup";

type Props = {
  children: React.ReactNode;
  idList: string;
  idInput: string;
  placeholder?: string;
} & JSX.IntrinsicElements["datalist"] &
  CommonFormInputProps;

export const Autocomplete = ({ children, label, idList, idInput, placeholder = "", ...selectProps }: Props) => {
  return (
    <InputGroup>
      <Label required={selectProps.required}>{label}</Label>
      <input list={idList} id={idInput} name={idInput} 
      className={twa`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-500 focus:border-main-500 block w-full p-2.5`}
      placeholder={placeholder}/>
      <datalist
        // className={twa`absolute bg-white border-1 border-solid border-main-500 rounded-b-md rounded-t-none font-serif w-80 p-1.5 max-h-40 overflow-y-auto`}
        id={idList}
      >
        {children}
      </datalist>
    </InputGroup>
  );
};
