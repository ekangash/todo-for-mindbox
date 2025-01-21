/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

/**
 * @interface VideoProps
 */
interface VideoProps {
    src: string;
    as?: React.ElementType;
    contentEditable?: boolean;
    scale?: boolean;
    rounded?: string;
    className?: string;
    children?: React.ReactNode;
}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const Video: React.FC<VideoProps> = ({
    src,
    as: As = React.Fragment,
    scale = false,
    rounded= '',
    className = '',
    children
}): React.ReactElement => {

    return (
        <As className={cn('', className)}>
            <video
                src={src}
                className={cn({
                    [`rounded-${rounded}`]: rounded.length > 0,
                    ['hover:scale-y-105 hover:scale-x-105 translate-x translate-y skew-x skew-y scale-x scale-y transition-transform duration-300']: scale,
                }, 'w-full h-full aspect-video object-cover object-center')}
                preload="auto"
                muted
                loop
                autoPlay
            />
            {children && children}
        </As>
    );
};