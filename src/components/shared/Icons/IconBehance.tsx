import { IconProps } from "./iconProps.interface";

export const IconBehance = ({ className }: IconProps) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="behance icon"
        >
            <path
                d="M12.8889 16.2257C14.6556 15.3277 15.5778 13.9689 15.5778 11.8539C15.5778 7.6829 12.6556 6.66675 9.28333 6.66675H0V27.6043H9.54445C13.1222 27.6043 16.4833 25.7787 16.4833 21.5251C16.4833 18.896 15.3111 16.9524 12.8889 16.2257ZM4.32778 10.241H8.38889C9.95 10.241 11.3556 10.7077 11.3556 12.6337C11.3556 14.412 10.2611 15.1268 8.71667 15.1268H4.32778V10.241ZM8.95556 24.0477H4.32778V18.2816H9.04445C10.95 18.2816 12.1556 19.1265 12.1556 21.271C12.1556 23.386 10.7167 24.0477 8.95556 24.0477ZM28.8722 9.82746H20.8889V7.76561H28.8722V9.82746ZM32 20.243C32 15.759 29.5333 12.0193 25.0611 12.0193C20.7167 12.0193 17.7667 15.4931 17.7667 20.0422C17.7667 24.7626 20.5611 28.0001 25.0611 28.0001C28.4667 28.0001 30.6722 26.3695 31.7333 22.9016H28.2778C27.9056 24.1954 26.3722 24.8807 25.1833 24.8807C22.8889 24.8807 21.6833 23.451 21.6833 21.0229H31.9667C31.9833 20.7748 32 20.5089 32 20.243ZM21.6889 18.3998C21.8167 16.4088 23.0611 15.1623 24.9389 15.1623C26.9056 15.1623 27.8944 16.3911 28.0611 18.3998H21.6889Z"
                fill="currentColor"
            />
        </svg>
    );
};
