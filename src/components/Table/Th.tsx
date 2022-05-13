import { twa } from "../../utils/twa";

export interface Props {
    value: string;
}

export const Th = (props: Props) => {
    return <th className={twa`text-main-700  p-2.5`}>{props.value}</th>;
};
