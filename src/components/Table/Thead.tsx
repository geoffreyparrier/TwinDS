type Props = {
    children: Required<React.ReactNode>;
};

export function Thead({ children }: Props) {
  return <thead>{children}</thead>;
}
