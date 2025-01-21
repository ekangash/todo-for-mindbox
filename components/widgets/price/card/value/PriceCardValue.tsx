/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {CircleCheckBig} from "lucide-react";

/** 2 App - Components, Hooks */
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */

interface CastCardValueProps {
    children: React.ReactNode;
}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const PriceCardValue: React.FC<CastCardValueProps> = ({ children }): React.ReactElement => {

    return (
        <p className="flex items-start text-sm">
            <span className="pt-0.5">
                <Icon size={4} path={CircleCheckBig} color="green" className="mr-2" />
            </span>
            {children}
        </p>
    );
}