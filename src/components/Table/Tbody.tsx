type Props = {
    children: Required<React.ReactNode>;
};

export function Tbody({ children }: Props) {
  return <tbody>{children}</tbody>;
}
