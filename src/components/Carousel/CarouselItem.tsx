import { PropsWithChildren } from 'react';

export function CarouselItem(props: PropsWithChildren<{}>) {
  return <li className="inline-block h-[30rem] m-0 p-4 absolute w-[30rem] transition delay-300">{props.children}</li>;
}
