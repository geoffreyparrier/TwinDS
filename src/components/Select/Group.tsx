
type Props = {
  label: string;
  children: Required<React.ReactNode>;
};

export const Group = ({ label, children }: Props) => {
  return <optgroup label={label}>{children}</optgroup>;
};
