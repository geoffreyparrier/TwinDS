import { twa } from "../../utils/twa";
import {PropsWithChildren} from "react";

export const Td = (props: PropsWithChildren<{}>) => {
    return <td className={twa`text-center text-main-500  p-2.5`}>{props.children}</td>;
};
