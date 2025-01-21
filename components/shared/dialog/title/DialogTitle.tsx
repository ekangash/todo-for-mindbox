/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { cn } from "@/packages/utils";

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-bold tracking-tight text-foreground leading-tight line-clamp-1",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;