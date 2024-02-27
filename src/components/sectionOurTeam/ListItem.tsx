interface ListItemProps {
    children: string;
}

export const ListItem = ({ children }: ListItemProps) => {
    return (
        <li className="w-64 py-0.5 px-0 mb-3 text-base leading-6 tracking-normal text-left">
            {/* <div className=""></div> */}
            <p className="text-base">{children}</p>
        </li>
    );
};
