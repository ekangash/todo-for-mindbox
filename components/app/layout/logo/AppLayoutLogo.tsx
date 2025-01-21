/** 1 Node - Modules, Components, Hooks, Icons */
import React, {useCallback} from 'react';

/** 2 App - Components, Hooks */
import {Button} from "@/components/shared/button/Button";
import {useScrollToAnchor} from '@/hooks/useScrollToAnchor';

/** 3 Entities, Stores, Packages, Enums ... */

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppLayoutLogo: React.FC = (): React.ReactElement => {
    const scrollToAnchor = useScrollToAnchor(10);
    const onScrollToAnchor = useCallback(() => scrollToAnchor('#scroll-to-top'), []);

    return (
        <Button
            onClick={onScrollToAnchor}
            className="col-span-1 order-1 font-bold items-center justify-start h-9 gap-0"
            size="none"
            variant="none"
        >
            <p className="text-md p-1 bg-pink-500 text-white rounded-md leading-none font-extrabold">
                PRO
            </p>
            <p className="text-pink-500 font-extrabold text-3xl leading-none">
                .
            </p>
            <p className="link-title text-xl">
                Regress
            </p>
        </Button>
    );
};