"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";

export function ThemeSwitcher({ id }: { id: string }) {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const storedTheme = Cookies.get("theme");
        if (
            storedTheme &&
            (storedTheme === "dark" || storedTheme === "light")
        ) {
            setTheme(storedTheme);
        } else {
            setTheme("dark");
        }

        setMounted(true);
    }, [setTheme]);

    const handleChange = () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        Cookies.set("theme", newTheme);
    };

    if (!mounted) {
        return (
            <div className="w-[66px] h-[28px] border dark:border-grey border-greyLight rounded-[32px]"></div>
        );
    }

    return (
        <div
            id={id}
            className={`relative bg-transparent w-[66px] h-[28px] border rounded-[32px] dark:border-grey border-greyLight`}
        >
            <label htmlFor="themeToggle" className="cursor-pointer ">
                <input
                    type="checkbox"
                    id="themeToggle"
                    value=""
                    className="sr-only"
                    defaultChecked={resolvedTheme === "dark"}
                    onChange={handleChange}
                    aria-label="Toggle theme mode"
                />
                <div className="relative w-[66px] h-[28px]">
                    <div
                        className={`absolute w-[22px] h-[22px] rounded-full translate-y-[2px]
                        ${resolvedTheme === "dark" ? "translate-x-[3px]" : "translate-x-[40px]"} 
                        dark:bg-grey  bg-greyLight transition-transform duration-300 ease-out`}
                    ></div>
                </div>
            </label>
        </div>
    );
}
