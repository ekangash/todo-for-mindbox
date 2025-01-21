/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {cn} from "@/packages/utils";

/** 2 App - Components, Hooks */
import {FrequentlyAskedQuestionsElement} from "@/components/entities/faq/element/FrequentlyAskedQuestionsElement";

/** 3 Entities, Stores, Packages, Enums ... */

const TASKS_ALERTS = [
    {
        title: 'Сделал тест на гипнабиьность, ничего не почувствовал(а), меня не возьмут на сеанс со слипером?',
        description: 'Нет не гипнабильных людей. Если не получилось с первого раза, то этот тест можно делать каждый день сколько угодно раз, пока не получится, и тогда точно получиться. Мы не встречали еще ни одного Клиента, у кого не получилось бы.',
    },
    {
        title: 'Не знаю какой сеанс мне подойдет. Что делать?',
        description: 'Вы можете описать ваш запрос. Мы свяжемся с вами, и поможем правильно определиться с методом терапии, который подойдет именно вам.',
    },
];

interface FrequentlyAskedQuestionsProps {
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({ className = '' }): React.ReactElement => {

    return (
        <div className={cn('max-w-5xl mx-auto flex flex-col md:flex-row gap-12', className)}>
            <div className="flex flex-col text-left basis-1/2">
                <p className="inline-block font-semibold text-primary mb-2">Это интересно</p>
                <p className="sm:text-3xl text-2xl font-extrabold text-base-content">Часто задаваемые вопросы</p>
            </div>
            <ul className="basis-1/2">
                {TASKS_ALERTS.map(({ title, description}, index: number): React.ReactElement => (
                    <FrequentlyAskedQuestionsElement
                        key={index}
                        title={title}
                        description={description}
                    />
                ))}
            </ul>
        </div>
    );
}