import { useTranslations } from "next-intl";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { MobileBigTitleQa } from "./MobileBigTitleQa";

export const TitleQA = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <TitleWrapper className="flex flex-col pc:justify-start pc:items-center">
            <div className="flex flex-col tab:flex-row justify-between items-start tab:items-center pc:flex-row">
                <SmallPageTitle className="px-[4px] mt-[2px] ml-0 mx-auto mr-[10px] mb-[10px] tab:mr-3 flex  ">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="hidden tab:block w-auto  tab:max-w-[500px] pc:max-w-[700px] desk:max-w-[900px]">
                    {getTranslation("pageBigTitle")}
                </span>
                <MobileBigTitleQa />
            </div>
        </TitleWrapper>
    );
};
