import { apply, tw } from "twind";

export interface RadioButtonProps {
  label: string;
  id: string;
  value: string;
  selected: boolean;
  name: string;
}



const RadioButton = (props: RadioButtonProps) => {
    function onSelectClick() {
        props.selected = !props.selected  
    }
    // console.log(props.label);
    // let element = <></>;
    // for (let index = 0; index < props.label.length; index++) {
    //     element = 
    //         <>
    //             <input type="radio" id={props.id[index]} name={props.name[index]} value={props.value[index]} checked={props.selected} 
    //             onChange={() => onSelectClick()} className=""/>
    //             <label htmlFor={props.id[index]}>
    //                 {props.label[index]}
    //             </label> 
    //         </>
    // }
    // console.log(element);
    
    return <div>
                <input type="radio" id={props.id} name={props.name} value={props.value} checked={props.selected} 
                onChange={() => onSelectClick()} className="h-4 w-4 relative top-0.5"/>
                <label htmlFor={props.id} className="pl-2 pr-2">
                    {props.label}
                </label> 
            </div>
    

};

export default RadioButton;
