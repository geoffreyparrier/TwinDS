import { Table as TableInput} from "./Table";
import { Tbody as TbodyInput } from "./Tbody";
import { Thead as TheadInput } from "./Thead";
import { Td } from "./Td";
import { Th } from "./Th";
import { Tr as TrInput } from "./Tr";

export const Tr = Object.assign(TrInput, { Td, Th });
export const Tbody = Object.assign(TbodyInput, { Tr });
export const Thead = Object.assign(TheadInput, { Tr });
export const Table = Object.assign(TableInput, { Tbody, Thead });
