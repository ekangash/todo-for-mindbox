/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { cn } from "@/packages/utils";

export interface DialogFooterFC extends React.FC<React.HTMLAttributes<HTMLDivElement>> {}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const DialogFooter: DialogFooterFC = ({ className = '', ...props}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-5", className)}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter";