/** 1 Node - Modules, Components, Hooks, Icons */
import React, {memo} from 'react';

/** 2 App - Components, Hooks */
import {Image} from "@/components/shared/image/Image";

/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

/**
 * @interface ArticleCardProps
 */
interface ArticleCardProps {
    title: string;
    description: string;
    cover: string;
    withProfile?: boolean;
    channel?: boolean;
    action?: boolean;
    frame?: boolean;
    children?: React.ReactNode;
    className?: string;
}

/**
 * Карточка публикации.
 *
 * @return {React.ReactNode} Сформированные DOM узлы.
*/
export const DocumentCard: React.FC<ArticleCardProps> = memo<ArticleCardProps>(({
    cover,
    title,
    description,
    frame = false,
    children = null,
    className = ''
}) => {

    return (
        <div
            className={cn({
                    ['border-white hover:border-gray-100 border border-solid transition-all hover:shadow-xs rounded-2xl p-2 bg-white']: frame
                },
                'flex flex-col gap-4', className
            )}
        >
            <Image
                className="w-full aspect-h-7 aspect-w-16"
                src={cover}
                alt={title}
                rounded="2xl"
                scale
            />
            <div className="space-y-1.5 flex-1 flex flex-col items-start">
                <p className="text-sm font-bold link-title line-clamp-2">
                    {title}
                </p>
                <p className="text-left text-xs font-normal text-minor transition-all line-clamp-3">
                    {description}
                </p>
            </div>
            {children}
        </div>
    );
});

DocumentCard.displayName = 'DocumentCard';