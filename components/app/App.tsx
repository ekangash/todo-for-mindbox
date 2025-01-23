/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
import {AppLayout} from "@/components/app/layout/AppLayout";
import {AppToaster} from "@/components/app/toaster/AppToaster";
import {ThemeProvider} from "@/components/app/theme/provider/AppThemeProvider";
import {ToDo} from "@/components/entities/to-do/ToDo";
import {Caption} from "@/components/shared/caption/Caption";

/** 3 Entities, Stores, Packages, Enums ... */
import "@/components/app/App.scss"


/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const App: React.FC = (): React.ReactElement => {

    return (
        <ThemeProvider>
            <AppLayout>
                <section className="md:w-2/3     mx-auto">
                    <Caption
                        description="Организуйте свои данные"
                        className="mb-8"
                    >
                        Список задач
                    </Caption>
                    <ToDo />
                </section>
                <AppToaster />
            </AppLayout>
        </ThemeProvider>
    );
};