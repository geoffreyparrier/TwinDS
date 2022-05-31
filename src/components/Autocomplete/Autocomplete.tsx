import React, { useEffect, useState } from 'react';
import { Label } from '../Label/Label';
import { twa } from '../../utils/twa';
import { CommonFormInputProps } from '../Form/Form';
import { InputGroup } from '../Form/InputGroup';

type Props = {
  idList: string;
  idInput: string;
  placeholder?: string;
  values: Array<string>;
} & JSX.IntrinsicElements['datalist'] &
  CommonFormInputProps;

export function Autocomplete({
  values, label, idList, idInput, placeholder = '', ...selectProps
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [child, setChild] = useState(values);
  const [getList, setList] = useState(values);
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    setList(child.filter((item) => item.includes(selectedOption)));
  }, [selectedOption]);

  function expand() {
    setDisplayList(true);
  }

  function close() {
    setDisplayList(false);
  }

  return (
    <InputGroup>
      <Label required={selectProps.required}>{label}</Label>
      <input
        id={idInput}
        name={idInput}
        className={twa`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-500 focus:border-main-500 block w-full p-2.5`}
        placeholder={placeholder}
        onChange={(e) => setSelectedOption(e.target.value)}
        onFocus={expand}
        onBlur={close}
      />
      <ul
        className={twa`absolute bg-white border-1 border-solid border-main-500 rounded-b-md rounded-t-none font-serif w-full p-1.5 max-h-40 overflow-y-auto ${displayList ? '' : 'hidden'}`}
        id={idList}
      >
        {getList.map((filteredName) => (
          <li>
            {filteredName}
          </li>
        ))}

      </ul>
    </InputGroup>
  );
}
