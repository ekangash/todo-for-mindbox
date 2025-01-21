/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {PriceCardValue} from "@/components/widgets/price/card/value/PriceCardValue";
import {Dialog} from "@/components/shared/dialog/Dialog";
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */

interface CastCardProps {
    title: string;
    description: string;
    cast: string;
    values: string[];
    children: ({ title, cast }: { title: string, cast: string}) =>  React.ReactNode;
}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const PriceCard: React.FC<CastCardProps> = ({ title, description, cast, values, children }): React.ReactElement => {

    return (
        <div className="flex flex-col items-center border-2 border-secondary p-8 rounded-3xl shadow-sm max-w-sm h-full w-full">
            <div>
                <h2 className="font-extrabold text-md text-center mb-2">
                    {title}
                </h2>
                <p className="text-minor text-center text-xs">
                    {description}
                </p>
                <div className="flex flex-col text-minor items-center my-8">
                    <p className="font-extrabold text-4xl text-pink-500">
                        {cast}
                    </p>
                    <p className="text-sm opacity-60">
                        /сеанс
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full">
                <Dialog>
                    <Dialog.Trigger asChild>
                        <Button
                            variant="secondary"
                            className="w-full"
                            text="sm"
                            size="oblong-3"
                        >
                            Что будем прорабатывать на сеансе
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content className="sm:max-w-sm">
                        <Dialog.Header>
                            <Dialog.Title>{title}</Dialog.Title>
                            <Dialog.Description asChild={true}>
                                <div className="flex items-center space-x-2">
                                    <p className="font-extrabold">
                                        {cast}
                                    </p>
                                    <p className="text-sm opacity-60">
                                        /сеанс
                                    </p>
                                </div>
                            </Dialog.Description>
                        </Dialog.Header>
                        <Dialog.Main className="py-5">
                            <div className="space-y-1">
                                {values.map((value, index) => (
                                    <PriceCardValue key={index}>{value}</PriceCardValue>
                                ))}
                            </div>
                        </Dialog.Main>
                    </Dialog.Content>
                </Dialog>
                <div className="flex justify-center mt-2">
                    {children({ title, cast })}
                </div>
            </div>
        </div>
    );
}