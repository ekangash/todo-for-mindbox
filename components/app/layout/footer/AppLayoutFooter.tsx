/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

interface AppLayoutFooterProps {
    className: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppLayoutFooter: React.FC<AppLayoutFooterProps> = ({ className }): React.ReactElement => {

  return (
      <footer className={className}>
          <div className="mb-5 w-full border border-border"></div>
          <div className="mb-2 text-center text-foreground sm:whitespace-nowrap">
              Ⓒ PRO.Regress - Все права защищены
          </div>
      </footer>
  );
}
