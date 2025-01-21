/** 1 Node - Modules, Components, Hooks, Icons */
import React, {useState} from "react";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

interface FrequentlyAskedQuestionsElementProps {
    title: string;
    description: string;
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const FrequentlyAskedQuestionsElement: React.FC<FrequentlyAskedQuestionsElementProps> = ({ title, description, className = '' }): React.ReactElement => {
    const [expanded, setExpanded] = useState<boolean>(false);

    /**
     * @param {HTMLButtonElement} event
     *
     * @return {void}
     */
    const toggleFAQ: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setExpanded((prevState: boolean) => !prevState);
    }

    return (
        <li>
            <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                    aria-expanded="false"
                onClick={toggleFAQ}
            >
                <span className="flex-1 text-base">
                    {title}
                </span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
            </button>
            <div className={cn(
                'transition-all duration-300 ease-in-out transition-all duration-300',
                expanded ? 'h-hull' : ' max-h-0 overflow-hidden'
                )}>
                <div className="pb-5 leading-relaxed">
                    <div className="space-y-2 leading-relaxed text-minor">
                        {description}
                    </div>
                </div>
            </div>
        </li>
    );
}