/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */

/** 3 Entities, Stores, Packages, Enums ... */
import {Page} from "@/entities/notepad/Page";
import {dts} from "@/packages/support";

/**
 * @interface ArticleCardChannelProps
 */
interface ArticleCardChannelProps {
    entity: Page;
}

/**
 * @return {React.ReactElement} Сформированные DOM узлы.
 */
export const PageCardScores: React.FC<ArticleCardChannelProps> = ({ entity }): React.ReactElement => {

    return (
        <p className="flex items-center text-minor text-xs line-clamp-1">
            {/*<span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-primary">*/}
            {/*    Питание*/}
            {/*</span>*/}
            <span className="whitespace-nowrap">
                {dts.getTimeAgoFromNow(entity.attribute('created_at'))}
            </span>
            <span className="whitespace-nowrap">
               <i className="after:content-['\2022'] after:text-inherit after:px-2" />
                {entity.attribute<string>('scores.views', (val) => val, 0)} просмотров
            </span>
        </p>
    );
};