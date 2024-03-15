import Image from "next/image";

interface BackgroundCirclesProps {
    className?: string;
    zIndex?: string;
}

export const BackgroundCircles = ({
    className,
    zIndex,
}: BackgroundCirclesProps) => {
    return (
        <div
            className={`hidden pc:block h-[100vh] absolute w-screen blur-[100px] overflow-hidden z-[-10] ${className} ${zIndex}`}
        >
            <Image
                src="/images/bgImages/leftBottom.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute left-[32px] bottom-0 w-[180px] h-[180px] z-[-10] ${zIndex}`}
            />
            <Image
                src="/images/bgImages/rightBottom.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute right-[240px] bottom-0 w-[540px] h-[270px] z-[-10] ${zIndex}`}
            />
            <Image
                src="/images/bgImages/rightTop.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute right-0 top-0 w-[314px] h-[253px] z-[-10]`}
            />
        </div>
    );
};
