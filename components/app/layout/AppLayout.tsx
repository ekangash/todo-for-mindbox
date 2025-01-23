/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
import {AppLayoutHeader} from "@/components/app/layout/header/AppLayoutHeader";
import {AppLayoutFooter} from "@/components/app/layout/footer/AppLayoutFooter";

/** 3 Entities, Stores, Packages, Enums ... */

interface AppLayoutLayoutProps {
  children: React.ReactNode;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppLayout: React.FC<AppLayoutLayoutProps> = ({ children }) => {

  return (
      <>
          <div id="scroll-to-top" />
          <main className="h-screen flex flex-col justify-between">
              <AppLayoutHeader className="p-4 mx-auto max-w-7xl sticky top-0 z-10 bg-card w-full" />
              <div id="home" className="mx-auto max-w-7xl w-full px-4 flex-1">
                  {children}
              </div>
          </main>
      </>
  );
}
