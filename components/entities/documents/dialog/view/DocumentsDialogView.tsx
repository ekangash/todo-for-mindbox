/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {Dialog} from "@/components/shared/dialog/Dialog";
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */
import {Image} from "@/components/shared/image/Image";


/**
 * @interface CastsButtonsReceptionProps
 */
interface CastsButtonsReceptionProps {
    title: string;
    description: string;
    cover: string;
    preview: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const DocumentsDialogView: React.FC<CastsButtonsReceptionProps> = ({ title,description, preview, cover }): React.ReactElement => {

    return (
        <Dialog>
            <Dialog.Trigger asChild>
                <Button
                    variant="secondary"
                    size="oblong-2"
                >
                    Читать подробнее
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className="sm:max-w-sm">
                <Dialog.Header>
                    <Dialog.Title>
                        <p className="text-2xl font-bold link-title line-clamp-2">
                            {title}
                        </p>
                    </Dialog.Title>
                </Dialog.Header>
                <Dialog.Main className="pb-5">
                    <Image
                        className="w-full aspect-h-7 aspect-w-16 mb-4"
                        src={cover}
                        alt={title}
                        rounded="2xl"
                    />
                    <p className="text-left text-sm font-normal text-minor transition-all mb-2">
                        {description}
                    </p>
                    <p className="text-left text-md font-normal transition-all">
                        {preview}
                    </p>
                </Dialog.Main>
            </Dialog.Content>
        </Dialog>
    );
}