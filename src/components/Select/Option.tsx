type Props = {
  value: string;
  children: Required<React.ReactNode>;
};

export const Option = ({ children, value }: Props) => {
  return <option value={value}>{children}</option>;
};
