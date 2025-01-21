/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog";

/** 2 App - Components, Hooks */
import {DialogHeader, DialogHeaderFC} from "@/components/shared/dialog/header/DialogHeader";
import {DialogFooter, DialogFooterFC} from "@/components/shared/dialog/footer/DialogFooter";
import {DialogContent} from "@/components/shared/dialog/content/DialogContent";
import {DialogOverlay} from "@/components/shared/dialog/overlay/DialogOverlay";
import {DialogTitle} from "@/components/shared/dialog/title/DialogTitle";
import {DialogDescription} from "@/components/shared/dialog/description/DialogDescription";
import {DialogMain, DialogMainFC} from "@/components/shared/dialog/main/DialogMain";

/** 3 Entities, Stores, Packages, Enums ... */

interface DialogComponent extends React.FC<DialogPrimitive.DialogProps> {
    Portal: React.FC<DialogPrimitive.DialogPortalProps>;
    Overlay: React.FC<DialogPrimitive.DialogOverlayProps>;
    Trigger: React.FC<DialogPrimitive.DialogTriggerProps>;
    Close: React.FC<DialogPrimitive.DialogCloseProps>;
    Content: React.FC<DialogPrimitive.DialogContentProps>;
    Header: DialogHeaderFC;
    Main: DialogMainFC;
    Footer: DialogFooterFC;
    Title: React.FC<DialogPrimitive.DialogTitleProps>;
    Description: React.FC<DialogPrimitive.DialogDescriptionProps>;
}

export const Dialog: DialogComponent = DialogPrimitive.Root as DialogComponent;

Dialog.Portal = DialogPrimitive.Portal;
Dialog.Portal.displayName = DialogPrimitive.Portal.displayName;

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Trigger.displayName = DialogPrimitive.Trigger.displayName;

Dialog.Close = DialogPrimitive.Close;
Dialog.Close.displayName = DialogPrimitive.Close.displayName;

Dialog.Overlay = DialogOverlay;
Dialog.Overlay.displayName = DialogOverlay.displayName;

Dialog.Content = DialogContent;
Dialog.Content.displayName = DialogContent.displayName;

Dialog.Header = DialogHeader;
Dialog.Header.displayName = DialogHeader.displayName;

Dialog.Footer = DialogFooter;
Dialog.Footer.displayName = DialogFooter.displayName;

Dialog.Title = DialogTitle;
Dialog.Title.displayName = DialogTitle.displayName;

Dialog.Main = DialogMain
Dialog.Main.displayName = DialogMain.displayName

Dialog.Description = DialogDescription;
Dialog.Description.displayName = DialogDescription.displayName;