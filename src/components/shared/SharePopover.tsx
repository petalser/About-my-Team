"use client";
import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
} from "react-share";

import CopyLinkButton from "./CopyLinkButton";
import { IconCloseX } from "./Icons/IconCloseX";
import { IconCopy } from "./Icons/IconCopy";
import { IconFacebook } from "./Icons/IconFacebook";
import { IconLink } from "./Icons/IconLink";
import { IconLinkedin } from "./Icons/IconLinkedin";
import { IconShare } from "./Icons/IconShare";
import { IconTelegram } from "./Icons/IconTelegram";
import { IconWhatsapp } from "./Icons/IconWhatsapp";
import { BgImagesDesktop } from "./WriteUs/modalBgImages/notificationModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "./WriteUs/modalBgImages/notificationModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "./WriteUs/modalBgImages/notificationModalBgImages/BgImagesTablet";

export const SharePopover = ({
    className,
    id,
    trigerShowShareText,
    hiddenTextForMemberModal,
}: {
    className: string;
    id?: string;
    trigerShowShareText: boolean;
    hiddenTextForMemberModal?: boolean;
}) => {
    const getTranslation = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
    };
    const siteTitle = getTranslation("Home.title");
    const siteDescription = getTranslation("Home.description");
    const pathname =
        typeof window !== "undefined" ? window.location.pathname : "";
    const search = typeof window !== "undefined" ? window.location.search : "";
    const urlShare =
        typeof window !== "undefined"
            ? id
                ? search
                    ? window.location.origin + pathname + search + `#${id}`
                    : window.location.origin + pathname + `#${id}`
                : window.location.origin + pathname
            : "";

    const shareButtonStyles =
        "relative flex justify-center items-center w-12 h-12 icon-hover-rounded-purple";
    const isShowText = hiddenTextForMemberModal
        ? "hidden"
        : trigerShowShareText
          ? "hidden pc:block pc:border-b pc:border-current"
          : "hidden tab:block tab:border-b tab:border-current";
    return (
        <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="top-start">
            <PopoverTrigger>
                <button
                    aria-label="share button"
                    className={`bg-transparent h-12 min-w-12 justify-center items-center focus:outline-none px-0 flex gap-2 font-caviar tab:text-lg dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight ${className}`}
                >
                    <p className={isShowText}>
                        {getTranslation("Buttons.share")}
                    </p>
                    <IconShare />
                </button>
            </PopoverTrigger>
            <PopoverContent className="relative rounded-none w-[300px] tab:w-[408px] h-[384px] p-0 border-purple-strokeLight dark:border-purple-stroke bg-white-100 dark:bg-purple-400 ">
                <BgImagesMobile />
                <BgImagesTablet />
                <BgImagesDesktop />
                <Button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-4 h-12 min-w-12 rounded-none px-0 bg-transparent text-greyLight dark:text-grey icon-hover-rounded-purple"
                >
                    <IconCloseX />
                </Button>
                <div className="flex flex-col border-t w-[268px] tab:w-[360px] border-purple-strokeLight dark:border-purple-stroke">
                    <p className="text-base mt-9 mb-4 text-purple-200 dark:text-grey">
                        {getTranslation("SharePopover.shareLink")}
                    </p>
                    <div className=" h-12 border border-purple-strokeLight dark:border-purple-stroke">
                        <ul className="flex ">
                            <li className="flex w-[72px] tab:w-[90px] h-12 justify-center items-center border-r text-purple-130 dark:text-purple-50 border-purple-strokeLight dark:border-purple-stroke">
                                <TelegramShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                >
                                    <IconTelegram />
                                </TelegramShareButton>
                            </li>
                            <li className=" flex w-[72px] tab:w-[90px] h-12 justify-center items-center border-r text-purple-130 dark:text-purple-50 border-purple-strokeLight dark:border-purple-stroke">
                                <FacebookShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                >
                                    <IconFacebook />
                                </FacebookShareButton>
                            </li>
                            <li className=" flex w-[72px] tab:w-[90px] h-12 justify-center items-center border-r text-purple-130 dark:text-purple-50 border-purple-strokeLight dark:border-purple-stroke">
                                <LinkedinShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                    summary={siteDescription}
                                >
                                    <IconLinkedin className="w-6 h-6" />
                                </LinkedinShareButton>
                            </li>
                            <li className=" flex w-[72px] tab:w-[90px] h-12 justify-center items-center text-purple-130 dark:text-purple-50">
                                <WhatsappShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                    separator=" - "
                                >
                                    <IconWhatsapp className="w-6 h-6" />
                                </WhatsappShareButton>
                            </li>
                        </ul>
                    </div>
                    <p className="text-base mt-9 mb-4 text-purple-200 dark:text-grey">
                        {getTranslation("SharePopover.copyLink")}
                    </p>
                    <CopyLinkButton link={urlShare}>
                        <div className="flex h-12 border border-purple-strokeLight dark:border-purple-stroke">
                            <div className=" flex w-[240px] tab:w-[312px] h-12 px-[14px] justify-start items-center gap-[6px] text-purple-130 dark:text-purple-50">
                                <IconLink />
                                <p className="w-[180px] tab:w-[250px] truncate text-start text-purple-200 dark:text-grey">
                                    {urlShare}
                                </p>
                            </div>

                            <div
                                className={`${shareButtonStyles} border-l text-purple-130 dark:text-purple-50 border-purple-strokeLight dark:border-purple-stroke`}
                            >
                                <IconCopy />
                            </div>
                        </div>
                    </CopyLinkButton>
                </div>
            </PopoverContent>
        </Popover>
    );
};
