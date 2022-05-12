import { twa } from "../../utils/twa";
import { ReactNode } from "react";
import { Loader } from "../Loader/Loader";

export interface ButtonProps extends Partial<JSX.IntrinsicElements["button"]> {
  label: string;
  icon?: ReactNode;
  iconPosition?: string;
  filled?: boolean;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {icon, label, iconPosition, filled, loading, ...other} = props;
    let colorClasses = 'not-disabled:hover:bg-main-700 not-disabled:hover:text-white text-main-800 border-main-700';
    if(props.filled) colorClasses = 'not-disabled:hover:bg-transparent not-disabled:hover:text-main-800 bg-main-700 text-white border-main-700';

    const iconElement = (
        <>
            {loading ? (
                <div className="my-auto"><Loader/></div>
            ) : props.icon}
        </>
    );
    return (
        <button {...other} className={twa`flex gap-2 content-around border ${colorClasses} focus:outline-none px-4 py-2 rounded-full duration-150 transition outline-none active:scale-95 disabled:active:scale-100 disabled:opacity-50 disabled:cursor-default`}>
            {(!props.iconPosition || props.iconPosition === 'left') && iconElement}
            <div className={twa``}>
                {props.label}
            </div>
            {(props.iconPosition && props.iconPosition === 'right') && iconElement}
        </button>
    );
};
