type Props = {
    children: Required<React.ReactNode>;
};

export const Tr = ({ children }: Props) => {
    return <tr>{children}</tr>;
};
