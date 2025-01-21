/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

import {ScrollBar} from "@/components/shared/scroll-area/bar/ScrollBar";
import {ScrollArea} from "@/components/shared/scroll-area/area/ScrollArea";


interface ScrollFC extends React.FC {
  Area: React.FC<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>;
  Bar: React.FC<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>>;
}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const Scroll: ScrollFC = () => null;
Scroll.displayName = 'Scroll';

Scroll.Bar = ScrollBar;
Scroll.Bar.displayName = ScrollBar.displayName;
Scroll.Area = ScrollArea;
Scroll.Area.displayName = ScrollArea.displayName;
