import { useEffect, useState } from "react";
import { twa } from "../../utils/twa";

export interface CheckBoxeProps {
  label?: string;
  id: string;
  value: string;
  checked?: boolean;
  name: string;
  disabled?: boolean;
}



export const CheckBoxes = (props: CheckBoxeProps) => {
    const {disabled = false, checked = false, ...other} = props;
    const [check, setChecked] = useState(checked)
    const [label, setLabel] = useState<React.ReactNode>(null)

    function onSelectClick() {
        setChecked(prev => !prev)
    }

    useEffect(()=>{
        if (props.label) {
            setLabel(
                <label htmlFor={props.id} className={twa`pl-2 pr-2 ${ disabled ? "opacity-50":""}`}>
                    {props.label}
                </label> 
            );
        }
    }, [props.label])
    
    return <>
                <input type="checkbox" 
                id={props.id} name={props.name} value={props.value} checked={check} 
                onChange={() => onSelectClick()} 
                className="h-4 w-4 relative top-[4px]"  disabled={disabled}/>
                
                {label}
            </>
    

};
