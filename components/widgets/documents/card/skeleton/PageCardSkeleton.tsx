/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

export interface ArticleCardSkeletonProps {
    expanded?: boolean;
    frame?: boolean;
    withProfile?: boolean;
    width?: number;
}

/**
 * Основная карточка публикации.
 *
 * @return {React.ReactNode} Сформированные DOM узлы.
*/
export const PageCardSkeleton: React.FC<ArticleCardSkeletonProps> = ({
    width = 450,
    withProfile = false,
    frame = false
}): React.ReactElement => {

    return (
        <div className={cn({
            ['border-gray-100 border border-solid transition-all rounded-2xl p-3 sm:p-4']: frame
        }, 'rounded-md space-y-3 w-full')}>
            <div
                className={cn({
                    ['rounded-2xl lg:rounded-3xl xl:rounded-[2rem]']: width >= 801,
                    ['rounded-2xl lg:rounded-3xl']: width <= 800,
                }, 'bg-secondary animate-pulse aspect-w-16 aspect-h-8')}
            />
            <div className="flex-1 flex flex-col justify-between space-y-2">
                <div className="h-5 bg-secondary rounded-full animate-pulse"/>
                <div className="space-y-2">
                    <div className="h-2 bg-secondary rounded-full animate-pulse"/>
                    <div className="h-2 bg-secondary rounded-full animate-pulse"/>
                    <div className="h-2 bg-secondary rounded-full animate-pulse"/>
                    <div className="w-1/3 h-2 bg-secondary rounded-full animate-pulse"/>
                </div>
                {withProfile && (
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-secondary rounded animate-pulse"/>
                        <div className="flex items-center justify-between">
                            <div className="w-28 h-3 bg-secondary rounded-full animate-pulse"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
