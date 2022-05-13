import './Progress.css';
import {twa} from "../../utils/twa";

interface ProgressProps{
    max?:number|string;
    value: number|string;
    classes?: string
}

export function Progress(props:ProgressProps){
    const {max = 100, value, classes = ''} = props;
    return (
        <progress id="progress-bar" className={twa`w-full h-2 block ${classes}`} max={max} value={value}> {value}% </progress>
    );
}
