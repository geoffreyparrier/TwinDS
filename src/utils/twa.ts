import { apply, tw } from "twind";

export const twa = (string: TemplateStringsArray): string => tw(apply(string));
