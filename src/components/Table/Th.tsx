import { twa } from "../../utils/twa";
import {PropsWithChildren} from "react";

export const Th = (props: PropsWithChildren<{}>) => {
    return <th className={twa`text-main-700  p-2.5`}>{props.children}</th>;
};
