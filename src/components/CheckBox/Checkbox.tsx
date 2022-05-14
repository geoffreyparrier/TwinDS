import { useState } from "react";
import { twa } from "../../utils/twa";

export interface CheckBoxProps extends Partial<JSX.IntrinsicElements["input"]> {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
}

export const CheckBox = (props: CheckBoxProps) => {
    const {disabled = false, checked = false, ...other} = props;
    const [check, setChecked] = useState(checked);

    function onSelectClick() {
        setChecked(prev => !prev)
    }

    return (
        <>
            <input type="checkbox"
                   checked={check}
                   onChange={() => onSelectClick()}
                   className="h-4 w-4 relative top-[4px]" disabled={disabled} {...other}
            />
            {props.label && (
                <label htmlFor={props.id} className={twa`pl-2 pr-2 ${ disabled ? "opacity-50":""}`}>
                    {props.label}
                </label>
            )}
        </>
    )
};
