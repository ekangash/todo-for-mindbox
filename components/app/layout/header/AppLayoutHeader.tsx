/** 1 Node - Modules, Components, Hooks, Icons */
import React, {useCallback} from 'react';
/** 2 App - Components, Hooks */
import {Button} from "@/components/shared/button/Button";
import {AppLayoutLogo} from "@/components/app/layout/logo/AppLayoutLogo";
import {AppThemeToggle} from "@/components/app/theme/toggle/AppThemeToggle";
import {useScrollToAnchor} from "@/hooks/useScrollToAnchor";

/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";
import {Icon} from "@/components/shared/icon/Icon";
import {TrafficCone} from "lucide-react";
import {Target} from "lucide-react";
import {LayoutGrid} from "lucide-react";
import {Gem} from "lucide-react";


interface AppLayoutHeaderProps {
    className: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppLayoutHeader: React.FC<AppLayoutHeaderProps> = ({ className }): React.ReactElement => {
    const scrollToAnchor = useScrollToAnchor(100);
    const onScrollToCost = useCallback(() => scrollToAnchor(`#cast`), []);
    const onScrollToKnown = useCallback(() => scrollToAnchor(`#known`), []);
    const onScrollToTasks = useCallback(() => scrollToAnchor(`#tasks`), []);
    const onScrollToMethods = useCallback(() => scrollToAnchor(`#methods`), []);

  return (
      <header className={cn('grid grid-cols-3 gap-1', className)}>
          <AppLayoutLogo />
          <div className="col-span-3 lg:col-span-1 order-last lg:order-2 flex items-center justify-center space-x-1">
              <Button
                  onClick={onScrollToKnown}
                  variant="secondary"
              >
                  <Icon
                      path={TrafficCone}
                      size={4}
                  />
                  Зачем
              </Button>
              <Button
                  onClick={onScrollToTasks}
                  variant="secondary"
              >
                  <Icon
                      path={Target}
                      size={4}
                  />
                  Цели
              </Button>
              <Button
                  onClick={onScrollToMethods}
                  variant="secondary"
              >
                  <Icon
                      path={LayoutGrid}
                      size={4}
                  />
                  Методы
              </Button>
              <Button
                  onClick={onScrollToCost}
                  variant="secondary"
              >
                  <Icon
                      path={Gem}
                      size={4}
                  />
                  Стоимость
              </Button>
          </div>
          <div className="col-span-2 lg:col-span-1 order-3 flex space-x-2 justify-end items-center">
              <AppThemeToggle />
              <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-2">
                  <p className="font-extrabold text-sm lg:text-md">
                      +7 (993) 926-03-18
                  </p>
                  <p className="text-xs text-minor opacity-60">
                      /звоните
                  </p>
              </div>
          </div>
      </header>
  );
}
