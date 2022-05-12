import {Button, ButtonProps} from "../Button/Button";
import {twa} from "../../utils/twa";

export interface ButtonGroupProps{
    buttons: Array<ButtonProps>
}

export function ButtonGroup(props: ButtonGroupProps){
    return (
        <div className={twa`rounded-md flex`}>
            {props.buttons.map((btn,index) => (<Button key={`btn-${index}`} rounded={false} {...btn}/>))}
        </div>
    );
}
