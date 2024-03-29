"use client";

import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "./Button";
import { CustomerForm } from "./CustomerForm";

export const WriteUsModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const getTranslation = useTranslations("Buttons");

    return (
        <>
            <Button onClick={onOpen}>{getTranslation("order")}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                shouldBlockScroll={false}
                hideCloseButton={true}
                className="min-w-[320px] tab:min-w-[660px] pc:min-w-[750px] h-[792px] tab:h-[789px] pc:h-[813px]
                px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px] overflow-y-auto tab:overflow-y-visible
                bg-purple-400"
            >
                <ModalContent className="h-full m-0">
                    <Image
                        src="/images/bgImagesModalWriteUs/bgModalWriteUsMobile.png"
                        alt="background"
                        width="0"
                        height="0"
                        className="fixed top-0 left-0 z-[-10] w-full h-auto object-cover"
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-2 right-4 pc:top-3 pc:right-3 h-12 w-12 p-3 bg-transparent icon-hover-rounded-purple
                         icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
                         icon-hover-rounded-purple:active"
                    >
                        <Image
                            src="/images/closeX.svg"
                            alt="Close button"
                            width={24}
                            height={24}
                        />
                    </button>
                    <CustomerForm onClose={onClose} />
                </ModalContent>
            </Modal>
        </>
    );
};
