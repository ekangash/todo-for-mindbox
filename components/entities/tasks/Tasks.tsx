/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

const TASKS_ALERTS = [
    {
        title: 'Самореализация',
        description: 'Узнаете свое предназначение, познакомитесь со своими истинными желаниями, выберите правильное для себя направление движения.',
    },
    {
        title: 'Синдром самозванца',
        description: 'Познакомитесь ближе со своим внутренним критиком, устраните страхи и сомнения, которые сковывают вас на пути к вашей цели.',
    },
    {
        title: 'Семейные отношения',
        description: 'Разберетесь, для чего вам попалась именно такая вторая половинка и какие задачи он(она) помогает вам пройти.',
    },
    {
        title: 'Трудности в создание личных отношений',
        description: 'Разберетесь с причинами неудачных отношений и начнете работу над их устранением.',
    },
    {
        title: 'Чувства и эмоции',
        description: 'Поймете источник ваших негативных эмоций и мыслей, наметите шаги по избавлению от них.',
    },
    {
        title: 'Финансовые вопросы',
        description: 'Узнаете негативные программы влияющие на ваш кошелек. Снимите подсознательные блокировки и  улучшите своё финансовое состояние.',
    },
    {
        title: 'Страхи и фобии',
        description: 'Найдете причину страхов и фобий и избавитесь от нее. ',
    },
    {
        title: 'Повторение похожих ситуаций',
        description: 'Сможете ответить на вопрос, для чего повторяются ситуации,  проведете работу над ошибками.',
    },
    {
        title: 'Трудные отношения с родителями',
        description: 'Узнаете, какие уроки вам помогают пройти родители и какие задачи ставит перед вами ваш Род.',
    },
]

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Tasks: React.FC = (): React.ReactElement => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {TASKS_ALERTS.map(({ title, description}, index: number): React.ReactElement => (
                <div key={index} className="flex flex-col items-center justify-center text-center border border-secondary shadow-sm rounded-3xl p-3">
                    <p className="text-lg mb-2"><b>{title}</b></p>
                    <p className="text-md text-minor">{description}</p>
                </div>
            ))}
        </div>
    );
}