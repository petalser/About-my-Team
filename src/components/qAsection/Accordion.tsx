"use client";
import { useState } from "react";
import Image from "next/image";

interface AccordionProps {
    item: {
        question: string;
        answer: string;
    };
}

export function Accordion({ item }: AccordionProps) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const changeStateAccordion = () => {
        setAccordionOpen(isAccordionOpen => !isAccordionOpen);
    };

    return (
        <>
            <div className="py-[16px] min-h-[72px] border-b-[1px] border-purple-stroke">
                <button
                    onClick={changeStateAccordion}
                    className="flex justify-between w-full"
                >
                    <summary className="text-xlb">{item.question}</summary>
                    <Image
                        src="/images/iconUp.svg"
                        width="0"
                        height="0"
                        alt="Open and close answer icon"
                        className={`w-[40px] h-auto ${isAccordionOpen ? "transition-transform" : "transition-transform rotate-180 duration-300 ease-out"}`}
                    />
                </button>
                <div
                    className={`mt-[8px] grid overflow-hidden transition-transform duration-300 ease-out text-sm 
            ${
                isAccordionOpen
                    ? "grid-rows-[2fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
            }`}
                >
                    <p className="overflow-hidden font-geist text-base py-[16px]">
                        {item.answer}
                    </p>
                </div>
            </div>
        </>
    );
}
