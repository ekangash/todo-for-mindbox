/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import {Rocket, CalendarHeart, Headset} from "lucide-react";

/** 2 App - Components, Hooks */
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */

const howwoks = [
    {
        icon: CalendarHeart,
        title: "Подбор удобного времени собеседования",
        desc: "Перед сеансом, мы познакомимся с вами, и с вашим запросом. Определим Аспекты (вопросы), которые будем решать в сеансе. Я расскажу вам все этапы сеанса.",
    },
    {
        icon: Rocket,
        title: "Тест на гипнабиьность",
        desc: "Тест нужно проходить в наушниках и с маской для глаз маску можно заменить полотенцем на глаза).",
    },
    {
        icon: Headset,
        title: "Обязательное оборудование к сеансу",
        desc: "Маска для глаз. Компьютер. Наушники с выносным микрофоном. Установленная на компьютер бесплатная программа для видеозвонков  Skype.",
    },
];

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const HowItWork: React.FC = (): React.ReactElement => {

    return (
        <div className="flex w-full flex-col justify-center space-y-4">
            <ScrollingCarousel>
                <div className="flex space-x-5">
                    {howwoks.map((data, index: number): React.ReactElement => (
                        <div
                            key={index}
                            className="flex max-w-[550px] w-full items-center gap-5 rounded-3xl bg-secondary px-8 py-4 sm:justify-center select-none"
                        >
                            <Icon
                                path={data.icon}
                                size={10}
                            />
                            <div className="flex flex-1 flex-col space-y-1">
                                <div className="text-base font-semibold lg:text-xl">
                                    {data.title}
                                </div>
                                <div className="text-sm font-normal normal-case leading-4 opacity-80">
                                    {data.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <></>
            </ScrollingCarousel>
        </div>
    )
}