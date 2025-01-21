/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {Rocket} from "lucide-react";

/** 2 App - Components, Hooks */
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */

interface CastCardFeatureProps {
    badge?: string;
    children: React.ReactNode;
}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const PriceCardFeature: React.FC<CastCardFeatureProps> = ({
    badge = 'Популярный',
    children
}): React.ReactElement => {

    return (
        <div className="flex flex-col items-center from-secondary bg-window rounded-3xl shadow-sm relative border-4 border-orange-200 max-w-sm">
            <Icon size={16} path={Rocket} className="absolute -top-8 -left-8 text-red-400"/>
            <p className="mono text-sm absolute -top-4 bg-gradient-to-r from-purple-500 to-pink-500 text-zinc-100 py-1 px-2.5 font-bold tracking-wider rounded-md">
                {badge}
            </p>
            {children}
        </div>
    );
}