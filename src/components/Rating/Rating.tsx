import {useEffect, useState} from "react";
import {twa} from "../../utils/twa";

interface RatingProps {
    max?: number;
    value?: number;
    onChange?: (value: number) => void;
}

interface IconProps{
    strokeColor?: string;
    filled?:boolean;
    filledColor?:string;
}

const StarIcon = (props: IconProps) =>  (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
         fill={props.filled ? (props.filledColor ?? 'currentColor') : 'none'}
         viewBox="0 0 24 24" stroke={props.strokeColor ?? "currentColor"}
         strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
    </svg>
);

export function Rating(props: RatingProps){
    const {max = 5, value = 0, onChange = () => {}} = props;
    const [selectedItems, setSelectedItems] = useState<number>(value);
    const [hoveredItems, setHoveredItems] = useState<number>(value);

    useEffect(() => {
        onChange(selectedItems);
    },[selectedItems]);

    return (
        <div onMouseLeave={() => setHoveredItems(selectedItems)} className={twa`inline-flex gap-0.5 rating-container`}>
            {Array(max).fill(null).map((item,index) => {
                const isFilled = hoveredItems >= (index + 1);
                return (
                    <div
                        key={index}
                        onClick={() => setSelectedItems(prev => {
                            if(prev === index + 1) return 0;
                            return index + 1;
                        })}
                        onMouseEnter={() => setHoveredItems(index + 1)}
                        className={twa`cursor-pointer hover:scale-110 transition duration-150 active:scale-100 rating`}
                    >
                        <StarIcon
                            filled={isFilled}
                            strokeColor={isFilled ? 'orange' : 'gray'}
                            filledColor="orange"
                        />
                    </div>
                );
            })}
        </div>
    );
}
