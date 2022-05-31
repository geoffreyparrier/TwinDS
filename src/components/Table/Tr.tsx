type Props = {
    children: Required<React.ReactNode>;
};

export function Tr({ children }: Props) {
  return <tr className="border-solid border-[0.5px] border-black">{children}</tr>;
}
