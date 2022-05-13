import { twa } from "../../utils/twa";

export interface Props {
    value: string;
}

export const Td = (props: Props) => {
    return <td className={twa`text-center text-main-500 border-solid border-2 border-black p-2.5`}>{props.value}</td>;
};
