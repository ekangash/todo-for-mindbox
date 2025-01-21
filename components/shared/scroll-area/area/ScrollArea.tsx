/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

/** 2 App - Components, Hooks */
import {ScrollBar} from "@/components/shared/scroll-area/bar/ScrollBar";

/** 3 Entities, Stores, Packages, Enums ... */
import { cn } from "@/packages/utils"

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden h-full", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
