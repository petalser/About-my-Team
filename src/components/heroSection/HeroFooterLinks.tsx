import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex justify-between items-baseline mt-8">
            <Image
                src="/images/CoffeeCup.svg"
                width={31}
                height={45}
                alt="Buy me a coffe logo"
            />
            <Link href="#portfolio" className="pointer">
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
