import { IconProps } from "./iconProps.interface";

export const IconCopy = ({ className }: IconProps) => {
    return (
        <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon copy"
        >
            <path
                d="M3.9998 4V1C3.9998 0.44772 4.44752 0 4.9998 0H16.9998C17.5521 0 17.9998 0.44772 17.9998 1V15C17.9998 15.5523 17.5521 16 16.9998 16H13.9998V18.9991C13.9998 19.5519 13.5499 20 12.993 20H1.00666C0.45059 20 0 19.5554 0 18.9991L0.00259995 5.00087C0.00269995 4.44811 0.45264 4 1.00942 4H3.9998ZM5.9998 4H13.9998V14H15.9998V2H5.9998V4Z"
                fill="currentColor"
            />
        </svg>
    );
};
