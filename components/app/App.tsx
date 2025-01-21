/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
import {AppLayout} from "@/components/app/layout/AppLayout";
import {AppToaster} from "@/components/app/toaster/AppToaster";
import {Prices} from "@/components/entities/prices/Prices";
import {Caption} from "@/components/shared/caption/Caption";
import {Known} from "@/components/entities/known/Known";
import {Tasks} from "@/components/entities/tasks/Tasks";
import {Documents} from "@/components/entities/documents/Documents";
import {Banner} from "@/components/entities/banner/Banner";
import {Personal} from "@/components/entities/personal/Personal";
import {HowItWork} from "@/components/entities/how-it-work/HowItWork";
import {ThemeProvider} from "@/components/app/theme/provider/AppThemeProvider";

/** 3 Entities, Stores, Packages, Enums ... */

import {FrequentlyAskedQuestions} from "@/components/entities/faq/FrequentlyAskedQuestions";

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const App: React.FC = (): React.ReactElement => {

    return (
        <ThemeProvider>
            <AppLayout>
                <Personal
                    className="mb-16"
                />
                <section
                    id="known"
                    className="mb-16"
                >
                    <Caption
                        description="Если что-то из нижеперечисленного вызывает у вас чувство переживания и беспокойства, то это повод обратиться к нам за помощью."
                        className="mb-8"
                    >
                        Вам знакомо это?
                    </Caption>
                    <Known />
                </section>
                <section
                    id="tasks"
                    className="mb-16"
                >
                    <Caption
                        description="Какие задачи можно решить в сеансах"
                        className="mb-8"
                    >
                        Направления в которых работаю
                    </Caption>
                    <Tasks />
                </section>
                <section
                    id="methods"
                    className="mb-16"
                >
                    <Caption
                        description="В своей работе я применяю методы краткосрочной терапии, которые доказали свою эффективность на практике во всем мире."
                        className="mb-8"
                    >
                        Методы моей психологической практики
                    </Caption>
                    <Documents />
                </section>
                <section
                    id="how-it-work"
                    className="mb-16"
                >
                    <Caption
                        description=" среднем сеанс занимает не более трёх часов. В исключительных случаях (ЭКЗОРЕГРЕСС) может длиться 5 -7 часов. Для сеанса требуется:"
                        className="mb-8"
                    >
                        Как проходят сеансы
                    </Caption>
                    <HowItWork />
                </section>
                <section
                    id="cast"
                    className="mb-16"
                >
                    <Caption
                        description="Возможны изменения, атуальную информацию вы всегда получите по заявке на сеанс."
                        className="mb-8"
                    >
                        Стоимость сеансов
                    </Caption>
                    <Prices />
                </section>
                <Banner className="mb-16" />
                <FrequentlyAskedQuestions className="mb-16" />
                <AppToaster />
            </AppLayout>
        </ThemeProvider>
    );
};