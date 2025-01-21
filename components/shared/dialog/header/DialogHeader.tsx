/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { cn } from "@/packages/utils";


export interface DialogHeaderFC extends React.FC<React.HTMLAttributes<HTMLDivElement>> {}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const DialogHeader: DialogHeaderFC = ({ className = '', ...props }) => (
  <div
    className={cn("flex flex-col text-center sm:text-left p-5", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";