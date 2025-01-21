/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {Send, ExternalLink} from "lucide-react";

/** 2 App - Components, Hooks */
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

interface BannerProps {
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Banner: React.FC<BannerProps> = ({ className = '' }): React.ReactElement => {

    return (
        <div className={cn('flex w-full flex-col items-center justify-center gap-5 lg:flex-row md:items-center   lg:gap-10 xl:gap-20', className)}>
            <div className="flex w-full flex-col gap-5 text-start max-w-xl lg:gap-10">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center w-full text-center max-w-md">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center flex flex-col">
                            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                                Сеансы
                            </span>
                            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                                регрессивного гипноза
                            </span>
                        </h2>
                        <p className="text-sm rounded-md px-3 py-0.5 mt-3 text-minor">
                            Как вам идея, освоить техники работы с подсознанием
                            и добиваться в жизни всего, чего захочешь.
                        </p>
                        <a
                            className="mt-6 whitespace-nowrap bg-secondary hover:bg-secondary-hoverable duration-300 px-10 py-6 text-foreground rounded-2xl flex items-center cursor-pointer justify-center transition-all gap-1.5 font-medium"
                            href="https://t.me/alenkaproregress"
                            target="_blank"
                        >
                            <Icon path={Send} />
                            Записаться через Telegram
                            <Icon path={ExternalLink} size={4} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}