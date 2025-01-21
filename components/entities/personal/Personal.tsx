/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {Image} from "@/components/shared/image/Image";

/** 3 Entities, Stores, Packages, Enums ... */

interface PersonalProps {
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Personal: React.FC<PersonalProps> = ({ className }): React.ReactElement => {

    return (
        <>
            {/*bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl*/}
            <div className="flex lg:hidden flex-col items-center w-full text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-background-foreground mb-3">
                    Сеансы краткосрочной терапии
                </h2>
                <div className="flex flex-col text-white text-sm bg-foreground/60 dark:bg-secondary/60 rounded-xl px-3 py-1.5">
                    <p>
                        «Вы никогда не сумеете решить возникшую проблему, если сохраните мышление и тот же подход, который привел вас к этой проблеме»
                    </p>
                    <p className="ml-auto text-pink-500">
                        Альберт Эйнштейн
                    </p>
                </div>
            </div>
            <div className="aspect-w-16 aspect-h-5 h-80 lg:h-xs mb-16 rounded-3xl duration-300 transition-colors bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l">
                <div className="flex flex-col-reverse lg:flex-row items-center p-4 gap-2">
                    <div className="flex justify-center items-end w-full h-full relative">
                        <Image
                            className="h-72 lg:h-96 -mb-4"
                            src="/img/girl.png"
                        />
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="absolute left-10 bottom-32 floating-4 aos-init aos-animate">
                            <p className="text-sm text-white/90 dark:bg-secondary/60 bg-secondary-foreground/70 px-3 py-1.5 rounded-lg">
                                НЛП Техника
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="absolute left-10 floating aos-init aos-animate">
                            <p className="text-sm text-white/90 dark:bg-secondary/60 bg-secondary-foreground/70 px-3 py-1.5 rounded-lg">
                                Регрессивная гипнотерапия с участием слипера/контактера
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600" data-aos-once="true" className="absolute bottom-20 right-8 floating-4 aos-init aos-animate">
                            <p className="text-sm text-white/90 dark:bg-secondary/60 bg-secondary-foreground/70 px-3 py-1.5 rounded-lg">
                                Регрессивная гипнотерапия
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col items-center w-full text-center">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 max-w-xs">
                            Сеансы регрессивного гипноза
                        </h2>
                        <div className="flex flex-col text-white text-sm bg-foreground/60 dark:bg-secondary/60 rounded-xl px-3 py-1.5 max-w-xs">
                            <p>
                                «Вы никогда не сумеете решить возникшую проблему, если сохраните мышление и тот же подход, который привел вас к этой проблеме»
                            </p>
                            <p className="ml-auto text-pink-500">
                                Альберт Эйнштейн
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}