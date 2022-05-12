import { apply, Token, tw } from "twind";

export const twa = (
    strings: TemplateStringsArray,
    ...interpolations: Token[]
): string => tw(apply(strings, ...interpolations));
