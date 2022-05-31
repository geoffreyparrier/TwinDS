import { useEffect, useState } from 'react';
import twa from '../../utils/twa';

export interface RadioButtonProps extends Partial<JSX.IntrinsicElements['input']>{
  label: string;
  selected: boolean;
  onChange: (value: any) => void;
}

export function RadioButton(props: RadioButtonProps) {
  const { onChange, ...other } = props;
  const [selected, setSelected] = useState(props.selected);

  function onSelectClick() {
    setSelected((prev) => !prev);
  }

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <div>
      <input
        type="radio"
        checked={selected}
        onChange={() => onSelectClick()}
        className={twa`h-4 w-4 relative top-0.5`}
        {...other}
      />
      <label htmlFor={props.id} className={twa`pl-2 pr-2`}>
        {props.label}
      </label>
    </div>
  );
}
