import { useState } from "react";

export interface RadioButtonProps {
  label: string;
  id: string;
  value: string;
  selected: boolean;
  name: string;
}



export const RadioButton = (props: RadioButtonProps) => {
    const [selected,setSelected] = useState(props.selected)

    function onSelectClick() {
        setSelected(prev => !prev)
    }

    return <div>
                <input type="radio" id={props.id} name={props.name} value={props.value} checked={selected} 
                onChange={() => onSelectClick()} className="h-4 w-4 relative top-0.5"/>
                <label htmlFor={props.id} className="pl-2 pr-2">
                    {props.label}
                </label> 
            </div>
    

};
