import { apply, Token, tw } from 'twind';

export default (
  strings: TemplateStringsArray,
  ...interpolations: Token[]
): string => tw(apply(strings, ...interpolations));
