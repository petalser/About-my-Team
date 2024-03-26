import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { teamNames } from "./data/teamNames";

export const TeamsList = () => {
    const getTranslation = useTranslations("OurTeam");

    return (
        <>
            <span className="font-geist text-sm text-purple-50">
                {getTranslation("teamsList").toUpperCase()}
            </span>
            <ul className="[&>*:first-child]:mt-[12px] [&>*:last-child]:mb-[12px] after:absolute after:border-b-[1px] after:border-purple-stroke after:left-[32px] tab:after:left-0 after:w-[169px]">
                {teamNames.map(({ name }, idx) => (
                    <ListItem key={idx}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </ListItem>
                ))}
            </ul>
        </>
    );
};
