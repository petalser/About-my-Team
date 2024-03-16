import Image from "next/image";
import { useTranslations } from "next-intl";

interface BuyMeCoffeeLinkProps {
    className?: string;
    textClassName?: string;
}

const BUY_ME_COFFEE = "https://www.buymeacoffee.com/susanna.salata";

export const BuyMeCoffeeLink = ({
    className,
    textClassName = "right-[56px]",
}: BuyMeCoffeeLinkProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <a
            href={BUY_ME_COFFEE}
            target="_blank"
            rel="noopener noreferrer"
            className={`pointer relative w-12 h-12 pc:w-[56px] pc:h-[56px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-full hover:after:h-full
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-full focus-visible:after:h-full 
            focus-visible:outline-none focus-within:outline-none
            ${className}`}
        >
            <Image
                src="/images/coffeeCup.svg"
                width="0"
                height="0"
                alt="Buy me a coffe logo"
                className="w-12 h-12"
            />
            <p
                className={`absolute font-caviar text-2xl top-0  translate-y-1/2 w-max opacity-0 
                    invisible group-hover:visible  group-hover:opacity-100 duration-[600ms] group-hover:ease-in  transition-opacity transition-visibility ${textClassName}`}
            >
                {getTranslation("buyMeACoffe")}
            </p>
        </a>
    );
};
