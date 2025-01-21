/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

const KNOWN_ALERTS = [
    'Не идут деньги',
    'Ничего не получается',
    'Душевная и телесная боль',
    'Не складываются отношения',
    'К своим годам я мог(ла) бы стать гораздо успешнее',
    'В жизни нет радости',
    'Страх убивающий мой успех',
    'Вижу цель но мешают препятствия',
    'Негативные чувства съедают изнутри',
    'Почему моя жизнь совсем не такая, как хотелось',
    'Страх публичных выступлений',
    'Не могу простить мужа за измену'
]

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Known: React.FC = (): React.ReactElement => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {KNOWN_ALERTS.map((alert, index): React.ReactElement => (
                <div key={index} className="flex items-center justify-center text-center text-md bg-secondary rounded-xl p-3">
                    {alert}
                </div>
            ))}
        </div>
    );
}